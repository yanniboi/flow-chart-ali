/**
 * Js file to demo jquery.
 */

$( document ).ready(function () {

    // Function to hide show panels.
    var showText = function (showClass, hideClass) {
        $('.'+hideClass).hide();
        jQuery('.'+showClass).slideDown(800);
    };

    $('button').click(function () {

        // Change image src
        $('img').attr('src', 'http://placehold.it/700x150');


        // Get class from button
        var BtnClass = $(this).attr('class');


        if (BtnClass == 'left'){
            showText('panel-left','panel-right');

        }
        else {
            showText('panel-right','panel-left');

        }

    });
});

