//主入口文件
//依赖于路由和css两个模块
angular.module('myApp',['ui.router','angularCSS'])
	//run方法，是在模块加载的时候初始化一些功能
	.run(['$window', '$rootScope' , function ($window, $rootScope) {
		//$window 相当于原生的window对象
		//$rootScope 全局作用域，用于存储全局变量，在任何地方都可以使用
		/*
		 * $rootScope.$on 可以监听一些事件，在这里监听的是浏览器地址的变化
		 * $locationChangeSuccess 浏览器地址变化成功后处理的逻辑
		 */
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 intrgral（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf('integral') != -1
				||$window.location.href.indexOf('order') != -1
				||$window.location.href.indexOf('crazyKill')!=-1
				||$window.location.href.indexOf('detail')!=-1
				||$window.location.href.indexOf('pay')!=-1)
			{
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])
	.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url : '/home',
				templateUrl :'./view/home.html',
				controller : 'HomeCtrl as homeCtrl'
			})
			.state('market',{
				url : '/market',
				templateUrl :'./view/market.html',
				controller : 'MarketCtrl as marketCtrl'

			})
			.state('cart',{
				url : '/cart/:productId',
				templateUrl :'./view/cart.html',
				controller : 'CartCtrl as cartCtrl'

			})
			.state('mine',{
				url : '/mine',
				templateUrl :'./view/mine.html',
				controller : 'MineCtrl as MineCtrl'
			})

		.state('integral', {
			url :'/integral',
			templateUrl : './view/integral.html',
			controller : 'IntegralCtrl as integralCtrl'
		})
		.state('order', {
			url :'/order',
			templateUrl : './view/order.html',
			controller : 'OrderCtrl as orderCtrl'
		})
		.state('crazyKill', {
			url :'/crazyKill',
			templateUrl : './view/crazyKill.html',
			controller : 'CrazyKillCtrl as crazyKillCtrl'
		})

		//详情
		.state('detail', {
			url :'/detail/:friutId',
			templateUrl : './view/detail.html',
			controller : 'DetailCtrl as detailCtrl'
		})
		.state('pay', {
			url :'/pay',
			templateUrl : './view/pay.html',
			controller : 'PayCtrl as payCtrl'
		})

	}]);
	
