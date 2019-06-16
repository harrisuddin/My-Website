    var width = $(window).width();
    addContainerClass(width);
    updateBCBF(width);
    updateCodeImage(width);
    $("#test").text(width);
    $(window).on('resize', function() {
        if ($(this).width() != width) {
            width = $(this).width();
            console.log(width);
//            $("#test").text(width); testing
        }
//        location.reload()
        addContainerClass(width);
        updateBCBF(width);
        updateCodeImage(width);
    });

    function addContainerClass(width) {
        if (width >= 1300) {
            $("main").addClass("container");
        } else {
            $("main").removeClass("container");
        }
    }

    function updateBCBF(widthNum) {
        if (widthNum >= 1005) { //&& widthNum <= 1024
            var aboutmeWidth = $("#aboutme-cont").outerHeight(true);

            if ($(window).width() < aboutmeWidth + $("#aboutme-cont").outerWidth(true)) {
                var diff = (aboutmeWidth + $("#aboutme-cont").outerWidth(true)) - $(window).width();
                aboutmeWidth = aboutmeWidth - diff;
            }

//            $("#aboutme-cont").addClass("width-60");
//            $("#bcbf").addClass("width-40");
//            $("#bcbf img").css("margin-top", "0");
            $("#bcbf img").height(aboutmeWidth);
            $("#bcbf img").width(aboutmeWidth);
//            $("#test").text(width + "Yep"); // testing

        }
    }

    function updateCodeImage(widthNum) {
        var codeWidth = $("#code-image").outerWidth(true);
        var codeHeight = 4000 / (6000/codeWidth);
        $("#code-image").height(codeHeight);
    }

    var count = 1;
    var length = 1500;
    var loopTitleTimer = setInterval(loopTitle, length);
    var timerOn = true;

    // every 1.5 seconds, loop through each of the titles
    function loopTitle( ) {

        if (count == 1) {
            document.getElementById("loop-title").innerHTML = "<img src='android_char6.png' alt='Android Logo' id='android'/> apps are my thing...";
            count++;
        } else if (count == 2) {
            $("#loop-title").html("...and so are <span id='web'></span>");
            $("#web").text("<websites/>.");
            count++;
        } else {
            document.getElementById("loop-title").innerHTML = "Hi, I'm Harris.<br>I'm a 1<sup>st</sup> Year CS Student at <a class='link' href='https://www.hw.ac.uk'>HWU.</a>";
            count = 1;
        }
    }

    // when the title element is clicked then it will start/stop looping through the titles
    $("#title").click(function() {

        if (timerOn) {
            clearInterval(window.loopTitleTimer);
            timerOn = false;
        } else if (!timerOn) {
            loopTitleTimer = setInterval(loopTitle, length);
            timerOn = true;
        }
    });

    $("#code-image-container").hover(

        function() {
            // when hovering
            $("#code-image-credit").show();
            $("#code-image").css({ opacity: 0.8 });
        },
        function() {
            //when stop hovering
            $("#code-image-credit").hide();
            $("#code-image").css({ opacity: 1 });
        }
    );
