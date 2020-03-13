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
//��ģ���OnLoad������
function onLoadInTemplate(myContext,title){
 setContext(myContext);
 top.document.title=title;
}

//����һ������(��keyValue = "type=0");
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
	//���fid��Ϊ��
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

//���б��¼��˫��
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

//EOS���б��¼��˫����ʵ��
function eosDoDblClick(url,target){

	var frm = document.forms[0];
    //alert(url);
	//alert(target);
	frm.target=target ;
    frm.action=url;
    frm.submit(); 
	
}

function toUrl(myUrl,isCheck){
	//�����click�鿴��ť
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
//����Ƿ���ѡ���¼
function checkSelect(){
	var count = 0;
	var length = 0;
	try{
		 length = document.forms[0].fid.length;
	} catch(e){
		alert("û���κμ�¼��");
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
		alert("��û��ѡ���κμ�¼��");
		return false;
	} else if (count >1){
		alert("��ѡ������¼");
		return false;
	}

	return true;
}

function checkAll(obj,fid){ 
 
  if(obj.form.elements[fid]!=null){
    var size=obj.form.elements[fid].length;
    if(size!=null){
      for(i=0;i<size;i++){
       if(!obj.form.elements[fid][i].disabled)//���û�б��
          obj.form.elements[fid][i].checked = obj.checked;                   
      }    
    }
    else{//ֻ��һ�м�¼ʱ       
      if(!obj.form.elements[fid].disabled)
        obj.form.elements[fid].checked = obj.checked; 
      }
         
  } 
}

//EOS checkAll��ʵ��
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

//EOS��ʽ��ʵ������
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
    alert("ע��:����������form����,�˷������ܲ�����");    
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
    alert("ע��:����������form����,�˷������ܲ�����");    
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
    alert("ע��:����������form����,�˷������ܲ�����");    
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
		alert("û���κμ�¼��");
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
		alert("��û��ѡ���κμ�¼��");
		return false;
	}
	if(confirm("��"+count+"����¼��ѡ��,��ȷ��Ҫɾ����") == false){
		return false;
	}	
  	document.forms[0].method.value="doDelete";
  	document.forms[0].submit(); 
 }
 
 
 /**
 ------------------------------------------------------------------
 Description ѡ��������
 @param sqlwhere
 @author fcc
 @usage ����sqlwhereΪnull����ΪEOSORG/REMARK=C�������͵�
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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
 Description ѡ�񵥸�
 @author fcc
 @usage ��button�ϼӸ�����elname="entity/test,test" �������ѵ����д��Ȼ���ټ����¼�onClick="singleselectMan()"
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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
 Description ѡ�񵥸�����
 @param sqlwhere
 @author fcc
 @usage ����sqlwhereΪnull����ΪEOSORG/REMARK=C�������͵�
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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
 Description ѡ�񵥸���Ա�����úõ���Ա��������ѡ��
 @param sqlwhere
 @author fcc
 @usage ����modeIdΪģ��ID��nodeIdΪ����ID����Щ�ο�һ���ֹ����pdm
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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
 Description ѡ������Ա
 @author fcc
 @usage ��button�ϼӸ�����elname="entity/test,test" �������ѵ����д��Ȼ���ټ����¼�onClick="singleselectMan()"
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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
 Description ѡ�񵥸���Ա�ӱ�����
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
		values[j++] = frm.elements[names[i]].value;//id��ֵ
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


