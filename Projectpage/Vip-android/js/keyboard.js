Zepto(function($){
			$('.money1').click(function(event){
				$('#paymoney').addClass('heighLight')
				$('#discount').removeClass('heighLight');
				$('table').removeClass('none');
			});
			//绑定键盘输入事件
			$('#paymoney').one('touchend',keyborad($('#paymoney')));

			
			$('.money2').click(function(event){
				$('#paymoney').removeClass('heighLight');
				$('#discount').addClass('heighLight');
				$('#paymoney').off('touchend');
				console.log($('#paymoney').off('touchend'))
				
				// $('#paymoney').one('touchend',keyborad());
				$('table').removeClass('none');
				
			});
			//绑定键盘输入事件
			$('#discount').one('touchend',keyborad($('#discount')));

			//获取焦点和去除money1的光标
			$('.money2').click(function(){
				$('#paymoney').removeClass('heighLight');
			});

			$('.remark-btn').click(function(){
				$('#paymoney').removeClass('heighLight');
				$('#discount').removeClass('heighLight');
				$('table').addClass('none');
			});
			//点击备注隐藏虚拟键盘和虚拟input的高亮
			$('.remarkShow').on('touchend',function(){
				$('#paymoney').removeClass('heighLight');
				$('#discount').removeClass('heighLight');
				$('table').addClass('none');
			});

			// 	$('#money2').blur(function(){
			// 		// console.log('blur');
			// 		$('table').removeClass('none');
			// })
			if (!$('#paymoney').text()) {
					$('.pay').addClass('pay-disabled');
			}
			//虚拟键盘的完成事件
			$('.pay').on('touchend',function(){
				$('table').addClass('none');
			})
	
});
function keyborad(item){
	//遍历数字按钮
	let $paymoney = item;
			$(".paynum").each(function(){
					$(this).on('touchend',function(e){
						// console.log($(this).text());
						e.preventDefault();
						if(($paymoney.text()).indexOf(".") != -1 && ($paymoney.text()).substring(($paymoney.text()).indexOf(".") + 1, ($paymoney.text()).length).length == 2){
							return;
						}
						if($.trim($paymoney.text()) == "0"){

							return;
						}
						if (parseInt($paymoney.text()) > 10000 && $paymoney.text().indexOf(".") == -1) {
							return;
						}
						if($('#paymoney').text()){
							$('.pay').removeClass('pay-disabled');
							app.$data.moneys = true;
							//有金额时按钮显示正常颜色
							document.querySelector('.submit').style.opacity = 1;
						}
						
						// console.log($paymoney)
						// console.log($('.heighLight').attr('class'));
						//根据光标判断写在那个虚拟的input
						if($paymoney.attr('class') === $('.heighLight').attr('class')){
							console.log($paymoney.attr('id') == 'paymoney')
							//判断是不是订单金额label
							if($paymoney.attr('id') == 'paymoney'){
								app.$data.money = $paymoney.text() + $(this).text();
							}
							$paymoney.text($paymoney.text() + $(this).text());
						}
						
					});
				});
				//删除金额按钮
				$("#pay-return").on('touchend',function(e){
					//根据光标判断写在那个虚拟的input
					if($paymoney.attr('class') === $('.heighLight').attr('class')){
							// console.log("!!!!")
							if($paymoney.attr('id') == 'paymoney'){
								app.$data.money =($paymoney.text()).substring(0, ($paymoney.text()).length - 1)
							}
							$paymoney.text(($paymoney.text()).substring(0, ($paymoney.text()).length - 1));
						}
					// $paymoney.text(($paymoney.text()).substring(0, ($paymoney.text()).length - 1));
					if (!$('#paymoney').text()) {
						//没有金额时 按钮显示为灰色
						$('.pay').addClass('pay-disabled');
						app.$data.moneys = false;
						document.querySelector('.submit').style.opacity = 0.5;


					}
					//判断是不是订单金额label
					if($paymoney.attr('id') == 'paymoney'){
						
					}
					e.preventDefault();
				});
				//0按钮
				$("#pay-zero").on('touchend',function(e){
					e.preventDefault();
					if(($paymoney.text()).indexOf(".") != -1 && ($paymoney.text()).substring(($paymoney.text()).indexOf(".") + 1, ($paymoney.text()).length).length == 2){
						return;
					}
					if($.trim($paymoney.text()) == "0"){
						return;
					}
					if (parseInt($paymoney.text()) > 10000 && $paymoney.text().indexOf(".") == -1) {
						return;
					}
					//根据光标判断写在那个虚拟的input
					if($paymoney.attr('class') === $('.heighLight').attr('class')){
							//判断是不是订单金额label
							if($paymoney.attr('id') == 'paymoney'){
								app.$data.money = $paymoney.text() + $(this).text();
							}
							$paymoney.text($paymoney.text() + $(this).text());
						}
				});
				$("#pay-float").on('touchend',function(e){
					e.preventDefault();
					if($.trim($paymoney.text()) == ""){
						return;
					}
					if(($paymoney.text()).indexOf(".") != -1){
						return;
					}
					if(($paymoney.text()).indexOf(".") != -1){
						return;
					}
					//根据光标判断写在那个虚拟的input
					if($paymoney.attr('class') === $('.heighLight').attr('class')){
							//判断是不是订单金额label
							if($paymoney.attr('id') == 'paymoney'){
								app.$data.money = $paymoney.text() + $(this).text();
							}
							$paymoney.text($paymoney.text() + $(this).text());
						}
				});
}
	
