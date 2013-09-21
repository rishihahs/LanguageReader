define(['jquery', 'read/wordreference', 'templates/foreignlanguage.template', 'jquery.popover', 'jstorage'], function($, WordReference, foreignlanguage) {
    var popover;
    var missed = $.jStorage.get('words', []);

    var options = {
        placement: 'auto',
        html: true,
        title: '<span></span><i class="foundicon-speaker"></i>',
        content: 'Loading...',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-canvas"><div class="popover-content"></div></div><button type="button" class="closepop closepop-popover">&times;</button></div>'
    };

    $('#content').on('click', '.word', function(e) {
        e.stopPropagation();

        if (popover) {
            popover.removeClass('active');
            popover.popover('destroy');
        }

        popover = $(this);
        popover.addClass('active');

        var self = this;
        popover.popover(options);

        popover.on('shown.bs.popover', function() {
            $('.closepop-popover:not(.bound)').addClass('bound').on('click', function() {
                $(self).popover('destroy');
                popover.removeClass('active');
            });

            $("body").click(function(e) {
                e.stopPropagation();

                var parents = $(e.target).parents();
                if (parents.hasClass('popover') || parents.hasClass('top-bar')) {
                    return;
                }

                popover.popover('destroy');
                popover.removeClass('active');
            });
        });

        popover.popover('show');

        var text = $.trim(popover.text().toLowerCase().replace(/[.?,"]/, ''));
        $('.popover-title span').text(text);

        wordReference(text, popover);
    });

    function wordReference(text, popover) {
        WordReference.getJSON(text, $.jStorage.get('language'), function(content) {
            var response;
            if (content.hasOwnProperty('Error')) {
                response = 'No translation found.';
            } else {
                // Check if conjugated
                var newOriginal = content.term0.PrincipalTranslations[0].OriginalTerm.term;
                if (newOriginal !== text) {
                    wordReference(newOriginal, popover);
                    return;
                }

                var context = WordReference.semantisizeJSON(content);
                response = foreignlanguage['foreignlanguage.hbs'](context);
                missed.push(text);
                $.jStorage.set('words', missed);
            }

            $('.popover-content').html(response);
            popover.popover('rearrange');
        });
    }

});