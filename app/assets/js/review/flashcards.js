define(['jquery', 'read/WordReference', 'templates/foreignlanguage.template'], function($, WordReference, foreignlanguage) {

    var template = $('.flashcard-content').remove().clone().css('display', 'none');

    $('.create').click(function() {
        var words = $('.wordsmissed input[type="checkbox"]:checked').parent();
        for (var i = 0, l = words.length; i < l; i++) {
            wordReference($.trim(words.eq(i).text()));
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
                response = foreignlanguage['foreignlanguage.hbs'](context);
            }

            template.empty();
            template.append('<h1>' + text + '</h1>');
            template.append('<p class="clicktoshow">Click to show definition</p>');
            template.append('<div class="flashcard-definition">' + response + '</div>');
            var clone = template.clone();

            if ($('.flashcard-content').length === 0) {
                clone.css('display', 'block');
            }

            $('.flashcards .flow:last').before(clone);
        });
    }

    $('.flashcards').on('click', '.flashcard-content', function() {
        $(this).find('.clicktoshow').hide();
        $(this).find('.flashcard-definition').fadeIn('fast');
    });

    var index = 0;

    $('.flashcards .flow:first').click(function() {
        prev(function() {
            $('.clicktoshow').show();
            $('.flashcard-definition').hide();
        });
    });

    $('.flashcards .flow:last').click(function() {
        next(function() {
            $('.clicktoshow').show();
            $('.flashcard-definition').hide();
        });
    });

    function prev() {
        if (index === 0) {
            return;
        }

        index--;

        if (index === 0) {
            $('.flow:first .arrow').addClass('opaque');
        }
        var args = arguments;
        $('.flow:last .arrow').removeClass('opaque');
        $('.flashcard-content').eq(index + 1).fadeOut('fast', function() {
            $('.flashcard-content').eq(index).show();
            if (typeof args[0] === 'function') {
                args[0]();
            }
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
        var args = arguments;
        $('.flow:first .arrow').removeClass('opaque');
        $('.flashcard-content').eq(index - 1).fadeOut('fast', function() {
            $('.flashcard-content').eq(index).show();
            if (typeof args[0] === 'function') {
                args[0]();
            }
        });
    }

});