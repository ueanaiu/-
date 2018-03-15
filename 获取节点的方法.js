<body>
		<ul id="list">
			<li>我是第1个Li</li>
			<li>我是第2个Li</li>
			<li>我是第3个Li</li>
			<li>我是第4个Li</li>
			<li>我是第5个Li</li>
			<!--<li></li>-->
		</ul>
	</body>
	<script>
		var list = document.getElementById('list');
		//获取元素的所有子节点
		//1.children
		console.log(list.children);
		
		//2.childNodes 在标准浏览器下会把空格和换行当做文本节点，IE6/7/8版本下会直接忽略
		console.log(list.childNodes);
		
		//firstChild 获取元素的第一个子节点   在标准浏览器和IE9及以下版本下会解析换行和空格为空白文本节点
		console.log(list.firstChild);
		
		//firstElementChild 获取元素的第一个子节点      IE6/7/8不支持
		console.log(list.firstElementChild);
		
		//lastChild 获取元素的最后一个子节点   在标准浏览器和IE9及以下版本下会解析换行和空格为空白文本节点
		console.log(list.lastChild);
		
		//lastElementChild 获取元素的最后一个子节点  IE6/7/8不支持
		console.log(list.lastElementChild);
		
		var first = list.firstElementChild;
		console.log(first);
		
		//nextSibling 下一个兄弟节点   在标准浏览器和IE9及以下版本下会解析换行和空格为空白文本节点
		console.log(first.nextSibling);
		
		//nextElementSibling 下一个兄弟节点   IE6/7/8不支持
		console.log(first.nextElementSibling);
		
		var last = list.lastElementChild;
		console.log(last);
		
		//previousSibling 上一个兄弟节点 在标准浏览器和IE9及以下版本下会解析换行和空格为空白文本节点
		console.log(last.previousSibling);
		
		//previousElementSibling 上一个兄弟节点  IE6/7/8不支持
		console.log(last.previousElementSibling);
		
		//parentNode  获取父节点
		console.log(first.parentNode);
		
	</script>
