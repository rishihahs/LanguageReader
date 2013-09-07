define(['jquery', 'read/util', 'foundation', 'read/popover'], function($, Util) {

    $(document).foundation();

    Util.iterate($('#content'), 'i', 'word', Util.add);

    //     
    //     // Spanish API
    //     //$.getJSON(window.WordReference.createURL(word), function(data) {
    //       //console.log(data);
    //     //});
    //   });

    


});