// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$.fn.animateOut = function(animation,callback){
    var events='webkitAnimationEnd';
    animation=animation?animation:'fadeOut';

    this.one(events,function(){
        $(this).hide();
        $(this).removeClass(animation+' animated');
        if(callback){
            callback.call(this);
        }
    });
    this.addClass('animated '+animation);
    return this;
};



$.fn.animateIn = function(animation,callback){
    var events='webkitAnimationEnd';
    animation=animation?animation:'fadeIn';

    this.one(events,function(){
        $(this).removeClass(animation+' animated');
        if(callback){
            callback.call(this);
        }
    });
    this.addClass('animated '+animation).show();
    return this;
};