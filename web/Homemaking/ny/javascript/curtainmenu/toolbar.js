//�����˵���ش���
var h;
var w;
var l;
var t;
var topMar  = 1;
var leftMar = -5;
var space   = 1;
var isvisible = false;
var MENU_SHADOW_COLOR = 'darkblue';//���������˵���Ӱɫ
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
//��Ϣ����
var infomng = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/Index.do\">��Ϣ���</A>'
	    + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/thread/AddThread.do?threadType=GENERAL&refType=FRAME&refId=1\">��������</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/thread/ThreadList.do?refType=FRAME&refId=1\">��Ϣ����</A>';
//edited by Tony.
// + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/smail/SmailList.do?folderId=INBOX\">��Ѷ����</A>';
//��̨����
var bgadmin = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/bgadmin/UserList.do?CUR_PAGE=1\">�û�����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/sgymng/sgymng.do?mthd=taxpayerList\">˰��Ա����</A>'
			+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/userGroup/userGroupAction.do\">��֯�ܹ�����</A>'
			+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"#">ҵ�����ݹ���</A>'
                        + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/DataImport.jsp\">�����������ݹ���</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" target=\"_blank\" href=\"/common/FAC.jsp\">�ͷ���Դ</A>';
//��������
var hjgl    = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/stat/StatGljgJgnsr.do\">�־�</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/stat/StatZgyJgnsr.do\">����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/tsm/JgnsrList.do\">ר��Ա</A>';
//�û��������
var controlpanel = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/smail/SmailList.do?folderId=INBOX\">��Ѷ����</A>'
                 + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/passport/ModifyPassword.do\">�޸�����</A>';
//��˰�����ݹ���
var taxdata = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jgnsr/JgnsrInfo.do?nsrbm=\">�ֻ�����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jgnsr/JgnsrBaseInfo.do?nsrbm=\">��˰�˻������</A>'
            //+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/exprop/expropriationAction.do?method=doQuery&CUR_PAGE=1\">��������</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/expropriation/ExpropriationQuery.jsp">������ݲ�ѯ</A>'
            //+ '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/checkinvoice/checkInvoiceAction.do?method=doList&CUR_PAGE=1\">��Ʊ����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/checkinvoice/listCheckInvoice.do?CUR_PAGE=1\">��Ʊ����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/nspg/NspgInfo.do?mthd=listNspg\">��˰����</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/syrd/Syrd.do?mthd=syrdList\">һ����˰Դ�϶�</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/wjps/listspProject.do?mthd=ListJgnsrxx\">��������</A>'
            + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/ydfx/Ydfx.do?mthd=listYdfx\">��˰���¶�˰�շ���</A>';
//ͳ�Ʒ���
//var report = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/exprop/dynamicDataStaticAction.do?method=doList&GUIDELINE=DYZSE">��̬ͳ��</A>';
var report = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/expropriation/ListDynamicStatic.jsp">��̬ͳ��</A>';

var hjg2    = '<A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/AddspProject.jsp\">ȡ��������Ŀ����¼��</A>' + '<BR><A style=\"font-size:9pt;line-height:14pt;\" href=\"/jsp/wjps/AddTweiDerate.jsp\">רҵ������ҵ��Χ��������</A>';
