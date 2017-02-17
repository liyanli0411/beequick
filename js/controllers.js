//注意：这里angular.module('myApp') 第二个参数依赖去掉 
angular.module('myApp')
	//依赖注入$css（这个是angularCSS这个插件中的服务）
	.controller('HomeCtrl', ['$css', 'HomeService','$scope', '$http', function ($css, HomeService,$scope,$http) {
		//引入CSS，路径都是相对于index.html
		$css.add('./css/home.css');
		var self = this;
		//调用服务中的方法
		//self.pageName = HomeService.getPageName();
		//获取用户列表的方法
		self.list = HomeService.getUserList();
		self.getUserList = function () {
			//console.log("-------------");
			//调用服务中的获取数据的方法
			return HomeService.getUserList();
			var arr = HomeService.getUserList();
			//console.log(arr);
			return arr;
		}
//轮播图
		var swiper = new Swiper('.swiper-container', {
			autoplay : 2000,
			slidesPerView: 'auto',
			paginationClickable: true,
			//pagination: '.swiper-pagination',
			spaceBetween: 30,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true,
		});

		$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php")
			.success(function (response) {
				$scope.slides = response.data.slide;
				$scope.menus = response.data.menu;
			});

		
	}])
	//$location是一个内置服务，可以获取地址、跳转路由等功能
	.controller('MarketCtrl', ['$css','MarketService','$location','$scope','$http', function ($css,MarketService,$location,$scope, $http) {
		$css.add('./css/market.css');
		var self = this;
		self.list = MarketService.getUserList();
		self.getUserList = function () {
			//console.log("-------------");
			//调用服务中的获取数据的方法
			return MarketService.getUserList();
			var arr = MarketService.getUserList();
			//console.log(arr);
			return arr;
		};

		//function reset(){
		//$http.get("http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php")
		//	.success(function (response) {
		//		$scope.lists = response.product;
		//	});
		//}
		//reset();
		////jQuery实现点击左边有变化 数据重新请求
		$(".left li").on("click",function(){
			$(this).siblings().css("borderLeft","none");
			$(this).css("borderLeft","3px solid #FFD600");
		//	$(".right li:gt(0)").remove();
		//	reset();
		});





}])
	.controller('CartCtrl', ['$css','HeService','$stateParams',function ($css,HeService,$stateParams) {
		$css.add('./css/cart.css');

		//$routeParams 可以获取到通过路由传过来的所有参数，我们可以通过点
		//语法获取相应的参数
		var self = this;
		//self.name = $routeParams.name;
		//self.age = $routeParams.age;
		self.product = HeService.getUserMarketInfo($stateParams.productId);

		var addI=document.querySelector(".addInner");
		var allPrice=document.querySelector(".allPrice");
		allPrice.innerHTML="￥"+15.8;
		$(".addList").on("click",function(){
			console.log($(".addList"));

			//$('.addInner').html(1);
			//$('.addInner').html()+1;
			addI.innerHTML++;
			allPrice.innerHTML='￥'+parseInt(addI.innerHTML*15.8*10)/10;
		});
		$(".addLow").on("click",function(){
			addI.innerHTML--;
			allPrice.innerHTML='￥'+parseInt(addI.innerHTML*15.8*10)/10;
		});



	}])
	.controller('MineCtrl', ['$css',function ($css) {
		$css.add('./css/mine.css');
		var self = this;

	}])
	.controller('IntegralCtrl', ['$css','$location',function ($css,$location) {
		$css.add('./css/integral.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('mine');
		};
		//   画布
		var canvas = document.querySelector("canvas");
		var ctx= canvas.getContext("2d");
		var i=0;
		//var time = setInterval(rotate,15);
		rotate();
		function rotate(){
			ctx.save();
			ctx.translate(70,70);
			ctx.rotate((Math.PI/180)*i);
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(0,-55);
			ctx.lineWidth = 15;
			ctx.strokeStyle = "#c7c7c7";
			ctx.stroke();
			ctx.strokeStyle = "#ddd";
			ctx.beginPath();
			ctx.moveTo(0,-55);
			ctx.lineTo(0,-70);
			ctx.stroke();
			ctx.restore();
			i+=10;
			//if(i>360){clearInterval(time)}
			requestAnimationFrame(rotate);
		}


	}])
	.controller('OrderCtrl', ['$css','$location',function ($css,$location) {
		$css.add('./css/order.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('mine');
		}
	}])
	.controller('CrazyKillCtrl', ['$css','$location',function ($css,$location) {
		$css.add('./css/crazyKill.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		};
		//倒计时
		var intDiff = parseInt(120);//倒计时总秒数量
		function timer(intDiff){
			window.setInterval(function(){
				var day=0,
					hour=0,
					minute=0,
					second=0;//时间默认值
				if(intDiff > 0){
					day = Math.floor(intDiff / (60 * 60 * 24));
					hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
					minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
					second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				}
				if (hour <= 9) hour = '0' + hour;
				if (minute <= 9) minute = '0' + minute;
				if (second <= 9) second = '0' + second;
				$('.numList').html(hour+':'+minute+':'+second)

				//$('#day_show').html(day+"天");s
				//$('#hour_show').html('<s id="h"></s>'+hour+'时');
				//$('#minute_show').html('<s></s>'+minute+'分');
				//$('#second_show').html('<s></s>'+second+'秒');
				intDiff--;
			}, 1000);
		}
		$(function(){
			timer(intDiff);
		});



	}])
	//详情
	.controller('DetailCtrl', ['$css','UserService', '$stateParams','$location', function ($css,UserService,$stateParams,$location) {
		$css.add('./css/detail.css');
		var self = this;
//		$routeParams.personId
//		去服务（后台）查询个性详情页面
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		}
		self.friut = UserService.getUserDetailInfo($stateParams.friutId);
	}])
	.controller('PayCtrl', ['$css','$location',function ($css,$location) {
		$css.add('./css/pay.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('mine');
		}

		$('#paylist').on('click', function(e){
			FUQIANLA.init({
				'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
				'merchId': 'm1604080001', //商户号
				'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
				'channel': 'ali_pay_wap,wx_pay_pub,bd_pay_wap,jd_pay_wap,yb_pay_wap', //开通的通道简称
				'amount': '0.01', //支付金额
				'subject': 'h5测试数据', //商品标题
				'notifyUrl': 'http://fuqian.la', //异步支付结果通知地址
				'extra':{
					'wx_pay_pub': {
						'openid': 'wx123sdfaf'
					},
					'jd_pay_wap': {
						'return_url': 'http://fuqian.la'
					},
					'yb_pay_wap': {
						'productcatalog': 30,
						'identityid': '18612889999'
					}
				}
			});
		});

		$('#wx').on('click', function(e){
			FUQIANLA.init({
				'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
				'merchId': 'm1604080001', //商户号
				'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
				'channel': 'wx_pay_pub', //开通的通道简称
				'amount': '0.01', //支付金额
				'subject': 'h5测试数据', //商品标题
				'notifyUrl': 'http://fuqian.la', //异步支付结果通知地址
				'extra':{
					'openid': 'wx123sdfaf'
				}
			});
		});

		$('#alipay').on('click', function(e){
			FUQIANLA.init({
				'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
				'merchId': 'm1604080001', //商户号
				'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
				'channel': 'ali_pay_wap', //开通的通道简称
				'amount': '0.01', //支付金额
				'subject': 'h5测试数据', //商品标题
				'notifyUrl': 'http://fuqian.la' //异步支付结果通知地址
			});
		});

	}])
