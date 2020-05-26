//prd  线上		cs 测试   渠通宇104
var Edition = 'qty1';
var server;
var publicUrl
if(Edition == 'qty'){
	server  = 'https://nb.51shanhe.com/shanhe-service/'
    //server  = 'http://192.168.1.134:5006/shanhe-mechanism/'
    //server = 'http://148.70.79.191:10700/shanhe-service/'
    //server = 'http://192.168.1.134:6006/shanhe-service/'
    publicUrl = 'https://nb.51shanhe.com/shanhe-common/'
}else{
	server  = 'http://192.168.1.250:6006/shanhe-service/'
    publicUrl = 'http://192.168.1.250:5006/shanhe-common/'
    //server  = 'http://47.95.247.16:6106/shanhe-service/'
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
        ApiRootUrl:server,
        PubUrl:publicUrl
        // imgUrl:imgAdd
    },
    addressUrl: {
        Login: {
            // 获取验证码
            createCode: "login/createCode",
            // 登录
            login: "login/loginJG",
            //代理商登录
            AgloginInfo:"agentCommon/AgloginInfo",
            //退出
            exitLogin:"agentCommon/exitLogin",
            //自动登录
            Automaticlist:"agentCommon/Automaticlist",

        },
        //代理商后台
        Agent: {
            //首页
            selectAgOverview:"agOrder/selectAgOverview",
            //订单管理
            //查询订单
            selectOrderList:"agOrder/getAgOrderList",
            //查询退款
            getTransactionList:"agOrder/getTransactionList",
            //商户
        	//查询商户信息
            getMerchantlist:"agMerchant/getAgMerchantlist",
            //更改商户状态
            stateMerchant:"agMerchant/stateMerchant",
            //删除商户
            delMerchant:"agMerchant/delMerchant",
            //获取商户信息
            getAgMerchant:"agMerchant/getAgMerchant",
            //修改商户广告状态
            changeMerAdState:"agMerchant/changeMerAdState",
            //获取商户图片
            getMerPhoto:"agMerchant/getMerPhoto",
            //修改商户密码
            updateMerPassWord:"merEquipment/updateMerPassWord",
            //获取商户费率
            getMerchantRate:"agMerchant/getMerchantRate",
            //获取商户通道费率
            getAgentPaymentRate:"agMerchant/getAgentPaymentRate",
            //查询商户码牌
            getMerQrcodelist:"merEquipment/getMerQrcodelist",
            //查询店铺
            getShoplist:"merEquipment/getAgMerShoplist",
            //查询云喇叭
            getShopYLB:"merEquipment/getShopYLB",
            //解绑云喇叭
            unbindShopYLB:"merEquipment/unbindShopYLB",
            //绑定码牌
           insertShopCode:"merEquipment/addShopCode",
           //绑定云喇叭
           insShopEquipment:"merEquipment/addShopYLB",
           //查询机构基本设置
           getInsRegInfo:"agentCommon/getInsRegInfo",
           //重置秘钥
           updateMerchantKeys:"merEquipment/updateMerchantKeys",
           //解绑二维码
           updateShopCode:"merEquipment/updateShopCode",
            
           //批量禁用
           stateMerchants:"agMerchant/stateMerchants",
           //批量更换销售
           changeMerchants:"agMerchant/changeMerchants",
            //查询当前代理下级代理
            getOriginalAgentD:"agMerchant/getOriginalAgentD",
            //查询代理商费率
            getAgentRate:"agentManage/getAgentRate",
            //查询机构下通道
            getChannel:"agentManage/getChannel",
            //更新代理商费率
            updataAgentRate:'agentManage/updataAgentRate',
            //查询代理下销售
            getSaleD:"agMerchant/getSaleD",



            //销售
            //查询销售列表
            getSaleInfo:"agSale/getSaleInfo",
            //添加销售
            saleInsert:"agSale/addSale",
            //销售编辑
            updateSale:"agSale/updateSale",
            //删除销售
            delSaleType:"agSale/delSaleType",

            //代理
            insertAgent:"AgManagement/insertAgent",
            //查询列表(下级)
            getAgent:"agentManage/getAgentList",
            //编辑代理
            upAgentInfo:"agentManage/upAgentInfo",
            //更改代理状态
            agentEnableDisable:"agentManage/agentEnableDisable",


            //提现
            //查询提现账户
            getBackCard:"Withdrawal/getBackCard",
            //添加提现账户
            insertBankCard:"Withdrawal/insertBankCard",
            //查询提现记录
            getAgentWithdrawCash:"Withdrawal/getAgentWithdrawCash",
            //添加提现记录
            insertAgentWithdrawCash:"Withdrawal/insertAgentWithdrawCash",
            //查询代理商余额
            getAgentBalance:"Withdrawal/getAgentBalance",


            //码牌
            //查询码牌列表
            getCode:"agentQrCode/getAgentQrcode",
            getCodes:"merEquipment/getQrCodeList",
            //生成二维码
            GenerateCode:"agentQrCode/addAgentQrCode",
            //下载
            setcode:"QRcode/setcode",
            //带背景down
            downservletImages:"QRcode/downservletImages",
            //当前页
            //todownmyziliao:"QRcode/todownmyziliao",
            //批量
            downloadBatchSize:"QRcode/downloadBatchSize",
            //下载所有未绑定
            todownziliao:"QRcode/todownziliao",


            //商户汇总
            selectMerchant:"agentBill/getMerchantTrade",
            //门店汇总
            selectShop:"agTransactionstatisticsController/selectShop",
            //获取该代理商下二级代理商
            getMyAgent:"agentBill/getMyAgent",
            //代理账单
            selectAgentBillList:"agentBill/getAgentBillList",
            selectDetailAgentBillList:"agentBill/getAgentBillDetail",
            //销售账单
            getSaleBillList:"agSale/getSaleBillList",
            //新增销售账单
            addSaleLocal:"agSale/addSaleLocal",
            //代理商商户统计
            getMerBatchInfo:"agMerOrder/getMerBatchInfoListUp",
            //代理商商户汇总
            getMerBatchInfoCollect:"agMerOrder/getMerBatchInfoListUp",
            //销售统计新街口
            getMerchantAllAndXz:"saleStatistics/getMerchantAllAndXz",


            //广告
            //插入广告
            addAdvertising:"insAdvertising/addAdvertising",
            //查询广告
            getAdvertising:"insAdvertising/getAdvertising",
            //编辑广告
            updateAdvertising:"insAdvertising/updateAdvertising",
            //长传图片
            addPic:"photo/addPic",
            //上传视频
            addVideo:"video/addVideo",

            //设备管理
            getAgEquipmentList:"agentQrCode/getAgEquipmentList",
            //获取是商户设备列表
            getMerEquipmentList2:"merEquipment/getMerEquipmentList2",
            //绑定设备
            bindEquipment:"merEquipment/bindEquipment",
            //解绑设备
            unbindEquipment:"merEquipment/unbindEquipment",
            //查询代理商下可用商户
            getMerchants:"agentQrCode/getMerchants",
            //添加设备
            addAgEquipment:"agentQrCode/addAgEquipment",
            //删除设备
            delAgEquipment:"agentQrCode/delAgEquipment",
            

			// 导出报表
			// 导出代理商收益明细报表
			getAgentBillExcel:"agentBill/getAgentBillExcel",
			// 导出销售账单
			getSaleBillExcle:"agSale/getSaleBillExcle",
			// 导出代理商收益明细报表
			getMerDetailExcel:"agentBill/getMerDetailExcel",
			// agentLevel
			getMerDrawMoneyExcel:"agMerchant/getMerDrawMoneyExcel",
			// 导出商户账单
			getMerchantBillExcel:"merchantBill/getMerchantBillExcel",
			// 导出门店账单
			getShopBillExcel:"shopBill/getShopBillExcel",
			


            //修改密码
            updatePass:"system/updatePass",
        },
       
        //公共
        Public: {
            //省市区接口
            getAddress:"login/getAddress",
            //获取图片
            addPic:"photo/addPic",
            //新的省市区接口
            getAreajson:"agentCommon/getAreajson",
            //根据机构号获取费率
            getInfoRate:"agentCommon/getInfoRate",
            //查询支行
            selectBank:"merchantRegister/selectBank",
            //根据域名获取机构
            getSitePath:"agentCommon/getSitePath",
        },
        
       
    }

};