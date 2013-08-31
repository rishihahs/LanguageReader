(function(window) {
	window.WordReference = {
		createURL: function(word) {
			return 'http://api.wordreference.com/0.8/69660/json/esen/' + word + '?callback=?';
		},

		getJSON: function(word, callback) {
			$.getJSON(window.WordReference.createURL(word), function(data) {
				callback(data);
			});
		}
	};
})(this);