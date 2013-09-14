define(['jquery', 'read/util', 'aloha', 'foundation', 'read/popover'], function($, Util, Aloha) {

    $(document).foundation();

    Aloha.ready(function() {
        Aloha.jQuery('#content').aloha();
        $('#content').focus();
        $('#content').animate({ 'min-height': '600px' });

        $('#content').click(function() {
            $('.paste').addClass('opaque');
        });

        $('.done').click(function() {
            Aloha.jQuery('#content').mahalo();
            $(this).fadeOut();
            Util.iterate($('#content'), 'i', 'word', Util.add);
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