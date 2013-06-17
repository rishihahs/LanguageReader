(function(window) {
  
  $(document).foundation();
  
  window.Util.iterate($('#content'), 'i', 'word', window.Util.add);
  
  // Add a click handler to every word
  $('.word').click(function() {
    var word = $(this).text();
    if (word === '' || word === ' ' || word === '\n') {
      return;
    }
    
    // Spanish API
    $.getJSON(window.WordReference.createURL(word), function(data) {
      console.log(data);
    });
  });
  
})(this);