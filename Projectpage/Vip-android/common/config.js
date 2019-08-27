//prd  线上		cs 测试   渠通宇104
var Edition = 'prd';
// var Edition = 'zyh';
var server;
if (Edition == 'qty') {
	server = 'http://192.168.1.167:6007/shanhe-merchant/'
} else if (Edition == 'prd') {
	server = 'https://nb.51shanhe.com/shanhe-merchant/'
} else if (Edition == 'zyh') {
	server = 'http://192.168.1.66:80/shanhe-member/'
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
		// ApiRootUrlMeb: 'http://192.168.1.66:6019/p-member/',
		ApiRootUrlMeb: 'http://api.51shanhe.com/p-member/',
		ApiRootUrl: server
		// imgUrl:imgAdd
	},
	addressUrl: {
		Login: {
			// 获取验证码
			createCode: "login/createCode",
			// 登录
			login: "login/login",
			//代理商登录
			AgloginInfo: "login/AgloginInfo",
			//退出
			exitLogin: "login/loginOut",
			//自动登录
			Automaticlist: "login/automaticLogin",
		},
		// 会员卡
		Card: {
			// 获取会员卡分享链接
			shareCard: "card/shareCard",
		},

		// 商户会员
		Mervip: {
			// 上传图片
			uploadImg: "cardManage/uploadImg",

			// 商户会员卡
			// 添加会员卡
			addCard: "cardManage/addCard",
			// 查询商户会员卡模板
			getCard: "cardManage/getCard",
			// 修改商户会员卡
			updateCard: "cardManage/updateCard",

			// 微信会员卡
			// 添加微信会员卡
			addWCard: "wechat/addCard",
			// 查询商户微信会员卡
			getWCard: "wechat/getCard",
			// 修改微信会员卡
			updateWCard: "wechat/updateCard",

			// 分享海报
			// 查询分享海报
			getPoster: "cardManage/getPoster",
			// 添加分享海报
			addPoster: "cardManage/addPoster",
			// 修改分享海报
			updatePoster: "cardManage/updatePoster",
			// 启用禁用分享海报
			setPosterEnabled: "cardManage/setPosterEnabled",

			// 等级
			// 等级-添加会员等级
			addGrade: "memberGrade/addGrade",
			// 等级-查询会员等级列表
			getGrades: "memberGrade/getGrades",
			// 等级-查询等级详情
			getGradeDetails: "memberGrade/getGradeDetails",
			// 等级-修改会员等级
			updateGrade: "memberGrade/updateGrade",
			// 等级-删除等级
			deleteGrade: "memberGrade/deleteGrade",

			// 充值设置
			// 充值-添加充值设置
			addSet: "rechargeSet/addSet",
			// 充值-查询充值设置列表
			getSets: "rechargeSet/getSets",
			// 充值-启用禁用设置
			updateEnabled: "rechargeSet/updateEnabled",
			// 充值-查询充值设置详情
			getSetDetails: "rechargeSet/getSetDetails",
			// 充值-更新充值设置
			updateSet: "rechargeSet/updateSet",
			// 充值-删除充值设置
			deleteSet: "rechargeSet/deleteSet",

			// 消费设置
			// 消费-查询消费记录
			getRecord: "consumption/getRecord",
			// 消费-查询消费汇总
			consumption: "census/consumption",

			// 折扣设置
			// 折扣-添加折扣设置
			addZSet: "discountSet/addSet",
			// 折扣-查询折扣设置列表
			getZSets: "discountSet/getSets",
			// 折扣-查询折扣设置详情
			getZSetDetails: "discountSet/getSetDetails",
			// 折扣-启用禁用设置
			updateZEnabled: "discountSet/updateEnabled",
			// 折扣-删除折扣设置
			deleteZSet: "discountSet/deleteSet",
			// 折扣-修改折扣设置
			updateZSet: "discountSet/updateSet",

			// 渠道设置
			// 渠道-添加投放渠道
			addChannel: "delivery/addChannel",
			// 渠道-查询投放渠道列表
			getChannels: "delivery/getChannels",
			// 查询投放渠道详情
			getChannelDetails: "delivery/getChannelDetails",
			// 渠道-删除投放渠道
			deleteChannel: "delivery/deleteChannel",

			// 推荐设置
			// 推荐-添加推荐设置
			addRecommend: "recommend/addRecommend",
			// 推荐-查询推荐设置
			getRecommend: "recommend/getRecommend",
			// 推荐-更新推荐设置
			updateRecommend: "recommend/updateRecommend",

			// 会员列表
			// 查询会员列表
			getMembers: "memberManage/getMembers",
			// 查询会员详情
			getMemDetails: "memberManage/getMemDetails",
			// 修改会员数据
			updateMemInfo: "memberManage/updateMemInfo",
			// 删除会员
			deleteMember: "memberManage/deleteMember",
			// 查询资金变动
			getCapitals: "memberManage/getCapitals",

			// 流水明细
			// 查询充值流水
			getTurnovers: "turnover/getTurnovers",
			// 查询退款流水
			getRefundTurnovers: "turnover/getRefundTurnovers",
			// 查询退卡流水
			getRefcardTurs: "turnover/getRefcardTurs",
			// 查询积分流水
			getIntegralTurs: "turnover/getIntegralTurs",
			// 查询消费流水
			getConTurnovers: "turnover/getConTurnovers",

			// 营销活动
			// 添加营销活动
			addActivity: "activity/addActivity",
			// 查询营销列表
			getActivitys: "activity/getActivitys",
			// 删除营销活动
			deleteActivity: "activity/deleteActivity",
			// 编辑营销活动
			updateActivity: "activity/updateActivity",

			// 充值统计
			getRecahrge: "censusManage/getRecahrge",
			// 销售统计
			getConsum: "censusManage/getConsum",
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
			enableShop: "shop/enableShop",
			//编辑
			modifyShop: "shop/updateShop",
			//删除
			deleteShop: "shop/deleteShop",
			//店员管理
			getClerks: "clerk/getClerks",
			//店员管理--添加店员
			addClerk: "clerk/addClerker",
			//店员管理--修改店员
			//编辑店员
			updateClerker: "clerk/updateClerker",
			//更改店员状态
			modifyClerk: "clerk/updateClerkerStatus",
			//更改店员角色
			updateClerkerType: "clerk/updateClerkerType",
			//删除店员
			deleteClerker: "clerk/deleteClerker",
			//退款权限
			updateClerkerAuthority: "clerk/updateClerkerAuthority",
			//修改店员密码
			updateClerkerPassword: "clerk/updateClerkerPassword",
			//店员管理--设备管理
			getEquipments: "equipment/getEquipments",
			//广告管理
			getadvertlist: "advert/getadvertlist",
			//广告管理--添加
			addAdvert: "advert/addAdvert",
			//广告管理--修改
			modifyAdvert: "advert/modifyAdvert",
			//广告管理--删除
			deleteAdvert: "advert/deleteAdvert",
			//广告管理--状态
			modifyAdvertState: "advert/modifyAdvertState",
			//账单管理--门店账单
			getShopBill: "shopBill/getShopBill",
			//账单管理--商户账单
			getMerchantBill: "merchantBill/getMerchantBill",
			//交易数据统计
			getStatistics: "statistics/getTransactionStatistics",
			//店员统计
			getClerkStatistics: 'statistics/getClerkStatistics',
			//获取商户总的交易汇总
			getMerBatchInSum: "homePage/getMerBatchInSum",
			//查询所有店员
			getClerkList: "statistics/getClerkList",
			//获取机构信息
			getInsInfo: "login/getInsInfo",
			//下载单二维码
			setcode: "equipment/getCode",
			//下载带背景二维码
			downservletImages: "equipment/downservletImages",
			//查询机构二维码设置
			getInstitutionQrcade: "clerk/getInsQrcode",
			//导出订单报表
			getTransactionExcel: "homePage/getTransactionExcel",
			//导出商户账单
			getMerchantBillExcel: "merchantBill/getMerchantBillExcel",
			//导出门店账单
			getShopBillExcel: "shopBill/getShopBillExcel",
		},
		//公共
		Public: {
			//省市区接口
			getAddress: "login/getAddress",
			//获取图片
			addPic: "photo/addPic",
			//新的省市区接口
			getAreajson: "shop/getAreajson",
			//根据机构号获取费率
			getInfoRate: "login/getInfoRate",
			//查询支行
			selectBank: "merchantRegister/selectBank",
			//根据域名获取机构
			getSitePath: "login/getSitePath",
		},


	}

};
