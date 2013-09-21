define(['jquery'], function($) {
	var WordReference = {};
	
	WordReference.createURL = function(word, lang) {
		return 'http://api.wordreference.com/69660/json/' + lang + 'en/' + word + '?callback=?';
	};

	WordReference.semantisizeJSON = function(json) {
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
	};

	WordReference.getJSON = function(word, lang, callback) {
		$.getJSON(WordReference.createURL(word, (lang || 'es')), function(data) {
			callback(data);
		});
	};

	return WordReference;
});