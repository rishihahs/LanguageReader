define(['jquery', 'read/util', 'aloha', 'foundation', 'read/popover', 'jstorage'], function($, Util, Aloha) {

    $(document).foundation();

    var story = $.jStorage.get('story');
    if (story) {
        $('#content').html(story);
        $('.paste').addClass('opaque');
        $('.done').addClass('opaque');
    }

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