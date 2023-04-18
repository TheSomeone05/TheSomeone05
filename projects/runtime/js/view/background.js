var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        //   var tree;
        var candles = [];
        //   var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#585858'); // changes text elements
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
            
            /*//loop that draws stars
            for (var i = 0; i < 100; i++) { 
                var circle = draw.circle(3, "white", "LightGray", 2); // draws a circle and stores it in the circle variable
                circle.x = canvasWidth * Math.random(); // takes the width of the canvas and multiplies it times a random deciaml and stores it as the x value for the circle.
                circle.y = groundY * Math.random(); //takes groundY and multiplies it times a random deciaml and stores it as the y value for the circle.
                background.addChild(circle); // adds thzt circle to the background as a child
            }
            */

            

            /*
            var moon = draw.bitmap("img/moon.png"); // draws the image as a bitmap and stores it to the variable moon
            moon.x = 300; // creates an x key for the moon object and assigns it a value of 300
            moon.y = groundY - 500; // creates an y key for the moon object and assigns it a value of 200
            moon.scaleX = 0.3; // scale the x value of the moon
            moon.scaleY = 0.3; // scale the y value of the moon
            background.addChild(moon); // add moon as a child to background so it can be seen
            */
           
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            /* for (var i = 0; i < 5; i++) {
                var buildingHeight = 300; // creates a variable called buildingHeight and stores 300 at the height of the building
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1); // draws a rectangle and stores it in the variable building
                building.x = 200 * i; // Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixles apart and store it a the x value of the building
                building.y = groundY - buildingHeight; // subtracts buildingHeight from groundY and sets it as the y value
                background.addChild(building); // add the building as a child to the background
                buildings.push(building); // adds the buildings to the buildings array
              }
            */

        
              /*
              var buildingHeights = [300, 150, 175, 200, 225]; // creates a variable called buildingHeight and stores 300 at the height of the building
              var buildingColors = ["blue", "brown", "grey", "black", "green"] // created an array of colors and stored it in the variable buildingColors
              for (var i = 0; i < buildingHeights.length; i++) {
                var building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1); // draws a rectangle and stores it in the variable building
                building.x = 200 * i; // Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixles apart and store it a the x value of the building
                building.y = groundY - buildingHeights[i]; // subtracts buildingHeight from groundY and sets it as the y value
                background.addChild(building); // add the building as a child to the background
                buildings.push(building); // adds the buildings to the buildings array
              }*/
              

                for (var i = 0; i < 5; i++) {
                    var candleHeight = 300; // creates a variable called candleHeight and stores 300 at the height of the candle
                    var candle = draw.bitmap("img/candleBackground.png"); //creates candle image and stores it in candle variable
                    candle.scaleX = .5 //scale the x value of the candle
                    candle.scaleY = .5 //scale the y value of the candle
                    candle.x = 400 * i; // Multiplies 400 times the current iteration of the loop so that the candles are 400 pixles apart and store it a the x value of the candle
                    candle.y = groundY - candleHeight; // subtracts candleHeight from groundY and sets it as the y value
                    background.addChild(candle); // add the candle as a child to the background
                    candles.push(candle); // adds the candle to the candle array
                };
                
                for (var i = 0; i < 5; i++) {
                    var candle = draw.bitmap("img/candleBackground.png")
                    candle.scaleX = .5 //scales the x value of the candle
                    candle.scaleY = .5 //scales the y value of the candle
                    candle.x = 400 * i; // Multiplies 400 times the current iteration of the loop so that the candle are 400 pixles apart and store it a the x value of the candle
                    candle.y = groundY - 300; // subtracts candleHeight from groundY and sets it as the y value
                    background.addChild(candle); // add the candle as a child to the background
                    candles.push(candle); // adds the candle to the candle array
                };





            // TODO 4: Part 1 - Add a tree
            
           
            /* tree = draw.bitmap("img/tree.png"); // draws a tree using bitmat and stores it to the variable tree.
            tree.x = canvasWidth - 180; // sets the x value of the tree 
            tree.y = groundY - 245; // sets the y value of the tree 
            background.addChild(tree); // adds the tree to the background as a child
              */
            
       
                /*candle = draw.bitmap("img/candleBackground.png");
                candle.x = canvasWidth - 180;
                candle.y = groundY - 300;
                candle.scaleX = .4;
                candle.scaleY = .4;
                background.addChild(candle);*/
            
      

        }; // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            for (var i = 0; i < candles.length; i++) {
                var candle = candles[i]; //moves each array value to candle
                candle.x = candle.x - .75; //moves candle
                if (candle.x < -75) { // checks candle pos
                    candle.x = canvas.width; //makes candle back to right side of screen
                }
              }
            // TODO 4: Part 2 - Move the tree!
            
            //tree.x = tree.x - 1.5; // takes current x position of the tree and subtracts from it to make it move left and reassigns it to the tree.x position
            //candle.x -= .75;
            
            //check if the tree has moved off the canvas and if it has it resets it to the right side of the canvas
            // if (tree.x < -200) {
            // tree.x = canvasWidth; 
            // }     
            //if (candle.x < -95) {
            //    candle.x = canvasWidth;
            // }       
            // TODO 5: Part 2 - Parallax
            //loops through the buildings array to acess each index of the array, remove it, and check its position on the canvas and resets to the right side if it goes off to the left.
            /*for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - .2; // moves the building
                if (building.x < -75) { // checks the position of the building
                    building.x = canvas.width //resets the building to the right side of the canvas
                }*/
            
            
        }; // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
    };
