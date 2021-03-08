//prd  线上		cs 测试   渠通宇104
var Edition = 'qty1';
var server;
if (Edition == 'qty') {
	// server  = 'https://nb.51shanhe.com/shanhe-mechanism/'
	server = 'http://192.168.110.134:6005/shanhe-mechanism/'
	// server  = 'https://api.51shanhe.com/m-api/shanhe-mechanism/'
} else {
	server = 'http://192.168.110.250:6005/shanhe-admin/'
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
		//ApiRootUrl:'http://192.168.110.116:8080/IkkyuChegjtrack1/'
		ApiRootUrl: server
		// imgUrl:imgAdd
	},
	addressUrl: {
		// Login: {
		// 	// 获取验证码
		// 	createCode: "login/createCode",
		// 	// 登录
		// 	login: "login/loginJG",
		// 	//代理商登录
		// 	AgloginInfo: "login/AgloginInfo",
		// 	//退出
		// 	exitLogin: "login/exitLogin",
		// 	//自动登录
		// 	Automaticlist: "login/Automaticlist",
		// },
		Login: {
			// 获取验证码
			createCode: "login/createCode",
			// 登录
			login: "login/adminLogin",
			//退出
			adminLogOut: "login/adminLogOut",
			//自动登录
			automaticlist: "login/automaticlist",
		},
		//机构后台接口
		Mechanism: {
			//获取
			getInsRegInfo: "basicSetting/getInsRegInfo",
		},
		//总管理平台
		Shadmin: {
			//添加机构
			addBcrmIns: "bcrmIns/addBcrmIns",
			//查询机构列表
			getBcrmInsList: "bcrmIns/getBcrmInsList",
			//删除（启用禁用）或者更新密码机构信息
			delBcrmInsPass: "bcrmIns/delBcrmInsPass",
			//更新机构信息
			updateBcrmIns: "bcrmIns/updateBcrmIns",
			//查询admin管理员
			getBcrmUserList: "admin/getBcrmUserList",
			//添加admin管理员
			addBcrmUser: "admin/addBcrmUser",
			//更新管理员密码
			updateBcrmUserPs: "admin/updateBcrmUserPs",
			//删除管理员
			delBcrmUser: "admin/delBcrmUser",
			//获取所有代理商
			getAdminAgentList: "adminAg/getAdminAgentList",
			//代理商禁用启用
			agentEnableDisable: "inAgent/agentEnableDisable",
			//代理商修改密码
			updateAgentPassWord: "inAgent/updateAgentPassWord",
			//获取所有商户信息
			getAdminMerList: "adminMer/getAdminMerList",
			//成功订单和异常订单
			getSuOrderList: "inOrder/getSuOrderList",
			//退款订单
			getRefundTrade: "inOrder/getRefundTrade",
		},
		//公共
		Public: {
			//省市区接口
			getAddress: "login/getAddress",
			//获取图片
			addPic: "photo/addPic",
			//新的省市区接口
			getAreajson: "merchantRegister/getAreajson",
			//根据机构号获取费率
			getInfoRate: "login/getInfoRate",
			//查询支行
			selectBank: "merchantRegister/selectBank",
			//根据域名获取机构
			getSitePath: "login/getSitePath",
		},
	}
};
