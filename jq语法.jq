原生js  
		window.onload=function(){  //页面文档加载完后执行
			var oDiv=document.getElementsByTagName("div")[0];
			oDiv.innerHTML="Helloworld";
		}
		
		
		jQuery  语法$(selector).action()
		$(document).ready(function(){ //DOM元素加载后就执行
			$("div").html("Helloworld")
		})
		$(function(){
			$("div").html("Helloworld")
		})

		$(document).ready()  的简写  $()
