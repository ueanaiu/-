# JS-Learning-log
//charAt() 返回下标位置上对应的字符
		var str = "abcd";
		console.log(str.charAt(2));
		//参数如果省略的话表示默认获取下标为0的位置所对应的字符
		console.log(str.charAt());
		
		//charCodeAt() 返回的是下标位置对应字符的Unicode编码
		console.log(str.charCodeAt(0));
		console.log(str.charCodeAt(1));
		console.log(str.charCodeAt(2));
		console.log(str.charCodeAt(3));
		
		var str = "123";
		console.log(str.charCodeAt(0));
		console.log(str.charCodeAt(1));
		console.log("a" > "b");
