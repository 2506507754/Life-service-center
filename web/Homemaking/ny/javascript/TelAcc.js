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
	if(document.form1.check.value=="2" && document.form1.case_address.value=="440001000000"){
 		if(!confirm("您确认案发地是否为系统默认地点！"))
 		return false;	
	}
	  	//判断信访人
	    if(submitForm) 
	    {
		if (document.form1.name.value==""||document.form1.name.value==null)
			{
				submitForm=false;
				alert("信访人必须填写");
			}
			else
			{
				submitForm=true;
			}
	    }
	    
	    //判断问题分类
	    if(submitForm) 
	    {
		var first_sort= document.form1.first_sort.value;
		var content_sort= document.form1.content_sort.value;
		var objective=document.form1.objective.value;
		var problem_show=document.form1.problem_show.value;
		if((first_sort==""||first_sort==null)&&(content_sort==""||content_sort==null))
		{
			if (problem_show != "")
				{submitForm=false;
				alert("请按新的问题分类重选一次");
				return;}
			else{
				submitForm=false;
				alert("一级问题和二级问题必须填写");
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
			for (var i=0; i<document.form1.repeat_time.value.length; i++) {
			temp = "" + document.form1.repeat_time.value.substring(i, i+1);
			if (valid.indexOf(temp) == "-1") ok = "no";
			}
			if(ok=="no")
			{
				submitForm=false;
				//alert("重复来访次数必须填写,而且必须是数字");
				document.form1.repeat_time.focus();
				document.form1.repeat_time.select();
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
			for (var i=0; i<document.form1.age.value.length; i++) {
			temp = "" + document.form1.age.value.substring(i, i+1);
			if (valid.indexOf(temp) == "-1") ok = "no";
			}
			if(ok=="no")
			{
				submitForm=false;
				alert("年龄必须是数字");
				document.form1.age.focus();
				document.form1.age.select();
			}
			else
				submitForm=true;
	
	    }
		
		//检查时间
	   	if(submitForm)
		   if(document.form1.answer_date.value!=""&&document.form1.answer_date.value!=null)
	          submitForm = chkdate(form1.answer_date.value);
		//判断邮编
	   	if(submitForm)
		   if(document.form1.postcode.value!=""&&document.form1.postcode.value!=null)
	          submitForm = isZipCode(document.form1.postcode.value);
	
		if(submitForm)
			form1.submit();
		else
			return;
}

//function cmdSave_OnClick(){
//	if(document.form1.taskname.value!="领导阅批"&&document.form1.taskname.value!="查询")
//	{
//		var ok=checkForm();
//		if(ok=="true"||ok==true)
//		{
//		  document.form1.submit();
//		}
//		else
//		{
//			return;
//		}
//	}
//	else
//	{
//		document.form1.submit();
//	}
//}

function cmdReset_OnClick(){
	form1.reset();
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
		//form1.problem_show.value=sRet;		
		var aRetValue=sRet.split(":");
		form1.first_sort.value=aRetValue[1];
		form1.content_sort.value=aRetValue[2];
		//if (aRetValue[3]==Null){
		//form1.Problem_old.value="099000000"}
		//else{
		//form1.Problem_old.value=aRetValue[3];
		//}
		form1.problem_show.value=aRetValue[0];
		form1.problem.value="problem="+aRetValue[1]+":"+aRetValue[2];

	}
}

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
		return;
	}else{
		var aRetValue=sRet.split(":");
		form1.AttributeUnit.value=aRetValue[0];
		form1.ShowAttributeUnit.value=aRetValue[1];
		form1.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}

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
		form1.undertaker2.value=aRetValue[0];
		form1.ShowUndertaker.value=aRetValue[1];
		form1.undertaker.value="procunit="+aRetValue[0];
		form1.AttributeUnit.value=aRetValue[0];
		form1.ShowAttributeUnit.value=aRetValue[1];
		form1.AttributeUnit_Url.value="procunit="+aRetValue[0];

	}
}

function cmdSelectRepeat_onclick(url)
{
	xposition=0; yposition=0;
	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 350) / 2;
		yposition = (screen.height - 280) / 2;
	}
	var sRet = window.showModalDialog("TelList.asp?"+url,"", "dialogWidth:350px; dialogHeight:280px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:no;resizable=no;");
	if(sRet==null){
		return;
	}else{
		//var aRetValue=sRet.split(":");
		//form1.undertaker2.value=aRetValue[0];
		//form1.ShowUndertaker.value=aRetValue[1];
		//form1.undertaker.value="procunit="+aRetValue[0];

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
		
		form1.link_detail_address.value=aRetValue[0];
		form1.link_append_address.value=aRetValue[1];
		form1.link_address.value=aRetValue[2];
		form1.address.value="address=" + aRetValue[2] + ":" + aRetValue[1];			
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
		
		form1.link_detail_address.value=aRetValue[0];
		form1.link_append_address.value=aRetValue[1];
		form1.link_address.value=aRetValue[2];
		form1.address.value="address=" + aRetValue[2] + ":" + aRetValue[1];			
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
		
		form1.case_detail_address.value=aRetValue[0];
		form1.case_append_address.value=aRetValue[1];
		form1.case_address.value=aRetValue[2];
		form1.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];			
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
		
		form1.case_detail_address.value=aRetValue[0];
		form1.case_append_address.value=aRetValue[1];
		form1.case_address.value=aRetValue[2];
		form1.case_address_c.value="address=" + aRetValue[2] + ":" + aRetValue[1];			
	}
}

 function CheckTel()
{
	xposition=0; yposition=0;

	if ((parseInt(navigator.appVersion) >= 4 ))
	{
		xposition = (screen.width - 410) / 2;
		yposition = (screen.height - 330) / 2;
	}
	    	var sql=document.form1.phone.value;
		if(document.form1.check.value=="2" && document.form1.phone.value!=""){ 	
			//window.open("TelList.asp?phone="+ sql);
			var sRetr = window.showModalDialog("TelList.asp?phone="+sql,"", "dialogWidth:800px; dialogHeight:500px; dialogLeft:"+xposition+"px; dialogTop:"+yposition+"px; status:no;scroll:yes;resizable=yes;");
			if(sRetr==null){
				return;
			}else{
				var raRetValue=sRetr.split("$");
				r_time=raRetValue[0]
				form1.repeat_time.value=raRetValue[0];
				if(r_time!=0)
				{
				form1.oldinstanceid.value=raRetValue[1];
				form1.title.value=raRetValue[2];
				//var s1=raRetValue[3];
				//s1=Replace(s1, "<br>", CHR(10));
				//form1.content.value=s1;
				form1.first_sort.value=raRetValue[4];
				form1.content_sort.value=raRetValue[5];
				form1.objective.value=raRetValue[6];
				form1.problem_show.value=raRetValue[7];
			form1.undertaker2.value=raRetValue[8];
			form1.ShowUndertaker.value=raRetValue[9];
			form1.undertaker.value="procunit="+raRetValue[8];
			form1.unit.value=raRetValue[10];
			form1.iden.value=raRetValue[11];
			form1.answer_date.value=raRetValue[12];
			//form1.phone.value=raRetValue[13];
			form1.postcode.value=raRetValue[14];
			form1.link_address.value=raRetValue[15];
			form1.link_append_address.value=raRetValue[16];
			form1.link_detail_address.value=raRetValue[17];
			form1.address.value=raRetValue[15]+raRetValue[16];
			form1.name.value=raRetValue[18];
				}
			}
		}
}