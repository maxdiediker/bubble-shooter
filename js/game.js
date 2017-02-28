console.log("hellow from game.js");

var bubbleShoot = window.bubbleShoot || {};
//2
bubbleShoot.Game = (function($) {
    //3
    var game = function() {
        var curBubble;
        //this 'init is considered a public method'
        this.init = function() {
            $(".but-start-game").bind("click", startGame);

        };
        //this can be considered a private method
        var startGame = function() {
            console.log('new game has startedd...');
            $(".but-start-game").unbind("click");
            bubbleShoot.ui.hideDialog();
            curBubble = getNextBubble();
            // for determing firing angle
            $("#game").bind("click",clickGameScreen);
        };
        var clickGameScreen = function(e){
          var angle = bubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
          var duration = 750;
          var distance = 100;
          var distX = Math.sin(angle) * distance;
          var distY = Math.cos(angle) * distance;
          var bubbleCoords = bubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
          var coords = {
            x : bubbleCoords.left + distX,
            y : bubbleCoords.top + distY,
          };
          bubbleShoot.ui.fireBubble(curBubble,coords,duration);
        }
        var getNextBubble = function() {
            var bubble = bubbleShoot.Bubble.create();
            bubble.getSprite().addClass('cur_bubble');
            $('#board').append(bubble.getSprite());
            return bubble;
        }
    };
    return game;
})(jQuery);
