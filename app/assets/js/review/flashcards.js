define(['jquery'], function($) {

    var index = 0;
    var len = $('.flashcard-content').length - 1;

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