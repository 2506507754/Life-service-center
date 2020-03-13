function doDBClick(url,operator) {
		historyForm.instanceid[operator].checked=true;
        window.open(url+"&op=view","","height=600, width=800, top=50, left=50, toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=no");
}

function chooseItem0()
{
    var url;
	url = document.historyForm.urlvalue.value;
	if(url=="null"||url=="")
	{
	   alert("请选择");
	}
	else
	{
	 window.open(url+"&op=view","","height=600, width=800, top=50, left=50, toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=no");
	}

}

function chooseItem(type){
	
	var url = document.historyForm.urlvalue.value;
	if(url=="null"||url=="")
	{
	   alert("请选择");
	}else{
var raRetValue=historyForm.returnvalue.value.split("$");
//alert(raRetValue);
if(type=="visitAcc"){
if(window.opener.document.visitForm["vo.repeat_time"].value==0){
window.opener.document.visitForm["vo.repeat_time"].value = Number(raRetValue[1])+1;
}else{
window.opener.document.visitForm["vo.repeat_time"].value = Number(window.opener.document.visitForm["vo.repeat_time"].value)+1;
}
if((window.opener.document.visitForm["vo.unit"].value=="null"||window.opener.document.visitForm["vo.unit"].value=="" )&&raRetValue[2]!="null"){
window.opener.document.visitForm["vo.unit"].value = raRetValue[2];
}
if((window.opener.document.visitForm["vo.iden_c"].value=="null"||window.opener.document.visitForm["vo.iden_c"].value=="" )&&raRetValue[3]!="null"){
window.opener.document.visitForm["vo.iden_c"].value = raRetValue[3];
}
if((window.opener.document.visitForm["vo.phone"].value=="null"||window.opener.document.visitForm["vo.phone"].value=="" )&&raRetValue[4]!="null"){
window.opener.document.visitForm["vo.phone"].value = raRetValue[4];
}
if((window.opener.document.visitForm["vo.postcode"].value=="null"||window.opener.document.visitForm["vo.postcode"].value=="" )&&raRetValue[5]!="null"){
window.opener.document.visitForm["vo.postcode"].value = raRetValue[5];
}
if((window.opener.document.visitForm["vo.link_address_c"].value=="440001000000")&&raRetValue[6]!="null"){
 window.opener.document.visitForm["vo.link_address_c"].value = raRetValue[6];
}
if((window.opener.document.visitForm["vo.link_append_address"].value=="null"||window.opener.document.visitForm["vo.link_append_address"].value=="" )&&raRetValue[7]!="null"){
 window.opener.document.visitForm["vo.link_append_address"].value = raRetValue[7];
}
if((window.opener.document.visitForm["vo.link_address"].value=="广东省广州市")&&raRetValue[8]!="null"){
 window.opener.document.visitForm["vo.link_address"].value = raRetValue[8];
}
if((window.opener.document.visitForm["vo.case_address_c"].value=="440001000000")&&raRetValue[9]!="null"){
 window.opener.document.visitForm["vo.case_address_c"].value = raRetValue[9];
}
if((window.opener.document.visitForm["vo.case_append_address"].value=="null"|| window.opener.document.visitForm["vo.case_append_address"].value=="" )&&raRetValue[10]!="null"){
 window.opener.document.visitForm["vo.case_append_address"].value = raRetValue[10];
}
if((window.opener.document.visitForm["vo.case_address"].value=="广东省广州市" )&&raRetValue[11]!="null"){
 window.opener.document.visitForm["vo.case_address"].value = raRetValue[11];
}

 //window.opener.document.visitForm["vo.first_sort_c"].value = raRetValue[12];
 //window.opener.document.visitForm["vo.content_sort_c"].value = raRetValue[13];
 if((window.opener.document.visitForm["vo.first_sort_new_c"].value=="null"||window.opener.document.visitForm["vo.first_sort_new_c"].value=="" )&&raRetValue[14]!="null"){
  window.opener.document.visitForm["vo.first_sort_new_c"].value = raRetValue[14];
 }
//....................by zhoden...............................
//alert("content_sort=="+window.opener.document.visitForm["vo.contentNo_c"].value);
//alert("raRetValue=="+raRetValue[15]);

if((window.opener.document.visitForm["vo.contentNo_c"].value =="null"||window.opener.document.visitForm["vo.contentNo_c"].value =="" )&&raRetValue[15]!="null"){
//alert(raRetValue[15]);
window.opener.document.visitForm["vo.contentNo_c"].value = raRetValue[15];

}
if((window.opener.document.visitForm["vo.content_sort"].value=="null"||window.opener.document.visitForm["vo.content_sort"].value=="" )&&raRetValue[16]!="null"){
 window.opener.document.visitForm["vo.content_sort"].value = raRetValue[16];
}
if((window.opener.document.visitForm["vo.objective_c"].value == "null" ||  window.opener.document.visitForm["vo.objective_c"].value =="" )&&raRetValue[17]!="null"){
 window.opener.document.visitForm["vo.objective_c"].value = raRetValue[17];
}
if((window.opener.document.visitForm["vo.outstand_c"].value== "null"||window.opener.document.visitForm["vo.outstand_c"].value=="" )&&raRetValue[18]!="null"){
 window.opener.document.visitForm["vo.outstand_c"].value = raRetValue[18];
}

 if((window.opener.document.visitForm["vo.title"].value=="null"|| window.opener.document.visitForm["vo.title"].value=="" )&&raRetValue[19]!="null"){
 window.opener.document.visitForm["vo.title"].value = raRetValue[19];
}

 if((window.opener.document.visitForm["vo.content"].value=="null"|| window.opener.document.visitForm["vo.content"].value=="" )&&historyForm.returnvalue2.value!="null"){
 window.opener.document.visitForm["vo.content"].value = historyForm.returnvalue2.value;
}
/*
 if((window.opener.document.visitForm["vo.undertaker_c"].value=="null"||window.opener.document.visitForm["vo.undertaker_c"].value=="" )&&raRetValue[21]!="null"){
 window.opener.document.visitForm["vo.undertaker_c"].value = raRetValue[21];
}

 if((window.opener.document.visitForm["vo.undertaker"].value =="null"|| window.opener.document.visitForm["vo.undertaker"].value =="" )&&raRetValue[22]!="null"&&raRetValue[29]=="city"){
 window.opener.document.visitForm["vo.undertaker"].value = raRetValue[22];
}

 if((window.opener.document.visitForm["vo.answer_date"].value=="null" ||window.opener.document.visitForm["vo.answer_date"].value=="" )&&raRetValue[23]!="null"&&raRetValue[29]=="city"){
 window.opener.document.visitForm["vo.answer_date"].value = raRetValue[23];
}
*/
 if((window.opener.document.visitForm["vo.xf_no"].value=="null" ||window.opener.document.visitForm["vo.xf_no"].value=="" )&&raRetValue[24]!="null"&&raRetValue[0]==1&&raRetValue[29]=="city"){
 window.opener.document.visitForm["vo.xf_no"].value = raRetValue[24];
}


 if(window.opener.document.visitForm["vo.age"].value==0 &&raRetValue[25]!="null"){
 window.opener.document.visitForm["vo.age"].value = raRetValue[25];
}

if(raRetValue[26]!="null"&&raRetValue[26].trim()=="女"){
		 window.opener.document.visitForm["vo.sex"][1].checked =true;
	}

 if((window.opener.document.visitForm["vo.idcard"].value=="null" ||window.opener.document.visitForm["vo.idcard"].value=="" )&&raRetValue[27]!="null"){
 window.opener.document.visitForm["vo.idcard"].value = raRetValue[27];
}

 if((window.opener.document.visitForm["vo.name"].value=="null" ||window.opener.document.visitForm["vo.name"].value=="" )&&raRetValue[28]!="null"){
 window.opener.document.visitForm["vo.name"].value = raRetValue[28];
}
	
  if((window.opener.document.visitForm["vo.process_memo"].value=="null" ||window.opener.document.visitForm["vo.process_memo"].value=="" )&&raRetValue[30]!="null"){
 		window.opener.document.visitForm["vo.process_memo"].value = "此信访件与"+raRetValue[30]+"号属重复来访";
	}
}else if(type=="letterAcc"){

if(window.opener.document.letterForm["vo.repeat_time"].value==0){
window.opener.document.letterForm["vo.repeat_time"].value = Number(raRetValue[1])+1;
}else{
window.opener.document.letterForm["vo.repeat_time"].value = Number(window.opener.document.letterForm["vo.repeat_time"].value)+1;
}
if((window.opener.document.letterForm["vo.unit"].value=="null"||window.opener.document.letterForm["vo.unit"].value=="" )&&raRetValue[2]!="null"){
window.opener.document.letterForm["vo.unit"].value = raRetValue[2];
}
if((window.opener.document.letterForm["vo.iden_c"].value=="null"||window.opener.document.letterForm["vo.iden_c"].value=="" )&&raRetValue[3]!="null"){
window.opener.document.letterForm["vo.iden_c"].value = raRetValue[3];
}
if((window.opener.document.letterForm["vo.phone"].value=="null"||window.opener.document.letterForm["vo.phone"].value=="" )&&raRetValue[4]!="null"){
window.opener.document.letterForm["vo.phone"].value = raRetValue[4];
}
if((window.opener.document.letterForm["vo.postcode"].value=="null"||window.opener.document.letterForm["vo.postcode"].value=="" )&&raRetValue[5]!="null"){
window.opener.document.letterForm["vo.postcode"].value = raRetValue[5];
}
if((window.opener.document.letterForm["vo.link_address_c"].value=="440001000000")&&raRetValue[6]!="null"){
 window.opener.document.letterForm["vo.link_address_c"].value = raRetValue[6];
}
if((window.opener.document.letterForm["vo.link_append_address"].value=="null"||window.opener.document.letterForm["vo.link_append_address"].value=="" )&&raRetValue[7]!="null"){
 window.opener.document.letterForm["vo.link_append_address"].value = raRetValue[7];
}
if((window.opener.document.letterForm["vo.link_address"].value=="广东省广州市" )&&raRetValue[8]!="null"){
 window.opener.document.letterForm["vo.link_address"].value = raRetValue[8];
}
//if((window.opener.document.TelAccForm["vo.case_address_c"].value=="null"||window.opener.document.TelAccForm["vo.case_address_c"].value==""){
// window.opener.document.TelAccForm["vo.case_address_c"].value = raRetValue[9];
//}
//if((window.opener.document.TelAccForm["vo.case_append_address"].value=="null"|| window.opener.document.TelAccForm["vo.case_append_address"].value==""){
 //window.opener.document.TelAccForm["vo.case_append_address"].value = raRetValue[10];
//}
//if((window.opener.document.TelAccForm["vo.case_address"].value=="null"|| window.opener.document.TelAccForm["vo.case_address"].value==""){
// window.opener.document.TelAccForm["vo.case_address"].value = raRetValue[11];
//}
 //window.opener.document.letterForm["vo.first_sort_c"].value = raRetValue[12];
 //window.opener.document.letterForm["vo.content_sort_c"].value = raRetValue[13];
 if((window.opener.document.letterForm["vo.first_sort_new_c"].value=="null"||window.opener.document.letterForm["vo.first_sort_new_c"].value=="" )&&raRetValue[14]!="null"){
  window.opener.document.letterForm["vo.first_sort_new_c"].value = raRetValue[14];
 }
if((window.opener.document.letterForm["vo.contentNo_c"].value =="null"||window.opener.document.letterForm["vo.contentNo_c"].value =="" )&&raRetValue[15]!="null"){
window.opener.document.letterForm["vo.contentNo_c"].value = raRetValue[15];

}
if((window.opener.document.letterForm["vo.content_sort"].value=="null"||window.opener.document.letterForm["vo.content_sort"].value=="" )&&raRetValue[16]!="null"){
 window.opener.document.letterForm["vo.content_sort"].value = raRetValue[16];
}
if((window.opener.document.letterForm["vo.objective_c"].value == "null" ||  window.opener.document.letterForm["vo.objective_c"].value =="" )&&raRetValue[17]!="null"){
 window.opener.document.letterForm["vo.objective_c"].value = raRetValue[17];
}
if((window.opener.document.letterForm["vo.outstand_c"].value== "null"||window.opener.document.letterForm["vo.outstand_c"].value=="" )&&raRetValue[18]!="null"){
 window.opener.document.letterForm["vo.outstand_c"].value = raRetValue[18];
}

 if((window.opener.document.letterForm["vo.title"].value=="null"|| window.opener.document.letterForm["vo.title"].value=="" )&&raRetValue[19]!="null"){
 window.opener.document.letterForm["vo.title"].value = raRetValue[19];
}

 if((window.opener.document.letterForm["vo.content"].value=="null"|| window.opener.document.letterForm["vo.content"].value=="" )&&historyForm.returnvalue2.value!="null"){
 window.opener.document.letterForm["vo.content"].value = historyForm.returnvalue2.value;
}

 if((window.opener.document.letterForm["vo.undertaker_c"].value=="null"||window.opener.document.letterForm["vo.undertaker_c"].value=="" )&&raRetValue[21]!="null"&&raRetValue[29]=="city"){
 window.opener.document.letterForm["vo.undertaker_c"].value = raRetValue[21];
 window.opener.document.letterForm["vo.attributeunit_c"].value = raRetValue[21];
}

 if((window.opener.document.letterForm["vo.undertaker"].value =="null"|| window.opener.document.letterForm["vo.undertaker"].value =="" )&&raRetValue[22]!="null"&&raRetValue[29]=="city"){
 window.opener.document.letterForm["vo.undertaker"].value = raRetValue[22];
  window.opener.document.letterForm.showAttributeUnit.value = raRetValue[22];
}

 if((window.opener.document.letterForm["vo.answer_date"].value=="null" ||window.opener.document.letterForm["vo.answer_date"].value=="" )&&raRetValue[23]!="null"&&raRetValue[29]=="city"){
 window.opener.document.letterForm["vo.answer_date"].value = raRetValue[23];
}

if((window.opener.document.letterForm["vo.xf_no"].value=="null" ||window.opener.document.letterForm["vo.xf_no"].value=="" )&&raRetValue[24]!="null"&&raRetValue[0]==2&&raRetValue[29]=="city"){
 window.opener.document.letterForm["vo.xf_no"].value = raRetValue[24];
}
/*
 if((window.opener.document.letterForm["vo.age"].value=="null" ||window.opener.document.letterForm["vo.age"].value=="" )&&raRetValue[25]!="null"){
 window.opener.document.letterForm["vo.age"].value = raRetValue[25];
}

 if((window.opener.document.letterForm["vo.sex"].value=="null" ||window.opener.document.letterForm["vo.sex"].value=="" )&&raRetValue[26]!="null"){
 window.opener.document.letterForm["vo.sex"].value = raRetValue[26];
}

 if((window.opener.document.letterForm["vo.idcard"].value=="null" ||window.opener.document.letterForm["vo.idcard"].value=="" )&&raRetValue[27]!="null"){
 window.opener.document.letterForm["vo.idcard"].value = raRetValue[27];
}

*/

 if((window.opener.document.letterForm["vo.name"].value=="null" ||window.opener.document.letterForm["vo.name"].value=="" )&&raRetValue[28]!="null"){
 window.opener.document.letterForm["vo.name"].value = raRetValue[28];
}
	if((window.opener.document.letterForm["vo.process_memo"].value=="null" ||window.opener.document.letterForm["vo.process_memo"].value=="" )&&raRetValue[30]!="null"){
 		window.opener.document.letterForm["vo.process_memo"].value = "此信访件与"+raRetValue[30]+"号属重复来信";
	}
	
	var xftypeArr = window.opener.document.letterForm["vo.xf_type"];
	for(var i = 0;i < xftypeArr.length;i++){
		if(xftypeArr[i].value == raRetValue[31]){
			xftypeArr[i].checked ="checked";
		}
	}
	
}else if(type=="telAcc"||type=="TelAcc"){
if(window.opener.document.TelAccForm["vo.repeat_time"].value==0){
window.opener.document.TelAccForm["vo.repeat_time"].value = Number(raRetValue[1])+1;
}else{
window.opener.document.TelAccForm["vo.repeat_time"].value = Number(window.opener.document.TelAccForm["vo.repeat_time"].value)+1;
}
if((window.opener.document.TelAccForm["vo.unit"].value=="null"||window.opener.document.TelAccForm["vo.unit"].value=="" )&&raRetValue[2]!="null"){
window.opener.document.TelAccForm["vo.unit"].value = raRetValue[2];
}
if((window.opener.document.TelAccForm["vo.iden_c"].value=="null"||window.opener.document.TelAccForm["vo.iden_c"].value=="" )&&raRetValue[3]!="null"){
window.opener.document.TelAccForm["vo.iden_c"].value = raRetValue[3];
}
if((window.opener.document.TelAccForm["vo.phone"].value=="null"||window.opener.document.TelAccForm["vo.phone"].value=="" )&&raRetValue[4]!="null"){
window.opener.document.TelAccForm["vo.phone"].value = raRetValue[4];
}
if((window.opener.document.TelAccForm["vo.postcode"].value=="null"||window.opener.document.TelAccForm["vo.postcode"].value=="" )&&raRetValue[5]!="null"){
window.opener.document.TelAccForm["vo.postcode"].value = raRetValue[5];
}
if((window.opener.document.TelAccForm["vo.link_address_c"].value=="440001000000")&&raRetValue[6]!="null"){
 window.opener.document.TelAccForm["vo.link_address_c"].value = raRetValue[6];
}
if((window.opener.document.TelAccForm["vo.link_append_address"].value=="null"||window.opener.document.TelAccForm["vo.link_append_address"].value=="" )&&raRetValue[7]!="null"){
 window.opener.document.TelAccForm["vo.link_append_address"].value = raRetValue[7];
}
if((window.opener.document.TelAccForm["vo.link_address"].value=="广东省广州市" )&&raRetValue[8]!="null"){
 window.opener.document.TelAccForm["vo.link_address"].value = raRetValue[8];
}
if((window.opener.document.TelAccForm["vo.case_address_c"].value=="440001000000")&&raRetValue[9]!="null"){
 window.opener.document.TelAccForm["vo.case_address_c"].value = raRetValue[9];
}
if((window.opener.document.TelAccForm["vo.case_append_address"].value=="null"|| window.opener.document.TelAccForm["vo.case_append_address"].value=="") &&raRetValue[9]!="null"){
window.opener.document.TelAccForm["vo.case_append_address"].value = raRetValue[10];
}
if((window.opener.document.TelAccForm["vo.case_address"].value=="广东省广州市") &&raRetValue[11]!="null"){
window.opener.document.TelAccForm["vo.case_address"].value = raRetValue[11];
}

 //window.opener.document.TelAccForm["vo.first_sort_c"].value = raRetValue[12];
 //window.opener.document.TelAccForm["vo.content_sort_c"].value = raRetValue[13];
 if((window.opener.document.TelAccForm["vo.first_sort_new_c"].value=="null"||window.opener.document.TelAccForm["vo.first_sort_new_c"].value=="" )&&raRetValue[14]!="null"){
  window.opener.document.TelAccForm["vo.first_sort_new_c"].value = raRetValue[14];
 }
 //....................by zhoden...............................
//alert("content_sort=="+window.opener.document.visitForm["vo.contentNo_c"].value);
//alert("raRetValue=="+raRetValue[15]);

if((window.opener.document.TelAccForm["vo.contentNo_c"].value =="null"||window.opener.document.TelAccForm["vo.contentNo_c"].value =="" )&&raRetValue[15]!="null"){
window.opener.document.TelAccForm["vo.contentNo_c"].value = raRetValue[15];

}
if((window.opener.document.TelAccForm["vo.content_sort"].value=="null"||window.opener.document.TelAccForm["vo.content_sort"].value=="" )&&raRetValue[16]!="null"){
 window.opener.document.TelAccForm["vo.content_sort"].value = raRetValue[16];
}
if((window.opener.document.TelAccForm["vo.objective_c"].value == "null" ||  window.opener.document.TelAccForm["vo.objective_c"].value =="" )&&raRetValue[17]!="null"){
 window.opener.document.TelAccForm["vo.objective_c"].value = raRetValue[17];
}
if((window.opener.document.TelAccForm["vo.outstand_c"].value== "null"||window.opener.document.TelAccForm["vo.outstand_c"].value=="" )&&raRetValue[18]!="null"){
 window.opener.document.TelAccForm["vo.outstand_c"].value = raRetValue[18];
}

 if((window.opener.document.TelAccForm["vo.title"].value=="null"|| window.opener.document.TelAccForm["vo.title"].value=="" )&&raRetValue[19]!="null"){
 window.opener.document.TelAccForm["vo.title"].value = raRetValue[19];
}

 if((window.opener.document.TelAccForm["vo.content"].value=="null"|| window.opener.document.TelAccForm["vo.content"].value=="" )&&historyForm.returnvalue2.value!="null"){
 window.opener.document.TelAccForm["vo.content"].value = historyForm.returnvalue2.value;
}
/*
 if((window.opener.document.TelAccForm["vo.undertaker_c"].value=="null"||window.opener.document.TelAccForm["vo.undertaker_c"].value=="" )&&raRetValue[21]!="null"){
 window.opener.document.TelAccForm["vo.undertaker_c"].value = raRetValue[21];
}

 if((window.opener.document.TelAccForm["vo.undertaker"].value =="null"|| window.opener.document.TelAccForm["vo.undertaker"].value =="" )&&raRetValue[22]!="null"){
 window.opener.document.TelAccForm["vo.undertaker"].value = raRetValue[22];
}

 if((window.opener.document.TelAccForm["vo.answer_date"].value=="null" ||window.opener.document.TelAccForm["vo.answer_date"].value=="" )&&raRetValue[23]!="null"){
 window.opener.document.TelAccForm["vo.answer_date"].value = raRetValue[23];
}
*/

if((window.opener.document.TelAccForm["vo.xf_no"].value=="null" ||window.opener.document.TelAccForm["vo.xf_no"].value=="" )&&raRetValue[24]!="null"&&raRetValue[0]==3&&raRetValue[29]=="city"){
 window.opener.document.TelAccForm["vo.xf_no"].value = raRetValue[24];
}
  if((window.opener.document.TelAccForm["vo.age"].value=="null"||window.opener.document.TelAccForm["vo.age"].value=="null"||window.opener.document.TelAccForm["vo.age"].value==0 )&&raRetValue[25]!="null"){
 window.opener.document.TelAccForm["vo.age"].value = raRetValue[25];
}

if(raRetValue[26]!="null"&&raRetValue[26].trim()=="女"){
		 window.opener.document.TelAccForm["vo.sex"][1].checked =true;
	}
/*
 if((window.opener.document.TelAccForm["vo.idcard"].value=="null" ||window.opener.document.TelAccForm["vo.idcard"].value=="" )&&raRetValue[27]!="null"){
 window.opener.document.TelAccForm["vo.idcard"].value = raRetValue[27];
}
*/
 if((window.opener.document.TelAccForm["vo.name"].value=="null" ||window.opener.document.TelAccForm["vo.name"].value=="" )&&raRetValue[28]!="null"){
 window.opener.document.TelAccForm["vo.name"].value = raRetValue[28];
}

}
window.close();
}
}


function chooseNone()
{
	//如果没有选，则把这些值再传回
		window.close();
}
