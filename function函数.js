# JS-Learning-log

<script>
	/*
		1.函数：具有特定功能的代码片段
		2.函数可以分为命名函数和匿名函数
		3. function fnName(){
			//代码
		}
		函数的基本要素
		1.要用function关键字定义
		2.要有对应的函数名（匿名函数除外）
		3.函数只有调用才会执行，函数的调用形式：函数名()
		4.函数的返回值需要使用return关键字，返回的内容写在return之后
		注意：1.函数有默认返回值，默认返回值为undefined
		2.return 之后的代码都不会再执行
	*/
	//命名函数
	function sayHello(){
		alert("hello,today is wes!");
	}
	//函数调用：函数名()
	//sayHello()

	//匿名函数
//		btn.onclick = function(){
//			
//		}

	function fn1(){
		console.log("你好");
	}
//		fn1();
//		fn1();
//		fn1();

//		function fn2(){
//			return 10 - 5
//		}
//		var num = fn2();
//		console.log(num);

	var num1 = 10;
	var num2 = 5;
	function fn2(){
		console.log("hello");
		console.log("hahah");
//			return num1 - num2;
		return "函数";
	}
	console.log(fn2());

	function fn3(){
		var num3 = num1 + num2;
		console.log(num3);
		console.log("fn3函数执行！");
		return num3;
		alert(num3);
	}
	fn3();

	var btn = document.getElementById('btn');

	function test(){
		console.log("点击一下执行一遍");
	}
	btn.onclick = test;

	/*
		函数名() 会使函数立即执行。如果我们希望函数在某个事件触发之后执行的话，那么我们只需要把这个函数名赋值给对应的事件就可以了，一定不能加括号
	*/

	//匿名函数的调用形式：
	//1.把匿名函数赋值给某个事件，通过触发事件来执行函数

	btn.onclick = function(){
		this.style.background = "pink";
	}
	//2.匿名函数的自执行（自调用）
//		(function(){
//			alert("匿名函数的自调用");
//		})();

function fn1(x){
		console.log(x);
	}
	fn1(0);

	(function(num){
		console.log("今天是星期"+num);
	})(4)

	Math.max()

	//函数是自由，没有所属关系时，是函数
	//当函数属于某个对象的时候，那么就叫对象下面的方法
	//变量是自由的，没有所属关系的
	//当变量属于某个对象时，就叫对象下面的属性


	var length = 0;//变量
	var obj = {};
	obj.length = 5;//对象的属性

	function sayHello(){
		alert("hello,nice to meet you")
	}
	sayHello()

	var person = {};
	person.name = "test";//属性
	person.sayHai = function(){//方法
		alert("Hai")
	}
	person.sayHai();

	var Math1 = {};
	Math1.maxTest = function(){

	}

</script>
