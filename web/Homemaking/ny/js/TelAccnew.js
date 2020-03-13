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

//判断表单中必须输入域不能为空
function cmdSave_OnClick()
{
    var boxLength_con;
    var selectedItem;
    var selectedValue;
    var selectedItem1;
    var selectedValue1;
    var submitForm=true;

	if(document.TelAccForm.check.value=="2" && document.TelAccForm["vo.case_address_c"].value=="440001000000"){
 		if(!confirm("您确认案发地是否为系统默认地点！"))
 		return false;
	}
	  	//判断信访人
	    if(submitForm)
	    {
		if (document.getElementById("name").value==""||document.getElementById("name").value==null)
			{
				submitForm=false;
				alert("信访人必须填写");
			}
			else
			{
				submitForm=true;
			}
	    }
	    
	    //判断责任地区是否为空
		if(submitForm)
	    {
			var area_c= document.TelAccForm["vo.duty_area_c"].value;
			if( area_c==""||area_c==null)
		{
			submitForm=false;
			alert("责任地区必须选择");
			return;}
	   	}

	    //判断问题分类
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
				alert("请按新的问题分类重选一次");
				return;}
			else{
				submitForm=false;
				alert("一级问题、二级问题和三级问题必须填写");
				return;}
		}
	   }
	    //判断性质分类
	    if(submitForm)
	    {
		if(objective==""||objective==null)
		{
			submitForm=false;
			alert("性质分类必须选择");
			return;}
	    }

	    //判断重复来访次数
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
				//alert("重复来访次数必须填写,而且必须是数字");
				document.getElementById("repeat_time").focus();
				document.getElementById("repeat_time").select();
			}
			else
				submitForm=true;

	    }

	    //判断年龄
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
				alert("年龄必须是数字");
				document.getElementById("age").focus();
				document.getElementById("age").select();
			}
			else
				submitForm=true;

	    }

		//检查时间
	   	if(submitForm)
		   if(document.getElementById("hdate1").value!=""&&document.getElementById("hdate1").value!=null)
	          submitForm = chkdate(document.getElementById("hdate1").value);
		//判断邮编
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

//拟交办单位
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
			alert("请用'-'作为分隔符！");
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
		alert("日期输入错误：请用'-'作为分隔符！");
		return false;
	}
	if (!((1<=month) && (12>=month) && (31>=day) && (1<=day)) )
	{
		alert ("日期输入错误：错误的月份或天数！");
		return false;
	}
	if (!((year % 4)==0) && (month==2) && (day==29))
	{
		alert ("日期输入错误：这一年不是闰年！");
		return false;
	}
	if ((month<=7) && ((month % 2)==0) && (day>=31))
	{
		alert ("日期输入错误：这个月只有30天！");
		return false;
	}
	if ((month>=8) && ((month % 2)==1) && (day>=31))
	{
		alert ("日期输入错误：这个月只有30天！");
		return false;
	}
	if ((month==2) && (day==30))
	{
		alert("日期输入错误：2月永远没有这一天！");
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
	    alert("请检查一下您输入的邮编是否为数字！");
	    return false;
	}

	if (s.length==6){
	   return true;
	}else{
	   alert("输入的邮政编码长度为6！");
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



//其它业务按钮JS

//返回
function wreturn(url){
	//parent.location.href='javascript:history.go(-1);'
	parent.location.href=url;
}






//送审  (指班长一级上处长以上领导送审)
function Auditing_OnClick(url){
        xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width) / 2-100;
		yposition = (screen.height) / 2-100;
	}
	window.open(url,'选择人员', 'left=300,top=220,width='+xposition+',height='+yposition+',status=no,help=no,resizable=yes,scrollbars=yes');
}

//退回审阅件  (指领导把下一级送审件审阅后退回到下一级经办人)
function ReAuditing_OnClick(url){
 	if(!confirm("您确认是否退回经办人处理！"))
 	return false;
	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width) / 2-100;
		yposition = (screen.height) / 2-100;
	}

	window.open(url,'提示信息', 'left=300,top=220,width='+xposition+',height='+yposition+',status=no,help=no,resizable=yes,scrollbars=yes');

}

//审阅意见  (指审核领导填写意见,其他人只读)
function CheckApprove_OnClick(url){
	parent.location.href=url;
}

//附件  (指审核领导填写意见,其他人只读)
function Enclosure_OnClick(url){
	parent.location.href=url;
}

//打印信访内容
function PrintOut_OnClick(url){
	parent.location.href=url;
}

//交办处理
function Exchange_OnClick(url){
	parent.location.href=url;


}


//流程跟踪
function FlowTrace_OnClick(url){
	parent.location.href=url;
}

//历史
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
		if((document.TelAccForm["vo.link_address"].value=="广东省广州市" )&&raRetValue[8]!="null"){
		 document.TelAccForm["vo.link_address"].value = raRetValue[8];
		}
		if((document.TelAccForm["vo.case_address_c"].value=="440001000000")&&raRetValue[9]!="null"){
		 document.TelAccForm["vo.case_address_c"].value = raRetValue[9];
		}
		if((document.TelAccForm["vo.case_append_address"].value=="null"|| document.TelAccForm["vo.case_append_address"].value=="") &&raRetValue[9]!="null"){
		document.TelAccForm["vo.case_append_address"].value = raRetValue[10];
		}
		if((document.TelAccForm["vo.case_address"].value=="广东省广州市") &&raRetValue[11]!="null"){
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
		if(raRetValue[26]!="null"&&raRetValue[26].trim()=="女"){
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
		  document.TelAccForm["vo.process_memo"].value = "此信访件与"+raRetValue[30]+"号属重复来访";
		 }

}
}else{
		alert("信访人必须填写");
	}
}


//归档
function Pigeonhole_OnClick(url){
	parent.location.href=url;
}

//问题排查
function cmdSCheck_OnClick(url){
	parent.location.href=url;
}

//发文记录
function EmitList_OnClick(url){
	parent.location.href=url;
	}



//提交
function Deportation_OnClick(pageUrl,take){
    if(take == "1"){
	      	if(!confirm("您确认是否提交！"))
 	        return false;
	}
	if(take == "2"){
	      	if(!confirm("您确认是否退回！"))
 	        return false;
	}
	if(take == "3"){
	      	if(!confirm("您确认是否接受处理！"))
 	        return false;
	}
	if(take == "4"){
	      	if(!confirm("您确认是否结束办理！"))
 	        return false;
		if(document.TelAccForm["vo.xf_no"].value=="" || document.TelAccForm["vo.xf_no"].value==null)
	    {
	        alert("请保存生成电信编号后，再结束办理");
	        return;
	    }

	}
    if(take == "5"){
	    if(!confirm("您确认是否办结？\n办结后不能再修改！"))
            	return false;
	    if(document.TelAccForm["vo.xf_no"].value=="" || document.TelAccForm["vo.xf_no"].value==null)
	    {
	        alert("请保存生成电信编号后，再办结");
	        return;
	    }
	}

	parent.location.href=pageUrl;
}


