<body>
		<div id="box">
			<h1>标题</h1>
		</div>
		<p id="test"></p>
		<ul>
			<li>第一个</li>
			<li>第二个</li>
		</ul>
		<ol id="list">
			<li>内容</li>
		</ol>
	</body>
	<script>
		var box = document.getElementById('box');
		var test = document.getElementById('test');
		var h1 = document.getElementsByTagName('h1')[0];
		
		var ul = document.getElementsByTagName('ul')[0];
		//hasChildNodes() 判断元素有没有子节点，返回布尔值true或者false
		console.log(box.hasChildNodes());//true
		console.log(test.hasChildNodes());//false
		
		//document.createElement() 创建一个元素节点
		var a = document.createElement('a');
		console.log(a);
		
		//appendChild() 给元素添加子节点 (添加在最后一个)
		test.appendChild(a);
		box.appendChild(a);
		
		//insertBefore(obj1,obj2) 在指定的已有节点之前插入新的子节点
		//obj1插入的元素，插入在obj2之前
		var span = document.createElement('span');
		box.insertBefore(span,h1);
		
		//removeChild() 删除子节点
		//box.removeChild(a);
		
		//replaceChild(obj1,obj2) 用一个新的节点，替换一个子节点
		//第一个参数     新的节点
		//第二个参数     被替换的节点
		var h2 = document.createElement('h2');
		box.replaceChild(h2,h1);
		
		//cloneNode() 克隆节点
		//参数是一个布尔值，是否复制当前节点里面的内容，默认是false
		//true表示复制节点的内容  ;false只复制节点本身，不复制内容
		var newUl = ul.cloneNode(true);
		box.appendChild(newUl);
		
		//innerHTML&&outerHTML区别
		//innerHTML 只能获取到元素的内容
		//outerHTML 可以获取到元素本身及元素的内容
		var list = document.getElementById('list');
		console.log(list.innerHTML);
		console.log(list.outerHTML);
		
		
		
		
		
	</script>
