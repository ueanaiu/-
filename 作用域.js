# JS-Learning-log
/*
		 * 作用域：变量起作用的范围
		 * 全局变量的作用域，整个JS文件
		 * 局部变量的作用域：定义（声明）这个变量的函数的内部
		 */
		
		console.log(num);//undefined
		var num = 10;
		console.log(num);//10
		
		function fn1(){
			console.log(num);//10
		}
		fn1();
		
		function fn2(){
			var str = "hello world";
			//console.log(str);
			function fn3(){
				console.log(str);
			}
			fn3();
		}
		fn2();
		//console.log(str);//报错
		
		//当发生函数嵌套的时候，父函数内部的变量是可以在子函数内部被访问的
		
		/*
		 	作用域链：相同的变量名，会产生一个作用域链，访问的时候，首先找到本层（函数）是否有访问的变量；如果没有，会从父级函数内部找...最终找到全局变量
		*/
		
		var num = "10";//全局变量
		function scope(){
			var num = "20";
			function second(){//var num
				console.log(num);//undefined
				var num = "30";
				console.log(num);//30
			}
			
			function third(){
				console.log(num);//20
			}
			second();
			third();
			console.log(num);//20
		}
		scope();
		console.log(num);//10 全局变量
