define(['jquery', 'foundation', 'jstorage'], function($) {
    $(document).foundation();

    $('.languages input[type="radio"]').change(function() {
        $.jStorage.set('language', $.trim($(this).parent().text()));
    });

    var languages = ['es', 'fr'];
    var lang = $.jStorage.get('language');
    var index = languages.indexOf(lang);
    if (lang && index) {
        $('.languages input[type="radio"]').prop('checked', false).next().removeClass('checked');
        $('.languages input[type="radio"]').eq(index).prop('checked', true).next().addClass('checked');
    }
});