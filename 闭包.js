# JS-Learning-log
//闭包：在一个函数内部访问另外一个函数的变量
		
//		function fn1(){
//			var a = 0;
//			console.log(a++);
//		}
//		fn1();//0
//		fn1();//0
//		fn1();//0

//		function fn1(){
//			var a = 0;//局部变量
//			function fn2(){
//				console.log(a);
//				a + 1  //1
//			}
//			fn2();//0
//			fn2();//1
//			fn2();//2	
//		}
//		fn1();
		//当没有地方再用到变量a的时候，这个变量才会被释放掉
		
		//闭包
		function fn1(){
			var a = 0;
			return function fn2(){
				console.log(a++);
			}
//			 fn2();
//			 fn2();
		}
		var result = fn1();
		console.log(result);
		result();//0
		result();//1
		result();//2
		result();
		
		var num = 10;
		function test(){
			
		}
		
		
//		
//		var fn1 = function(){
//			console.log("fn1");
//		}
//		fn1();

		/*
		  	闭包的必要条件：
		  		1.一个函数中嵌套另外一个函数，并且被嵌套的函数访问了（使用了）父级函数的变量
		  		2.要将内部的函数作为父函数的返回值，返回出去
		  		
		  	闭包的作用：
		  		1.变量持久化
		  		2.防止变量名冲突
		  		3.闭包可以成为函数内部和函数外部的一个桥梁	
		*/
		//JS垃圾回收机制原理：垃圾收集器会定期找到那些不再继续使用的变量，然后释放其内存
