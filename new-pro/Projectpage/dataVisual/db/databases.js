/*01-1.商户交易实时播报--商户名称;*/
var store_name = ["桥西区聚福小吃", "远大车行", "龙山区乐万家超市", "晨华羊肉馆", "佳鹏物流", "泰成汽车修理店", "农汉场山便利店", "荣成市崖头花沐食品店", "凯叔好生活便利店", "凤池小灶", "浚县大海足浴", "苏派白桦林装饰工程", "新密市萤火虫网咖", "西瓜小小店", "新密市市区二毛烩面馆", "了之女装工作室", "曲阳县速龙网吧", "容城县纪念日面包房", "张彩华商店", "新蔡县名烟名酒商行", "根河市名人票务代理部", "崖头佐卡伊饰品店"];

/*01-2.商户交易实时播报--支付方式;*/
var payway = ["支付宝", "微信支付", "云闪付", "其他"];

/*02.今日实时总交易额*/
function todayDeal() {
    var numRun = $(".numberRun").numberAnimate({ num: '122543432.10', dot: 2, speed: 2000, symbol: "," });
    var nums = 122543432.10;
    // numRun.resetData(nums);
    setInterval(function() {
        nums += parseFloat((Math.random() * 100 + 13000).toFixed(2) - 0); //随机累加3位数，或则直接填写数字，如18.88；
        numRun.resetData(nums);

        if(nums > 989999999){
           location.reload()
        }
    }, 3000); //3000毫秒=3秒;
}
todayDeal();

/*03.今日总交易三组汇总*/
function todayGroup() {
    var numRun2 = $("#zb1").numberAnimate_ass({ num: '301814', speed: 0, symbol: "," });
    var nums2 = 301814;
    setInterval(function() {
        nums2 += parseInt((Math.random() * 10 + 10).toFixed(2) - 0); //随机累加2位数，或则直接填写数字，如5，下同;
        numRun2.resetData_ass(nums2);
    }, 1000);


    var numRun3 = $("#zb2").numberAnimate_ass({ num: '52311', speed: 0, symbol: "," });
    var nums3 = 52311;
    setInterval(function() {
        nums3 += 3;
        numRun3.resetData_ass(nums3);
    }, 6000);

    var numRun4 = $("#zb3").numberAnimate_ass({ num: '31232', speed: 0, symbol: "," });
    var nums4 = 31232;
    setInterval(function() {
        nums4 += 2;
        numRun4.resetData_ass(nums4);
    }, 9600);
}
todayGroup();