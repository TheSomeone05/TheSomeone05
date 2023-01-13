(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, 990 - 32, 5, 2); // DO NOT DELETE

    // example:

  // here
  //floors and walls
    createPlatform(0, 500, .8);
    createPlatform(450, 500, 3);
    createPlatform(1800, 500, 2);
    createPlatform(916, 0, .1, 16.6);
    createPlatform(0, 600, .2);
    createPlatform(200, 600, 4.5);
    createPlatform(250, 830, .1, 5);
    //bottom obstacles
    createPlatform(250, 800, .25);
    createPlatform(480, 800, .25);
    createPlatform(710, 800, .25);
    createPlatform(940, 800, .25);
    createPlatform(1170, 800, .25);
    createPlatform(1400, 800, .25);
    createPlatform(1630, 800, .25);
    createPlatform(1860, 800, .25);
    
    
    
    
 


    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
