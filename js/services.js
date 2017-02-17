//这里统一管理service(服务)
angular.module('myApp')
	.factory('HomeService', [function () {
		var list = [
			{ friutId: 1001,img : 'http://img01.bqstatic.com//upload/activity/2016092415274759.png@90Q.png', name : '牛奶面包'},
			{ friutId: 1002,img : 'http://img01.bqstatic.com//upload/activity/2016092415272487.png@90Q.png', name : '饮料酒水'},
			{ friutId: 1003,img :  'http://img01.bqstatic.com//upload/activity/2016092415283782.png@90Q.png', name : '优选水果'},
			{ friutId: 1004,img :  'http://img01.bqstatic.com//upload/activity/2016092411075920.png@90Q.png', name : '更多'}


		];
		return {
			getUserList : function () {
				// 模拟获取用户列表数据
				return list;
			},
			getPageName : function () {
				//模拟获取页面名字数据
				return "我是首页";
			}
		}
	}])
	//获取用户信息的服务
	.factory('UserService', [function () {
		var list = [
			{ friutId: 1001,img : 'http://img01.bqstatic.com//upload/activity/2016092415274759.png@90Q.png',
				name : '牛奶面包',price:'￥15.8',brand:'爱鲜蜂',size:'12瓶/箱',production:'河南'},
			{ friutId: 1002,img : 'http://img01.bqstatic.com//upload/activity/2016092415272487.png@90Q.png',
				name : '饮料酒水',price:'￥45.8',brand:'爱鲜蜂',size:'6瓶/箱',production:'美国'},
			{ friutId: 1003,img :  'http://img01.bqstatic.com//upload/activity/2016092415283782.png@90Q.png',
				name : '优选水果',price:'￥12',brand:'爱鲜蜂',size:'12斤/箱',production:'江西'},
			{ friutId: 1004,img :  'http://img01.bqstatic.com//upload/activity/2016092411075920.png@90Q.png',
				name : '更多'}

		];
		return {
			//获取用户详情信息的接口
			getUserDetailInfo : function (friutId) {
				for (var friutObj of list) {
					if (friutObj.friutId == friutId) {
						return friutObj;
					}
				}
				return null;
			}
		}
	}])
	.factory('MarketService', [function () {
		var list = [
			{ productId: 1001,img : 'http://img01.bqstatic.com/upload/goods/201/609/1816/20160918161017_711297.jpg@355w_355h_90Q',
				name : '[次日达]禧美阿拉斯加狭鳕片500g',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1002,img : 'http://img01.bqstatic.com/upload/goods/201/602/2318/20160223184124_996942.jpg@355w_355h_90Q',
				name : '[次日达]美国进口红提',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1003,img : 'http://img01.bqstatic.com/upload/goods/201/601/2109/20160121090716_775172.jpg@355w_355h_90Q',
				name : '[次日达]佳沛新西兰金奇异果 16粒礼盒装',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1004,img : 'http://img01.bqstatic.com/upload/goods/201/601/1614/20160116141751_938501.jpg@355w_355h_90Q',
				name : '[次日达]海南青皮红心木瓜',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1005,img : 'http://img01.bqstatic.com/upload/goods/201/607/2817/20160728172416_543075.jpg@355w_355h_90Q',
				name : '[次日达]]平谷桃10粒',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1006,img : 'http://img01.bqstatic.com/upload/goods/201/608/2519/20160825190340_752416.jpg@355w_355h_90Q',
				name : '[次日达]泰国金枕头冻榴莲肉',price:'￥15.8',market_price: '￥28', specifics: "500g"},
			{ productId: 1007,img : 'http://img01.bqstatic.com/upload/goods/201/608/1716/20160817164638_577285.jpg@355w_355h_90Q',
				name : '[次日达]产地直供新疆无籽露葡萄',price:'￥15.8',market_price: '￥28', specifics: "500g"}
		];
		return {
			getUserList : function () {
				// 模拟获取用户列表数据
				return list;
			},
			getPageName : function () {
				//模拟获取页面名字数据
				return "我是首页";
			}
		}
	}])

.factory('HeService', [function () {
	var list = [
		{ productId: 1001,img : 'http://img01.bqstatic.com/upload/goods/201/609/1816/20160918161017_711297.jpg@355w_355h_90Q',
			name : '[次日达]禧美阿拉斯加狭鳕片500g',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1002,img : 'http://img01.bqstatic.com/upload/goods/201/602/2318/20160223184124_996942.jpg@355w_355h_90Q',
			name : '[次日达]美国进口红提',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1003,img : 'http://img01.bqstatic.com/upload/goods/201/601/2109/20160121090716_775172.jpg@355w_355h_90Q',
			name : '[次日达]佳沛新西兰金奇异果 16粒礼盒装',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1004,img : 'http://img01.bqstatic.com/upload/goods/201/601/1614/20160116141751_938501.jpg@355w_355h_90Q',
			name : '[次日达]海南青皮红心木瓜',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1005,img : 'http://img01.bqstatic.com/upload/goods/201/607/2817/20160728172416_543075.jpg@355w_355h_90Q',
			name : '[次日达]]平谷桃10粒',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1006,img : 'http://img01.bqstatic.com/upload/goods/201/608/2519/20160825190340_752416.jpg@355w_355h_90Q',
			name : '[次日达]泰国金枕头冻榴莲肉',price:'￥15.8',market_price: '￥28', specifics: "500g"},
		{ productId: 1007,img : 'http://img01.bqstatic.com/upload/goods/201/608/1716/20160817164638_577285.jpg@355w_355h_90Q',
			name : '[次日达]产地直供新疆无籽露葡萄',price:'￥15.8',market_price: '￥28', specifics: "500g"}
	];
	return {
		//获取用户详情信息的接口
		getUserMarketInfo : function (productId) {
			for (var productObj of list) {
				if (productObj.productId == productId) {
					return productObj;
				}
			}
			return null;
		}
	}
}]);