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
	mForm.mhd.value="toView";
	myUrl = addParam(myUrl,'mhd=toView');
	mForm.action=addParam(myUrl,'fid='+fid);
	mForm.submit();
}

//���ص�doDblClick��������ʹ����Ӧ�Զ��巽���������������������ͻ��toView��fid������
//added by ������
//@param idvalue �����м�¼������ֵ
//@param mhd ������;
//@param idname�������м�¼����������

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
    alert("ע��:����������form����,�˷������ܲ�����");
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
    alert("ע��:����������form����,�˷������ܲ�����");
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
    alert("ע��:����������form����,�˷������ܲ�����");
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
  	document.forms[0].mhd.value="doDelete";
  	document.forms[0].submit();
 }





///////////////////////////////////////////////////////////////////���ǵ���չ
function toUpdate2(method){
 if(document.forms.length>1){
    alert("ע��:����������form����,�˷������ܲ�����");
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
  	document.forms[0].mhd.value=method;
  	document.forms[0].submit();
 }
