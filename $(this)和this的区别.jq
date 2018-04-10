$(function(){
			$("div").click(function(){
				$(this).css("background","red")
				console.log(this)  //DOM元素 html元素
				console.log($(this)) //jq对象  拥有js封装好的所有属性和方法
			})
		})
