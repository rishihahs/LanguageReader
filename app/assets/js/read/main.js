define(['jquery', 'read/util', 'aloha', 'foundation', 'read/popover'], function($, Util, Aloha) {

    $(document).foundation();

    Util.iterate($('#content'), 'i', 'word', Util.add);

    Aloha.ready(function() {
        Aloha.jQuery('#content').aloha();
    });

    //     
    //     // Spanish API
    //     //$.getJSON(window.WordReference.createURL(word), function(data) {
    //       //console.log(data);
    //     //});
    //   });

    


});