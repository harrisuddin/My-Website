    var width = $(window).width();
    addContainerClass(width);
    $(window).on('resize', function() {
        if ($(this).width() != width) {
            width = $(this).width();
            console.log(width);
        }
        addContainerClass(width);
    });

    function addContainerClass(width) {
        if (width > 1024) {
            $("main").addClass("container");
        } else {
            $("main").removeClass("container");
        }
    }

    function updateBCBF() {
        var num = $("#aboutme-cont").outerHeight(true);
        $("#bcbf img").height(num);
        $("#bcbf img").width(num);
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
