//			单击事件
			$(".kai").click(function(){
				$(".jiang").css("display","block")
				$(".jiang1").html("谢谢惠顾")
				
			})
			
//			鼠标移入 移出
			$(".yi").mouseenter(function(){
				$(this).css("background","#0000FF")
			}).mouseleave(function(){
				$(this).css("background","#8A2BE2")
			})
			
//			鼠标穿过 离开
			$(".chuan").mousemove(function(){
				$(this).css("background","green")
			}).mouseout(function(){
				$(this).css("background","goldenrod")
			})
			
//			鼠标按下 抬起
			$(".down").mousedown(function(){
				$(this).css("background","chartreuse")
			}).mouseup(function(){
				$(this).css("background","turquoise")
			})
			
//			鼠标移动事件
			$(".move").mousemove(function(){
				$(this).css("background","#00BFFF")
			})
			
//			hover事件
			$(".hover").hover(
				function(){ //鼠标移入执行的函数
					$(this).css("background","#0000FF")
				},
				function(){ //鼠标移出执行的函数
					$(this).css("background","green")
				}
			)
			
//			toggle 点击切换事件  可以多次切换
			$(".tog").toggle(
				
				function(){
					$(this).css("background","green")
				},
				function(){
					$(this).css("background","#0000FF")
				},
				function(){
					$(this).css("background","darkorange")
				}
				
			)
			
//			获取焦点 失去焦点
			$("input").focus(function(){ //获取焦点事件
				$(this).css("background","#7FFF00")
			}).blur(function(){ //失去焦点事件
				$(this).css("background","gold")
			})
			
//			窗口重置事件
			var x=0;
			$(window).resize(function(){
				$("span").html(x+=1);
			})

			
		})
