console.log("hellow from bubble.js....")
//1.if no bubbleshoot, then create a blank object
var bubbleShoot = window.bubbleShoot || {};
//bubble,  a property of Bubbleshoot object, is created by an intantly invoked function where jQuery is passed as arguement.
bubbleShoot.Bubble = (function($) {
    //3.each bubble gets passed the sprite as arguemtn
    var Bubble = function(sprite) {
        //4. this makes no sense
        var that = this;
        //5this should equal bubble.getSprite = declared function
        this.getSprite = function() {
            return sprite;
        };
    };
    //A second automatically invoked function is declared bubble.create is a  method inside bubble
    Bubble.create = function() {
        //sprite is represented by an empty div
        var sprite = $(document.createElement("div"));
        //add class of bubble to sprite object (probaly permannet)
        sprite.addClass("bubble");
        //adds first state as bubble_0 unbroken bubble.
        sprite.addClass("bubble_0");
        //this is constructor
        var bubble = new Bubble(sprite);
        return bubble;
    };
    return Bubble;
})(jQuery);
