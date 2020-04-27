// loading screen
$(window).load(function()
{
    $("body").css("overflow","auto");



    $(".loading-overlay h1").fadeOut(2000,
        function()
        {
            $(this).parent().fadeOut(2000,
                function()
                {
                     $(this).remove();
                });

    });
});