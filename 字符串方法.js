# JS-Learning-log
<script>
//转义字符
// \n 换行
var str = "one\ntwo\nthree";
//alert(str);

// \t 空格
var str = 'one\ttwo\tthree';
//console.log(str);

//字符串属性  length
var str = 'abcd';
//console.log(str.length);

/*
  indexOf() 查找字符出现的位置，返回对应的下标;如果不存在，返回-1
  参数可以传两个：
  第一个参数：要查找的字符
  第二个参数（可选）：开始查找的下标位置

 */

var str = "hello world";
console.log(str.indexOf('l',5));//9
//注意：字符串中的空格也是占位置的

var str = " a ";
console.log(str.length);//3

//示例
var btn = document.getElementById('btn');
var text = document.getElementById('text');
btn.onclick = function(){
	if(text.value){
		if(text.value.indexOf("JS") > -1){
			//只要indexOF返回的值大于-1，意味着返回了查找字符的下标，也就说明查找的内容存在
			alert("您输入的内容包含敏感字符，请重新输入")
		}else{
			alert("提交成功");
		}
	}
}

/*
	lastIndexOf()跟indexOf()方法类似，只不过lastIndexOf()是从字符串的指定位置(第二个参数，表示的是倒数第几个)开始从后向前查找
*/
var str = "hello world";
console.log(str.lastIndexOf('l',5));//3

//trim() 过滤掉字符串前后的空格
var str = "     hello world   ";
console.log(str.length);//
console.log(str.trim().length);//

/*
 replace() 字符串替换
	两个参数：
		1.被替换的字符串
		2.替换的字符串
	默认只替换一遍
*/
var str = "高考成绩查询：你考了500分";
console.log(str.replace("500","700"));

var str = "北京市天气预报：今天温度13度；北京市天气预报：今天温度13度；北京市天气预报：今天温度13度；北京市天气预报：今天温度13度；";
console.log(str.replace("北京","上海"));

//toUpperCase() 把字符串转换成大写
var country = "china";
console.log(country.toUpperCase());

//toLowerCase() 把字符串转换为小写
var str = "ABCDE";
console.log(str.toLowerCase());

/*
 * split() 把字符串分割成字符串数组
 * 如果不传参数的话，那么原字符串就是转化后数组的唯一一项内容
 * 如果只传一个参数，那么这个参数就是字符串分割为数组的依据
 * 如果有第二个参数，那么第二个参数表示数组的长度
*/
var str = "one two three";
//console.log(str.split());//Array [ "one two three" ]
console.log(str.split(' '));

var str = "hello world";
console.log(str.split('l'));//Array [ "he", "", "o wor", "d" ]
console.log(str.split('l',2));//Array [ "he", "" ]
</script>


</script>
