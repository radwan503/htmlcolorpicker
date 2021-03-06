(function ($) {
    "use strict";
    var clipboard = new ClipboardJS('.btn-dot');

    clipboard.on('success', function (e) {
        e.clearSelection();
        e.trigger.textContent = 'Copied!';
        var interval = setInterval(timer, 1000);

        function timer() {
            e.trigger.textContent = e.text;
            clearInterval(interval);
        }
    });

    clipboard.on('error', function (e) {
        console.info(e);
    });



    var clipboard = new ClipboardJS('.gradient-dot');

    clipboard.on('success', function (e) {
        e.clearSelection();
        e.trigger.textContent = 'Copied!';
        var interval = setInterval(timer, 1000);

        function timer() {
            e.trigger.textContent = e.text.hide;
            clearInterval(interval);
        }
    });

    clipboard.on('error', function (e) {
        console.info(e);
    });


    $('[data-toggle="tooltip"]').tooltip()

})(jQuery);