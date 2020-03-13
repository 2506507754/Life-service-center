var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
  	setDefaultICPMenuColor("#0099FF", "white", "red");
    setICPMenuFont(" 9pt ËÎÌå");
	// Customize toolbar background color
	setToolbarBGColor("white");

	// display ICP Banner
	//setICPBanner("/library/toolbar/images/banner.gif","/isapi/gomscom.asp?target=/","microsoft.com Home") ;
	
	//***** Add ICP menus *****
	//Homepage
 	//addICPMenu("ChinaHome", "Ö÷Ò³", "","/isapi/gomscom.asp?target=/china/");

	addICPMenu("ChinaHome", unescape("ÉÁµçÍøÂç"), "","http://sd007.51.net",target=/_blank/);
	addICPSubMenu("ChinaHome",unescape("»¢ÒíÖ÷Õ¾"),"http://sd007.51.net",target=/_blank/);
    addICPSubMenu("ChinaHome",unescape("y365¾µÏñÕ¾"),"http://sd007.y365.com",target=/_blank/);

	//Events & Training
	addICPMenu("ChinaEvents", unescape("%u6D3B%u52A8%u4E0E%u57F9%u8BAD"), "","/isapi/gomscom.asp?target=/china/events/");
	addICPSubMenu("ChinaEvents",unescape("%u5E02%u573A%u6D3B%u52A8%u4E0E%u8BB2%u5EA7"),"/isapi/gomscom.asp?target=/china/events/");
	addICPSubMenu("ChinaEvents",unescape("%u5728%u7EBF%u8BB2%u5EA7"),"/isapi/gomscom.asp?target=/china/seminar/");
	addICPSubMenu("ChinaEvents",unescape("%u8BA4%u8BC1%u4E0E%u57F9%u8BAD"),"/isapi/gomscom.asp?target=/china/training/");

    addICPSubMenu("ChinaEvents",unescape("%u5FAE%u8F6F%u51FA%u7248%u793E"),"/isapi/gomscom.asp?target=/china/mspress/");

	
	//subscription
	addICPMenu("ChinaSubscription", unescape("%u8BA2%u9605%u7535%u5B50%u671F%u520A"), "","http://register.microsoft.com/regsys/pic.asp?lcid=2052");

	addICPSubMenu("ChinaSubscription",unescape("%u8BA2%u9605"),"http://register.microsoft.com/regsys/regsys.asp?lcid=2052");
	addICPSubMenu("ChinaSubscription",unescape("%u4FEE%u6539"),"http://register.microsoft.com/regsys/pic.asp?lcid=2052");
	addICPSubMenu("ChinaSubscription",unescape("%u60A8%u7684%u9690%u79C1%u6743"),"http://www.microsoft.com/info/cn/privacy.htm");

//AboutMicrosoft
	addICPMenu("AboutMicrosoftChina", unescape("%u5FAE%u8F6F%u4E2D%u56FD"), "","/isapi/gomscom.asp?target=/china/info/");
	

addICPSubMenu("AboutMicrosoftChina",unescape("%u5FAE%u8F6F%28%u4E2D%u56FD%29%u6709%u9650%u516C%u53F8"),"/isapi/gomscom.asp?target=/china/info/");
	
	addICPSubMenu("AboutMicrosoftChina",unescape("%u65B0%u95FB"),"/isapi/gomscom.asp?target=/china/press/");

addICPSubMenu("AboutMicrosoftChina",unescape("%u62DB%u8D24%u7EB3%u58EB"),"/isapi/gomscom.asp?target=/china/hr/");


addICPSubMenu("AboutMicrosoftChina",unescape("%u4E0E%u6211%u4EEC%u8054%u7CFB"),"http://register.microsoft.com/contactus30/contactus.asp?domain=generic&lcid=2052");

addICPSubMenu("AboutMicrosoftChina",unescape("%u7231%u5FC3%u884C%u52A8"),"/china/info/giving/");





//MSUS
	addICPMenu("MSUSChina", unescape("%u5FAE%u8F6F%u603B%u90E8"), "","/china/info/corpprofile.asp");
	

//antipiracy
	addICPMenu("antipiracy", unescape("%u8D2D%u4E70%u4E0E%u8BB8%u53EF"), "","/china/shop/");
	addICPSubMenu("antipiracy",unescape("%u7248%u6743%u4E0E%u8BB8%u53EF"),"/isapi/gomscom.asp?target=/china/licensing/");
	addICPSubMenu("antipiracy",unescape("%u6211%u81EA%u8C6A%u6211%u7528%u6B63%u7248"),"/isapi/gomscom.asp?target=/china/antipiracy/");
	addICPSubMenu("antipiracy",unescape("%u7248%u6743%u8BB8%u53EF%u4E0E%u5546%u6807%u6307%u5357"),"/isapi/gomscom.asp?target=/china/permission/");
	addICPSubMenu("antipiracy",unescape("%u8D2D%u4E70%u6307%u5357"),"/china/shop/");





//About Our Site
	addICPMenu("SiteMenuChina", unescape("%u7AD9%u70B9%u5730%u56FE"), "","/isapi/gomscom.asp?target=/china/sitemap/");

	addICPSubMenu("SiteMenuChina",unescape("%u7AD9%u70B9%u5185%u5E55"),"/isapi/gomscom.asp?target=/china/backstage/");
	
}


