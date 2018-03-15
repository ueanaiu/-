# JS-Learning-log
//1.JS通过style的形式只能获取到行间样式，以及设置样式
		//2.获取非行间样式
		//getComputedStyle(元素); 获取元素的计算后样式
		//ele.currentStyle[attr];
		var div = document.getElementById('div');
		console.log(window.getComputedStyle(div).width)
		console.log(window.getComputedStyle(div,null).borderWidth)
		
//		console.log(div.currentStyle)
