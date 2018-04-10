js
		window.onload=function(){
			var first=document.getElementById("myfirst") //获取dom对象
			first.innerHTML="我要学好jquery";
			first.style.color="red";
			
//			document.getElementById("myfirst").innerHTML="我要学好jquery";
			
		}
		
//		jQuery
		$(function(){
			var $p=$("#mysec") //获取jq对象
			
//			链式表达式
			$p.html("我要学好jquery2").css("color","green");
			
//			$("#mysec").html("我要学好jquery2").css("color","green");
			
			
		})
