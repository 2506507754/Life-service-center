document.write('<iframe id=CalFrame name=CalFrame frameborder=0 src=/gzxf/djcl/choose/calendar.htm style=display:none;position:absolute;z-index:100></iframe>');
document.onclick=hideCalendar;

function showCalendar(sImg,bOpenBound,sFld1,sFld2,sCallback)
{
	var fld1,fld2;
	var cf=document.getElementById("CalFrame");
	var wcf=window.frames.CalFrame;
	var oImg=document.getElementById(sImg);
	if(!oImg){alert("���ƶ��󲻴��ڣ�");return;}
	if(!sFld1){alert("����ؼ�δָ����");return;}
	fld1=document.getElementById(sFld1);
	if(!fld1){alert("����ؼ������ڣ�");return;}
	if(fld1.tagName!="INPUT"||fld1.type!="text"){alert("����ؼ����ʹ���");return;}
	if(sFld2)
	{
		fld2=document.getElementById(sFld2);
		if(!fld2){alert("�ο��ؼ������ڣ�");return;}
		if(fld2.tagName!="INPUT"||fld2.type!="text"){alert("�ο��ؼ����ʹ���");return;}
	}
	if(!wcf.bCalLoaded){alert("����δ�ɹ�װ�أ���ˢ��ҳ�棡");return;}
	if(cf.style.display=="block"){cf.style.display="none";return;}
	
	var eT=0,eL=0,p=oImg;
	var sT=document.body.scrollTop,sL=document.body.scrollLeft;
	var eH=oImg.height,eW=oImg.width;
	while(p&&p.tagName!="BODY"){eT+=p.offsetTop;eL+=p.offsetLeft;p=p.offsetParent;}
	cf.style.top=(document.body.clientHeight-(eT-sT)-eH>=cf.height)?eT+eH:eT-cf.height;
	cf.style.left=(document.body.clientWidth-(eL-sL)>=cf.width)?eL:eL+eW-cf.width;
	cf.style.display="block";
	
	wcf.openbound=bOpenBound;
	wcf.fld1=fld1;
	wcf.fld2=fld2;
	wcf.callback=sCallback;
	wcf.initCalendar();
}
function hideCalendar()
{
	var cf=document.getElementById("CalFrame");
	cf.style.display="none";
}