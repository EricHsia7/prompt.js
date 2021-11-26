$("body").append(
    "<style>.prompt{position:fixed;left:50%;bottom:85px;transform:translateX(-50%);background:#f5f5f5;width:calc(var(--mjw-trjs) - 15px);height:50px;border-radius:15px;display:flex;align-items:center;font-weight:700;padding-left:15px}@media (prefers-color-scheme: dark){.prompt{background:#1f1f1f;color:#fff}}</style>"
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
                $(this).append('<div class="prompt" id="' + promptid + '" style="transform:scale(0.8) translate(-50%);opacity:0">' + settings.message + "</div>");

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "1", transition: "0.4s", transform: "scale(1) translateX(-50%)" });
                }, 100);

                setTimeout(function () {
                    $("#" + promptid).css({ opacity: "0", transition: "0.4s", transform: "scale(0.8) translate(-50%)" });
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
