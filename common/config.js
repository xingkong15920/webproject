//prd  线上		cs 测试   渠通宇104
var Edition = 'qty1';
var server;
if(Edition == 'qty'){
	server  = 'http://192.168.1.116:5006/shanhe-mechanism/'
}else{
	server  = 'http://192.168.1.134:5006/shanhe-mechanism/'
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
            login: "login/loginJG",
            //代理商登录
            AgloginInfo:"login/AgloginInfo",
            //退出
            exitLogin:"login/exitLogin",
            //自动登录
            Automaticlist:"login/Automaticlist"
        },
        //机构后台接口
        Mechanism: {
            //---系统设置
            //基本设置
            //获取
            getInstitutionRegisterInfo:"Institution/getInstitutionRegisterInfo",
            //更新
            updateInstitutionRegisterInfo:"Institution/updateInstitutionRegisterInfo",
            //邮件设置
            getInstitutionMailboxSetting:"InstitutionMailboxSetting/getInstitutionMailboxSetting",
            updateInstitutionMailboxSetting:"InstitutionMailboxSetting/updateInstitutionMailboxSetting",
            insertInstitutionMailboxSetting:"InstitutionMailboxSetting/insertInstitutionMailboxSetting",
            send:"mail/send",
            //极光设置查询
            selectJGPush:"setPush/selectJGPush",
            //极光推送
            updateJGPush:"setPush/updateJGPush",
            //短信设置
            getInstitutionSMSSetting:"InstitutionSMSSetting/getInstitutionSMSSetting",
            updateSMSSetting:"InstitutionSMSSetting/updateSMSSetting",
            insertSMSS:"InstitutionSMSSetting/insertSMSS",
            //验证短信
            Phone:"Verify/Phone",
            //修改密码
            updatePassword:"login/updatePassword",
            //管理员管理列表
            getInstitutionStaff:"InstitutionStaff/getInstitutionStaff",
            //添加管理员
            insertInstitutionStaff:"InstitutionStaff/insertInstitutionStaff",
            insterRiskSetUp:"InstitutionRiskSetUp/insterRiskSetUp",
            updateRiskSetUp:"InstitutionRiskSetUp/updateRiskSetUp",
            //修改管理员密码
            updateInstitutionStaff:"InstitutionStaff/updateInstitutionStaff",
            //删除管理员
            
            //--商户管理
            //商户列表
            getMerchantInfoList:"MerchantInfo/getMerchantInfoList",
            //状态的更改三合一接口
            updateMerchantStatus:"MerchantInfo/updateMerchantStatus",
            // 操作接口：
            //登录（登录标识）
            //支付通道设置
             //获取商户通道
            getMerchantTD:"MerchantInfo/getMerchantTD",
            //获取机构通道
            getShopOfficial:"MerchantInfo/getOfficial",
            //更新通道信息
            updateMpType:"MerchantInfo/updateMpType",
            //子账户列表
            getMerchantBA:"MerchantInfo/getMerchantBA",
            //操作
            operationSub:"MerchantInfo/operationSub",
            //添加子账户
            insertInstitutionSub:"InstitutionSubaccount/insertInstitutionSub",
            //风控设置
            getMerRiskSetUp:"MerchantInfo/getMerRiskSetUp",
            updateMerRiskSetUp:"MerchantInfo/updateMerRiskSetUp",
            //费率设置
            getMerchantRate:"MerchantInfo/getMerchantRate",
            //费率修改
            updateMerchantRate:"MerchantInfo/updateMerchantRate",
            //密码设置
            //编辑商户信息
            updateMerchantInfo:"MerchantInfo/updateMerchantInfo",
            //商户秘钥
            //编辑商户秘钥
            updateMerchantKeys:"MerchantInfo/updateMerchantKeys",
            //删除商户

            //添加商户
            insertMerchantRegisterInfo:"MerchantRegister/insertMerchantRegisterInfo",
            
            //风控设置
            getRiskSetUp:"InstitutionRiskSetUp/getRiskSetUp",
            //登录记录
            getMerchantLoginLog:'MerchantLoginLog/getMerchantLoginLog',
            //商户操作日志，列表
            getMerchantOperationLog:"MerchantOperationLog/getMerchantOperationLog",

            //--代理设置
            getAgentRegisterlist:"AgentRegister/getAgentRegisterlist",
            updateAgentRegister:"AgentRegister/updateAgentRegister",
            /*代理列表
            
            操作接口：
            登录(登录方法？)
            费率查询与修改
            密码修改接口
            编辑接口
            删除代理接口
            
            */
            //获取费率
            getAgentRate:"AgentRegister/getAgentRate",
            //修改费率
            updateAgentRate:"AgentRegister/updateAgentRate",
            //添加代理接口
            insertAgentRegister:"AgentRegister/insertAgentRegister",
            //代理账单
            getAgentLocal:"AgentRegister/getAgentLocal",
            //--全部订单
            getTransactionReceiptList:"TransactionReceipt/getTransactionReceiptList",
            //获取机构下所有通道
            getPassageList:"InstitutionOfficial/getPassageList",
            //全部订单查询
            //列表操作接口：查看、同步
            //成功订单、未支付订单、异常订单同上


            //--通道管理
            //风控实况列表接口
            getSubaccountRiskManagementList:"subaccountRiskManagement/getSubaccountRiskManagementList",
            //通道管理列表查询
            //操作：通道状态的改变接口
            //编辑通道风控
            updateRisk:"InstitutionOfficial/updateRisk",
            //子账号接口
            //查询子商户
            getInstitutionSub:"InstitutionSubaccount/getInstitutionSub",
            //添加子账户
           insertInstitutionSub:"InstitutionSubaccount/insertInstitutionSub",
           //模糊查询
           getMerchantNumberlist:"InstitutionSubaccount/getMerchantNumberlist",
           //编辑子账号
           updateInstitutionSub:"InstitutionSubaccount/updateInstitutionSub",
            //子账号风控编辑接口
            updateInstitutionSubRisk:"InstitutionSubaccount/updateInstitutionSubRisk",
            //查询进件费率
            getChannelRate:"InstitutionOfficial/getChannelRate",
            //设置进件费率
            insertChannelRate:"InstitutionOfficial/insertChannelRate",
            //获取子账户风控
            getgetSubacSrk:"InstitutionSubaccount/getgetSubacSrk",
            //产品接口
            getRate:"InstitutionOfficial/getRate",
            //修改产品
            updateRate:"InstitutionOfficial/updateRate",
            //插入通道产品集合
            insertProduct:"InstitutionOfficial/insertProduct",
            //获取通道详细信息(wechat,alipay)
            getGFOfficial:"InstitutionOfficial/getGFOfficial",
            //编辑接口(wechat,alipay)
            updateGFInstitutionOfficial:"InstitutionOfficial/updateGFInstitutionOfficial",
            //查询第三方通道
            getThirdpartyOfficial:"InstitutionOfficial/getThirdpartyOfficial",
            //编辑第三方通道
            updateThirdpartyOfficial:"InstitutionOfficial/updateThirdpartyOfficial",
            //删除接口
            updateType:"InstitutionOfficial/updateType",

            
            //通道配置接口
            //通道列表
            getOfficial:"InstitutionOfficial/getOfficial",
            //添加官方通道(微信)
            insertWXOfficial:"InstitutionOfficial/insertWXOfficial",
            //查询官方通道(微信)
            getWXOfficial:"InstitutionOfficial/getWXOfficial",
            //更新支付宝
            updateWeChat:"InstitutionOfficial/updateWeChat",
            //添加官方通道(支付宝)
            insertZFBOfficial:"InstitutionOfficial/insertZFBOfficial",
            //查询官方通道(支付宝)
            getZFBOfficial:"InstitutionOfficial/getZFBOfficial",
            //更新支付宝通道
            updateAlipay:"InstitutionOfficial/updateAlipay",
            //添加第三方通道
            insertThirdpartyTD:"InstitutionOfficial/insertThirdpartyTD",
            //--广告管理
            insertInstitutionAdvertisement:"InstitutionAdvertisement/insertInstitutionAdvertisement",
             //广告列表"
            getInstitutionAdvertisementList:"InstitutionAdvertisement/getInstitutionAdvertisementList",
            //广告列表操作：
            //状态的开/关
            updateInstitutionAdvertisementState:"InstitutionAdvertisement/updateInstitutionAdvertisementState",
            //编辑接口
            updateInstitutionAdvertisement:"InstitutionAdvertisement/updateInstitutionAdvertisement",
            //删除接口
            delInstitutionAdvertisementState:"InstitutionAdvertisement/delInstitutionAdvertisementState",
            


            //代理商结算审核
            getException:"Withdrawal/getException",
            //查看代理商结算账单
            GetSettlement:"Withdrawal/GetSettlement",
            //更新代理结算
            updateExType:"Withdrawal/updateExType",
            //--财务分析
            //查询当日统计
            //商户订单金额TOP10列表
            //商户订单笔数TOP10列表
            //商户订单成功率TOP10列表
            //查询30天交易订单概况折线图
            //查询时间间隔展现折线图
            //平台报表列表
            //列表操作：冲正接口
            //接口交易统计
            //查询支付通道接口
            //根据父级查询子级支付统计

        },
        //代理商后台
        Agent: {
            //首页
            selectAgOverview:"agTransactionstatisticsController/selectAgOverview",
            //订单管理
            //查询订单
            selectOrderList:"agOrderManngementController/selectOrderList",
            //商户
        	//查询商户信息
            getMerchantlist:"AgMerchant/getMerchantlist",
            //查询店铺
            getShoplist:"AgEquipment/getShoplist",
            //查询云喇叭和码牌
            getEquipmentlist:"AgEquipment/getEquipmentlist",
            //绑定码牌
           insertShopCode:"AgEquipment/insertShopCode",
           //绑定云喇叭
           insShopEquipment:"AgEquipment/insShopEquipment",
           //解绑二维码
           updateShopCode:"AgEquipment/updateShopCode",

            


            //销售
            //查询销售列表
            getSaleInfo:"saleManagement/getSaleInfo",
            //添加销售
            saleInsert:"saleManagement/insert",
            //销售编辑
            updateSale:"saleManagement/updateSale",

            //代理
            insertAgent:"AgManagement/insertAgent",
            //查询列表
            getAgent:"AgManagement/getAgent",
            //编辑代理
            modifyAgent:"AgManagement/modifyAgent",

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
            getCode:"AgEquipment/getCode",
            //生成二维码
            GenerateCode:"AgEquipment/GenerateCode",
            //下载
            setcode:"QRcode/setcode",
            //带背景down
            downservletImages:"QRcode/downservletImages",
            //当前页
            todownmyziliao:"QRcode/todownmyziliao",
            //下载所有未绑定
            todownziliao:"QRcode/todownziliao",


            //商户汇总
            selectMerchant:"agTransactionstatisticsController/selectMerchant",
            //门店汇总
            selectShop:"agTransactionstatisticsController/selectShop",

            //代理账单
            selectAgentBillList:"agBill/selectAgentBillList",
            selectDetailAgentBillList:"agBill/selectDetailAgentBillList",
        },
        //商户后台
        Merchant: {
            //交易数据
            getTransactionList: "transaction/getTransactionList",
            //交易数据--门店列表
            getShopNames: "transaction/getShopNames",
            //门店管理
            getShops: "store/getShops",
            //门店管理--添加门店
            addShop: "store/addShop",
            //门店管理--修改店铺
            modifyShop: "store/modifyShop",
            //店员管理
            getClerks: "clerk/getClerks",
            //店员管理--添加店员
            addClerk: "clerk/addClerk",
            //店员管理--修改店员
            modifyClerk: "clerk/modifyClerk",
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
            getShopBill: "bill/getShopBill",
            //账单管理--商户账单
            getMerchantBill: "bill/getMerchantBill",
            //数据统计
            getStatistics:"statistics/getStatistics",
        },
        //公共
        Public: {
            //省市区接口
            getAddress:"login/getAddress",
            //获取图片
            addPic:"photo/addPic",
        },
        
       
    }

};