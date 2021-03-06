define(['jquery', 'read/util', 'shared', 'read/popover', 'jstorage'], function($, Util) {

    var story = $.jStorage.get('story');
    if (story) {
        $('#content').html(story);
        $('.paste').addClass('opaque');
        $('.done').addClass('opaque');
    }
    $('.new').click(function() {
        $.jStorage.deleteKey('story');
        $.jStorage.deleteKey('words');
        window.location.reload();
    });

    Aloha.ready(function() {
        if (story) {
            return;
        }

        Aloha.jQuery('#content').aloha();
        $('#content').focus();
        $('#content').animate({ 'min-height': '600px' });

        $('#content').click(function() {
            $('.paste').addClass('opaque');
        });

        $('.done').click(function() {
            Aloha.jQuery('#content').mahalo();
            $('.paste').addClass('opaque');
            $(this).fadeOut();
            Util.iterate($('#content'), 'i', 'word', Util.add);
            $.jStorage.set('story', $('#content').html());
        });
    });

    // 

    //     
    //     // Spanish API
    //     //$.getJSON(window.WordReference.createURL(word), function(data) {
    //       //console.log(data);
    //     //});
    //   });

    


});