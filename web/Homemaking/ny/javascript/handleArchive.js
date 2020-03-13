var context = "";

//打开一个最大化的窗口
function openNewWindow( url,name ,width, height ){
	var newwin = window.open( url, name, "toolbar=no,location=no,directories=no,status=yes,menubar=no,resizable=yes,scrollbars=yes,left=0,top=0,width=" + width + ",height=" + height +"" );
	newwin.focus();
	return false;
}

//查看公文详细
function viewArchive($archiveId) {
	URL = context + "/oa/archive/common/archiveManage.do?mhd=toViewArchive&archiveId="+$archiveId;
	openNewWindow(URL,"查看公文",screen.width,screen.height); 
}

//新增公文
function toNewArchive() {   
	URL = context + "/mlao/oa/archive/send/temp.jsp?sourcePath=sendArchive";
    openNewWindow(URL,"",screen.width,screen.height);
}

//新增公文（为提高性能写的）
  function toNewArchive2(form) {        
       URL=context + "/oa/archive/common/archiveManage.do?mhd=toNewArchive";      
       URL=addParam(URL,"templateName="+form.templateName.value); 
       URL=addParam(URL,"archiveType="+form.archiveType.value);
       URL=addParam(URL,"sourcePath="+form.sourcePath.value);
       if(typeof(form.sno)!="undefined"){
       URL=addParam(URL,"sno="+form.sno.value);
       }
       if(typeof(form.xtype)!="undefined"){
       URL=addParam(URL,"xtype="+form.xtype.value);
       }
      openNewWindow(URL,"",screen.width,screen.height);	   
} 

//查看流程日志
function viewFlowLog($archiveId,$templateName){  
	URL = context + "/mlao/oa/urgermanager/gwDB_toList.do?mhd=toViewFlowWorkItem&archiveID="+$archiveId+"&templateName="+$templateName;
    openNewWindow(URL,"流程查看",screen.width,screen.height);    
}

//办理公文
function doArchive($archiveId,$templateName,$sourcePath) {
	if($sourcePath != "undefined" && $sourcePath != null && $sourcePath != "")
		URL = context + "/mlao/oa/archive/wait/temp.jsp?mhd=toTransactArchive&sourcePath="+$sourcePath+"&archiveId="+$archiveId+"&templateName="+$templateName;
	else
		URL = context + "/mlao/oa/archive/wait/temp.jsp?mhd=toTransactArchive&sourcePath=waitArchive&archiveId="+$archiveId+"&templateName="+$templateName;
	openNewWindow(URL,"公文",screen.width,screen.height);
}

