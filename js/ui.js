var bubbleShoot = window.bubbleShoot || {};
console.log('hello from ui.js ');
// this is a class but its only purpose is too create an object with methods attached to it
bubbleShoot.ui = (function($) {
    console.log('starting ui...');

    var ui = {
        int: function() {},
        hideDialog: function() {
            $(".dialog").fadeOut(300);
        }
    };
    return ui;

})(jQuery);
