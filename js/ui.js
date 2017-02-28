var bubbleShoot = window.bubbleShoot || {};
console.log('hello from ui.js ');
// this is a class but its only purpose is too create an object with methods attached to it
bubbleShoot.ui = (function($) {
    console.log('starting ui...');

    var ui = {
        BUBBLE_DIMS: 44,
        init: function() {},
        hideDialog: function() {
            $(".dialog").fadeOut(300);
        },
        getMouseCoords: function(e) {
            var coords = {
                x: e.pageX,
                y: e.pageY
            };
            return coords
        },
        getBubbleCoords: function(bubble) {
            var bubbleCoords = bubble.position();
            bubbleCoords.left += ui.BUBBLE_DIMS / 2;
            bubbleCoords.top += ui.BUBBLE_DIMS / 2;
            return bubbleCoords;
        },
        getBubbleAngle: function(bubble, e) {
            var mouseCoords = ui.getMouseCoords(e);
            var bubbleCoords = ui.getBubbleCoords(bubble);
            var gameCoords = $("#game").position();
            var boardLeft = 120;
            var angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft) / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
            if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
                angle += Math.PI;
            }
        },
        fireBubble: function(bubble, coords, duration) {
            bubble.getSprite().animate({
                left: coords.x - ui.BUBBLE_DIMS / 2,
                top: coords.y - ui.BUBBLE_DIMS / 2
            }, {
                duration: duration,
                easing: "linear"
            });

    }
};
return ui;

})(jQuery);
