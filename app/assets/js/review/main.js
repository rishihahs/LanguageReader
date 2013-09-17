define(['jquery', 'templates/wordsmissed.template', 'shared', 'jstorage'], function($, wordsmissed) {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement) {
        'use strict';
        if (this == null) {
          throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
          return -1;
        }
        n = 0;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
            n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }
        if (n >= len) {
          return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }
        return -1;
      };
    }

    $('.new').click(function() {
        $.jStorage.deleteKey('story');
        $.jStorage.deleteKey('words');
        return true;
    });

    $('.destroy').click(function() {
        var data = $.jStorage.get('words');
        var words = $('.wordsmissed input[type="checkbox"]');

        for (var i = 0, l = words.length; i < l; i++) {
            var word = words.eq(i);
            if (word.is(':checked')) {
                var loc = data.indexOf($.trim(word.parent().text()));
                if (loc !== -1) {
                    data.splice(loc, 1);
                }
            }
        };

        $.jStorage.set('words', data);
        window.location.reload();
    });

    var words = $.jStorage.get('words');
    var content;

    if (words && words.length > 0) {
        content = wordsmissed['wordsmissed.hbs'](words);
    } else {
        content = '<p>No missed words!</p>';
    }

    $('#content').html(content);
});