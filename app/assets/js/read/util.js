define([], function() {

  var nbsp = new RegExp('\u00a0', 'g');
  
  return {
    // iterate over every text node
    iterate: function(selector, tag, clazz, callback) {
      if (selector.hasClass('word')) {
        return;
      }

      var contents = selector.contents();

      var textList = {};
      for (var x = 0; x < contents.length; x++) {
        var jContent = $(contents[x]);
        if (contents[x].nodeType === 3) {
          callback(jContent, tag, clazz, x, textList);
          continue;
        }

        this.iterate(jContent, tag, clazz, callback);
      }

      var parent = selector;
      var added = 0;
      for (var o in textList) {
        if (textList.hasOwnProperty(o)) {
          var pos = parseInt(o, 10);
          if (pos === 0) {
            parent.prepend(textList[o].text);
          } else {
            parent.contents().eq(pos + added).after(textList[o].text);
          }

          textList[o].selector.remove();
          added = parent.contents().length - contents.length
        }
      }
    },

    // Add tag to each word
    add: function(selector, tag, clazz, position, textList) {
      var text = selector.text().replace(nbsp, ' ').split(' ');
      for (var i = 0, l = text.length; i < l; i++) {
        
        if (text[i] === '' || text[i] === ' ' || text[i] === '\n') {
          continue;
        }

        var index = text[i].indexOf('\n');
        var len = (index === -1) ? text[i].length : index;

        text[i] = '<' + tag + ' class="' + clazz + '">' + text[i].substring(0, len) + '</' + tag + '>' + text[i].substring(len, text[i].length);
      }

      var parent = selector.parent();

      if (position === 0) {
        textList[0] = {text: text.join(' '), selector: selector};
      } else {
        textList[position - 1] = {text: text.join(' '), selector: selector};
      }
    }
  };
  
});