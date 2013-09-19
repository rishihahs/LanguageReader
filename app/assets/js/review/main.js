define(['jquery', 'templates/wordsmissed.template', 'shared', 'jstorage', 'review/flashcards'], function($, wordsmissed) {
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
        }

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