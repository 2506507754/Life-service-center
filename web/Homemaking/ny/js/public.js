var context="/talent"
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
// document.forms[0].method.value="toList";
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
	mForm.method.value="toView";
	myUrl = addParam(myUrl,'method=toView');	
	mForm.action=addParam(myUrl,'fid='+fid);	
	mForm.submit();  
}

//EOS在列表记录中双击的实现
function eosDoDblClick(url,target){

	var frm = document.forms[0];
    //alert(url);
	//alert(target);
	frm.target=target ;
    frm.action=url;
    frm.submit(); 
	
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

//EOS checkAll的实现
function eosCheckAll(objFrm,objChk){ 
 	var len = 0;
	len = objFrm.elements.length;

	var i = 0;
	var objCheck;

	for(i = 0; i < len; i ++){
		objCheck = objFrm.elements[i];
		if(objCheck.type =="checkbox" && !objCheck.disabled ){ //&& objCheck.value.indexOf('list\\')
           objCheck.checked = objChk.checked;
				
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

//EOS方式来实现排序
function eosOrderBy(field){  
	    var frm = document.forms[0];
    	frm.elements["Order/col1"].value=field;
    	if (frm.elements["Order/col1/@order"].value=="ASC") {
    		frm.elements["Order/col1/@order"].value="DESC";
    	} else {
    		frm.elements["Order/col1/@order"].value="ASC";
    	}
    	
    	frm.submit();
 
}
function toView(){
 if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");    
    return false;
  }
 if(checkSelect()==false)
   return false;
  var myForm = document.forms[0];
  myForm.method.value="toView";
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
  myForm.method.value="toUpdate";
  myForm.submit();
}
function toInsert(){
  if(document.forms.length>1){
    alert("注意:有两个或多个form存在,此方法可能不适用");    
    return false;
  }
  var myForm = document.forms[0];
  myForm.method.value="toInsert";
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
  	document.forms[0].method.value="doDelete";
  	document.forms[0].submit(); 
 }
 
 
 /**
 ------------------------------------------------------------------
 Description 选择多个部门
 @param sqlwhere
 @author fcc
 @usage 参数sqlwhere为null或者为EOSORG/REMARK=C这样类型的
 **/
 function selectMoreBM(sqlwhere) {
 	var btn = event.srcElement;
	var frm = btn.form;
	var temp = new Date().getTime();
	var url = "infoCenterWeb.pr.selectMoreBM.do?temp=" + temp + "&EOSORG/FCC=&";
	if(sqlwhere!=null||sqlwhere!="") url += sqlwhere;
	var height = 500;
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	
 
 
 }
 
 
 
  /**
 ------------------------------------------------------------------
 Description 选择单个
 @author fcc
 @usage 在button上加个属性elname="entity/test,test" 根据自已的情况写，然后再加上事件onClick="singleselectMan()"
 **/
 function singleselectMan(){
	var btn = event.srcElement;
	var frm = btn.form;
	var url = "";
	var date = new Date();
	var fccargs = date.getTime();
	var height = 500;
	url = "tools.pr.singleselect.do?fccargs=" + fccargs;
	
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	
	
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	


}

/**
 ------------------------------------------------------------------
 Description 选择单个部门
 @param sqlwhere
 @author fcc
 @usage 参数sqlwhere为null或者为EOSORG/REMARK=C这样类型的
 **/
 function selectSingleBM(sqlwhere) {
 	var btn = event.srcElement;
	var frm = btn.form;
	var temp = new Date().getTime();
	var url = "infoCenterWeb.pr.selectSingleBM.do?temp=" + temp + "&EOSORG/FCC=&";
	if(sqlwhere!=null||sqlwhere!="") url += sqlwhere;
	var height = 500;
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	
 
 
 }
 
 /**
 ------------------------------------------------------------------
 Description 选择单个人员从设置好的人员集合里面选择
 @param sqlwhere
 @author fcc
 @usage 参数modeId为模块ID、nodeId为环节ID，这些参考一条街管理的pdm
 **/
 
 function selSingleFrmSet(modeId,nodeId) {
 	var btn = event.srcElement;
	var frm = btn.form;
	var temp = new Date().getTime();
	var url = "street.pr.selectSingleFromSet.do?temp=" + temp + "&STR_APPMANSET/MODID=" + modeId + "&STR_APPMANSET/NODEID=" + nodeId;
	
	var height = 500;
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	
 
 
 }
 
 
 /**
 ------------------------------------------------------------------
 Description 选择多个人员
 @author fcc
 @usage 在button上加个属性elname="entity/test,test" 根据自已的情况写，然后再加上事件onClick="singleselectMan()"
 **/
 function selectMoreMan(){
	var btn = event.srcElement;
	var frm = btn.form;
	var url = "";
	var date = new Date();
	var height = 500;
	
	url = "infoCenterWeb.pr.manselect.do?refresh=" + date.getTime();
	
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	
	
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	


}



 /**
 ------------------------------------------------------------------
 Description 选择单个人员从本部门
 @param none
 @author fcc
 @usage 
 **/
function selSingleFrmSelf() {
 	var btn = event.srcElement;
	var frm = btn.form;
	var temp = new Date().getTime();
	var url = "street.pr.selectFromSelfOrg.do?temp=" + temp;
	
	var height = 500;
	var name = btn.elname;
	var names = name.split(",");
	if((names.length%2)!=0){
		return false;
	}
	var values = [];
	var j =0;
	for(var i=0;i<names.length;i=i+2){
		values[j++] = frm.elements[names[i]].value;//id的值
	}
	values[values.length] = btn.name;
	var retArr = window.showModalDialog(url,values,"dialogHeight: " + height + "px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(retArr!=null){
		var obj = null;
		var j = 0;
		for(var i=0;i<retArr.length;i++){
			obj = retArr[i];
			frm.elements[names[j++]].value=retArr[i].value;
			frm.elements[names[j++]].value=retArr[i].text;
		}
	
	}
	
 
 
 }


