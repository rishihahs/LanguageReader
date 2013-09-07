(function(window) {

    $(document).foundation();

    window.Util.iterate($('#content'), 'i', 'word', window.Util.add);

    //     
    //     // Spanish API
    //     //$.getJSON(window.WordReference.createURL(word), function(data) {
    //       //console.log(data);
    //     //});
    //   });

    


})(this);