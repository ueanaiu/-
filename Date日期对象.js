# JS-Learning-log
//Date 日期对象
		
		//1.获取日期对象     new Date()
		//console.log(new Date());
		var date = new Date();
		//2.getFullYear() 获取年份
		console.log(date.getFullYear());//2018
		//3.getYear() 获取年份  从1900年开始，要加上1900，一般不用
		console.log(date.getYear());//118
		//4.getMonth() 获取月份   0~11  （从0开始，0表示1月份，11表示12月份）
		console.log(date.getMonth());
		//5.getDay() 获取今天是星期几 （0~6） 0表示的是星期天
		console.log(date.getDay());
		//6.getDate() 返回今天是几号 （1~31）
		console.log(date.getDate());
		//7.getHours() 返回小时数 （0~23）
		console.log(date.getHours());
		//8.getMinutes() 返回分钟数  （0~59）
		console.log(date.getMinutes());
		//9.getSeconds() 返回秒钟数
		console.log(date.getSeconds());
		//10.getTime() 返回的是从1970年1月1日到现在的毫秒数
		console.log(date.getTime());
		
		//练习：   xxx年xx月xx日  星期x xx:xx:xx
		
		function getTime(){
			var div = document.getElementById('div');
			var arr = ["日","一","二","三","四","五","六"];
			
			//获取当前的时间对象
			var date = new Date();
			//1.年
			var year = date.getFullYear();
			//2.月
			var mon = date.getMonth() + 1 >= 10?date.getMonth() + 1 : "0" + (date.getMonth() + 1);
			//3.日
			var day = date.getDate() >= 10 ? date.getDate():"0"+date.getDate(); 
			//星期 0~6
			var week = arr[date.getDay()];
			//4.时
			var h = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
			var m = date.getMinutes() >= 10?date.getMinutes():"0"+date.getMinutes();
			var s = date.getSeconds() >= 10? date.getSeconds() :"0" +date.getSeconds();
			
			var str = year+"年"+mon+"月"+day +"日"+"星期"+week+h+":"+m+":"+s;
			div.innerHTML = str;
		}
		getTime();
		
		setInterval(getTime,1000);
		
		//设置时间
		//1.new Date(year,mon,date,h,m,s);
		//注意：月份是0~11，所以我们传的数字是当前的月份+1
		var date = new Date(2018,2,9,18,0,0);
		console.log(date);
		//2.new Date('Mar 9,2018,18:00:00')
		var date = new Date('Mar 9,2018,18:00:00');
		console.log(date);
		
