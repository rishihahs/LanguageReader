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
            popover.popover('destroy');
        }

        popover = $(this);

        var self = this;
        $(this).popover(options);

        $(this).on('shown.bs.popover', function() {
            $('.close-popover:not(.bound)').addClass('bound').on('click', function() {
                $(self).popover('destroy');
            });
        });

        $(this).popover('show');

        window.WordReference.getJSON($.trim($(this).text().replace('.', '')), function(content) {console.log(JSON.stringify(content));
            var response;
            if (content.hasOwnProperty('Error')) {
                response = 'No translation found.';
            } else {
                response = content.term0.PrincipalTranslations[0].FirstTranslation.term;
            }

            $('.popover-content').html(response);
            $(self).popover('rearrange');
        });
    });

})(this);