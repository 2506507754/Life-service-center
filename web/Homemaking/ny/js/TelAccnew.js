function fPopUpCalendarDlg(ctrlobj)
{
	showx = event.screenX - event.offsetX - 4 - 210 ; // + deltaX;
	showy = event.screenY - event.offsetY + 18; // + deltaY;
	newWINwidth = 210 + 4 + 18;

	retval = window.showModalDialog("../../javascript/popupWindow/calendardlg.htm", "", "dialogWidth:197px; dialogHeight:230px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "  );
	if( retval != null ){
		ctrlobj.value = retval;
	}else{
		//alert("canceled");
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

	if(document.TelAccForm.check.value=="2" && document.TelAccForm["vo.case_address_c"].value=="440001000000"){
 		if(!confirm("��ȷ�ϰ������Ƿ�ΪϵͳĬ�ϵص㣡"))
 		return false;
	}
	  	//�ж��ŷ���
	    if(submitForm)
	    {
		if (document.getElementById("name").value==""||document.getElementById("name").value==null)
			{
				submitForm=false;
				alert("�ŷ��˱�����д");
			}
			else
			{
				submitForm=true;
			}
	    }
	    
	    //�ж����ε����Ƿ�Ϊ��
		if(submitForm)
	    {
			var area_c= document.TelAccForm["vo.duty_area_c"].value;
			if( area_c==""||area_c==null)
		{
			submitForm=false;
			alert("���ε�������ѡ��");
			return;}
	   	}

	    //�ж��������
	    if(submitForm)
	    {
		var first_sort= document.TelAccForm["vo.first_sort_new_c"].value;
		var content_sort= document.TelAccForm["vo.contentNo_c"].value;
		var objective=document.TelAccForm["vo.objective_c"].value;
		var problem_show=document.TelAccForm["vo.content_sort"].value;
		if(content_sort=="" || content_sort == null)
		{
			if (problem_show != "")
				{submitForm=false;
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

	    //�ж��ظ����ô���
	    if(submitForm)
		{
			var valid = "0123456789"
			var ok = "yes";
			var temp;
			for (var i=0; i<document.getElementById("repeat_time").value.length; i++) {
			temp = "" + document.getElementById("repeat_time").value.substring(i, i+1);
			if (valid.indexOf(temp) == "-1") ok = "no";
			}
			if(ok=="no")
			{
				submitForm=false;
				//alert("�ظ����ô���������д,���ұ���������");
				document.getElementById("repeat_time").focus();
				document.getElementById("repeat_time").select();
			}
			else
				submitForm=true;

	    }

	    //�ж�����
	    if(submitForm)
		{
			var valid = "0123456789"
			var ok = "yes";
			var temp;
			for (var i=0; i<document.getElementById("age").value.length; i++) {
			temp = "" + document.getElementById("age").value.substring(i, i+1);
			if (valid.indexOf(temp) == "-1") ok = "no";
			}
			if(ok=="no")
			{
				submitForm=false;
				alert("�������������");
				document.getElementById("age").focus();
				document.getElementById("age").select();
			}
			else
				submitForm=true;

	    }

		//���ʱ��
	   	if(submitForm)
		   if(document.getElementById("hdate1").value!=""&&document.getElementById("hdate1").value!=null)
	          submitForm = chkdate(document.getElementById("hdate1").value);
		//�ж��ʱ�
	   	if(submitForm)
		   if(document.getElementById("postcode").value!=""&&document.getElementById("postcode").value!=null)
	          submitForm = isZipCode(document.getElementById("postcode").value);

		if(submitForm){

			TelAccForm.submit();
		}else{
			return;
		}
}



function cmdReset_OnClick(){
	TelAccForm.reset();
}


function cmdSelectProblem_onclick(url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 300) / 2;
	}
	var sRet = window.showModalDialog("../djcl/choose/ChooProblem_new.jsp?"+url,"", "dialogWidth:350px; dialogHeight:300px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
		return;
	}else{
		//TelAccForm.problem_show.value=sRet;
		var aRetValue=sRet.split(":");
		TelAccForm["vo.first_sort_new_c"].value=aRetValue[1];
		TelAccForm["vo.contentNo_c"].value=aRetValue[2];
		TelAccForm["vo.content_sort"].value=aRetValue[0];
		TelAccForm.problem.value="problem="+aRetValue[1]+":"+aRetValue[2];

	}
}
/*
function cmdAttributeUnit_onclick(url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 280) / 2;
	}
	var sRet = window.showModalDialog("../djcl/choose/ChooProcUnit.jsp?"+url,"", "dialogWidth:350px; dialogHeight:280px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
               //alert("not value");
		return;
	}else{
		var aRetValue=sRet.split(":");
		TelAccForm["vo.attributeunit_c"].value=aRetValue[0];
		TelAccForm.ShowAttributeUnit.value=aRetValue[1];
		TelAccForm.AttributeUnit_Url.value="procunit="+aRetValue[0];


	}
}

//�⽻�쵥λ
function cmdSelectProcUnit_onclick(url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 280) / 2;
	}
	var sRet = window.showModalDialog("../djcl/choose/ChooProcUnit.jsp?"+url,"", "dialogWidth:350px; dialogHeight:280px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
                TelAccForm["vo.undertaker_c"].value=aRetValue[0];
		TelAccForm["vo.undertaker"].value=aRetValue[1];
		TelAccForm["vo.attributeunit_c"].value=aRetValue[0];
		TelAccForm.ShowAttributeUnit.value=aRetValue[1];
		TelAccForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}
*/
function cmdAttributeUnit_onclick(url)
{	
	var sRet = window.showModalDialog("../djcl/choose/ChooProcUnit.jsp?"+url,"","dialogHeight:500px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		TelAccForm["vo.attributeunit_c"].value=aRetValue[0];
		TelAccForm.ShowAttributeUnit.value=aRetValue[1];
		TelAccForm.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}


function cmdSelectProcUnit_onclick(url)
{	
	var sRet = window.showModalDialog("../djcl/choose/ChooProcUnit.jsp?"+url,"","dialogHeight:500px; dialogWidth: 500px; center: Yes; help: no; resizable: no; status: no;");
	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		TelAccForm["vo.undertaker_c"].value=aRetValue[0];
		TelAccForm["vo.undertaker"].value=aRetValue[1];
		TelAccForm.undertaker.value="procunit="+aRetValue[0];
		TelAccForm["vo.attributeunit_c"].value=aRetValue[0];
		TelAccForm.ShowAttributeUnit.value=aRetValue[1];
		TelAccForm.AttributeUnit_Url.value="procunit="+aRetValue[0];
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
	    alert("����һ����������ʱ��Ƿ�Ϊ���֣�");
	    return false;
	}

	if (s.length==6){
	   return true;
	}else{
	   alert("������������볤��Ϊ6��");
	   return false;
	}
}


function cmdSelectLinkAddress_onclick(url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog("../djcl/choose/ChooAddress.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		TelAccForm["vo.link_address"].value= aRetValue[0];
		 TelAccForm["vo.link_append_address"].value=aRetValue[1];
		 TelAccForm["vo.link_address_c"].value=aRetValue[2];
		 TelAccForm.address.value="address=" + aRetValue[2] + ":" + aRetValue[1];

	}
}

function cmdSelectLinkAddress_GZ_onclick(url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog("../djcl/choose/ChooAddress_GZ.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
         TelAccForm["vo.link_address"].value= aRetValue[0];
		 TelAccForm["vo.link_append_address"].value=aRetValue[1];
		 TelAccForm["vo.link_address_c"].value=aRetValue[2];
		 TelAccForm.address.value="address=" + aRetValue[2] + ":" + aRetValue[1];

	}
}


function cmdSelectCaseAddress_onclick(url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog("../djcl/choose/ChooAddress.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
		 TelAccForm["vo.case_address"].value=aRetValue[0];
		 TelAccForm["vo.case_append_address"].value=aRetValue[1];
		 TelAccForm["vo.case_address_c"].value=aRetValue[2];
         TelAccForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];

	}
}

function cmdSelectCaseAddress_GZ_onclick(url)
{

	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}

	var sRet = window.showModalDialog("../djcl/choose/ChooAddress_GZ.jsp?"+url,"", "dialogWidth:410px; dialogHeight:330px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");

	if(sRet==null){
		return;
	}else{
		var aRetValue=sRet.split(":");
		var sDisplayName="";
         TelAccForm["vo.case_address"].value=aRetValue[0];
		 TelAccForm["vo.case_append_address"].value=aRetValue[1];
		 TelAccForm["vo.case_address_c"].value=aRetValue[2];
         TelAccForm.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];

	}
}

function change(type) {
  if (type == '+') {
	
    //document.TelAccForm["vo.content"].style.posHeight=document.TelAccForm["vo.content"].scrollHeight + "1" ;
	if (document.TelAccForm["vo.content"].rows<30)  {	
		document.TelAccForm["vo.content"].rows += 5;
	} 	
	//document.TelAccForm["vo.content"].style.posHeight = "600";
  } else {	
    document.TelAccForm["vo.content"].style.posHeight = "138";
  }
}


function changeMail(type) {
  if (type == '+') {
	
    //document.TelAccForm["vo.content"].style.posHeight=document.TelAccForm["vo.content"].scrollHeight + "1" ;
	if (document.MailAccForm["vo.content"].rows<30)  {	
		document.MailAccForm["vo.content"].rows += 5;
	} 	
	//document.TelAccForm["vo.content"].style.posHeight = "600";
  } else {	
    document.MailAccForm["vo.content"].style.posHeight = "138";
  }
}



//����ҵ��ťJS

//����
function wreturn(url){
	//parent.location.href='javascript:history.go(-1);'
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


}


//���̸���
function FlowTrace_OnClick(url){
	parent.location.href=url;
}

//��ʷ
function CheckHistory_OnClick(url)
{
	if((document.TelAccForm["vo.name"].value!=null&&document.TelAccForm["vo.name"].value!="")||(document.TelAccForm["vo.phone"].value!=null&&document.TelAccForm["vo.phone"].value!=""))
	{
		var returnvalue=window.showModalDialog(url+"&name="+document.TelAccForm["vo.name"].value+"&phone="+document.TelAccForm["vo.phone"].value+"&orderFid=.registe_date&orderType=desc", "", "dialogWidth:800px; dialogHeight:600px; dialogLeft:0px; dialogTop:0px; status:no; directories:yes;scrollbars:yes;Resizable:yes;"  );
		//alert(returnvalue);
		if(returnvalue!=null){
		var raRetValue = returnvalue.split("$");
		if(document.TelAccForm["vo.repeat_time"].value==0){
		document.TelAccForm["vo.repeat_time"].value = Number(raRetValue[1])+1;
		}else{
		document.TelAccForm["vo.repeat_time"].value = Number(document.TelAccForm["vo.repeat_time"].value)+1;
		}
		if((document.TelAccForm["vo.unit"].value=="null"||document.TelAccForm["vo.unit"].value=="" )&&raRetValue[2]!="null"){
		document.TelAccForm["vo.unit"].value = raRetValue[2];
		}
		if((document.TelAccForm["vo.iden_c"].value=="null"||document.TelAccForm["vo.iden_c"].value=="" )&&raRetValue[3]!="null"){
		document.TelAccForm["vo.iden_c"].value = raRetValue[3];
		}
		//if((document.TelAccForm["vo.phone"].value=="null"||document.TelAccForm["vo.phone"].value=="" )&&raRetValue[4]!="null"){
			//document.TelAccForm["vo.phone"].value = raRetValue[4];
		//}
		if((document.TelAccForm["vo.postcode"].value=="null"||document.TelAccForm["vo.postcode"].value=="" )&&raRetValue[5]!="null"){
		document.TelAccForm["vo.postcode"].value = raRetValue[5];
		}
		if((document.TelAccForm["vo.link_address_c"].value=="440001000000")&&raRetValue[6]!="null"){
		 document.TelAccForm["vo.link_address_c"].value = raRetValue[6];
		}
		if((document.TelAccForm["vo.link_append_address"].value=="null"||document.TelAccForm["vo.link_append_address"].value=="" )&&raRetValue[7]!="null"){
		 document.TelAccForm["vo.link_append_address"].value = raRetValue[7];
		}
		if((document.TelAccForm["vo.link_address"].value=="�㶫ʡ������" )&&raRetValue[8]!="null"){
		 document.TelAccForm["vo.link_address"].value = raRetValue[8];
		}
		if((document.TelAccForm["vo.case_address_c"].value=="440001000000")&&raRetValue[9]!="null"){
		 document.TelAccForm["vo.case_address_c"].value = raRetValue[9];
		}
		if((document.TelAccForm["vo.case_append_address"].value=="null"|| document.TelAccForm["vo.case_append_address"].value=="") &&raRetValue[9]!="null"){
		document.TelAccForm["vo.case_append_address"].value = raRetValue[10];
		}
		if((document.TelAccForm["vo.case_address"].value=="�㶫ʡ������") &&raRetValue[11]!="null"){
		document.TelAccForm["vo.case_address"].value = raRetValue[11];
		}
		 //document.TelAccForm["vo.first_sort_c"].value = raRetValue[12];
		 //document.TelAccForm["vo.content_sort_c"].value = raRetValue[13];
		 if((document.TelAccForm["vo.first_sort_new_c"].value=="null"||document.TelAccForm["vo.first_sort_new_c"].value=="" )&&raRetValue[14]!="null"){
		  document.TelAccForm["vo.first_sort_new_c"].value = raRetValue[14];
		 }
		if((document.TelAccForm["vo.content_sort_new_c"].value =="null"||document.TelAccForm["vo.content_sort_new_c"].value =="" )&&raRetValue[15]!="null"){
		document.TelAccForm["vo.content_sort_new_c"].value = raRetValue[15];
		
		}
		if((document.TelAccForm["vo.content_sort"].value=="null"||document.TelAccForm["vo.content_sort"].value=="" )&&raRetValue[16]!="null"){
		 document.TelAccForm["vo.content_sort"].value = raRetValue[16];
		}
		if((document.TelAccForm["vo.objective_c"].value == "null" ||  document.TelAccForm["vo.objective_c"].value =="" )&&raRetValue[17]!="null"){
		 document.TelAccForm["vo.objective_c"].value = raRetValue[17];
		}
		if((document.TelAccForm["vo.outstand_c"].value== "null"||document.TelAccForm["vo.outstand_c"].value=="" )&&raRetValue[18]!="null"){
		 document.TelAccForm["vo.outstand_c"].value = raRetValue[18];
		}
		
		 if((document.TelAccForm["vo.title"].value=="null"|| document.TelAccForm["vo.title"].value=="" )&&raRetValue[19]!="null"){
		 document.TelAccForm["vo.title"].value = raRetValue[19];
		}
		 if((document.TelAccForm["vo.content"].value=="null"|| document.TelAccForm["vo.content"].value=="" )&&raRetValue[31]!="null"){
		 document.TelAccForm["vo.content"].value = raRetValue[31];
		}
		/*
		 if((document.TelAccForm["vo.undertaker_c"].value=="null"||document.TelAccForm["vo.undertaker_c"].value=="" )&&raRetValue[21]!="null"){
		 document.TelAccForm["vo.undertaker_c"].value = raRetValue[21];
		}
		
		 if((document.TelAccForm["vo.undertaker"].value =="null"|| document.TelAccForm["vo.undertaker"].value =="" )&&raRetValue[22]!="null"){
		 document.TelAccForm["vo.undertaker"].value = raRetValue[22];
		
		}
		
		 if((document.TelAccForm["vo.answer_date"].value=="null" ||document.TelAccForm["vo.answer_date"].value=="" )&&raRetValue[23]!="null"){
		 document.TelAccForm["vo.answer_date"].value = raRetValue[23];
		}
		*/
		
		if((document.TelAccForm["vo.xf_no"].value=="null" ||document.TelAccForm["vo.xf_no"].value=="" )&&raRetValue[24]!="null"&&raRetValue[0]==3&&raRetValue[29]=="city"){
		 document.TelAccForm["vo.xf_no"].value = raRetValue[24];
		}
		  if((document.TelAccForm["vo.age"].value=="null"||document.TelAccForm["vo.age"].value=="null"||document.TelAccForm["vo.age"].value==0 )&&raRetValue[25]!="null"){
		 document.TelAccForm["vo.age"].value = raRetValue[25];
		}
		/*
		if(raRetValue[26]!="null"&&raRetValue[26].trim()=="Ů"){
				 document.TelAccForm["vo.sex"][1].checked =true;
			}
		*/
		/*
		 if((document.TelAccForm["vo.idcard"].value=="null" ||document.TelAccForm["vo.idcard"].value=="" )&&raRetValue[27]!="null"){
		 document.TelAccForm["vo.idcard"].value = raRetValue[27];
		}
		*/
		 if((document.TelAccForm["vo.name"].value=="null" ||document.TelAccForm["vo.name"].value=="" )&&raRetValue[28]!="null"){
		 document.TelAccForm["vo.name"].value = raRetValue[28];
		}
		//alert(raRetValue[15]);
		if((document.TelAccForm["vo.contentNo_c"].value =="null"||document.TelAccForm["vo.contentNo_c"].value =="" )&&raRetValue[15]!="null"){
		  document.TelAccForm["vo.contentNo_c"].value = raRetValue[15];
		
		}
		 if((document.TelAccForm["vo.process_memo"].value =="null"||document.TelAccForm["vo.process_memo"].value =="" )&&raRetValue[30]!="null"){
		  document.TelAccForm["vo.process_memo"].value = "���ŷü���"+raRetValue[30]+"�����ظ�����";
		 }

}
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
		if(document.TelAccForm["vo.xf_no"].value=="" || document.TelAccForm["vo.xf_no"].value==null)
	    {
	        alert("�뱣�����ɵ��ű�ź��ٽ�������");
	        return;
	    }

	}
    if(take == "5"){
	    if(!confirm("��ȷ���Ƿ��᣿\n���������޸ģ�"))
            	return false;
	    if(document.TelAccForm["vo.xf_no"].value=="" || document.TelAccForm["vo.xf_no"].value==null)
	    {
	        alert("�뱣�����ɵ��ű�ź��ٰ��");
	        return;
	    }
	}

	parent.location.href=pageUrl;
}


