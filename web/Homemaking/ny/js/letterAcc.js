function chkSave2(stype)
{
	    if(document.letterForm.xf_no.value==""||document.letterForm.xf_no.value==null)
	    {
	        alert("�����������ٽ���......");
	        return;
	    }

	    if(stype=="cuiban")
	       window.open('XFCuiTuiFuUtil.jsp?instanceid=&xftype=letter&CuiTuiBan=cuiban','_blank','height=600,width=800,left=0,top=0');
	    if(stype=="tuiban")
	       window.open('XFCuiTuiFuUtil.jsp?instanceid=&xftype=letter&CuiTuiBan=tuiban','_blank','height=600,width=800,left=0,top=0');
	    if(stype=="xinfangfuhan")
	       window.open('XFCuiTuiFuUtil.jsp?instanceid=&xftype=letter&CuiTuiBan=xinfangfuhan','_blank','height=600,width=800,left=0,top=0');
	    if(stype=="zhuanbanfuhan")
	       window.open('XFCuiTuiFuUtil.jsp?instanceid=&xftype=letter&CuiTuiBan=zhuanbanfuhan','_blank','height=600,width=800,left=0,top=0');
	    if(stype=="shangjijiaobanfuhan")
	       window.open('XFCuiTuiFuUtil.jsp?instanceid=&xftype=letter&CuiTuiBan=shangjijiaobanfuhan','_blank','height=600,width=800,left=0,top=0');
}




function setProc()
{
	if(document.letterForm.proc_status.value=="0")
		   document.letterForm.proc_status.value="1";
}
function ProConLetter()
{
	if(document.letterForm.proc_status.value=="1")
		document.letterForm.proc_status.value="0";
}


//�Ƿ�����Ϣ

function ShowDelivery1()
{
if (document.letterForm.report_day.checked == true) {
	document.letterForm.report_day_type.disabled=false;}
else{
	document.letterForm.report_day_type.disabled=true;
	}
}
function ShowDelivery2()
{
if (document.letterForm.report_month.checked == true) {
	document.letterForm.report_month_type.disabled=false;}
else{
	document.letterForm.report_month_type.disabled=true;
	}
}


//�жϱ��б�����������Ϊ��
function cmdSave_OnClick()
{
    var boxLength_con;
    var selectedItem;
    var selectedValue;
    var selectedItem1;
    var selectedValue1;
	var submitForm=true;
    //�ж��ŷ����Ƿ�Ϊ��
	  if(submitForm)
	    {
		var name= document.letterForm["vo.name"].value;
		if( name==""||name==null)
		{
			submitForm=false;
			alert("�ŷ��˱�����д");
			return;}
	   }
	   
	   //�ж����ε����Ƿ�Ϊ��
		if(submitForm)
	    {
		var area_c= document.letterForm["vo.duty_area_c"].value;
		if( area_c==""||area_c==null)
		{
			submitForm=false;
			alert("���ε�������ѡ��");
			return;}
	   }
	   
	    //�ж��������
	    if(submitForm)
	    {
		var first_sort= document.letterForm["vo.first_sort_new_c"].value;
		var content_sort= document.letterForm["vo.contentNo_c"].value;
		var problem_show=document.letterForm["vo.content_sort"].value;
		var objective=document.letterForm["vo.objective_c"].value;
		if(content_sort=="" || content_sort == null)
		{

			if (problem_show != ""){
				submitForm=false;
				alert("�밴�µ����������ѡһ��");
				return;}
			else{
				submitForm=false;
				alert("һ�����⡢����������������������д");
				return;}

		}
	   }
	    //�ж����ʷ���
	    if(submitForm)
	    {
		if(objective==""||objective==null)
		{
			submitForm=false;
			alert("���ʷ������ѡ��");
			return;}
	    }
		//�ж���������
	    if(submitForm)
		{
			var valid = "0123456789";
			var ok = "yes";
			var temp;
			for (var i=0; i<document.letterForm["vo.people_num"].value.length; i++)
			{
			   temp = "" + document.letterForm["vo.people_num"].value.substring(i, i+1);
			   if (valid.indexOf(temp)=="-1")
				  ok="no";
			}
			if(ok=="no")
			{
				submitForm=false;
				alert("��������������д,���ұ���������");
				document.letterForm["vo.people_num"].focus();
				document.letterForm["vo.people_num"].select();
			}
			else
				submitForm=true;

	    }


		//���ʱ��
	   	if(submitForm)
		   if(document.letterForm["vo.answer_date"].value!=""&&document.letterForm["vo.answer_date"].value!=null)
	          submitForm = chkdate(letterForm["vo.answer_date"].value);
		//�ж��ʱ�
	   	if(submitForm)
		   if(document.letterForm["vo.postcode"].value!=""&&document.letterForm["vo.postcode"].value!=null)
	          submitForm = isZipCode(document.letterForm["vo.postcode"].value);

		if(submitForm)
			letterForm.submit();
		else
			return;
}

function cmdReset_OnClick(){
	document.letterForm.reset();
}

//�жϸ���
//function checkScale()
//{
//	var selectedItem=document.letterForm.scale.selectedIndex;
//    var selectedText=document.letterForm.scale.options[selectedItem].text;
 //   var selectedValue=document.letterForm.scale.options[selectedItem].value;

//}

function cmdSelectProblem_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 300) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProblem_new.jsp?"+url,"", "dialogWidth:350px; dialogHeight:300px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		letterForm["vo.first_sort_new_c"].value=aRetValue[1];
		letterForm["vo.contentNo_c"].value=aRetValue[2];
		letterForm["vo.content_sort"].value=aRetValue[0];
		letterForm.problem.value="problem="+aRetValue[1]+":"+aRetValue[2];

	}
}
/* ֻ����ѡ��һ����λ
function cmdAttributeUnit_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 280) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProcUnit.jsp?"+url,"", "dialogWidth:350px; dialogHeight:280px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");	
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		letterForm["vo.attributeunit_c"].value=aRetValue[0];
		letterForm.showAttributeUnit.value=aRetValue[1];
		letterForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}


function cmdSelectProcUnit_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 280) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProcUnit.jsp?"+url,"", "dialogWidth:350px; dialogHeight:280px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		letterForm["vo.undertaker_c"].value=aRetValue[0];
		letterForm["vo.undertaker"].value=aRetValue[1];
		letterForm.undertaker.value="procunit="+aRetValue[0];
		letterForm["vo.attributeunit_c"].value=aRetValue[0];
		letterForm.showAttributeUnit.value=aRetValue[1];
		letterForm.AttributeUnit_Url.value="procunit="+aRetValue[0];
	}
} 
*/

function cmdAttributeUnit_onclick(heard,url)
{	
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProcUnit.jsp?"+url,"","dialogHeight:500px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		letterForm["vo.attributeunit_c"].value=aRetValue[0];
		letterForm.showAttributeUnit.value=aRetValue[1];
		letterForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}


function cmdSelectProcUnit_onclick(heard,url)
{	
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProcUnit.jsp?"+url,"","dialogHeight:500px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		letterForm["vo.undertaker_c"].value=aRetValue[0];
		letterForm["vo.undertaker"].value=aRetValue[1];
		letterForm.undertaker.value="procunit="+aRetValue[0];
		letterForm["vo.attributeunit_c"].value=aRetValue[0];
		letterForm.showAttributeUnit.value=aRetValue[1];
		letterForm.AttributeUnit_Url.value="procunit="+aRetValue[0];
	}
} 

function chkdate(datestr)
{
	if (datestr==null||datestr==""){
		return false;
	}

	var lthdatestr;
	lthdatestr= datestr.length ;
	var tmpy="";
	var tmpm="";
	var tmpd="";
	var status;
	status=0;

	for (i=0;i<lthdatestr;i++){
		if (datestr.charAt(i)== '-'){
			status++;
		}
		if (status>2){
			alert("����'-'��Ϊ�ָ�����");
			return false;
		}
		if ((status==0) && (datestr.charAt(i)!='-')){
			tmpy=tmpy+datestr.charAt(i);
		}
		if ((status==1) && (datestr.charAt(i)!='-')){
			tmpm=tmpm+datestr.charAt(i);
		}
		if ((status==2) && (datestr.charAt(i)!='-')){
			tmpd=tmpd+datestr.charAt(i);
		}
	}

	year=new String (tmpy);
	month=new String (tmpm);
	day=new String (tmpd)
	if ((tmpy.length!=4) || (tmpm.length>2) || (tmpd.length>2))
	{
		alert("���������������'-'��Ϊ�ָ�����");
		return false;
	}
	if (!((1<=month) && (12>=month) && (31>=day) && (1<=day)) )
	{
		alert ("����������󣺴�����·ݻ�������");
		return false;
	}
	if (!((year % 4)==0) && (month==2) && (day==29))
	{
		alert ("�������������һ�겻�����꣡");
		return false;
	}
	if ((month<=7) && ((month % 2)==0) && (day>=31))
	{
		alert ("����������������ֻ��30�죡");
		return false;
	}
	if ((month>=8) && ((month % 2)==1) && (day>=31))
	{
		alert ("����������������ֻ��30�죡");
		return false;
	}
	if ((month==2) && (day==30))
	{
		alert("�����������2����Զû����һ�죡");
		return false;
	}

    return true;
}

function isZipCode(s){
    if(s==null||s=="")
		return false;

	var valid = "0123456789";
	var temp;
	var ok="true";
	for (var i=0; i<s.length; i++)
	{
	   temp = "" + s.substring(i, i+1);
	   if (valid.indexOf(temp)=="-1")
		   ok="false";
	}
    if(ok=="false"){
	    alert("����һ����������Ƿ�Ϊ���֣�");
	    return false;
	}

	if (s.length==6){
	   return true;
	}else{
	   alert("������������볤��Ϊ6��");
	   return false;
	}
}


function cmdSelectAddress_GZ_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress_GZ.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		var sxfr_address_detail=aRetValue[0];
		var sxfr_append_address=aRetValue[1];
		var saddress_deatil=aRetValue[2];
		letterForm["vo.address_c"].value=saddress_deatil;
		letterForm["vo.append_address"].value=sxfr_append_address;
		letterForm["vo.address"].value=sxfr_address_detail;
		letterForm.address.value="address="+saddress_deatil+":"+sxfr_append_address;
        /**
		letterForm.link_address.value=saddress_deatil;
		letterForm.link_append_address.value=sxfr_append_address;
		letterForm.link_detail_address.value=sxfr_address_detail;
        letterForm.link_address_url.value="address="+saddress_deatil+":"+sxfr_append_address;
		*/

	}

}

function cmdSelectAddress_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		var sxfr_address_detail=aRetValue[0];
		var sxfr_append_address=aRetValue[1];
		var saddress_deatil=aRetValue[2];
		letterForm["vo.address_c"].value=saddress_deatil;
		letterForm["vo.append_address"].value=sxfr_append_address;
		letterForm["vo.address"].value=sxfr_address_detail;
		letterForm.address.value="address="+saddress_deatil+":"+sxfr_append_address;
        /**
		letterForm.link_address.value=saddress_deatil;
		letterForm.link_append_address.value=sxfr_append_address;
		letterForm.link_detail_address.value=sxfr_address_detail;
        letterForm.link_address_url.value="address="+saddress_deatil+":"+sxfr_append_address;
		*/

	}

}

function cmdSelectLinkAddress_GZ_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress_GZ.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		var slink_address=aRetValue[0];

		var slink_append_address=aRetValue[1];
		var saddress_deatil=aRetValue[2];
		letterForm["vo.link_address_c"].value=saddress_deatil;
		letterForm["vo.link_append_address"].value=slink_append_address;
		letterForm["vo.link_address"].value=slink_address;
        letterForm.link_address_url.value="address="+saddress_deatil+":"+slink_append_address;

	//	letterForm["vo.address_c"].value=saddress_deatil;
	//	letterForm["vo.append_address"].value=slink_append_address;
	//	letterForm["vo.address"].value=slink_address;
	//	letterForm.address.value="address="+saddress_deatil+":"+slink_append_address;
	}

}

function cmdSelectLinkAddress_onclick(heard,url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		var slink_address=aRetValue[0];
		var slink_append_address=aRetValue[1];
		var saddress_deatil=aRetValue[2];
		letterForm["vo.link_address_c"].value=saddress_deatil;
		letterForm["vo.link_append_address"].value=slink_append_address;
		letterForm["vo.link_address"].value=slink_address;
        	letterForm.link_address_url.value="address="+saddress_deatil+":"+slink_append_address;

	//	letterForm["vo.address_c"].value=saddress_deatil;
	//	letterForm["vo.append_address"].value=slink_append_address;
	//	letterForm["vo.address"].value=slink_address;
	//	letterForm.address.value="address="+saddress_deatil+":"+slink_append_address;
	}

}

function chkScale()
{

    var selectedValue = document.letterForm["vo.scale"].value;
    if(selectedValue=="����")
       document.letterForm["vo.people_num"].value="1"
    if(selectedValue=="Ⱥ���")
       document.letterForm["vo.people_num"].value="2"
    if(selectedValue=="�����")
       document.letterForm["vo.people_num"].value="5"
}


function isNum(s)
{
    if(s==null||s=="")
		return false;

	var valid = "0123456789";
	var temp;
	var ok="true";
	for (var i=0; i<s.length; i++)
	{
	   temp = "" + s.substring(i, i+1);
	   if (valid.indexOf(temp)=="-1")
		   ok="false";
	}
    if(ok=="false"){
	    alert("����һ����������Ƿ�Ϊ���֣�");
	    return false;
	}
}

function cmdSelectCaseAddress_GZ_onclick(heard,url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress_GZ.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";

		letterForm["vo.case_address"].value=aRetValue[0];
		letterForm["vo.case_append_address"].value=aRetValue[1];
		letterForm["vo.case_address_c"].value=aRetValue[2];
		letterForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];
	}
}

function cmdSelectCaseAddress_onclick(heard,url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooAddress.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";

		letterForm["vo.case_address"].value=aRetValue[0];
		letterForm["vo.case_append_address"].value=aRetValue[1];
		letterForm["vo.case_address_c"].value=aRetValue[2];
		letterForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];
	}
}







//�ŷ����е�JS

function checkRWOnly()
{
	var con;
	var cn,i;
		cn=document.letterForm["vo.xf_type"].length;
		for(i=0;i<cn;i++)
		   if(document.letterForm["vo.xf_type"][i].checked)
	        	con=document.letterForm["vo.xf_type"][i].value;

	    if(con=="0")
		{
			letterForm["vo.indication_leader"].disabled=true;
			letterForm["vo.indication_date"].disabled=true;
			letterForm["vo.superior_unit_sn"].disabled=false;
	    	letterForm["vo.transfer_unit"].disabled=false;
			letterForm["vo.transfer_date"].disabled=false;
			letterForm["vo.superior_no"].disabled=false;

		}
	    if(con=="1")
		{
			letterForm["vo.indication_leader"].disabled=true;
			letterForm["vo.indication_date"].disabled=true;
			letterForm["vo.superior_unit_sn"].disabled=false;
			letterForm["vo.transfer_unit"].disabled=false;
			letterForm["vo.transfer_date"].disabled=false;
			letterForm["vo.superior_no"].disabled=false;
		}
	    if(con=="2")
		{
			letterForm["vo.indication_leader"].disabled=true;
			letterForm["vo.indication_date"].disabled=true;
			letterForm["vo.superior_unit_sn"].disabled=false;
			letterForm["vo.transfer_unit"].disabled=false;
			letterForm["vo.transfer_date"].disabled=false;
			letterForm["vo.superior_no"].disabled=false;
		}
	    if(con=="3")
		{
			letterForm["vo.indication_leader"].disabled=false;
			letterForm["vo.indication_date"].disabled=false;
			//letterForm["vo.superior_unit_sn"].disabled=true; 
			letterForm["vo.transfer_unit"].disabled=true;
			letterForm["vo.transfer_date"].disabled=true;
			//letterForm["vo.superior_no"].disabled=true;
		}

}









function change(type) {
  if (type == '+') {
    document.letterForm["vo.content"].style.posHeight=document.letterForm["vo.content"].scrollHeight;
  } else {
    document.letterForm["vo.content"].style.posHeight = "138";
  }
}






//����ҵ��ťJS

//����
function wreturn(url){
	//parent.location.href='javascript:history.go(-1);'
	parent.location.href=url;
}

///����  (ָ�೤һ���ϴ��������쵼����)
function Auditing_OnClick(url){
        xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width) / 2-100;
		yposition = (screen.height) / 2-100;
	}
	window.open(url,'ѡ����Ա', 'left=300,top=220,width='+xposition+',height='+yposition+',status=no,help=no,resizable=yes,scrollbars=yes');
}

//�˻����ļ�  (ָ�쵼����һ����������ĺ��˻ص���һ��������)
function ReAuditing_OnClick(url){
 	if(!confirm("��ȷ���Ƿ��˻ؾ����˴���"))
 	return false;
	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width) / 2-100;
		yposition = (screen.height) / 2-100;
	}

	window.open(url,'��ʾ��Ϣ', 'left=300,top=220,width='+xposition+',height='+yposition+',status=no,help=no,resizable=yes,scrollbars=yes');

}


//�������  (ָ����쵼��д���,������ֻ��)
function CheckApprove_OnClick(url){
	parent.location.href=url;
}

//����  (ָ����쵼��д���,������ֻ��)
function Enclosure_OnClick(url){
	parent.location.href=url;
}

//��ӡ�ŷ�����
function PrintOut_OnClick(url){
	parent.location.href=url;
}

//���촦��
function Exchange_OnClick(url){
	parent.location.href=url;
// 	if(!confirm("��ȷ���Ƿ񷢺���"))
// 	return false;
//	    if(document.form1.xf_no.value==""||document.form1.xf_no.value==null)
//	    {
//	        alert("�뱣�����ɵ��ű�ź��ٽ���");
//	        return;
//	    }
//		xposition=0; yposition=0;
//	if ((parseInt(navigator.appVersion) >= 4 ))
//	{
//		xposition = (screen.width - 500) / 2;
//		yposition = (screen.height - 400) / 2;
//	}
//

}


//���̸���
function FlowTrace_OnClick(url){
	parent.location.href=url;
}

//��ʷ
function CheckHistory_OnClick(url)
{
	if(document.letterForm["vo.name"].value!=null&&document.letterForm["vo.name"].value!="")
	{
		 window.open(url+"&name="+document.letterForm["vo.name"].value+"&orderFid=.registe_date&orderType=desc","", "height=600, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=no");
	}else{
		alert("�ŷ��˱�����д");
	}
}

//�鵵
function Pigeonhole_OnClick(url){
	parent.location.href=url;
}

//�����Ų�
function cmdSCheck_OnClick(url){
	parent.location.href=url;
}

//���ļ�¼
function EmitList_OnClick(url){
	parent.location.href=url;
	}



//�ύ
function Deportation_OnClick(pageUrl,take){
    if(take == "1"){
	      	if(!confirm("��ȷ���Ƿ��ύ��"))
 	        return false;
	}
	if(take == "2"){
	      	if(!confirm("��ȷ���Ƿ��˻أ�"))
 	        return false;
	}
	if(take == "3"){
	      	if(!confirm("��ȷ���Ƿ���ܴ���"))
 	        return false;
	}
	if(take == "4"){
	      	if(!confirm("��ȷ���Ƿ��������"))
 	        return false;
				if(document.letterForm["vo.xf_no"].value==""||document.letterForm["vo.xf_no"].value==null)
	    {
	        alert("�뱣�����ɵ��ű�ź��ٽ�������");
	        return;
	    }

	}
    if(take == "5"){
	      	if(!confirm("��ȷ���Ƿ��ᣡ"))
 	        return false;
	}

	parent.location.href=pageUrl;
}


//ͳ��
function statistics_OnClick(url){
	parent.location.href=url;
	}

