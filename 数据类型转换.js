# JS-Learning-log
/*
		 * 数据类型转换
		 * 1.隐式类型转换
		 * 2.强制类型转换
		*/
		
		//1.隐式类型转换
		var num1 = 10;  //number
		var str = "10"; //string
		
		console.log(typeof(num1 + ''));//string
		
		console.log(typeof(num1 + str));// "1010" string
		
		//数字 +字符串   得到字符串       + 在JS中还起到字符串拼接的作用
		
		var str1 = "hello";
		var str2 = "world";
		var str3 = str1 + str2;
		//console.log(str3);//"helloworld"
		
		console.log(typeof(+str));
		//+字符串  得到一个数字    +号相当于取正数
		
		//2.强制类型转换
		
		//转换为数字类型
		//1.parseInt():把值转换为整数
		//先查看0处位置的字符，判断它是否是一个有效的数字，如果是一个有效的数字，那么紧接着会查看1处位置的字符是不是数字，进行同样的测试。这个过程一直持续到不是数字的位置为止。如果一个数字都提取不到，那么最终结果会返回一个NaN(非数)
		console.log( parseInt('123abc'));
		console.log(parseInt('12.34'));
		console.log(parseInt('abc'));//NaN  not a number
		
		console.log(typeof NaN);//number 
		//NaN 属于number类型
		//NaN 比较特殊，它与所有的值都不相等，包括它自己
//		
//		console.log(1 == 1);
//		console.log(NaN == NaN);

		//2.parseFloat() 把值转换成浮点数（小数）
		//注意：在parseFloat转化的值中，第一个出现的.被看做是小数点，如果出现第二个点或者更多，那么从第二个点开始被看做是无效字符
		console.log(parseFloat("123abc"));//123
		console.log(parseFloat("12.34"));//12.34
		console.log(parseFloat("1.11abc"));//1.11
		console.log(parseFloat("11.22.33"));//11.22
		console.log(parseFloat('0102'));//102
		//字符串必须以十进制数字表示浮点数
		
//		console.log(parseInt(true));

		//toString() 把值转换为字符串
		var num = 234;
		var str = num.toString();
		console.log(str); //"234"
		console.log(typeof str); //string
		
		var bool = true;
		var str2 = bool.toString();
		console.log(str2);// 'true'
		console.log(typeof str2) //string
		
		//Number() 把值转换为数字类型
		//把值当做一个整体进行转换，而不是部分值.如果不行，那么返回NaN.如果这个值可以被完整转换，Number（）会进行判断到底是调用parseInt()还是parseFloat();
		var str = "hello";
		var num = Number(str);
		console.log(num);//NaN
		
		var str2 = "23abc";
		var num2 = Number(str2);
		console.log(num2);//NaN
		
		var str3 = "12.3";
		console.log(typeof Number(str3));
		var str4 = 4;
		console.log(Number(str4));
		
		//Boolean() 把值转换为布尔类型
		//非空即为真
		var str = "abc";
		console.log(Boolean(str));//true
		
		var str2 = ' ';
		console.log(Boolean(str2));
		
		var str3 = '';//空字符串
		console.log(Boolean(str3));//false 
		
		var num = 1;
		//"非零即为真"
		console.log(Boolean(num));//true
		console.log(Boolean(0));//false
		console.log(Boolean(-10));
		
		console.log(Boolean(undefined)); //false
		console.log(Boolean(null)); //false
		
		//String() 把给定的值转换为字符串
		console.log(typeof String(10));
		
