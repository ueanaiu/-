# JS-Learning-log

<script>
//arguments是所有实参的集合，是一个类数组对象
//我们要向访问arguments实参集合中的某一个，通过下标的方式访问
function sum(num1,num2){
	//console.log(num1 + num2);
}
sum(2,3);

function test(){
	console.log(arguments);
}
test("red","green");

//定义一个实现多个数字求和运算的函数
var result = 0;
function sum2(){
  for(var i = 0; i < arguments.length;i++){	
    result += arguments[i];
    console.log(result);
    //console.log(arguments[i]);
   }
}
sum2(1,2,3,8,6);




//		var arr = [1,2,3,4];
//		var result = 0;
//		for(var i = 0; i < arr.length; i++){
//			result += arr[i];
//		}
//		console.log(result);

//		var arr = [3];
//		arr[0]
</script>
