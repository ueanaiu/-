//		选择器：
//			元素选择器：
			$("p").css("color","red")
//			全局选择器
			$("*").css("background","blanchedalmond")
//			类选择器
			$(".lei").css("color","blue")
//			id选择器
			$("#id").css("color","darkorchid")
//			群组选择器
			$(".lei,#id").css("background","#7FFF00")
//			通过元素的所有类名选择
			$(".lei.active.active1").css("background","aqua")
		
//		jq 伪类选择器
//			第一个li
			$("li:first").css("color","green")
//			最后一个li
			$("li:last").css("color","red")
//			选择所有下标是偶数的li
			$("li:even").css("color","yellow")
//			选择所有下标是奇数的li
			$("li:odd").css("color","darkorchid")
//			通过下标选择
			$("li:eq(2)").css("color","blue")
//			选择大于指定下标的元素
			$("li:gt(3)").css("color","aqua")
//			选择小于指定下标的元素
			$("li:lt(3)").css("color","hotpink")
//			选择不包括指定元素之外的所有元素
			$("li:not(:eq(2))").css("background","goldenrod")
//			获取所有标题标签的选择器
			$(":header").css("color","#0000FF")
		})
