$(document).ready(function() {

    $(".popup").magnificPopup();

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function() {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.magnificPopup.close();
            }, 1000);
        });
        return false;
    });
    
});

$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_header").animated("fadeInDown", "fadeOut");
    $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_pofi form").animated("zoomInRight", "fadeOut");
    $(".s_back h3").animated("fadeInUp", "fadeOut");
    $("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
});