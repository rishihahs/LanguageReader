define(['jquery', 'read/WordReference', 'templates/spanish.template', 'jstorage'], function($, WordReference, spanish) {

    var template = $('.flashcard-content').remove().clone().css('display', 'none');

    $('.create').click(function() {
        var words = $.jStorage.get('words', []);
        for (var i = 0, l = words.length; i < l; i++) {
            wordReference(words[i]);
        }
        $('.flashcards').show();
    });

    function wordReference(text) {
        WordReference.getJSON(text, function(content) {
            var response;
            if (content.hasOwnProperty('Error')) {
                response = 'No translation found.';
            } else {
                // Check if conjugated
                var newOriginal = content.term0.PrincipalTranslations[0].OriginalTerm.term;
                if (newOriginal !== text) {
                    wordReference(newOriginal);
                    return;
                }

                var context = WordReference.semantisizeJSON(content);
                response = spanish['spanish.hbs'](context);
            }

            template.empty();
            template.append('<h1>' + text + '</h1>');
            template.append('<div class="flashcard-definition">' + response + '</div>');
            var clone = template.clone();

            if ($('.flashcard-content').length === 0) {
                clone.css('display', 'block');
            }

            $('.flashcards .flow:last').before(clone);
        });
    }

    var index = 0;

    $('.flashcards .flow:first').click(function() {
        prev();
    });

    $('.flashcards .flow:last').click(function() {
        next();
    });

    function prev() {
        if (index === 0) {
            return;
        }

        index--;

        if (index === 0) {
            $('.flow:first .arrow').addClass('opaque');
        }

        $('.flow:last .arrow').removeClass('opaque');
        $('.flashcard-content').eq(index + 1).fadeOut('fast', function() {
            $('.flashcard-content').eq(index).show();
        });
    }

    function next() {
        var len = $('.flashcard-content').length - 1;
        if (index === len) {
            return;
        }

        index++;

        if (index === len) {
            $('.flow:last .arrow').addClass('opaque');
        }

        $('.flow:first .arrow').removeClass('opaque');
        $('.flashcard-content').eq(index - 1).fadeOut('fast', function() {
            $('.flashcard-content').eq(index).show();
        });
    }

});