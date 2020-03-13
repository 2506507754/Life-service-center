var context="/pcoa"
function changeBgColorOnMouseOut(obj){
	obj.style.backgroundColor='';
}
function changeBgColorOnMouseOver(obj){
	obj.style.backgroundColor='#cccccc';
}
function setContext(myContext){
	context=myContext;
}
//在模块的OnLoad处调用
function onLoadInTemplate(myContext,title){
 setContext(myContext);
 	top.document.title=title;
}

//加入一个参数(如keyValue = "type=0");
function addParam(url,  keyValue) {
	if (url == null) {
		return "";
	}
	var index = url.indexOf("?");
	if (index < 0) {
		return url + "?" + keyValue;
	} else {
		return url + "&" + keyValue;
	}
}
function onChangeIt(){
 document.forms[0].submit();
}
//
function loadOrderInList(form,orderType,orderFid,fidIsNull,orderdown,orderup){
	var myForm  = form;
	//如果fid不为空
	if(fidIsNull==false){
	 myForm.elements["orderFid"].value=orderFid;
	}
	myForm.elements["orderType"].value=orderType;
 	var currentObj=myForm.elements["orderFid"].value;
 	if(document.all[currentObj]){
 	 var children = document.all[currentObj].children;
  	  for(i=0;i<children.length;i++){
    	    if(children[i].tagName=="DIV"&&children[i].orderBy=="true"){
    	        if (myForm.elements["orderType"].value=="asc")
		    children[i].innerHTML+="<img src='"+orderdown+"'>";
    	        else
		    children[i].innerHTML+="<img src='"+orderup+"'>";
    	     break;
	    }//if
	    }//for
	  }
}

//在列表记录中双击
function doDblClick(fid,operation){
	if(operation==false)
	 return;
	var dblClick = "";
	var mForm = document.forms[0];
	var myUrl = mForm.action;
	mForm.mhd.value="toView";
	myUrl = addParam(myUrl,'mhd=toView');
	mForm.action=addParam(myUrl,'fid='+fid);
	mForm.submit();
}

//重载的doDblClick函数，以使其适应自定义方法名与主键列名的情况，突破toView与fid的限制
//added by 李振祥
//@param idvalue 表中行记录的主键值
//@param mhd 方法名;
//@param idname　表中行记录的主键列名

function doDblClick1(idvalue,operation,mhd,idname){
	if(operation==false)
	 return;
	var dblClick = "";
	var mForm = document.forms[0];
	var myUrl = mForm.action;
	mForm.mhd.value=mhd;
	myUrl = addParam(myUrl,'mhd='+mhd);
	mForm.action=addParam(myUrl,idname+'='+idvalue);
	mForm.submit();
}

function toUrl(myUrl,isCheck){
	//如果是click查看按钮
	if (isCheck == true){
		if (checkSelect()== false){
			return ;
		}
	}
	var mForm = document.forms[0];
	if(myUrl.charAt(0)=='/')
	 myUrl=context+myUrl;
	mForm.action =myUrl;
	mForm.submit();
}
//检查是否有选择记录
function checkSelect(){
	var count = 0;
	var length = 0;
	try{
		 length = document.forms[0].fid.length;
	} catch(e){
		alert("没有任何记录！");
		return false;
	}
	if (isNaN(length))	{
		try{
			if (document.forms[0].fid.checked)	{
				++count;
			}
		}catch(e){}
	}

	for(var i=0;i<document.forms[0].fid.length;i++){
		if(document.forms[0].fid[i].checked)
			count++;
	}
	if(count==0){
		alert("您没有选择任何记录！");
		return false;
	} else if (count >1){
		alert("请选择单条记录");
		return false;
	}

	return true;
}

function checkAll(obj,fid){

  if(obj.form.elements[fid]!=null){
    var size=obj.form.elements[fid].length;
    if(size!=null){
      for(i=0;i<size;i++){
       if(!obj.form.elements[fid][i].disabled)//如果没有变灰
          obj.form.elements[fid][i].checked = obj.checked;
      }
    }
    else{//只有一行记录时
      if(!obj.form.elements[fid].disabled)
        obj.form.elements[fid].checked = obj.checked;
      }

  }
}

function orderBy(obj){
  var currentID = obj.id;
  var children = obj.children;
  var myForm = document.forms[0];
  var oldID = myForm.elements["orderFid"].value;
  var orderType =myForm.elements["orderType"].value;
  for(i=0;i<children.length;i++){
    if(children[i].tagName=="DIV"&&children[i].orderBy=="true"){
     if(currentID==oldID){
    	if (orderType=="asc"){
	    	orderType="desc";
    	}
    	else{
	   	orderType="asc";
    }
  }//if
    myForm.elements["orderFid"].value = currentID;
    myForm.elements["orderType"].value = orderType;
    break;
    }
  }
  myForm.submit();
}
function toView(){
 if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");
    return false;
  }
 if(checkSelect()==false)
   return false;
  var myForm = document.forms[0];
  myForm.mhd.value="toView";
  myForm.submit();
}

function toUpdate(){
 if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");
    return false;
  }
 if(checkSelect()==false)
   return false;
  var myForm = document.forms[0];
  myForm.mhd.value="toUpdate";
  myForm.submit();
}
function toInsert(){
  if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");
    return false;
  }
  var myForm = document.forms[0];
  myForm.mhd.value="toInsert";
  myForm.submit();
 }
function doDelete(){
  	var count = 0;
	var length = 0;
	try{
		 length = document.forms[0].fid.length;
	} catch(e){
		alert("没有任何记录！");
		return false;
	}
	if (isNaN(length))	{
		try{
			if (document.forms[0].fid.checked)	{
				++count;
			}
		}catch(e){}
	}
	for(var i=0;i<document.forms[0].fid.length;i++){
		if(document.forms[0].fid[i].checked)
			count++;
	}
	if(count==0){
		alert("您没有选择任何记录！");
		return false;
	}
	if(confirm("有"+count+"条记录被选中,您确定要删除吗？") == false){
		return false;
	}
  	document.forms[0].mhd.value="doDelete";
  	document.forms[0].submit();
 }





///////////////////////////////////////////////////////////////////朱亚的扩展
function toUpdate2(method){
 if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");
    return false;
  }
 if(checkSelect()==false)
   return false;
  var myForm = document.forms[0];
  myForm.mhd.value=method;
  myForm.submit();
}
function doDelete2(method){
  	var count = 0;
	var length = 0;
	try{
		 length = document.forms[0].fid.length;
	} catch(e){
		alert("没有任何记录！");
		return false;
	}
	if (isNaN(length))	{
		try{
			if (document.forms[0].fid.checked)	{
				++count;
			}
		}catch(e){}
	}
	for(var i=0;i<document.forms[0].fid.length;i++){
		if(document.forms[0].fid[i].checked)
			count++;
	}
	if(count==0){
		alert("您没有选择任何记录！");
		return false;
	}
	if(confirm("有"+count+"条记录被选中,您确定要删除吗？") == false){
		return false;
	}
  	document.forms[0].mhd.value=method;
  	document.forms[0].submit();
 }
