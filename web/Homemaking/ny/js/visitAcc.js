function chkSave2(stype)
{
	    if(document.visitForm.xf_no.value==""||document.visitForm.xf_no.value==null)
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
	if(document.visitForm.proc_status.value=="0")
		   document.visitForm.proc_status.value="1";
}
function ProConLetter()
{
	if(document.visitForm.proc_status.value=="1")
		document.visitForm.proc_status.value="0";
}


//�Ƿ�����Ϣ

function ShowDelivery1()
{
if (document.visitForm.report_day.checked == true) {
	document.visitForm.report_day_type.disabled=false;}
else{
	document.visitForm.report_day_type.disabled=true;
	}
}
function ShowDelivery2()
{
if (document.visitForm.report_month.checked == true) {
	document.visitForm.report_month_type.disabled=false;}
else{
	document.visitForm.report_month_type.disabled=true;
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
		var name= document.visitForm["vo.name"].value;
		if( name==""||name==null)
		{
			submitForm=false;
			alert("�ŷ��˱�����д");
			return;}
	   }
		//�ж����ε����Ƿ�Ϊ��
		if(submitForm)
	    {
		var area_c= document.visitForm["vo.duty_area_c"].value;
		if( area_c==""||area_c==null)
		{
			submitForm=false;
			alert("���ε�������ѡ��");
			return;}
	   }

	    //�ж��������
	    if(submitForm)
	    {
		var first_sort= document.visitForm["vo.first_sort_new_c"].value;
		var content_sort= document.visitForm["vo.contentNo_c"].value;
		var problem_show=document.visitForm["vo.content_sort"].value;
		var objective=document.visitForm["vo.objective_c"].value;
		if(content_sort=="" || content_sort == null)
		{

			if (problem_show != ""){
				submitForm=false;
				alert("�밴�µ����������ѡһ��");
				return;}
			else{
				submitForm=false;
				alert("������������д��");
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
			for (var i=0; i<document.visitForm["vo.people_num"].value.length; i++)
			{
			   temp = "" + document.visitForm["vo.people_num"].value.substring(i, i+1);
			   if (valid.indexOf(temp)=="-1")
				  ok="no";
			}
			if(ok=="no")
			{
				submitForm=false;
				alert("��������������д,���ұ���������");
				document.visitForm["vo.people_num"].focus();
				document.visitForm["vo.people_num"].select();
			}
			else
				submitForm=true;

	    }
	    //�ж�����
	    if(submitForm)
		{
			var valid = "0123456789";
			var ok = "yes";
			var temp;
			for (var i=0; i<document.visitForm["vo.age"].value.length; i++)
			{
			   temp = "" + document.visitForm["vo.age"].value.substring(i, i+1);
			   if (valid.indexOf(temp)=="-1")
				  ok="no";
			}
			if(ok=="no")
			{
				submitForm=false;
				alert("�������������");
				document.visitForm["vo.age"].focus();
				document.visitForm["vo.age"].select();
			}
			else
				submitForm=true;

	    }

	    //�ж����֤
		if(visitForm["vo.idcard"].value!="")
		{
			var card_id = visitForm["vo.idcard"].value;
			var sex="";
			var age=0;
			var birYear;
			var birMonth;
			var birDay;
			var today = new Date();
			var year = today.getFullYear();
			var month = today.getMonth() + 1;
			var date = today.getDate();
			var aChar;

			if(card_id.length == 15){
				aChar = card_id.charAt(14);
				var n = parseInt(aChar);

				if((n % 2) != 0){
					sex = "��";
				}
				else{
					sex = "Ů";
				}

				birYear = parseInt("19" + card_id.substring(6,8));
				birMonth = parseInt(card_id.substring(8,10));
				birDay = parseInt(card_id.substring(10,12));

				if(year > birYear) {
					if(month > birMonth){
						age = year - birYear;
					}
					else if(month < birMonth){
						age = year - birYear - 1;
					}
					else {
						if(date >= birDay) {
							age = year - birYear;
						}
						else {
							age = year - birYear - 1;
						}
					}
				    submitForm="true";
				}
				else {
					alert("���֤���������󣬳���������Ŵ���");
					submitForm="false";
				}
			}
			else if(card_id.length == 18){
				aChar = card_id.charAt(16);
				var n = parseInt(aChar);

				if((n % 2) != 0){
					sex = "��";
				}
				else{
					sex = "Ů";
				}
				birYear = parseInt(card_id.substring(6,10));
				birMonth = parseInt(card_id.substring(10,12));
				birDay = parseInt(card_id.substring(12,14));

				if(year > birYear) {
					if(month > birMonth){
						age = year - birYear;
					}
					else if(month < birMonth){
						age = year - birYear - 1;
					}
					else{
						if(date >= birDay) {
							age = year - birYear;
						}
						else {
							age = year - birYear - 1;
						}
					}
				    submitForm="true";
				}
				else{
					alert("���֤���������󣬳���������Ŵ���");
					submitForm="false";
				}
			}
			else{
				alert("���֤���������󣬺��볤�Ȳ��ԣ�");
				submitForm="false";
			}
		}

		//���ʱ��
	   	if(submitForm)
		   if(document.visitForm["vo.answer_date"].value!=""&&document.visitForm["vo.answer_date"].value!=null)
	          submitForm = chkdate(visitForm["vo.answer_date"].value);
		//�ж��ʱ�
	   	if(submitForm)
		   if(document.visitForm["vo.postcode"].value!=""&&document.visitForm["vo.postcode"].value!=null)
	          submitForm = isZipCode(document.visitForm["vo.postcode"].value);

		if(submitForm)
			visitForm.submit();
		else
			return;
}

function cmdReset_OnClick(){
	document.visitForm.reset();
}

//�жϸ���
//function checkScale()
//{
//	var selectedItem=document.visitForm.scale.selectedIndex;
//    var selectedText=document.visitForm.scale.options[selectedItem].text;
 //   var selectedValue=document.visitForm.scale.options[selectedItem].value;

//}

function Check_IDCard()
{
	if(document.visitForm["vo.idcard"].value=="" || document.visitForm["vo.idcard"].value==null)
		return;
	var card_id = visitForm["vo.idcard"].value;
	var sex="";
	var age=0;
	var birYear;
	var birMonth;
	var birDay;
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var date = today.getDate();
	var aChar;
	var ok="ok";

    if(card_id.length == 15){
		aChar = card_id.charAt(14);
		var n = parseInt(aChar);

		if((n % 2) != 0){
			sex = "��";
		}
		else{
			sex = "Ů";
		}

		birYear = parseInt("19" + card_id.substring(6,8));
		birMonth = parseInt(card_id.substring(8,10));
        birDay = parseInt(card_id.substring(10,12));

		if(year > birYear) {
			if(month > birMonth){
				age = year - birYear;
			}
			else if(month < birMonth){
				age = year - birYear - 1;
			}
			else {
				if(date >= birDay) {
					age = year - birYear;
				}
				else {
					age = year - birYear - 1;
				}
			}
		}
		else {
			alert("���֤���������󣬳���������Ŵ���");
			ok="cancel";
		}
	}
	else if(card_id.length == 18){
		aChar = card_id.charAt(16);
		var n = parseInt(aChar);

		if((n % 2) != 0){
			sex = "��";
		}
		else{
			sex = "Ů";
		}
        birYear = parseInt(card_id.substring(6,10));
		birMonth = parseInt(card_id.substring(10,12));
		birDay = parseInt(card_id.substring(12,14));
		//alert("birYear = " + birYear + "birMonth = " + birMonth + "birDay = " + birDay);
		//alert("year = " + year + "month = " + month + "date = " + date);

		if(year > birYear) {
			if(month > birMonth){
				age = year - birYear;
			}
			else if(month < birMonth){
				age = year - birYear - 1;
			}
			else{
				if(date >= birDay) {
					age = year - birYear;
				}
				else {
					age = year - birYear - 1;
				}
			}
		}
		else{
			alert("���֤���������󣬳���������Ŵ���");
			ok="cancel";
		}
	}
	else{
		alert("���֤���������󣬺��볤�Ȳ��ԣ�");
		ok="cancel";
    }


	if(sex=="��"){
		visitForm["vo.sex"][0].checked =true;
	}else if(sex=="Ů"){
		visitForm["vo.sex"][1].checked =true;
	}
	visitForm["vo.age"].value = age;


}

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
		visitForm["vo.first_sort_new_c"].value=aRetValue[1];
		visitForm["vo.contentNo_c"].value=aRetValue[2];
		visitForm["vo.content_sort"].value=aRetValue[0];
		visitForm.problem.value="problem="+aRetValue[1]+":"+aRetValue[2];

	}
}
/*
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
		visitForm["vo.attributeunit_c"].value=aRetValue[0];
		visitForm.showAttributeUnit.value=aRetValue[1];
		visitForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

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
		visitForm["vo.undertaker_c"].value=aRetValue[0];
		visitForm["vo.undertaker"].value=aRetValue[1];
		visitForm.undertaker.value="procunit="+aRetValue[0];
		visitForm["vo.attributeunit_c"].value=aRetValue[0];
		visitForm.showAttributeUnit.value=aRetValue[1];
		visitForm.AttributeUnit_Url.value="procunit="+aRetValue[0];
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
		visitForm["vo.attributeunit_c"].value=aRetValue[0];
		visitForm.showAttributeUnit.value=aRetValue[1];
		visitForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}


function cmdSelectProcUnit_onclick(heard,url)
{	
	var sRet = window.showModalDialog(heard+"/djcl/choose/ChooProcUnit.jsp?"+url,"","dialogHeight:500px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		visitForm["vo.undertaker_c"].value=aRetValue[0];
		visitForm["vo.undertaker"].value=aRetValue[1];
		visitForm.undertaker.value="procunit="+aRetValue[0];
		visitForm["vo.attributeunit_c"].value=aRetValue[0];
		visitForm.showAttributeUnit.value=aRetValue[1];
		visitForm.AttributeUnit_Url.value="procunit="+aRetValue[0];
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
	    alert("�����������Ϊ6λ���֣�");
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
		visitForm["vo.address_c"].value=saddress_deatil;
		visitForm["vo.append_address"].value=sxfr_append_address;
		visitForm["vo.address"].value=sxfr_address_detail;
		visitForm.address.value="address="+saddress_deatil+":"+sxfr_append_address;
        /**
		visitForm.link_address.value=saddress_deatil;
		visitForm.link_append_address.value=sxfr_append_address;
		visitForm.link_detail_address.value=sxfr_address_detail;
        visitForm.link_address_url.value="address="+saddress_deatil+":"+sxfr_append_address;
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
		visitForm["vo.address_c"].value=saddress_deatil;
		visitForm["vo.append_address"].value=sxfr_append_address;
		visitForm["vo.address"].value=sxfr_address_detail;
		visitForm.address.value="address="+saddress_deatil+":"+sxfr_append_address;
        /**
		visitForm.link_address.value=saddress_deatil;
		visitForm.link_append_address.value=sxfr_append_address;
		visitForm.link_detail_address.value=sxfr_address_detail;
        visitForm.link_address_url.value="address="+saddress_deatil+":"+sxfr_append_address;
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
		visitForm["vo.link_address_c"].value=saddress_deatil;
		visitForm["vo.link_append_address"].value=slink_append_address;
		visitForm["vo.link_address"].value=slink_address;
        visitForm.link_address_url.value="address="+saddress_deatil+":"+slink_append_address;

		visitForm["vo.address_c"].value=saddress_deatil;
		visitForm["vo.append_address"].value=slink_append_address;
		visitForm["vo.address"].value=slink_address;
		visitForm.address.value="address="+saddress_deatil+":"+slink_append_address;
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
		visitForm["vo.link_address_c"].value=saddress_deatil;
		visitForm["vo.link_append_address"].value=slink_append_address;
		visitForm["vo.link_address"].value=slink_address;
        	visitForm.link_address_url.value="address="+saddress_deatil+":"+slink_append_address;

		visitForm["vo.address_c"].value=saddress_deatil;
		visitForm["vo.append_address"].value=slink_append_address;
		visitForm["vo.address"].value=slink_address;
		visitForm.address.value="address="+saddress_deatil+":"+slink_append_address;
	}

}

function chkScale()
{
	var selectedValue = visitForm["vo.scale"][0].value;
    for(var i=0;i<visitForm["vo.scale"].length;i++){
		if(visitForm["vo.scale"][i].checked){
		selectedValue = visitForm["vo.scale"][i].value;
		}
	}
    if(selectedValue=="����")
       visitForm["vo.people_num"].value="1" ;
    if(selectedValue=="Ⱥ���")
       visitForm["vo.people_num"].value="2" ;
    if(selectedValue=="�����")
       visitForm["vo.people_num"].value="5" ;
}


function chkPeopleNum()
{
	var peopleNum =  visitForm["vo.people_num"].value;
	if(peopleNum<5){
		visitForm["vo.scale"][0].checked =true;
	}else{
		visitForm["vo.scale"][1].checked =true;
	}
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

		visitForm["vo.case_address"].value=aRetValue[0];
		visitForm["vo.case_append_address"].value=aRetValue[1];
		visitForm["vo.case_address_c"].value=aRetValue[2];
		visitForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];
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

		visitForm["vo.case_address"].value=aRetValue[0];
		visitForm["vo.case_append_address"].value=aRetValue[1];
		visitForm["vo.case_address_c"].value=aRetValue[2];
		visitForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];
	}
}



function change(type) {
  if (type == '+') {
    document.visitForm["vo.content"].style.posHeight=document.visitForm["vo.content"].scrollHeight;
  } else {
    document.visitForm["vo.content"].style.posHeight = "138";
  }
}





//����ҵ��ťJS

//����
function wreturn(url){
	//parent.location.href='javascript:history.go(-1);'
	parent.location.href=url;
}

//�ύ  (ָ����Ա�ǼǺ�δ�ܴ𸴵����ƽ��೤����)
//function Deportation_OnClick(url){
 //	if(!confirm("��ȷ���Ƿ��ύ��"))
// 	return false;
//	parent.location.href=url;
//}

//�˻�  (ָ�೤һ���ڲ��ĺ��˻ع��������)
function UntRead_OnClick(url){
	parent.location.href=url;
}

//���ܴ���  (ָ�೤��ʽȷ�ϴ���)
function Accept_OnClick(url){
 	if(!confirm("��ȷ���Ƿ���ܴ���"))
 	return false;
	parent.location.href=url;
}

//����  (ָ�೤һ���ϴ��������쵼����)
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

//��������  (��������)
function GoEndTask_OnClick(url){
 	if(!confirm("��ȷ�Ͻ�������"))
 	return false;
	    if(document.form1.xf_no.value==""||document.form1.xf_no.value==null)
	    {
	        alert("�뱣�����ɵ��ű�ź��ٽ�������");
	        return;
	    }
	parent.location.href=url;
}

//���
function EndTask_OnClick(url){
 	if(!confirm("��ȷ���Ƿ��᣿\n���������޸ģ�"))
 	return false;
	    if(document.form1.xf_no.value==""||document.form1.xf_no.value==null)
	    {
	        alert("�뱣�����ɵ��ű�ź��ٰ��");
	        return;
	    }
	parent.location.href=url;
}

//���̸���
function FlowTrace_OnClick(url){
	parent.location.href=url;
}

//��ʷ
function CheckHistory_OnClick(url)
{
	if(document.visitForm["vo.name"].value!=null&&document.visitForm["vo.name"].value!="")
	{
		 window.open(url+"&name="+document.visitForm["vo.name"].value+"&orderFid=.registe_date&orderType=desc" ,"", "height=600, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=no");
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
		if(document.visitForm["vo.xf_no"].value==""||document.visitForm["vo.xf_no"].value==null)
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

/**
	��֤�绰����Ч��
	
	Ҫ��   
	  ����(1)�绰���������֡�"("��")"��"-"����   
	  ����(2)�绰����Ϊ3��8λ   
	  ����(3)����绰�����а��������ţ���ô����Ϊ��λ����λ   
	  ����(4)������"("��")"��"-"���������ָ���   
	  ����(5)�ƶ��绰����Ϊ11��12λ�����Ϊ12λ,��ô��һλΪ0   
	  ����(6)11λ�ƶ��绰����ĵ�һλ�͵ڶ�λΪ"13"   
	  ����(7)12λ�ƶ��绰����ĵڶ�λ�͵���λΪ"13" 
	
	*/
	function PhoneCheck(j,s)   {   
	  var   str=s;   
	  var   reg=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3,5][0-9]{9}$)/   
	  if(str!=""){
		  if(reg.test(str)==false){
		  	alert("���������ϵ�绰����ȷ����");
		  	//document.forms[0].elements[j].value="";
			//document.forms[0].elements[j].focus();
			document.forms[0].elements[j].select();
		  } 
		} 
	} 