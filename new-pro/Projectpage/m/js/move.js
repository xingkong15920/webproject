// 公司介绍滑动
var aLi = document.querySelectorAll(".com-imgList img");
var box = document.querySelector('.com-imgList');
var wrap = document.querySelector('.com-box');

var aLiWidth = box.offsetWidth;

// 初始化手指坐标点
var startPoint = 0;
var startEle = 0;
// 滑动次数
var sNo = 0
//手指按下
wrap.addEventListener("touchstart", function(e) {
    startPoint = e.changedTouches[0].pageX;
    startEle = box.offsetLeft;

});
//手指滑动
wrap.addEventListener("touchmove", function(e) {
    var currPoint = e.changedTouches[0].pageX;
    var disX = currPoint - startPoint;
    var left = startEle + disX;

    box.style.left = left + 'px';
});
//当手指抬起的时候，判断图片滚动离左右的距离，当
wrap.addEventListener("touchend", function(e) {
    var left = box.offsetLeft;
    var currPoint = e.changedTouches[0].pageX;
    var disX = currPoint - startPoint;
    if (disX < 0 && Math.abs(disX) > 50) {

        sNo--
        sNo = sNo <= -2 ? -2 : sNo
        box.style.left = 7.86 * sNo + 'rem';
    }
    if (disX > 0 && Math.abs(disX) > 50) {

        sNo++
        sNo = sNo >= 0 ? 0 : sNo
        box.style.left = 7.86 * sNo + 'rem';
    }
})
// 行业解决滑动
var hangye = document.querySelector('.hangye');
// 初始化手指坐标点
var startPoint1 = 0;
var startEle1 = 0;
// 滑动次数
var sNo1 = 1
//手指按下
hangye.addEventListener("touchstart", function(e) {
    startPoint1 = e.changedTouches[0].pageX;
    startEle1 = box.offsetLeft;

});
//手指滑动
hangye.addEventListener("touchmove", function(e) {



});
//当手指抬起的时候，判断图片滚动离左右的距离，当
hangye.addEventListener("touchend", function(e) {
    var left = box.offsetLeft;
    var currPoint = e.changedTouches[0].pageX;
    var disX = currPoint - startPoint1;
    if (disX < 0 && Math.abs(disX) > 50) {
        console.log('左滑', sNo1)
        sNo1++
        sNo1 = sNo1 >= 8 ? 8 : sNo1
        
    }
    if (disX > 1 && Math.abs(disX) > 50) {
        console.log('右滑', sNo1)
        sNo1--
        sNo1 = sNo1 <= 1 ? 1 : sNo1

    }
    $('.hangye').attr('style', 'background:url("img/bg-hangye' + (sNo1 ) + '.png") no-repeat;background-size:100% 100%')
        $('.hangye-img').attr('style', 'background:url("img/hangye' + (sNo1 ) + '.png") no-repeat;background-size:100% 100%')
        $('.hangye-tag-item').attr('class', 'hangye-tag-item')
        $('.hangye-tag-item').eq(sNo1-1).attr('class', 'hangye-tag-item hangye-tag-item-act')
})

// 产品
// 行业解决滑动
var chanpin = document.querySelector('.chanpin');
// 初始化手指坐标点
var startPoint2 = 0;
var startEle2 = 0;
// 滑动次数
var sNo2 = 1
//手指按下
chanpin.addEventListener("touchstart", function(e) {
    startPoint2 = e.changedTouches[0].pageX;
    startEle2 = box.offsetLeft;

});
//手指滑动
chanpin.addEventListener("touchmove", function(e) {



});
//当手指抬起的时候，判断图片滚动离左右的距离，当
chanpin.addEventListener("touchend", function(e) {
    var left = box.offsetLeft;
    var currPoint = e.changedTouches[0].pageX;
    var disX = currPoint - startPoint2;
    if (disX < 0 && Math.abs(disX) > 50) {
        console.log('左滑', sNo2)
        sNo2++
        sNo2 = sNo2 >= 10 ? 10 : sNo2
        
    }
    if (disX > 1 && Math.abs(disX) > 50) {
        console.log('右滑', sNo2)
        sNo2--
        sNo2 = sNo2 <= 1 ? 1 : sNo2

    }
    $('.chanpin').attr('style', 'background:url("img/bg-chanpin' + sNo2 + '.png") no-repeat;background-size:100% 100%')
    $('.chanpin-img').attr('style', 'background:url("img/chanpin' + sNo2 + '.png") no-repeat;background-size:100% 100%')
    $('.chanpin-tag-item').attr('class', 'chanpin-tag-item')
    $('.chanpin-tag-item').eq(sNo2-1).attr('class', 'chanpin-tag-item chanpin-tag-item-act')
})