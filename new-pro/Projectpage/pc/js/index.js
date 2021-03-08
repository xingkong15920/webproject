  //地址跳转相关
    $('.con-tent-jiantou').click(function(){
        window.location.href = 'https://www.hongsou.com.cn/aboutus.html'
    })
    $('.pinpai-more').click(function(){
        window.location.href = 'https://www.hongsou.com.cn/hezuo.html'
    })
    $('.hezuo-shenqing').click(function(){
        window.location.href = 'https://www.hongsou.com.cn/zhaomo.html'
    })
   
//banner 相关
var bannerList = ['img/banner1.png?v=1', 'img/banner2.png?v=1', 'img/banner3.png?v=1', 'img/banner4.png?v=1', 'img/banner5.png?v=1']
var bannerH = ['https://www.hongsou.com.cn/lefan/','','','https://www.hongsou.com.cn/zhaomo.html','https://www.hongsou.com.cn/zhaomo.html']
var bNumber = 0
setInterval(function() {
    bNumber++
    $('.banner-btn-item').attr('class', 'banner-btn-item')
    $('.banner-btn-item').eq(bNumber % 5).attr('class', 'banner-btn-item banner-btn-item-act')
    // $('#banner').attr('src', bannerList[(bNumber % 5 + 1)])
    // $('.banner-href').attr('href',bannerH[bNumber % 5 + 1])
}, 5000)
// 图片预加载
window.onload = function() {  
    setTimeout(function() {  
        for(var m = 0 ; m < bannerList.length;m++){
            new Image().src = bannerList[m]
        }
          
    }, 100);  
}; 
// var firstStr = ''
// for(var m = 0 ; m < bannerList.length;m++){

//     firstStr += '<img src="'+ bannerList[m] +'" style="height:0;width:0">'
// }
// $('.foot-banquan').html(firstStr)
function createBtn() {
    var str = ''
    for (var i = 0; i < bannerList.length; i++) {
        str += '<div class="banner-btn-item" onclick="changeBanner(' + i + ')"></div>'
    }
    $('.banner-btn').html(str)
    $('.banner-btn-item').eq(0).attr('class', 'banner-btn-item banner-btn-item-act')
}
createBtn()

function changeBanner(data) {
    console.log(data)
}


//下标相关记录
// 行业解决下标
var numberInd = 0
// 产品矩阵下标
var numberChanpin = 0
// 合作品牌下标
var numberPinpai = 0
//产品中心移入移出
var proTimer
$("#proCenter").mouseover(function() {
    console.log('123')
    clearTimeout(proTimer)
    $('#product').show()
});
$("#proCenter").mouseout(function() {

    proTimer = setTimeout(function() {
        $('#product').hide()
    }, 100)

});
$('#product').mouseover(function() {

    clearTimeout(proTimer)
    $('#product').show()
})
$('#product').mouseout(function() {

    proTimer = setTimeout(function() {
        $('#product').hide()
    }, 100)
})
// 关于移入移出
var aboTimer
$("#aboutCenter").mouseover(function() {
    clearTimeout(aboTimer)
    $('#about').show()
});
$("#aboutCenter").mouseout(function() {

    aboTimer = setTimeout(function() {
        $('#about').hide()
    }, 100)

});
$('#about').mouseover(function() {

    clearTimeout(aboTimer)
    $('#about').show()
})
$('#about').mouseout(function() {

    aboTimer = setTimeout(function() {
        $('#about').hide()
    }, 100)
})
//行业解决移入移出
var hyTimer
$("#hangyeCenter").mouseover(function() {
    clearTimeout(hyTimer)
    $('#hangye').show()
});
$("#hangyeCenter").mouseout(function() {

    hyTimer = setTimeout(function() {
        $('#hangye').hide()
    }, 100)

});
$('#hangye').mouseover(function() {

    clearTimeout(hyTimer)
    $('#hangye').show()
})
$('#hangye').mouseout(function() {

    hyTimer = setTimeout(function() {
        $('#hangye').hide()
    }, 100)
})
// 公司介绍
function changeCom(data) {
    console.log(data)
    $('.com-tent-right-item').attr('class', 'com-tent-right-item')
    $('.com-tent-right-item').eq(data).attr('class', ' com-tent-right-item com-tent-right-item1')
    $('.com-tent-left').attr('src', 'img/img-jieshao' + (parseFloat(data) + 1) + '.png')
    for (var i = 1; i < 4; i++) {
        $('.com-tent-right-item-img').eq(i - 1).attr('src', 'img/icon-jieshao' + i + '.png')
    }
    $('.com-tent-right-item-img').eq(data).attr('src', 'img/icon-jieshao' + (parseFloat(data) + 1) + '-on.png')
    // $('.com-tent-right-item-img').attr('src','icon-jieshao'+data+'.png')
}
// 行业解决方案
function changeInd(data) {
    console.log(data)
    numberInd = data
    indComplet(numberInd)
}
// 行业解决方案左右箭头
function Ind(data) {
    if (data == 0) {
        numberInd = numberInd - 1
    } else {
        numberInd = numberInd + 1
    }
    if (numberInd < 0) {
        numberInd = 0
    }
    if (numberInd > 7) {
        numberInd = 7
    }
    indComplet(numberInd)

}

function indComplet(data) {
    $('.solve-nav-item').attr('class', 'solve-nav-item')
    $('.solve-nav-item').eq(data).attr('class', 'solve-nav-item solve-nav-item-act')
    $('.solve-img').attr('src', 'img/solve-img' + (data + 1) + '.png')
    $('.solve').attr('style', 'background: url("img/bg-hangye' + (data + 1) + '.png") 100% 100% no-repeat;')
}
// 产品矩阵title
var chanpinTitle = ['乐返卡', '乐返聚合支付', '乐返APP', '乐返蜻蜓', '乐返青蛙', '乐返宝盒', '乐返智能硬件', '乐返营销工具', '乐返商圈广告', '乐返智慧插件']
// 产品矩阵info
var chanpinInfo = [
    '乐返卡是由乐返推出的一款创新产品，无需下载APP、注册验证、关注公众号、线上买券和线下核销等复杂繁重的操作，实现店内买单即返现。 ' + '</br>' + '乐返卡是一种新型的营销模式，使用户、商家、代理商实现共同受益。',
    '帮助商家快速接入，移动支付连接消费者',
    '随身携带随时随地，收款查账营销三合一',
    '绑定乐返账号，支持独立收银模式和收银机模式，还可绑定乐返插件，减少消费者操作流程。' + '</br>' + ' 适用场景：商超、便利店、酒店、医院等。',
    '一键绑定乐返账号，支持多种收款方式，增强用户体验。' + '</br>' + ' 适用场景：超市、酒店、网吧等。',
    '如意AMX生态版，录入方便，快速结算，语音播报，QR扫码，省时省心，快捷录入。' + '</br>' + '  手持扫码简单又轻巧便携，手机识别，方便又快捷，省时更省力。一体化设计，底座扫码，手持扫码，大容量录入系统。',
    '提供专业的软硬件综合解决方案 ' + '</br>' + ' 多套智能硬件设备打通线上线下交易闭环',
    '通过会员卡、裂变优惠券、优惠买单等营销活动轻松获客',
    '高度品牌曝光，精准人群投放' + '</br>' + ' 有效提升品牌营销目标',
    '融合支付SDK' + '</br>' + ' 集成多种支付页面与数据包一键轻松接入'
]
// 产品矩阵下tips
var chanpinList = [{
        img: ['img/juzhen1-1.png', 'img/juzhen1-2.png'],
        text: ['便捷操作', '买单返现'],
        href:'https://www.hongsou.com.cn/lefan/'
    },
    {
        img: ['img/juzhen2-1.png', 'img/juzhen2-2.png'],
        text: ['支付灵活', '快速接入'],
        href:'https://www.hongsou.com.cn/zf-erweima.html'
    },
    {
        img: ['img/juzhen3-1.png', 'img/juzhen3-2.png'],
        text: ['随身携带', '功能三合一'],
        href:'https://www.hongsou.com.cn/zf-app.html'
    },
    {
        img: ['img/juzhen4-1.png', 'img/juzhen4-2.png', 'img/juzhen4-3.png'],
        text: ['扫码支付', '刷脸支付', '即插即用'],
        href:''
    },
    {
        img: ['img/juzhen5-1.png', 'img/juzhen5-2.png', 'img/juzhen5-3.png'],
        text: ['扫码支付', '刷脸支付', '智能收银'],
        href:''
    },
    {
        img: ['img/juzhen6-1.png', 'img/juzhen6-2.png', 'img/juzhen6-3.png', 'img/juzhen6-4.png'],
        text: ['快速结算', '语音播报', '方便快捷', 'QR扫码'],
        href:''
    },
    {
        img: ['img/juzhen7-1.png', 'img/juzhen7-2.png'],
        text: ['专业方案', '多种硬件'],
        href:''
    },
    {
        img: ['img/juzhen8-1.png', 'img/juzhen8-2.png'],
        text: ['会员', '多种活动'],
        href:''
    },
    {
        img: ['img/juzhen9-1.png', 'img/juzhen9-2.png'],
        text: ['品牌曝光', '精准投放'],
        href:''
    },
    {
        img: ['img/juzhen10-1.png'],
        text: ['一键接入'],
        href:''
    }
]

// 产品矩阵

function changeChanpin(data) {
    // chanpin-nav-item chanpin-nav-item-act
    numberChanpin = data
    chanpinComplet(numberChanpin)
}
function chanpinHref(){
    window.location.href = chanpinList[numberChanpin].href
}
// 产品矩阵左右箭头
function chanpin(data) {
    if (data == 0) {
        numberChanpin = numberChanpin - 1
    } else {
        numberChanpin = numberChanpin + 1
    }
    if (numberChanpin < 0) {
        numberChanpin = 0
    }
    if (numberChanpin > 9) {
        numberChanpin = 9
    }
    chanpinComplet(numberChanpin)

}

function chanpinComplet(data) {
    $('.chapin').attr('style', 'background: url("img/bg-chanpin' + (data + 1) + '.png") 100% 100% no-repeat;')
    $('.chanpin-nav-item').attr('class', 'chanpin-nav-item')
    $('.chanpin-nav-item').eq(data).attr('class', 'chanpin-nav-item chanpin-nav-item-act')
    if (data == 5) {
        $('.chanpin-nav-list').attr('style', 'transform: translateX(-800px)')
    }
    if (data == 4) {
        $('.chanpin-nav-list').attr('style', 'transform: translateX(0px)')
    }
    $('.chanpin-tBox-name').html(chanpinTitle[data])
    $('.chanpin-tBox-text').html(chanpinInfo[data])
    var imgList = chanpinList[data].img
    var textList = chanpinList[data].text
    var chanpinTipStr = ''
    for (var ii = 0; ii < imgList.length; ii++) {
        chanpinTipStr += '<div class="chanpin-iBox-item"><img src="' + imgList[ii] + '" class="chanpin-iBox-img"><div class="chanpin-iBox-text">' + textList[ii] + '</div></div>'
    }
    console.log()
    $('.chanpin-iBox').html(chanpinTipStr)
}


// 合作品牌
var pinpaiImg = ['img/pinpai1.png', 'img/pinpai2.png', 'img/pinpai3.png', 'img/pinpai4.png', 'img/pinpai5.png', 'img/pinpai6.png', 'img/pinpai7.png', 'img/pinpai8.png', 'img/pinpai9.png', 'img/pinpai10.png']
var pinpaiStr = ''
for (var j = 0; j < pinpaiImg.length; j++) {
    pinpaiStr += '<img src="' + pinpaiImg[j] + '" class="pinpai-jBox-item">'
}

$('.pinpai-jBox-box').html(pinpaiStr + pinpaiStr)
// 合作品牌左右箭头
/*
未实现无缝滚动，后期再改

*/
function pinpai(data) {
    if (data == 0) {
        numberPinpai = numberPinpai - 1
    } else {
        numberPinpai = numberPinpai + 1
    }
    if (numberPinpai < 0) {
        numberPinpai = 0
    }
    if (numberPinpai > 5) {
        numberPinpai = 5
    }
    // if(numberPinpai == 10){
    //     $('.pinpai-jBox-box').attr('style','transform: translateX(0px);transition: transform 0ms ease-in-out')
    //     // $('.pinpai-jBox-box').attr('style','transition: transform 0ms ease-in-out 0s !important')
    //     numberPinpai = 0
    // }
    $('.pinpai-jBox-box').attr('style', 'transform: translateX(-' + 225 * numberPinpai + 'px)')

}
// 新闻按钮切换
function changeNewTag(data){
    $('.news-title-info-text').attr('class','news-title-info-text')
    $('.news-title-info-text').eq(data).attr('class','news-title-info-text news-title-info-text-act')
    $('.news-info-box').attr('style','transform:translateX('+ 1200*parseFloat( -1 *data) +'px)')
}