(function(window) {
  
  window.Util = {
    // iterate over every text node
    iterate: function(selector, tag, clazz, callback) {
      var contents = selector.contents();

      for (var x = 0; x < contents.length; x++) {
        var jContent = $(contents[x]);
        if (contents[x].nodeType === 3) {
          callback(jContent, tag, clazz);
          continue;
        }

        this.iterate(jContent, tag, clazz, callback);
      }
    },

    // Add tag to each word
    add: function(selector, tag, clazz) {
      var text = selector.text().split(' ');
      for (var i = 0, l = text.length; i < l; i++) {
        if (text[i] === '' || text[i] === ' ' || text[i] === '\n') {
          continue;
        }

        var index = text[i].indexOf('\n');
        var len = (index === -1) ? text[i].length : index;

        text[i] = '<' + tag + ' class="' + clazz + '">' + text[i].substring(0, len) + '</' + tag + '>' + text[i].substring(len, text[i].length);
      }

      var parent = selector.parent();
      selector.remove();
      parent.append(text.join(' '));
    }
  }
  
})(this);