    var width = $(window).width();
    updateContainer(width);
    updateBCBF(width);
    updateCodeImage(width);
    //$("#test").text(width); //testing

    //when the window resizes
    $(window).on('resize', function () {
        if ($(this).width() != width) {

            // this reloads the page when the page width is changed by 200px to make sure the bcbf image loads at the right height/width
            if ($(this).width() > (width + 200) || $(this).width() < (width - 200)) {
                width = $(this).width();
                location.reload();
            }

            width = $(this).width();
            //$("#test").text(width); //testing temporary
            updateContainer(width);
            updateBCBF(width);
            updateCodeImage(width);
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
            document.getElementById("loop-title").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="android" viewBox="0 0 293.2 344.3"><style>.st0{fill:#79c257}</style><path class="st0" d="M286.4 135c0-11.2-9.2-20.4-20.4-20.4s-20.4 9.2-20.4 20.4v85c0 11.2 9.2 20.4 20.4 20.4s20.4-9.2 20.4-20.4v-85zM48.4 135c0-11.2-9.2-20.4-20.4-20.4S7.6 123.8 7.6 135v85c0 11.2 9.2 20.4 20.4 20.4s20.4-9.2 20.4-20.4v-85zM191.6 37.8l14.4-26c.8-1.4.3-3.2-1.1-3.9-.4-.2-.9-.4-1.4-.4-1 0-2 .5-2.5 1.5l-14.6 26.3C174.5 30 161.1 27 147 27c-14.1 0-27.5 3-39.4 8.3L93.1 9c-.8-1.4-2.5-1.9-3.9-1.1-1.4.8-1.9 2.5-1.1 3.9l14.4 26C74.7 52.2 56 79.5 56 110.9h182c0-31.4-18.7-58.7-46.4-73.1zM105 77.6c-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6 7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6zm84 0c-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6 7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6zM56 118.1V250c0 12.2 9.8 22 22 22h14.6v45c0 11.2 9.2 20.4 20.4 20.4s20.4-9.2 20.4-20.4v-45h27.2v45c0 11.2 9.2 20.4 20.4 20.4s20.4-9.2 20.4-20.4v-45H216c12.2 0 22-9.8 22-22V118.1H56z"/></svg> apps are my thing...';
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

    function goTop() {
        window.scrollTo(0, 0);
    }
