var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        
        var circle;  // var to hold a single circle when making circles
        var circles = []; // var to store all the circles in an array

        // TODO 2 : Create a function that draws a circle 
        
        //circle drawing function
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); // draws a circle on the canvas
            physikz.addRandomVelocity(circle, canvas, 10, 10); // adds a random velocity to that circle
            view.addChild(circle); //adds the circle to the circle variable
            circles.push(circle); // adds that variable to the circle array
        };

        // TODO 3 / 7 : Call the drawCircle() function 

        for (var i = 0; i < 100; i++) { // delcares i as the varibale within the for loop
            drawCircle(); // draws a circle for every i
        }


        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //

          
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
          

// deleted because 1-5 values are now within the loop.

            // TODO 9 : Iterate over the array
           
            //should make a loop dependent on the length of the array, that runs the two lines of code for each circle.

            for (var j = 0; j < circles.length; j++) { // declares j as the variable
                
        
                physikz.updatePosition(circles[j]); // this updates the position of each circle
                game.checkCirclePosition(circles[j]); // this updates the game for each circle
        
            }
        

        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x - circle.radius > canvas.width ) { //declaring if the circle's x is greater than the screen width
                circle.x = 0; // sets the circles x position to 0
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            
           if ( circle.y - circle.radius > canvas.height ) { // says if the circles y height is greater than the screen height
            circle.y = 0; // sets the circles y height to 0
           }
           if ( circle.x + circle.radius < 0 ) { // decides if the circles x pos is less than 0
            circle.x = canvas.width; // sets its new x pos to the right of the screen
           }
           if ( circle.y + circle.radius < 0 ) { // decides if the circle height is less than 0
            circle.y = canvas.height; // places the circle on the top of the screen
           }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
