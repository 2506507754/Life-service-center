
function InsertItem(ObjID, Location,num)
{
  len=document.forms[num].elements[ObjID].length;
  for (counter=len; counter>Location; counter--)
  {
    Value = document.forms[num].elements[ObjID].options[counter-1].value;
    Text2Insert  = document.forms[num].elements[ObjID].options[counter-1].text;
    document.forms[num].elements[ObjID].options[counter] = new Option(Text2Insert, Value);
  }
}
function GetLocation(ObjID, Value,num)
{
  total=document.forms[num].elements[ObjID].length;
  for (pp=0; pp<total; pp++)
     if (document.forms[num].elements[ObjID].options[pp].text == "---"+Value+"---")
     { return (pp);
       break;
     }
  return (-1);
}

function GetObjID(ObjName,num)
{
  for (var ObjID=0; ObjID < document.forms[num].elements.length; ObjID++)
    if ( document.forms[num].elements[ObjID].name == ObjName )
    {  return(ObjID);
       break;
    }
  return(-1);
}

function AddItem(ObjName, DesName, CatName,num){
 
  ObjID    = GetObjID(ObjName,num);
  //alert(currentRightSel.name)
  if(currentRightSel.name == "rbnoteUser") {
	DesName = "rbnoteUser";
  }
  if(currentRightSel.name == "xieBanUser") {
	DesName = "xieBanUser";
  }
  DesObjID = GetObjID(DesName,num);
  
  isOneID = GetObjID("isOne","0");
  isOneValue=document.forms[num].elements[isOneID].value;

  k=0;
  i = document.forms[num].elements[ObjID].options.length;
  v=document.forms[num].elements[DesObjID].options.length;

  if (i==0){
    return;
  }else if(isOneValue=="0"&&v>0){
	//   alert("不并行只能选择一个用户！");
	//   return;
  }

  //------------------------------------------选中的下一个开始---------------------
  maxselected=0;
  for (h=0; h<i; h++)
     if (document.forms[num].elements[ObjID].options[h].selected ) {
         k=k+1;
         maxselected=h+1;
         }
  if (maxselected>=i)
     maxselected=0;
  //------------------------------------------选中的下一个结束---------------------

  //------------------------------------------CatName---------------------------
  if (CatName != "")
    CatObjID = GetObjID(CatName,num);
  else
    CatObjID = 0;
  if ( ObjID != -1 && DesObjID != -1 && CatObjID != -1 )
  { jj = document.forms[num].elements[CatObjID].selectedIndex;
	//alert(document.forms[num].elements[CatObjID].name + ",jj=" + jj);
    if ( CatName != ""){ 
	  CatValue = document.forms[num].elements[CatObjID].options[jj].text;
      CatCode  = document.forms[num].elements[CatObjID].options[jj].value;
    }
    else
      CatValue = "";
   //------------------------------------------CatName---------------------------



	//----------------------------------------下面正式处理option------------------
    i = document.forms[num].elements[ObjID].options.length;
    j = document.forms[num].elements[DesObjID].options.length;

    for (h=0; h<i; h++) {

	  //By DZX to filter the group's select		
	  var optid = document.forms[num].elements[ObjID].options[h].value;		
	  if (document.forms[num].elements[ObjID].options[h].selected&&optid.indexOf("_",0)>=0){
		document.forms[num].elements[ObjID].options[h].selected = false;
	  }
	  
	
	  if (document.forms[num].elements[ObjID].options[h].selected&&optid.indexOf("_",0)<0){
			 Code = document.forms[num].elements[ObjID].options[h].value;
			 Text = document.forms[num].elements[ObjID].options[h].text;
			 j = document.forms[num].elements[DesObjID].options.length;

			 //------------------------------------处理组----------------------------------------
			 if (Text.indexOf('--')!=-1) {
				for (k=j-1; k>=0; k-- ) {
				  document.forms[num].elements[DesObjID].options[k]=null;
				}
				j=0;
			 }
			 if (Text.substring(0,1)=='-' && Text.substring(1,2)!='-') {
				for (k=j-1; k>=0; k-- ) {
				  if (((document.forms[num].elements[DesObjID].options[k].value).substring(0,2))==(Code.substring(0,2)))
					 document.forms[num].elements[DesObjID].options[k]=null;
				}
				j= document.forms[num].elements[DesObjID].options.length;
			 }
             //------------------------------------处理组----------------------------------------

			 
			 HasSelected = false;

			 for (k=0; k<j; k++ ) {
			   if ((document.forms[num].elements[DesObjID].options[k].text).indexOf('--')!=-1){
				  HasSelected = true;
				  alert('已经包括本选项：'+Text);
				  break;
			   }
			   if (document.forms[num].elements[DesObjID].options[k].value == Code)
			   {  HasSelected = true;
				  break;
			   }
			 }
			 
			 if ( HasSelected == false) {
				if (CatValue !=""){
					Location = GetLocation(DesObjID, CatValue,num);
				 if ( Location == -1 ) {
					 document.forms[num].elements[DesObjID].options[j] =  new Option("---"+CatValue+"---",CatCode);
				     document.forms[num].elements[DesObjID].options[j+1] = new Option(Text, Code);
				 }else {
					 InsertItem(DesObjID, Location+1,num);
				     document.forms[num].elements[DesObjID].options[Location+1] = new Option(Text, Code);
				 }//内部if
			   } else {
					 var fccOption = new Option(Text, Code);
					 if(document.forms[num].elements[ObjID].getAttribute("multiple")) {
						document.forms[num].elements[DesObjID].options[j] = new Option(Text, Code);
					 }else{
						 document.forms[num].elements[DesObjID].options.length = 0;
						 document.forms[num].elements[DesObjID].add(fccOption);
					 }
			   
			   }
				 
			 }//if
			 document.forms[num].elements[ObjID].options[h].selected =false;
       }//if
    }//for
    document.forms[num].elements[ObjID].options[maxselected].selected =true;
  }//if
}//end of function

function DeleteItem(ObjName,num)
{	
  if(currentRightSel.name == "rbnoteUser") {
	ObjName = "rbnoteUser";
  }
  if(currentRightSel.name == "xieBanUser") {
	ObjName = "xieBanUser";
  }
  ObjID = GetObjID(ObjName,num);
  minselected=0;
  if ( ObjID != -1 )
  {
    for (i=document.forms[num].elements[ObjID].length-1; i>=0; i--)
    {  if (document.forms[num].elements[ObjID].options[i].selected)
       { 
          if (minselected==0 || i<minselected)
            minselected=i;
          document.forms[num].elements[ObjID].options[i] = null;
       }
    }
    i=document.forms[num].elements[ObjID].length;

    if (i>0)  {
        if (minselected>=i)
           minselected=i-1;
        document.forms[num].elements[ObjID].options[minselected].selected=true;
        }
  }
}
function AllSelect(ObjName,num)//列表框多选，并表单提交；参数：列表框名，所处于的form名；
{ event.srcElement.style.backgroundColor = "#FF9966"
    ObjID= GetObjID(ObjName,num);
	var sel=window.document.forms[num].elements[ObjID];
	var len=sel.length;
	for(i=0;i<len;i++)
	{
		sel.options[i].selected=true;
	}
	window.document.forms[num].submit();
}
function SelectAll(ObjName,num)//列表框多选，但并不提交；参数：列表框名，所处于的form名；
{
    ObjID= GetObjID(ObjName,num);
	var sel=window.document.forms[num].elements[ObjID];
	var len=sel.length;
	for(i=0;i<len;i++)
	{
		sel.options[i].selected=true;
	}
	//window.document.forms[num].submit();
}
//上移下移
function moveOption(ObjName,bool,num)
{
	ObjID=GetObjID(ObjName,num);
	var sel=window.document.forms[num].elements[ObjID];
	for(i=0; i<sel.length; i++)
	{
		if(sel.options[i].selected==true)
		{
			if(bool=="up" && sel.selectedIndex!=0 || bool=="down" && sel.selectedIndex!=sel.options.length-1)
			{
				i=bool=="up"?-1:1;
				myvalue=sel.options[sel.selectedIndex+i].value;
				mytext=sel.options[sel.selectedIndex+i].text;
				sel.options[sel.selectedIndex+i].value=sel.options[sel.selectedIndex].value;
				sel.options[sel.selectedIndex+i].text=sel.options[sel.selectedIndex].text;
				sel.options[sel.selectedIndex].value=myvalue;
				sel.options[sel.selectedIndex].text=mytext;				
				var where=sel.selectedIndex;					
				sel.options[where].selected=false;
				sel.options[where+i].selected=true;				
			}
			break;
		}	
	}
}
//检查ObjName中是否DesName中的Option
function isHadOptions(ObjName, DesName, CatName,formNum)
{
	//boolean result=false;
	ObjID    = GetObjID(ObjName,formNum);
	DesObjID = GetObjID(DesName,formNum);
	var Osel=window.document.forms[formNum].elements[ObjID];
	var Dsel=window.document.forms[formNum].elements[DesObjID];
	var Ocount=Osel.length;
	var Dcount=Dsel.length;	
	
	if (Dcount==0)
	{
		
		return true;
	}
	
	for(i=0; i<Dcount; i++)
	{
		
		for(j=0; j<Ocount; j++)
		{
			if (Dsel.options[i].value!=Osel.options[j].value && j==Ocount-1)//&& j==Ocount-1
			{				
				return false;
			}			
		}
	}
	return true;
	
}
//当一个删除ObjName中option的同时，删除DesName中与其value相同的option
function delSameItem(ObjName, DesName, formNum)
{	
	ObjID    = GetObjID(ObjName,formNum);
	DesObjID = GetObjID(DesName,formNum);
	var Osel=window.document.forms[formNum].elements[ObjID];
	var Dsel=window.document.forms[formNum].elements[DesObjID];
	var Ocount=Osel.length;
	var Dcount=Dsel.length;
	
	if (Dcount==0)
	{
		return;
	}
	for(i=0; i<Ocount; i++)
	{
		if(Osel.options[i].selected==true)
		{			
			for(j=Dcount; j>0; j--)
			{				
				if(Dsel.options[j-1].value==Osel.options[i].value)
				{					
					Dsel.options[j-1]=null;
					Dcount--;
					break;
				}			
			}
		}
	}
}

//select复制AddSimpleItems
function CopyItemsToOneSel(ObjName, DesName, formNum)
{
	ObjID    = GetObjID(ObjName,formNum);
	DesObjID = GetObjID(DesName,formNum);
	var Osel=window.document.forms[formNum].elements[ObjID];
	var Dsel=window.document.forms[formNum].elements[DesObjID];

	var len = Osel.options.length;		
	Dsel.options.length=0;//清空
	for(i=0;i<len;i++)
	{
		text = Osel.options[i].text;
		Value = Osel.options[i].value;
		Dsel.add(new Option(text,Value));
	}
}
//把两个别select复制到一个select中
function CopyTwoSelItems(ObjName, ObjName2, DesName, formNum)
{
	ObjID    = GetObjID(ObjName,formNum);
	ObjID2   = GetObjID(ObjName2,formNum);
	DesObjID = GetObjID(DesName,formNum);
	var Osel=window.document.forms[formNum].elements[ObjID];
	var Osel2=window.document.forms[formNum].elements[ObjID2];
	var Dsel=window.document.forms[formNum].elements[DesObjID];

	var len = Osel.options.length;		
	Dsel.options.length=0;//清空
	for(i=0;i<len;i++)
	{
		text = Osel.options[i].text;
		Value = Osel.options[i].value;
		Dsel.add(new Option(text,Value));
	}
	var len2 = Osel2.options.length;
	for(i=0;i<len2;i++)
	{
		text = Osel2.options[i].text;
		Value = Osel2.options[i].value;
		Dsel.add(new Option(text,Value));
	}
}