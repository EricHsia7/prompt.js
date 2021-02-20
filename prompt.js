$("body").append(
    "<style> .promptcenter{position:absolute;left:15px;top:50%;transform:translateY(-50%);color:#fff;font-size:15px;font-family:'Noto Sans TC',sans-serif;font-weight:700} .promptcenter *{color:#fff;font-size:15px;font-family:'Noto Sans TC',sans-serif;font-weight:700}@media only screen and (min-width:350px){.prompt{width:280px;height:50px;background:rgba(51,51,51,.5);border-radius:5px;position:fixed;left:10px;bottom:-80px;opacity:0;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transform:translateX(-0%);}}@media only screen and (max-width:350px){.prompt{width:calc(100% - 20px);height:60px;background:rgba(51,51,51,.5);border-radius:8px;position:fixed;left:50%;bottom:-80px;opacity:0;transform:translateX(-50%);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}}</style>"
);

(function ($) {
    $.fn.prompt = function (options) {
        var settings = $.extend(
            {
                message: "undefined",
                time: 2000,
                animate: "slide",
            },
            options
        );

        return this.each(function () {
            $(".prompt").remove();
            var promptchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var promptid = "";
            for (var i = 0; i < 10; i++) {
                var randomNumber = Math.floor(Math.random() * promptchars.length);
                promptid += promptchars.substring(randomNumber, randomNumber + 1);
            }

            if (settings.animate === "slide") {
                $(this).append('<div class="prompt" id="' + promptid + '"><span class="promptcenter">' + settings.message + "</span></div>");

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "1", transition: "0.4s", bottom: "10px" });
                }, 100);

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "0", transition: "0.4s", bottom: "-80px" });
                }, settings.time + 100);

                setTimeout(function () {
                    $("#" + promptid).remove();
                }, settings.time + 400);
            }

            if (settings.animate === "fade") {
                $(this).append('<div class="prompt" id="' + promptid + '" style="bottom:10px;"><span class="promptcenter">' + settings.message + "</span></div>");

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "1", transition: "0.4s", bottom: "10px" });
                }, 100);

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "0", transition: "0.4s" });
                }, settings.time + 100);

                setTimeout(function () {
                    $("#" + promptid).remove();
                }, settings.time + 400);
            }

            if (settings.animate === "show") {
                $(this).append('<div class="prompt" id="' + promptid + '" style="bottom:10px;"><span class="promptcenter">' + settings.message + "</span></div>");
                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "1", transition: "0s", bottom: "10px" });
                }, 100);
                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "0", transition: "0s" });
                }, settings.time + 100);
                setTimeout(function () {
                    $("#" + promptid).remove();
                }, settings.time + 400);
            }
        });
    };
})(jQuery);
