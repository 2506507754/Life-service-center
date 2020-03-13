//下拉菜单相关代码
var h;
var w;
var l;
var t;
var topMar  = 1;
var leftMar = -5;
var space   = 1;
var isvisible = false;
var MENU_SHADOW_COLOR = 'darkblue';//定义下拉菜单阴影色
var global = window.document
global.fo_currentMenu = null
global.fo_shadows     = new Array

function HideMenu() {
    var mX;
    var mY;
    var vDiv;
    var mDiv;
    if (isvisible == true) {
        vDiv = document.all("menuDiv");
        mX = window.event.clientX + document.body.scrollLeft;
        mY = window.event.clientY + document.body.scrollTop;
        if ((mX < parseInt(vDiv.style.left)) || (mX > parseInt(vDiv.style.left)+vDiv.offsetWidth) || (mY < parseInt(vDiv.style.top)-h) || (mY > parseInt(vDiv.style.top)+vDiv.offsetHeight)){
            vDiv.style.visibility = "hidden";
            isvisible = false;
        }
    }
}

function ShowMenu(vMnuCode, tWidth) {
    if (vMnuCode == null) {
        menuDiv.style.visibility = "hidden";
        return;
    }
    vSrc = window.event.srcElement;
    vMnuCode = "<table id='csubmenu' cellspacing=1 cellpadding=3 style='width:"+tWidth+"' class=tableborder1 onmouseout='HideMenu()'><tr height=23><td nowrap align=left class=tablebody1>" + vMnuCode + "</td></tr></table>";

    h = vSrc.offsetHeight;
    w = vSrc.offsetWidth;
    l = vSrc.offsetLeft + leftMar + 4;
    t = vSrc.offsetTop + topMar + h + space - 2;
    vParent = vSrc.offsetParent;
    while (vParent.tagName.toUpperCase() != "BODY") {
        l += vParent.offsetLeft;
        t += vParent.offsetTop;
        vParent = vParent.offsetParent;
    }

    menuDiv.innerHTML = vMnuCode;
    menuDiv.style.top = t;
    menuDiv.style.left = l;
    menuDiv.style.visibility = "visible";
    isvisible = true;
    makeRectangularDropShadow(csubmenu, MENU_SHADOW_COLOR, 4)
}

function makeRectangularDropShadow(el, color, size) {
    var i;
    for (i=size; i>0; i--) {
        var rect = document.createElement('div');
        var rs = rect.style
        rs.position = 'absolute';
        rs.left = (el.style.posLeft + i) + 'px';
        rs.top = (el.style.posTop + i) + 'px';
        rs.width = el.offsetWidth + 'px';
        rs.height = el.offsetHeight + 'px';
        rs.zIndex = el.style.zIndex - i;
        rs.backgroundColor = color;
        var opacity = 1 - i / (i + 1);
        rs.filter = 'alpha(opacity=' + (100 * opacity) + ')';
        el.insertAdjacentElement('afterEnd', rect);
        global.fo_shadows[global.fo_shadows.length] = rect;
    }
}
//信息管理
var infomng = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/Index.do\">信息浏览</A>'
	    + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/thread/AddThread.do?threadType=GENERAL&refType=FRAME&refId=1\">发布主题</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/thread/ThreadList.do?refType=FRAME&refId=1\">信息管理</A>';
//edited by Tony.
// + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/smail/SmailList.do?folderId=INBOX\">短讯服务</A>';
//后台管理
var bgadmin = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/bgadmin/UserList.do?CUR_PAGE=1\">用户管理</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/sgymng/sgymng.do?mthd=taxpayerList\">税管员管理</A>'
			+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/userGroup/userGroupAction.do\">组织架构管理</A>'
			+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"#">业务数据管理</A>'
                        + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/DataImport.jsp\">文书批件数据管理</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" target=\"_blank\" href=\"/common/FAC.jsp\">释放资源</A>';
//户籍管理
var hjgl    = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/stat/StatGljgJgnsr.do\">分局</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/stat/StatZgyJgnsr.do\">部门</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/tsm/JgnsrList.do\">专管员</A>';
//用户控制面板
var controlpanel = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/smail/SmailList.do?folderId=INBOX\">短讯服务</A>'
                 + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/passport/ModifyPassword.do\">修改密码</A>';
//纳税人数据管理
var taxdata = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jgnsr/JgnsrInfo.do?nsrbm=\">分户管理</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jgnsr/JgnsrBaseInfo.do?nsrbm=\">纳税人基本情况</A>'
            //+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/exprop/expropriationAction.do?method=doQuery&CUR_PAGE=1\">征收数据</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/expropriation/ExpropriationQuery.jsp">入库数据查询</A>'
            //+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/checkinvoice/checkInvoiceAction.do?method=doList&CUR_PAGE=1\">发票数据</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/checkinvoice/listCheckInvoice.do?CUR_PAGE=1\">发票数据</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/nspg/NspgInfo.do?mthd=listNspg\">纳税评估</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/syrd/Syrd.do?mthd=syrdList\">一次性税源认定</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/wjps/listspProject.do?mthd=ListJgnsrxx\">文书批件</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/ydfx/Ydfx.do?mthd=listYdfx\">纳税人月度税收分析</A>';
//统计分析
//var report = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/exprop/dynamicDataStaticAction.do?method=doList&GUIDELINE=DYZSE">动态统计</A>';
var report = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/expropriation/ListDynamicStatic.jsp">动态统计</A>';

var hjg2    = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/AddspProject.jsp\">取消审批项目备案录入</A>' + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/AddTweiDerate.jsp\">专业批发企业堤围减免批件</A>';
