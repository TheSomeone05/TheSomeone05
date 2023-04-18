var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                //{ "type": "sawblade", "x": 20000, "y": groundY -  375},
                // { "type": "sawblade", "x": 20100, "y": groundY - 375},
                //{ "type": "sawblade", "x": 20200, "y": groundY - 105},
                //{ "type": "enemy", "x": 1400, "y": groundY - 50, "velocityX": -2},
                //{ "type": "reward", "x": 1400, "y": groundY - 50, "VelocityX": -1.5},

            
                { "type": "Spikes", "x": 500, "y": groundY - 5},
                { "type": "Spikes", "x": 700, "y": groundY - 5},
                { "type": "Spikes", "x": 900, "y": groundY - 5},
                { "type": "Water", "x": 4500, "y": groundY + 30},

                //{ "type": "Water", "x": 500, "y": groundY + 30},


                { "type": "rat", "x": 2500, "y": groundY - 120, "velocityX": -4},
                { "type": "rat", "x": 3100, "y": groundY - 120, "velocityX": -4},
                { "type": "bat", "x": 2500, "y": groundY - 120, "velocityX": -2},
                { "type": "bat", "x": 2700, "y": groundY - 120, "velocityX": -2},
                { "type": "bat", "x": 3000, "y": groundY - 120, "velocityX": -2},
                { "type": "rat", "x": 6200, "y": groundY - 120, "velocityX": -4},
                { "type": "bat", "x": 3600, "y": groundY - 120, "velocityX": -2},
                { "type": "alligator", "x": 4000, "y": groundY, "velocityX": -2},




                //{ "type": "rat", "x": 400, "y": groundY - 120, "velocityX": -4},
                //{ "type": "alligator", "x": 900, "y": groundY, "velocityX": -2},
                //{ "type": "bat", "x": 1400, "y": groundY - 120, "velocityX": -2},
                

                { "type": "bandage", "x": 2200, "y": 675, "velocityX": -2},
                { "type": "bandage", "x": 4300, "y": 675, "velocityX": -2},
                { "type": "gold", "x": 4700, "y": 650, "velocityX": -2}

                //{ "type": "gold", "x": 300, "y": 650, "velocityX": -2}



            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        
        // creates a sawblade at any given x and y value
        /*
        function createSawBlade (x, y) {
            var hitZoneSize = 25; // size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10; // sets the damage amount and assigns it to a variable called damageFromObstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and assigns it to sawBladeHitZone
            sawBladeHitZone.x = x; // assigns the x value using the argument passed as the x parameter
            sawBladeHitZone.y = groundY - y; // assigns the y value using the argument as the y parameter and bases it off of the groundY
            game.addGameItem(sawBladeHitZone); // adds the hitzone to the game 
            var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the image as a bitmap and stores it to the variable obstacleImage
            sawBladeHitZone.addChild(obstacleImage); // adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25; // modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25; // modify the y value of the image to line up with the hitzone
        }
        */

        function createSpikes (x, y) {
            var hitZoneSize = 40; // size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 40; // sets the damage amount and assigns it to a variable called damageFromObstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and assigns it to spikeHitZone
            spikeHitZone.x = x; // assigns the x value using the argument passed as the x parameter
            spikeHitZone.y = y; // assigns the y value using the argument as the y parameter and bases it off of the groundY
            game.addGameItem(spikeHitZone); // adds the hitzone to the game 
            var obstacleImage = draw.bitmap("img/Spikes1.png"); // draws the image as a bitmap and stores it to the variable obstacleImage
            obstacleImage.scaleX = .3; //spike scale x
            obstacleImage.scaleY = .3; //spike scale y
            spikeHitZone.addChild(obstacleImage); // adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -40; // modify the x value of the image to line up with the hitzone
            obstacleImage.y = -42; // modify the y value of the image to line up with the hitzone

           
        }

        function createWater (x, y) {
            var hitZoneSize = 80; // size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 100; // sets the damage amount and assigns it to a variable called damageFromObstacle
            var waterHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and assigns it to spikeHitZone
            waterHitZone.x = x; // assigns the x value using the argument passed as the x parameter
            waterHitZone.y = y; // assigns the y value using the argument as the y parameter and bases it off of the groundY
            game.addGameItem(waterHitZone); // adds the hitzone to the game 
            var obstacleImage = draw.bitmap("img/newestWaves.png"); // draws the image as a bitmap and stores it to the variable obstacleImage
            obstacleImage.scaleX = .7; //water scale x
            obstacleImage.scaleY = .7; //water scale y
            waterHitZone.addChild(obstacleImage); // adds obstacleImage as a child of the waterHitZone
            obstacleImage.x = -100; // modify the x value of the image to line up with the hitzone
            obstacleImage.y = -30; // modify the y value of the image to line up with the hitzone
        }
        
        
        

        
        /*function createEnemy (x, y, velocityX) {
            var enemy = game.createGameItem("enemy", 25); // creates the gameItem and assigns to the variable enemy
            var redSquare = draw.rect(50, 50, "red"); // draws a rectangle and stores it in the gameItem variable
            redSquare.x = -25; // stores a value as the x value of the gameItem
            redSquare.y = -25; // stores a value as the y value of the gameItem
            enemy.addChild(redSquare); // adds the gameItem as a child of enemy
            enemy.x = x; // stores the value passed as the x argument as enemy's x value
            enemy.y = y; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(enemy); // adds the enemy as an item to the game 
            enemy.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10); // subtracts from the health when Halle collides with enemy
            };

            enemy.onProjectileCollision = function () {
                game.increaseScore(100); // increases the score when Halle shoots the enemy
                enemy.fadeOut(); // fades the enemy off of the screen
            };
        };*/
        

        function createAlligator (x, y, velocityX) {
            var alligator = game.createGameItem("alligator", 25); // creates the gameItem and assigns to the variable enemy
            var alligatorPicture = draw.bitmap("img/Alligator1.png") // draws a rectangle and stores it in the gameItem variable
            alligatorPicture.x = -52; // stores a value as the x value of the gameItem
            alligatorPicture.y = -40; // stores a value as the y value of the gameItem
            alligatorPicture.scaleX = .3; //alligator scale x
            alligatorPicture.scaleY = .3; //alligator scale y
            alligator.addChild(alligatorPicture); // adds the gameItem as a child of enemy
            alligator.scaleX = 1.75; //other alligator scale x
            alligator.scaleY = 1.75; //other alligator scale y
            alligator.x = x; // stores the value passed as the x argument as enemy's x value
            alligator.y = y - 25; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(alligator); // adds the enemy as an item to the game 
            alligator.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            alligator.onPlayerCollision = function () {
                game.changeIntegrity(-60); // subtracts from the health when Halle collides with enemy
            };

            alligator.onProjectileCollision = function () {
                game.increaseScore(100); // increases the score when Halle shoots the enemy
                alligator.fadeOut(); // fades the enemy off of the screen
            };
        };

        function createRat (x, y, velocityX) {
            var rat = game.createGameItem("rat", 25); // creates the gameItem and assigns to the variable enemy
            var ratPicture = draw.bitmap("img/Rat1.jpg") // draws a rectangle and stores it in the gameItem variable
            ratPicture.x = -32; // stores a value as the x value of the gameItem
            ratPicture.y = -20; // stores a value as the y value of the gameItem
            ratPicture.scaleX = .2; //rat scale x
            ratPicture.scaleY = .2; //rat scale y
            rat.addChild(ratPicture); // adds the gameItem as a child of enemy
            rat.scaleX = 1.5; //other rat scale x
            rat.scaleY = 1.5; //other rat scale y
            rat.x = x; // stores the value passed as the x argument as enemy's x value
            rat.y = y + 100; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(rat); // adds the enemy as an item to the game 
            rat.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            rat.onPlayerCollision = function () {
                game.changeIntegrity(-10); // subtracts from the health when Halle collides with enemy
            };

            rat.onProjectileCollision = function () {
                game.increaseScore(40); // increases the score when Halle shoots the enemy
                rat.fadeOut(); // fades the enemy off of the screen
            };
        };

        function createBat (x, y) {
            var hitZoneSize = 40; // size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 30; // sets the damage amount and assigns it to a variable called damageFromObstacle
            var batHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and assigns it to spikeHitZone
            batHitZone.x = x; // assigns the x value using the argument passed as the x parameter
            batHitZone.y = y; // assigns the y value using the argument as the y parameter and bases it off of the groundY
            game.addGameItem(batHitZone); // adds the hitzone to the game 
            var obstacleImage = draw.bitmap("img/Bat1.png"); // draws the image as a bitmap and stores it to the variable obstacleImage
            obstacleImage.scaleX = .3; //bat scale x
            obstacleImage.scaleY = .3; //bat scale y
            batHitZone.addChild(obstacleImage); // adds obstacleImage as a child of the waterHitZone
            obstacleImage.x = -35; // modify the x value of the image to line up with the hitzone
            obstacleImage.y = -35; // modify the y value of the image to line up with the hitzone
        };
        

      /*function createReward (x, y, velocityX) {
            var reward = game.createGameItem("reward", 25); // creates the gameItem and assigns to the variable reward
            var blueSquare = draw.rect(50, 50, "blue"); // draws a rectangle and stores it in the gameItem variable
            blueSquare.x = -25; // stores a value as the x value of the gameItem
            blueSquare.y = -25; // stores a value as the y value of the gameItem
            reward.addChild(blueSquare); // adds the gameItem as a child of enemy
            reward.x = x; // stores the value passed as the x argument as enemy's x value
            reward.y = y; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(reward); // adds the enemy as an item to the game 
            reward.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            reward.onProjectileCollision = function () {
                game.increaseScore(50);
                game.changeIntegrity(50);
                reward.fadeOut();
            };
        }*/

        
        function createBandage (x, y, velocityX) {
            var bandage = game.createGameItem("bandage", 25); // creates the gameItem and assigns to the variable enemy
            var bandagePicture = draw.bitmap("img/Bandage1.png") // draws a rectangle and stores it in the gameItem variable
            bandagePicture.x = -23; // stores a value as the x value of the gameItem
            bandagePicture.y = -25; // stores a value as the y value of the gameItem
            bandagePicture.scaleX = .2; //bandage scale x
            bandagePicture.scaleY = .2; //bandage scale y
            bandage.addChild(bandagePicture); // adds the gameItem as a child of enemy
            bandage.scaleX = 1.25; //other bandage scale x
            bandage.scaleY = 1.25; //other bandage scale y
            bandage.x = x; // stores the value passed as the x argument as enemy's x value
            bandage.y = y - 25; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(bandage); // adds the enemy as an item to the game 
            bandage.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            bandage.onPlayerCollision = function () {
                game.changeIntegrity(50); //gives health to halle
                game.increaseScore(100); // increases the score when Halle shoots the enemy
                bandage.fadeOut(); // fades the enemy off of the screen
            };
        };

        function createGold (x, y, velocityX) {
            var gold = game.createGameItem("gold", 25); // creates the gameItem and assigns to the variable enemy
            var goldPicture = draw.bitmap("img/Gold1.png") // draws a rectangle and stores it in the gameItem variable
            goldPicture.x = -23; // stores a value as the x value of the gameItem
            goldPicture.y = -25; // stores a value as the y value of the gameItem
            goldPicture.scaleX = .2; //gold scale x
            goldPicture.scaleY = .2; //gold scale y
            gold.addChild(goldPicture); // adds the gameItem as a child of enemy
            gold.scaleX = 1.25; //other gold scale x
            gold.scaleY = 1.25; //other gold scale y
            gold.x = x; // stores the value passed as the x argument as enemy's x value
            gold.y = y - 25; // stores the value passed as the x argument as enemy's y value
            game.addGameItem(gold); // adds the enemy as an item to the game 
            gold.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            gold.onPlayerCollision = function () {
                game.increaseScore(100); // increases the score when Halle shoots the enemy
                gold.fadeOut(); // fades the enemy off of the screen
            };
        };

        /*function createBandage (x, y, velocityX) {
            var bandage = game.createGameItem("bandage", 25); // creates the gameItem and assigns to the variable reward
            var bandagePic = draw.bitmap("img/bandage.PNG"); // draws a rectangle and stores it in the gameItem variable
            bandagePic.scaleX = .3
            bandagePic.scaleY = .3
            bandagePic.x = x; // stores a value as the x value of the gameItem
            bandagePic.y = y; // stores a value as the y value of the gameItem
            bandage.addChild(bandagePic); // adds the gameItem as a child of enemy
            bandage.x = x;
            bandage.y = y;
            game.addGameItem(bandage); // adds the enemy as an item to the game 
            bandage.velocityX = velocityX; // assigns a value to the velocityX of the enemy to make it move

            bandage.onProjectileCollision = function () {
                game.increaseScore(50);
                game.changeIntegrity(50);
                bandage.fadeOut();
            };
        }*/

        //loop for gameItems
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i]; // assigns the current index of the gameItems array to the variable gameItem

            //if (gameItem.type === "sawblade") { // checks the type of the game item
            //    createSawBlade(gameItem.x, gameItem.y); // if the type is true it executes createSawBlade
            //};
            if (gameItem.type === "Water") { // checks the type of game item
                createWater(gameItem.x, gameItem.y); // if the type is true it executes createSpikes
            }
            if (gameItem.type === "Spikes") { // checks the type of game item
                createSpikes(gameItem.x, gameItem.y); // if the type is true it executes createSpikes
            }
            //if (gameItem.type === "enemy") { // checks the type of the game item
            //    createEnemy(gameItem.x, gameItem.y, gameItem.velocityX); // if the type is true it executes createEnemy
            //};
            
            if (gameItem.type === "bat") { //checks if type is true
                createBat(gameItem.x, gameItem.y, gameItem.velocityX); //if type is true executes createBat
            };
            //if (gameItem.type === "reward") { // checks the type of the game item
            //  createReward(gameItem.x, gameItem.y, velocityX) // if the type is true it executes createReward
            //};
            if (gameItem.type === "bandage") { // checks the type of the game item
                createBandage(gameItem.x, gameItem.y, gameItem.velocityX) // if the type is true it executes createReward
            };
            if (gameItem.type === "gold") { // checks the type of the game item
                createGold(gameItem.x, gameItem.y, gameItem.velocityX) // if the type is true it executes createReward
            };
            if (gameItem.type === "alligator") { //checks game item type
                createAlligator(gameItem.x, gameItem.y, gameItem.velocityX); //if type is true executes createAlligator
            }
            if (gameItem.type === "rat") { //checks game item type
                createRat(gameItem.x, gameItem.y, gameItem.velocityX); //if type is true executes createRat
            }
        }
 
       
        
        
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
