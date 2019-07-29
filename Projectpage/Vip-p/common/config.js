//prd  线上		cs 测试   渠通宇104
var Edition = 'lsl1';
var server;
if (Edition == 'lsl') {
	server = 'https://easy-mock.com/mock/5be8d89ba5f5e073df414199/example/'
} else {
	server = 'http://192.168.1.66:80/'
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
		Member: {
			// 查询会员列表
			getMembers: "member/getMembers",
			// 查询会员详情
			getMemDetails: "member/getMemDetails",
			//充值统计列表
			//充值统计列表
			// 查询会员汇总
			getMemSummary:"member/getMemSummary",
			// 修改会员信息
			updateMemInfo:"member/updateMemInfo",
		},
		// 会员卡背景列表
		Server: {
			//会员卡背景列表
			getImages: "server/getImages",
		},
		// 会员卡接口列表
		Card: {
			//查询会员卡列表
			getCards: "card/getCards",
			// 添加会员卡
			addCard: "card/addCard",
			// 查询会员详情
			getCardDetails: "card/getCardDetails",
			// 获取会员卡分享链接
			shareCard: "card/shareCard",
			// 删除会员卡
			removeCard:"card/removeCard",
		},
		//公共
		Public: {
			getAddress: "login/getAddress",
		},
	}
};
