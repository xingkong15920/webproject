
// banner  控制
var bannerList =['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg']
var bannerHref = ['https://www.hongsou.com.cn/lefan/','','','https://www.hongsou.com.cn/zhaomo.html','https://www.hongsou.com.cn/zhaomo.html']
var bannerNo = 0
setInterval(function() {
    bannerNo = bannerNo + 1
    if (bannerNo > 4) {
        bannerNo = 0
    }
    $('.banner-img').attr('src',bannerList[bannerNo] )
    
    $('.banner-nav-item').attr('class', 'banner-nav-item')
    $('.banner-nav-item').eq(bannerNo).attr('class', 'banner-nav-item banner-nav-item-act')
}, 4500)
$('.banner').click(function(){
    window.location.href = bannerHref[bannerNo]
})

$('.nav').attr('style', 'height:' + (document.body.clientHeight - 50) + 'px;')

     $(window).scroll(function () {
        
        if($(window).scrollTop() > 200){
            $('.nav').attr('style', 'right:-8.8rem;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        onOff = false
        }
     })
var onOff = false
$('#nav-more').click(function() {
    console.log()
    if (onOff == false) {
        $('.nav').attr('style', 'right:0;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        $('#all').show()
        $('#chanpin').hide()
        $('#hangye').hide()
        $('#about').hide()
        onOff = true
    } else {
        $('.nav').attr('style', 'right:-8.8rem;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        onOff = false
    }
})
$('.banner').click(function(){
    $('.nav').attr('style', 'right:-8.8rem;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        onOff = false
})
$('.shuju').click(function(){
    $('.nav').attr('style', 'right:-8.8rem;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        onOff = false
})
$('.com').click(function(){
    $('.nav').attr('style', 'right:-8.8rem;' + 'height:' + (document.body.clientHeight - 50) + 'px;')
        onOff = false
})
function allHide() {
    $('#all').hide()
    $('#chanpin').hide()
    $('#hangye').hide()
    $('#about').hide()
}
$('#chanpin-show').click(function() {
    allHide()
    $('#chanpin').show()
})
$('#hangye-show').click(function() {
    allHide()
    $('#hangye').show()
})
$('#about-show').click(function() {
    allHide()
    $('#about').show()
})
// hangye-show
// about-show
$('.nav-chanpin-back').click(function() {
    allHide()
    $('#all').show()
})














//公司介绍轮播图控制

//公司介绍文字控制
var comOn = false
$('.com-more').click(function() {
    if (!comOn) {
        $('.com-text').attr('style', 'height:auto')
        $('.com-more').attr('style', 'transform:rotate(180deg)')
        comOn = true
    } else {
        $('.com-text').removeAttr('style')
        $('.com-more').attr('style', 'transform:rotate(0deg)')
        comOn = false
    }

})


// 服务支持
var fuwuNo = ''

function zhichi(data) {
    if (fuwuNo === data) {
        $('.fuwu-item').removeAttr('style')
        $('.fuwu-item-icon').removeAttr('style')
        fuwuNo = ''
    } else {
        $('.fuwu-item').removeAttr('style')
        $('.fuwu-item-icon').removeAttr('style')
        $('.fuwu-item').eq(data).attr('style', 'height:auto')
        $('.fuwu-item-icon').eq(data).attr('style', 'transform:rotate(180deg)')
        fuwuNo = data
    }

}
// 新闻按钮切换
function changeNewTag(data){
    $('.news-nav-item').attr('class','news-nav-item')
    $('.news-nav-item').eq(data).attr('class','news-nav-item news-nav-item-act')
    $('.news-list-box').attr('style','transform:translateX('+ 10*parseFloat( -1 *data) +'rem)')
}