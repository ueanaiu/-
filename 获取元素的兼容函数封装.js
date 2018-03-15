<body>
		<ul id="list">
			<li>我是第1个Li</li>
			<!--li-->
			<li>我是第2个Li</li>
			<li>我是第3个Li</li>
			<li>我是第4个Li</li>
			<li>我是第5个Li</li>
		</ul>
	</body>
	<script>
		//封装一个函数，既可以获取到元素的下一个兄弟节点，又可以兼容IE6/7/8
		var li = document.getElementsByTagName('li');
		var ul = document.getElementById('list');
		
		//获取下一个兄弟节点
		function getNext(obj){
			if(!obj || !obj.nextSibling){
				return null
			}
			if(obj.nextSibling.nodeType == 1){
				return obj.nextSibling
			}else{
				return getNext(obj.nextSibling);
			}
		}
		//console.log(getNext(first));
		
		//获取上一个兄弟节点
		function getPrev(obj){
			if(obj.previousSibling.nodeType == 1){
				return obj.previousSibling;
			}else{
				return getPrev(obj.previousSibling)
			}
		}
		console.log( getPrev(li[3]));
		
		//获取第一个子节点
		function getFirst(obj){
			if(obj.firstChild.nodeType == 1){
				return obj.firstChild;
			}else{
				return getNext(obj.firstChild);
			}
		}
		
		//获取最后一个子节点
		function getLast(obj){
			if(obj.lastChild.nodeType == 1){
				return obj.lastChild;
			}else{
				return getPrev(obj.lastChild);
			}
		}
		console.log(getFirst(list));
		console.log(getLast(list));
		console.log(getNext(li[4]));
		
	</script>
