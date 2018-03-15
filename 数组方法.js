# JS-Learning-log
<script>
	//1.join()把数组转换为字符串,不会改变原数组
	//参数是可选的，如果不写参数的话，默认用逗号隔开，如果写参数，以指定的参数隔开
	var arr = [1,2,3];
	console.log(arr.join());//"1,2,3";
	console.log(arr);//[1,2,3];
	console.log(arr.join("-"));"1-2-3"

	//2.reverse() 将数组逆序,会改变原数组
	console.log(arr.reverse());//[3,2,1];
	console.log(arr);

	//3.sort()排序  会改变原数组  按照ASCII码值进行排序
	var arr2 = [102,20,5,33,101];
	arr2.sort();
	console.log(arr2);

	//sort() 从小到大排序
	arr2.sort(function(a,b){
		return a - b;
	})
	console.log(arr2);

	//sort() 从大到小排序
	arr2.sort(function(a,b){
		return b - a;
	})
	console.log(arr2);

//		arr2.sort(function(a,b){
//			console.log(a,b);
//		})

	//4.push() 向数组的末尾添加一个或多个元素
	var fruits = ['apple','orange','banana'];
	fruits.push('lemon');
	console.log(fruits);

	//5.pop() 删除数组的最后一项,会修改原数组
	fruits.pop();
	fruits.pop();
	fruits.pop();
	console.log(fruits);

	//6.unshift() 在数组的第一项添加内容
	fruits.unshift("123");
	console.log(fruits);

	//7.shift() 删除数组的第一项
	fruits.shift();
	console.log(fruits);

	//8.splice(开始的下标，删除多少项，插入的内容) 在数组中添加或删除元素
	var language = ["JS","PHP","C","Python"];
	language.splice(1,2,"123");
	console.log(language);


//		function fn1(a,b){
//			return a - b;
//		}

	/*
		数组是一种复杂数据类型，其作用就是作为一个或多个数据的容器
		属性：length
		方法：
			1.join()把数组转换为字符串

	*/
	//数组方法
	//1.map()---映射
	var price = [1000,300,860,280];
	//price1接收
	var price1 = price.map(function(item){
		console.log(item);//1000
		return item * 0.6//由return返回出去
	});
	console.log(price1);//300

	var x = [1,3,6];//=>[1,9,36];
	var y = x.map(function(num){
		return num*num//数组内数的平方
	});
	console.log(y);

	//原来学的代码
	var nprice = [];
	for(var i = 0;i < price.length;i++){
		nprice.push(price[i]/2)
	}
	console.log(nprice);

	//filter() 过滤---对数组的每一项运行给定的函数返回满足过滤条件的。然后组成新的数组
	//把80~100的数选出来
	var book = [120,111,99,89,101];
	var arr = book.filter(function(x){
		console.log(x);
		if(x >= 80 && x <= 100){
			return x;
		}
	})
	console.log(arr);

	//every()---用于判断数组中的每一项是否都满足/符合条件，只有每一项都满足条件时返回true，否则返回false
	var person = [100,98,68]
	var bool = person.every(function(v){
			return v > 90;//false 不是每一项都满足，
	})
	console.log(bool);//false

	//some()---判断数组中是否有满足条件的项，只要有一项满足就会返回true
	var money = [900,10000,300]
	var buy = money.some(function(b){
		return b > 9999;//有一项满足
	})
	console.log(buy);//true
</script>
