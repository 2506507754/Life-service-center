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
	   alert("«Î—°‘Ò");
	}
	else
	{
	 window.open(url+"&op=view","","height=600, width=800, top=50, left=50, toolbar=no, menubar=no, scrollbars=yes,resizable=yes,location=no, status=no");
	}

}

function chooseItem(type)
{
	//alert(type);
  var url;
	url = document.historyForm.urlvalue.value;
	if(url=="null"||url=="")
	{
	   alert("«Î—°‘Ò");
	}
	else
	{
var raRetValue1=historyForm.returnvalue.value;
var raRetValue2=historyForm.returnvalue2.value;
var  raRetValue =raRetValue1+raRetValue2+"$";
window.returnValue =raRetValue;
//alert(raRetValue);
window.close();
}
}
