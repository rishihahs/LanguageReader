define(['jquery', 'templates/wordsmissed.template', 'shared', 'jstorage'], function($, wordsmissed) {
    $('.new').click(function() {
        $.jStorage.deleteKey('story');
        $.jStorage.deleteKey('words');
        return true;
    });

    var words = $.jStorage.get('words');
    var content;

    if (words) {
        content = wordsmissed['wordsmissed.hbs'](words);
    } else {
        content = '<p>No missed words!</p>';
    }

    $('#content').html(content);
});