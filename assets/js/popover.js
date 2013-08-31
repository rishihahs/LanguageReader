(function(window) {
    var popover;

    var options = {
        trigger: 'manual',
        placement: placement,
        html: true,
        title: '<span>mundo (mundo)</span> <button type="button" class="close close-popover">&times;</button>',
        content: 'Loading...'
    };

    $('.word').click(function() {
        if (popover) {
            popover.popover('hide');
        }

        popover = $(this);

        if (!$(this).data('popover')) {
            $(this).popover(options);
        }

        $(this).popover('toggle');
        var self = this;
        $('.close:not(.bound)').addClass('bound').on('click', function() {
            $(self).popover('hide');
        });

        window.WordReference.getJSON($.trim($(this).text().replace('.', '')), function(content) {console.log(JSON.stringify(content));
            var response;
            if (content.hasOwnProperty('Error')) {
                response = 'No translation found.';
            } else {

            }
        });
    });

    function placement() {
        var position = this.$element.position();

        if (position.top < $(document).height() * 0.10) {
            return 'bottom';
        }

        return 'top';

    }
})(this);