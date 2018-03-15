	<body>
		<div id="box" class="div" title="hello">
			<!--<p></p>注释内容-->
			<ul>
				<li></li>
				<li></li>
			</ul>
			<span>span内的文字内容</span>
		</div>
	</body>
	<script>
		var box = document.getElementById('box');
		console.log(box.childNodes);
		console.log(box.children);
		
		//变量的数据类型     typeof
		//查看节点的类型     nodeType属性
		//查看节点的名称     nodeName属性
		//查看节点的值         nodeValue属性
		console.log(box.children[0].nodeType,box.children[0].nodeValue);//1
		console.log(box.attributes[0].nodeType,box.attributes[0].nodeValue);//2
		console.log(box.children[1].childNodes[0].nodeType,box.children[1].childNodes[0].nodeValue);//3
		console.log(box.childNodes[1].nodeType,box.childNodes[1].nodeValue);//8
		console.log(document.nodeType,document.nodeValue);//9
		
		/*
		 *              nodeName     nodeType   nodeValue
		 * 元素节点                    这个标签的标签名             1         null
		 * 属性节点                    属性名                               2                       属性值
		 * 文本节点                    #text           3                       文本内容
		 * 注释节点                    #comment        8                       注释内容
		 * document节点       #document       9         null
		 */
		
	</script>
