(function ($) {
    $.fn.numberAnimate_ass = function (setting_ass) {
        var defaults_ass = {
            speed: 1000,
            num: "",
            iniAnimate: true,
            symbol: '',
            dot: 0
        }
        var setting_ass = $.extend(defaults_ass, setting_ass);

        if ($(this).length > 1) {
            alert("just only one obj!");
            return;
        }

        if (setting_ass.num == "") {
            alert("must set a num!");
            return;
        }
        var nHtml_ass = '<div class="mt-number-animate-dom-ass" data-num="{{num}}">\
            <span class="mt-number-animate-span-ass">0</span>\
            <span class="mt-number-animate-span-ass">1</span>\
            <span class="mt-number-animate-span-ass">2</span>\
            <span class="mt-number-animate-span-ass">3</span>\
            <span class="mt-number-animate-span-ass">4</span>\
            <span class="mt-number-animate-span-ass">5</span>\
            <span class="mt-number-animate-span-ass">6</span>\
            <span class="mt-number-animate-span-ass">7</span>\
            <span class="mt-number-animate-span-ass">8</span>\
            <span class="mt-number-animate-span-ass">9</span>\
            <span class="mt-number-animate-span-ass">.</span>\
          </div>';

        //数字处理
        var numToArr_ass = function (num) {
            num = parseFloat(num).toFixed(setting_ass.dot);
            if (typeof(num) == 'number') {
                var arrStr = num.toString().split("");
            } else {
                var arrStr = num.split("");
            }
            return arrStr;
        }

        var setNumDom_ass = function (arrStr) {
            var shtml1 = '<div class="mt-number-animate-ass">';
            for (var i = 0, len = arrStr.length; i < len; i++) {
                if (i != 0 && (len - i) % 3 == 0 && setting_ass.symbol != "" && arrStr[i] != ".") {
                    shtml1 += '<div class="mt-number-animate-dot-ass">' + setting_ass.symbol + '</div>' + nHtml_ass.replace("{{num}}", arrStr[i]);
                } else {
                    shtml1 += nHtml_ass.replace("{{num}}", arrStr[i]);
                }
            }
            shtml1 += '</div>';
            return shtml1;
        }

        //执行动画
        var runAnimate_ass = function ($parent) {
            $parent.find(".mt-number-animate-dom-ass").each(function () {
                var num = $(this).attr("data-num");
                num = (num == "." ? 10 : num);
                var spanHei = $(this).height() / 11; //11为元素个数
                var thisTop = -num * spanHei + "px";
                //if (thisTop != $(this).css("top")) {
                if (setting_ass.iniAnimate) {
                    //HTML5不支持
                    if (!window.applicationCache) {
                        $(this).animate({
                            top: thisTop
                        }, setting_ass.speed);
                    } else {
                        $(this).css({
                            'transform': 'translateY(' + thisTop + ')',
                            '-ms-transform': 'translateY(' + thisTop + ')', /* IE 9 */
                            '-moz-transform': 'translateY(' + thisTop + ')', /* Firefox */
                            '-webkit-transform': 'translateY(' + thisTop + ')', /* Safari 和 Chrome */
                            '-o-transform': 'translateY(' + thisTop + ')',
                            '-ms-transition': setting_ass.speed / 1000 + 's',
                            '-moz-transition': setting_ass.speed / 1000 + 's',
                            '-webkit-transition': setting_ass.speed / 1000 + 's',
                            '-o-transition': setting_ass.speed / 1000 + 's',
                            'transition': setting_ass.speed / 1000 + 's'
                        });
                    }
                } else {
                    setting_ass.iniAnimate = true;
                    $(this).css({
                        top: thisTop
                    });
                }
                //}
            });
        }

        var init_ass = function ($parent) {
            $parent.html(setNumDom_ass(numToArr_ass(setting_ass.num)));
            runAnimate_ass($parent);
        };

        this.resetData_ass = function (num) {
            var newArr = numToArr_ass(num);
            var $dom = $(this).find(".mt-number-animate-dom-ass");
            if ($dom.length < newArr.length) {
                $(this).html(setNumDom_ass(numToArr_ass(num)));
            } else {
                $dom.each(function (index, el) {
                    $(this).attr("data-num", newArr[index]);
                });
            }
            runAnimate_ass($(this));
        }
        init_ass($(this));
        return this;
    }
})(jQuery);