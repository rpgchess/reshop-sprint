var app = {
    width: null,
    height: null,
    init: function() {
        args.hta = reshop.commandLine.split(' ');
        args.begin = (args.hta[1] === "")? 3 : 2;
        
        this.resize(null, 637);
        this.refresh();
    },
    refresh: function() {
        
    },
    notify: function(type, title, text, delay, position) {
        
    },
    resize: function(width, height) {
        var width = isExist(width)? width : screen.availWidth - (screen.availWidth * 0.1),
            height = isExist(height)? height : screen.availHeight - (screen.availHeight * 0.2),
            left = (screen.availWidth - width) / 2,
            top = (screen.availHeight - height) / 2;
    
        window.resizeTo(width, height);
        window.moveTo(left, top);
    },
    reset: function() {
        
    }
}

$(document).ready(function () {
    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            'use strict';
            if (typeof start !== 'number') {
                start = 0;
            }
        
            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }
    app.init();
});