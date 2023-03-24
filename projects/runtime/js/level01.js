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
                { "type": "sawblade", "x": 400, "y": groundY - 105 },
                { "type": "sawblade", "x": 700, "y": groundY - 0},
                { "type": "sawblade", "x": 1000, "y": groundY - 105},

                { "type": "enemy", "x": 400, "y": groundY - 50, "velocityX": -1.5},
                
                { "type": "reward", "x": 400, "y": groundY - 50, "VelocityX": -1.25},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        
        // creates a sawblade at any given x and y value
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

        function createSpikes (x, y) {
            var hitZoneSize = 25; // size of the hitzone assigned to the variable hitZoneSize
            var damageFromObstacle = 10; // sets the damage amount and assigns it to a variable called damageFromObstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle and assigns it to spikeHitZone
            spikeHitZone.x = x; // assigns the x value using the argument passed as the x parameter
            spikeHitZone.y = y; // assigns the y value using the argument as the y parameter and bases it off of the groundY
            game.addGameItem(spikeHitZone); // adds the hitzone to the game 
            var obstacleImage = draw.bitmap("img/sawblade.png"); // draws the image as a bitmap and stores it to the variable obstacleImage
            spikeHitZone.addChild(obstacleImage); // adds obstacleImage as a child of the sawBladeHitZone
            obstacleImage.x = -25; // modify the x value of the image to line up with the hitzone
            obstacleImage.y = -25; // modify the y value of the image to line up with the hitzone
        }
        
        
        

        function createEnemy (x, y, velocityX) {
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
        }

        

        function createReward (x, y, velocityX) {
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
        }

        //loop for gameItems
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i]; // assigns the current index of the gameItems array to the variable gameItem

            if (gameItem.type === "sawblade") { // checks the type of the game item
                createSawBlade(gameItem.x, gameItem.y); // if the type is true it executes createSawBlade
            };
            if (gameItem.type === "enemy") { // checks the type of the game item
                createEnemy(gameItem.x, gameItem.y, gameItem.velocityX); // if the type is true it executes createEnemy
            };
            if (gameItem.type === "reward") { // checks the type of the game item
                createReward(gameItem.x, gameItem.y) // if the type is true it executes createReward
            };
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
