(function(window) {
	window.WordReference = {
		createURL: function(word) {
			return 'http://api.wordreference.com/69660/json/esen/' + word + '?callback=?';
		},

		semantisizeJSON: function(json) {
			var obj = {};
			obj.term0 = {};

			var translations = [];
			for (var o in json.term0.PrincipalTranslations) {
				if (!isNaN(parseFloat(o)) && isFinite(o)) {
					var terms = [];

					var oObject = json.term0.PrincipalTranslations[o];
					for (var ts in oObject) {
						if (oObject.hasOwnProperty(ts) && ts !== "OriginalTerm" && ts !== "Note") {
							terms.push(oObject[ts]);
						}
					}

					translations.push({
						terms: terms,
						sense: oObject.OriginalTerm.sense
					});
				}
			}

			obj.term0.translations = translations;
			return obj;
		},

		getJSON: function(word, callback) {
			$.getJSON(window.WordReference.createURL(word), function(data) {
				callback(data);
			});
		}
	};
})(this);