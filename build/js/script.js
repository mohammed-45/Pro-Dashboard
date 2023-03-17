$(function () {
    $(".sidebar .side-menu .destination").addClass("hidden");
    $(".sidebar .side-menu .side-active").addClass("block")
    $(".sidebar .side-menu > li > a").on("click", function () {
        if ($(".sidebar .side-menu .destination").hasClass("hidden")) {
            $(this).parentsUntil(".side-menu").find(".destination").slideToggle(300);
            $(this).find(".side-arrow").addClass("transition").toggleClass("rotate-[540deg]")
        }
        if ($(".sidebar .side-menu .side-active").hasClass("block")) {
            $(this).parentsUntil(".side-menu").find(".side-active").slideToggle(300);
        }
        $(this).find(".open-side-arrow").toggleClass("rotate-[540deg]")
    })
    $(".burger").on("click", function () {
        $(".sidebar").toggleClass("-translate-x-64 translate-x-0")

        $(".sidebar").siblings("div").addClass("opacity-100")
    })
    $(".close-sidebar").on("click", function () {
        $(".sidebar").toggleClass("translate-x-0 -translate-x-64")

        $(".sidebar").siblings("div").removeClass("opacity-100")
    })

    
    if ($(window).width() >= 1024) {
        $(".sidebar .close-small button").on("click", function () {
                $(this).toggleClass("rotate-[540deg]")
            
                $(".sidebar h3 > span").toggleClass("hidden block")
    
                $(".sidebar .side-menu span, .sidebar .side-arrow, .sidebar .open-side-arrow").toggleClass("lg:hidden")
        
                $(".sidebar .destination").addClass("lg:hidden")
        
                $(".sidebar").toggleClass("lg:w-20")
        
                if ($(".sidebar .side-menu .destination").hasClass("hidden")) {
                    $(".sidebar .destination > ul, .sidebar .side-active > ul").toggleClass("lg:hidden");
                
            }
        })
    } 

    $(".search").on("click", function (e) {
        $(this).find(".full-search").toggleClass("hidden flex");

        
    })
    
    $(this).on("click", function () {
        if ($(this).find(".full-search").hasClass("flex")) {
            $(this).find("#main-search").trigger("focus")
        }
    })

    $(".search .full-search .popup-search").on("click", function (e) {
        e.stopPropagation()
    })
    $(document).on('keydown', function(evt) {
        if (evt.keyCode == 27) {
            $(".search .full-search").toggleClass("hidden flex")
        }
    });


    $(".noti").on("click", function () {
        $(this).find(".popup-noti").slideToggle(300)
    })
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.noti')) {
            $(".popup-noti").slideUp(300);
        }
    });
    $(".noti .popup-noti").on("click", function (e) {
        e.stopPropagation()
    })

    $(".need-help").on("click", function () {
        $(this).find(".popup-help").slideToggle(300)
    })
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.need-help')) {
            $(".popup-help").slideUp(300);
        }
    });
    $(".need-help .popup-help").on("click", function (e) {
        e.stopPropagation()
    })

    $(".header-more-options").on("click", function () {
        $(this).find(".more-options-popup").slideToggle(300)
    })
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.header-more-options')) {
            $(".more-options-popup").slideUp(300);
        }
    });
    $(".header-more-options .more-options-popup").on("click", function (e) {
        e.stopPropagation()
    })

    $("main .filtering").on("click", function () {
        $("main .filtering-list").slideToggle(300)
    })
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.filtering')) {
            $(".filtering-list").slideUp(300);
        }
    });
    $("main .filtering-list").on("click", function (e) {
        e.stopPropagation()
    })
    $("main .filtering-list").find("li:last-child button").on("click", function () {
        $(".filtering-list").fadeOut(300)
    })

    $(".card-active").on("click", function () {
        $(this).toggleClass("bg-slate-200 text-slate-500 gq");
        $(this).siblings(".card-active-list").slideToggle(300);
    });
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.card-active')) {
            if (!$(".card-active").hasClass(".gq")) {
                $(".card-active").removeClass("bg-slate-200 text-slate-500").addClass("gq");
            }
            $(".card-active-list").slideUp(300);
        }
    });

    $(".note-active").hover(function () {
        $(this).siblings(".note-active-source").fadeToggle(300);
    })

    $("main .date-customers-filtering").on("click", function () {
        $("main .date-customers-filtering-list").slideToggle(300)
    })
    $(document).on('click touch', function(event) {
        if (!$(event.target).parents().addBack().is('.date-customers-filtering')) {
            $(".date-customers-filtering-list").slideUp(300);
        }
    });
    let customersDateValue;
    if ($("main .customers-date-active").hasClass("text-indigo-500")) {
        customersDateValue = $("main .customers-date-active.text-indigo-500 span").text()
    }
    $("main .date-customers-filtering .customers-date").text(customersDateValue)
    $("main .customers-date-active").on("click", function () {
        $(this).siblings().removeClass("text-indigo-500");
        $(this).siblings().find("svg").addClass("opacity-0");
        $(this).addClass("text-indigo-500");
        $(this).find("svg").removeClass("opacity-0");
        $(this).parents(".date-customers-filtering-list").fadeOut(300);
        customersDateValue = $(this).text();
        $("main .date-customers-filtering .customers-date").text(customersDateValue)
    })

    
    $('#checkAll').change(function () {
        $('.table-item').prop('checked', this.checked);
    });
    
    $('.table-item').change(function () {
        if ($('.table-item:checked').length == $('.table-item').length){
        $('#checkAll').prop('checked',true);
        }
        else {
            $('#checkAll').prop('checked',false);
        }
    });
    $('.table-item, #checkAll').change(function () {
        var numberOfChecked = $('.table-item:checked').length;
        $(".table-items-action").show();
        $(".table-items-count").text(numberOfChecked)
        console.log(numberOfChecked);
        $(".table-items-count").parent("div").show()
        if (numberOfChecked == 0) {
            $(".table-items-action").hide();
        }
    });

    $(".arrow").on("click", function () {
        $(this).toggleClass("rotate-180")
        $(this).parents("tbody").find("#description").toggle()
    })

    $(".pay-by").siblings("button").on("click", function (e) {
        if ($(this).hasClass("paypal")) {
            $(".pay-by").addClass("translate-x-1/2")
            $(".details").addClass("hidden")
            $(".pay-now").text("Pay with PayPal - $253.00")
        } else {
            $(".pay-by").removeClass("translate-x-1/2")
            $(".details").removeClass("hidden")
            $(".pay-now").text("Pay $253.00")
        }
    })

    $(".profile-arrow").on("click", function () {
        $(".main-profile").addClass("translate-x-full").siblings("#profile-sidebar").removeClass("-translate-x-full")
    })
    $(".profile-side-show").on("click", function () {
        $("#profile-sidebar").addClass("-translate-x-full").siblings(".main-profile").removeClass("translate-x-full")
    })
})