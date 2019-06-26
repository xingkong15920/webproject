//prd  线上		cs 测试   渠通宇104
var Edition = 'qty';
var server;
if(Edition == 'qty'){
	//server  = 'https://nb.51shanhe.com/shanhe-mechanism/'
    
    server  = 'http://192.168.1.167:6007/shanhe-merchant/'
}else{
	server  = 'http://192.168.1.166:5006/shanhe-mechanism/'
}
/* 
接口前缀解释
get 获取
update 更新
insert  插入
del  删除
*/
var CmsConfig = {

    ServiceUrl: {
         //ApiRootUrl: 'http://10.31.141.200:8080/RTAEDS/',
        //ApiRootUrl:'http://192.168.1.116:8080/IkkyuChegjtrack1/'
        ApiRootUrl:server
        // imgUrl:imgAdd
    },
    addressUrl: {
        Login: {
            // 获取验证码
            createCode: "login/createCode",
            // 登录
            login: "login/login",
            //代理商登录
            AgloginInfo:"login/AgloginInfo",
            //退出
            exitLogin:"login/loginOut",
            //自动登录
            Automaticlist:"login/Automaticlist",

        },
        
        //商户后台
        Merchant: {
            //交易数据
            getTransactionList: "homePage/getTransactionList",
            //交易数据--门店列表
            getShopNames: "homePage/getShopNames",
            //门店管理
            getShops: "shop/getShopList",
            //门店管理--添加门店
            addShop: "shop/addShop",
            //门店管理--修改店铺
            //禁用启用
            enableShop:"shop/enableShop",
            //编辑
            modifyShop: "shop/updateShop",
            //删除
            deleteShop:"shop/deleteShop",
            //店员管理
            getClerks: "clerk/getClerks",
            //店员管理--添加店员
            addClerk: "clerk/addClerk",
            //店员管理--修改店员
            //编辑店员
            updateClerker:"clerk/updateClerker",
            //更改店员状态
            modifyClerk: "clerk/updateClerkerStatus",
            //退款权限
            updateClerkerAuthority:"clerk/updateClerkerAuthority",
            //修改店员密码
            updateClerkerPassword:"clerk/updateClerkerPassword",
            //店员管理--设备管理
            getEquipments:"equipment/getEquipments",
            //广告管理
            getadvertlist:"advert/getadvertlist",
            //广告管理--添加
            addAdvert:"advert/addAdvert",
            //广告管理--修改
            modifyAdvert:"advert/modifyAdvert",
            //广告管理--删除
            deleteAdvert:"advert/deleteAdvert",
            //广告管理--状态
            modifyAdvertState:"advert/modifyAdvertState",
            //账单管理--门店账单
            getShopBill: "shopBill/getShopBill",
            //账单管理--商户账单
            getMerchantBill: "merchantBill/getMerchantBill",
            //交易数据统计
            getStatistics:"statistics/getTransactionStatistics",
            //店员统计
            getClerkStatistics:'statistics/getClerkStatistics',
            //获取商户总的交易汇总
            getMerBatchInSum:"homePage/getMerBatchInSum",
            //查询所有店员
            getClerkList:"statistics/getClerkList",
            //获取机构信息
            getInsInfo:"login/getInsInfo",
            //下载单二维码
            setcode:"equipment/getCode",
            //下载带背景二维码
            downservletImages:"equipment/downservletImages",
            //查询机构二维码设置
            getInstitutionQrcade:"clerk/getInsQrcode",
            //导出订单报表
            getTransactionExcel:"homePage/getTransactionExcel",
            //导出商户账单
            getMerchantBillExcel:"merchantBill/getMerchantBillExcel",
            //导出门店账单
            getShopBillExcel:"shopBill/getShopBillExcel",
        },
        //公共
        Public: {
            //省市区接口
            getAddress:"login/getAddress",
            //获取图片
            addPic:"photo/addPic",
            //新的省市区接口
            getAreajson:"shop/getAreajson",
            //根据机构号获取费率
            getInfoRate:"login/getInfoRate",
            //查询支行
            selectBank:"merchantRegister/selectBank",
            //根据域名获取机构
            getSitePath:"login/getSitePath",
        },
        
       
    }

};