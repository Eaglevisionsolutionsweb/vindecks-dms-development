"use strict"
var Loader = function(){}
Loader.prototype = {
    require: function(scripts, callback){
        this.loadCount = 0;
        this.totalRequired = scripts.length;
        this.callback = callback;
        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function(src){
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        /* s.src = '{{ asset('+src+') }}'; */
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(s);
    }
}

function init(){
    var appScripts = new Loader();

    appScripts.require([
        'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'js/modernizr-custom.js',
        'js/dms.js'
    ], function(){
        console.log("scripts should be loaded");
    });
}

window.onload = init;