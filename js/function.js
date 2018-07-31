//兼容性的通过类名获取元素
function getClass(selector,obj){
	if(typeof selector!="string"){
	return false;
}
obj=obj||document
if(obj.getElementsByClassName){
	return obj.getElementsByClassName(selector)
}
else{
	//申明一个数组
	var arr=[];
	//获取全部的元素
	var alls=obj.getElementsByTagName("*")
	for (var i = 0; i < alls.length; i++) 
{
	if(checkClass(alls[i]).className,selector)
	{
		arr.push(alls[i])
	}
}
     return arr
    }
}
function checkClass(longstr,str){
	var arr=longstr.split(" ");
	for (var i = 0; i < arrs.length; i++) {
		if(arr[i]==str){
			return true;
		}
	};
	return false;
}
//获取和设置某一个元素对象的文本状态的兼容性问题
function getText(obj,val){
	if(val==undefined){
	if(obj.textContent){
		return obj.textContent;
	}else{
		return obj.innerText;
	}
}else{
	if(obj.textContent){
		 obj.textContent=val;
	}else{
		 obj.innerText=val
	}
}

}
//兼容性获取元素的样式
function getStyle(obj,attr)
{
if(window.getComputedStyle)
{
	return getComputedStyle(obj,null)[attr]
}
	else{
		return obj.currentStyle[attr]
	}

}
//js中通过类名和ID获取定义的元素
function $(selector,obj){
	var obj=obj||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s+|\s*$/g,"")
	//类名 cherAt查找
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1));
	}
	else if(selector.charAt(0)=="#"){
		return obj.getElementById(selector.slice(1),obj)
	}
	//用正则获取标签//标签名获取，g表示全局的
	else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
		return obj.getElementsByTagName(selector)
	}
}
   else if(typeof selector=="function")
   {
	window.onload=function(){
		selector();
	}
  }
}
//获取某个对象当中的子元素
//type   true/false 为空
function getChilds(obj,type){
	type=type==undefined?false:type;
	var aa=obj.childNodes;
	var arr=[];
	for (var i = 0; i < aa.length; i++) {
		if(!type){
	if(aa[i].ondeType==1){
		arr.push(aa[i])
	}
	}
	else{
		// 文本节点 nodeType节点类型/数值
		if(aa[i].nodeType==1||aa[i].nodeType==3&&aa[i].value){
			arr.push(aa[i])
		}
	}
}
	return arr;

}
//去掉某个字符串两边的空格
function trim(str){
	return str.replace(/^\s*/\$*$/g,"")
}
//获得某个对象第一个子元素
function getFirst(obj){
	return getChilds(obj)[0];
}
//判断最后一个子元素
function getLast(obj){
 return getLast(obj)[getChilds(obj).length-1];
}
//获得下一个兄弟元素
function getNext(obj){
	type=type==undefined?false:type;
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	if(!type){
		while((next.nodeType==1||next.nodeType==3&&
			next.value.replace(/^\s*$/g,"")||next.nodeType==8)

			){
			next=next.nextSibling;
		if(next==null){
			return false;
		}

		}

	}else if(!type){
			while (next.nodeType==3||next.nodeType==8){
				if(next==null){
		  return false;
			}
		}
		}
		return next;
}
//获得某个对象的前一个兄弟元素
function getPre(obj){
	var pre=obj.previousSibling;
	if(pre==null){
		return null;
	}
	while(pre.nodeType!=1){//判断下一个是不是元素节点，不是的话继续获取
		pre=pre.nextSibling;
		if(pre==null){
			return null;
		}
		
	}
	return pre;
	
}


//获得某个对象的父元素
function getParent(obj){
	return obj.parentNode;
}


function addBefore(a,b){//a插到b的前面
	var parent=b.parentNode
	parent.insertBefore(a,b)
}
	function addAfter(a,b){
       		var parent=b.parentNode;
       		parent.insertBefore(a,b);
       	}
//删除某个元素的节点
function removeObj(obj){
	var parent=obj.paretnNode;
	parent.removeChild(obj)
}
//替换某个元素节点 用oldobj替换newobj
function replaceObj(newobj,oldobj){
	var parent=oldobj.parentNode;
	parent.replaceChild(newobj,parentNode)
}
//克隆某个节点（返回克隆某个对象的结果，可设置参数。
//true表示克隆全部内部元素，当为false时克隆元素节点。
function cloneObj(obj,bull){
	bull=false||bull;
	return obj.cloneNode(bull)

}
//在某个对象当中插入节点（从obj追加到parent后面）
function appendObj(parent,obj){
	parent.appendChild(obj)
}

