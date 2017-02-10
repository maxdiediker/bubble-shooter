console.log("hellow from game.js");

var bubbleShoot = window.bubbleShoot || {};
//2
bubbleShoot.Game = (function($) {
//3
    var game = function() {
        //this 'init is considered a public method'
        this.init = function() {
            $(".but-start-game").bind("click", startGame);

        };
        //this can be considered a private method
        var startGame = function() {
            console.log('new game has startedd...');
            $(".but-start-game").unbind("click");
            bubbleShoot.ui.hideDialog();


        };
    };
    return game;
})($);
