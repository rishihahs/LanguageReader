(function(window) {
    var popover;

    var options = {
        placement: 'auto',
        html: true,
        title: '<span>mundo (mundo)</span>',
        content: 'Loading...',
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><button type="button" class="close close-popover">&times;</button></div>'
    };

    $('.word').click(function() {
        if (popover) {
            popover.popover('hide');
        }

        popover = $(this);

        if (!$(this).attr('data-original-title')) {
            $(this).popover(options);

            var self = this;
            $(this).on('shown.bs.popover', function() {
                $('.close-popover:not(.bound)').addClass('bound').on('click', function() {
                    $(self).popover('hide');
                });
            });
        }

        var $el = $(this).next('.popover');

        if (!$el.is(':visible')) {
            $(this).popover('show');
        } else {
            $(this).popover('hide');
        }

        window.WordReference.getJSON($.trim($(this).text().replace('.', '')), function(content) {console.log(JSON.stringify(content));
            var response;
            if (content.hasOwnProperty('Error')) {
                response = 'No translation found.';
            } else {
                response = content.term0.PrincipalTranslations[0].FirstTranslation;
            }

            $('.popover-content').html(response);
        });
    });

})(this);