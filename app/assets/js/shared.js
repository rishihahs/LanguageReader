define(['jquery', 'foundation', 'jstorage'], function($) {
    $(document).foundation();

    $('.new').click(function() {
        $.jStorage.deleteKey('story');
        $.jStorage.deleteKey('words');
        window.location.reload();
    });
});