//prd  线上		cs 测试   渠通宇104
var Edition = 'lsl';
var server;
if (Edition == 'lsl') {
	server = 'https://easy-mock.com/mock/5be8d89ba5f5e073df414199/example/'
} else {
	server = 'http://192.168.1.113:5002/'
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
		ApiRootUrl: server
		// imgUrl:imgAdd
	},
	addressUrl: {
		//会员
		Vip: {
			//会员列表
			cardList: "cardList",
			//充值统计列表
			recList: "recList",
		},
		//公共
		Public: {
			getAddress: "login/getAddress",
		},
	}
};
