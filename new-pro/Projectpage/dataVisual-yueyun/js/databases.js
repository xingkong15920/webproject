/*01-1.商户交易实时播报--商户名称;*/

/*01-2.商户交易实时播报--支付方式;*/
var payway = ["支付宝", "微信支付", "云闪付", "其他"];

/*02.今日实时总交易额*/
function todayDeal() {
    var numRun = $(".numberRun").numberAnimate({ num: 'http://shangpin.qiaodu.net/db/215343242.10', dot: 2, speed: 2000, symbol: "," });
    var nums = 9999999;
    // setInterval(function() {
    //     nums += parseFloat((Math.random() * 100 + 5).toFixed(2) - 0); //随机累加3位数，或则直接填写数字，如18.88；
    //     numRun.resetData(nums);
    // }, 2000); //3000毫秒=3秒;
}
todayDeal();

/*03.今日总交易三组汇总*/
function todayGroup() {
    var numRun2 = $("#zb1").numberAnimate_ass({ num: '2018', speed: 0, symbol: "," });
    var nums2 = 2019;
    setInterval(function() {
        nums2 += parseInt((Math.random() * 10 + 5).toFixed(2) - 0); //随机累加2位数，或则直接填写数字，如5，下同;
        numRun2.resetData_ass(nums2);
    }, 3000);


    var numRun3 = $("#zb2").numberAnimate_ass({ num: '2019', speed: 0, symbol: "," });
    var nums3 = 2032;
    setInterval(function() {
        nums3 += 3;
        numRun3.resetData_ass(nums3);
    }, 6000);

    var numRun4 = $("#zb3").numberAnimate_ass({ num: '2019', speed: 0, symbol: "," });
    var nums4 = 2032;
    setInterval(function() {
        nums4 += 2;
        numRun4.resetData_ass(nums4);
    }, 9600);
}
todayGroup();