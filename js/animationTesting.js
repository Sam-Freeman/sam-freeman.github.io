// This can be improved with the use of an array and index and delay - will do tomorrow
$(document).ready(function(){
    $("#test").click(function () {
        $(this).toggleClass("rotate");
        $(this).animate({
            opacity: 0.0,
            top: "-=50vh",
        }, 1000, function() {
            $("h2").fadeIn("slow");
            $("h1").fadeIn("slow", function(){
                $("#key-points").fadeIn("slow");
                $("#key-points").animate({
                    right:"+=31.25vw",
                }, 1000, function(){
                    $("#top-projects").fadeIn("slow")
                    $("#top-projects").animate({
                        right:"-=31.25vw",
                    }, 1000, function(){
                        $("#education-work").fadeIn("slow");
                    });
                });
            });
        });
    });
});
