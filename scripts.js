    var width = $(window).width();
    updateContainer(width);
    updateBCBF(width);
    updateCodeImage(width);
    //$("#test").text(width); //testing

    //when the window resizes
    $(window).on('resize', function () {
        if ($(this).width() != width) {
            width = $(this).width();
            //$("#test").text(width); //testing temporary
            updateContainer(width);
            updateBCBF(width);
            updateCodeImage(width);
        }

        // this reloads the page when the page width is <= 370 to make sure the bcbf image loads at the right height/width
        if (width <= 370) {
            location.reload();
        }
    });

    // if the width is >= 1300 then add the container class, if not then remove it
    function updateContainer(width) {
        if (width >= 1300) {
            $("main").addClass("container");
        } else {
            $("main").removeClass("container");
        }
    }

    // update the height/width of the bcbf image when the page width is >= 1005
    function updateBCBF(widthNum) {
        if (widthNum >= 1005) {
            // set aboutMeHeight to the height of the about me continued section
            var aboutMeHeight = $("#aboutme-cont").outerHeight(true);
            // set aboutMeWidth to the width of the about me continued section
            var aboutMeWidth = $("#aboutme-cont").outerWidth(true);
            // if the window width is less that about me width and height combined
            if ($(window).width() < (aboutMeHeight + aboutMeWidth)) {
                // set diff to the difference between about me width + height and the window width
                var diff = (aboutMeHeight + aboutMeWidth) - $(window).width();
                // take the difference from about me height
                aboutMeHeight = aboutMeHeight - diff;
            }
            // set the height and width of the bcbf image to about me height
            $("#bcbf img").height(aboutMeHeight);
            $("#bcbf img").width(aboutMeHeight);
        }
    }

    // automatically update the code image height inline with its aspect ratio
    function updateCodeImage(widthNum) {
        var codeWidth = $("#code-image").outerWidth(true);
        var codeHeight = 2000 / (3000 / codeWidth);
        $("#code-image").height(codeHeight);
    }

    var count = 1;
    var length = 1500;
    var loopTitleTimer = setInterval(loopTitle, length);
    var timerOn = true;

    // every 1.5 seconds, loop through each of the titles
    function loopTitle() {

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
    $("#title").click(function () {

        if (timerOn) {
            clearInterval(window.loopTitleTimer);
            timerOn = false;
        } else if (!timerOn) {
            loopTitleTimer = setInterval(loopTitle, length);
            timerOn = true;
        }
    });

    $("#code-image-container").hover(

        function () {
            // when hovering
            $("#code-image-credit").show();
            $("#code-image").css({
                opacity: 0.95
            });
        },
        function () {
            //when stop hovering
            $("#code-image-credit").hide();
            $("#code-image").css({
                opacity: 1
            });
        }
    );
