SEP_PADDING = 5
HANDLE_PADDING = 7

var yToolbars =	new Array();
var YInitialized = false;
var bLoad=false
var pureText=true
var bodyTag="<head><style type=\"text/css\">body {font-size:	10.5pt}</style><meta http-equiv=Content-Type content=\"text/html; charset=gb2312\"></head><BODY bgcolor=\"#FFFFFF\" MONOSPACE>"
var bTextMode=false

public_description=new Editor

function document.onreadystatechange(){
  if (YInitialized) return;
  YInitialized = true;

  var i, s, curr;

  for (i=0; i<document.body.all.length;	i++)
  {
    curr=document.body.all[i];
    if (curr.className == "yToolbar")
    {
      InitTB(curr);
      yToolbars[yToolbars.length] = curr;
    }
  }

  DoLayout();
  window.onresize = DoLayout;

  HtmlEdit.document.open()
  HtmlEdit.document.write(bodyTag);
  HtmlEdit.document.close()
  HtmlEdit.document.designMode="On"
}

function InitBtn(btn)
{
  btn.onmouseover = BtnMouseOver;
  btn.onmouseout = BtnMouseOut;
  btn.onmousedown = BtnMouseDown;
  btn.onmouseup	= BtnMouseUp;
  btn.ondragstart = YCancelEvent;
  btn.onselectstart = YCancelEvent;
  btn.onselect = YCancelEvent;
  btn.YUSERONCLICK = btn.onclick;
  btn.onclick =	YCancelEvent;
  btn.YINITIALIZED = true;
  return true;
}

function InitTB(y)
{
  y.TBWidth = 0;

  if (!	PopulateTB(y)) return false;

  y.style.posWidth = y.TBWidth;

  return true;
}


function YCancelEvent()
{
  event.returnValue=false;
  event.cancelBubble=true;
  return false;
}

function PopulateTB(y)
{
  var i, elements, element;

  elements = y.children;
  for (i=0; i<elements.length; i++) {
    element = elements[i];
    if (element.tagName	== "SCRIPT" || element.tagName == "!") continue;

    switch (element.className) {
      case "Btn":
        if (element.YINITIALIZED == null)	{
          if (! InitBtn(element))
          return false;
        }
        element.style.posLeft = y.TBWidth;
        y.TBWidth	+= element.offsetWidth + 1;
        break;

      case "TBGen":
        element.style.posLeft = y.TBWidth;
        y.TBWidth	+= element.offsetWidth + 1;
        break;

      case "TBSep":
        element.style.posLeft = y.TBWidth	+ 2;
        y.TBWidth	+= SEP_PADDING;
        break;

      case "TBHandle":
        element.style.posLeft = 2;
        y.TBWidth	+= element.offsetWidth + HANDLE_PADDING;
        break;

      default:
        return false;
      }
  }

  y.TBWidth += 1;
  return true;
}

function DebugObject(obj)
{
  var msg = "";
  for (var i in	TB) {
    ans=prompt(i+"="+TB[i]+"\n");
    if (! ans) break;
  }
}

function LayoutTBs()
{
  NumTBs = yToolbars.length;

  if (NumTBs ==	0) return;

  var i;
  var ScrWid = (document.body.offsetWidth) - 6;
  var TotalLen = ScrWid;
  for (i = 0 ; i < NumTBs ; i++) {
    TB = yToolbars[i];
    if (TB.TBWidth > TotalLen) TotalLen	= TB.TBWidth;
  }

  var PrevTB;
  var LastStart	= 0;
  var RelTop = 0;
  var LastWid, CurrWid;
  var TB = yToolbars[0];
  TB.style.posTop = 0;
  TB.style.posLeft = 0;

  var Start = TB.TBWidth;
  for (i = 1 ; i < yToolbars.length ; i++) {
    PrevTB = TB;
    TB = yToolbars[i];
    CurrWid = TB.TBWidth;

    if ((Start + CurrWid) > ScrWid) {
      Start = 0;
      LastWid =	TotalLen - LastStart;
    }
    else {
       LastWid =	PrevTB.TBWidth;
       RelTop -=	TB.offsetHeight;
    }

    TB.style.posTop = RelTop;
    TB.style.posLeft = Start;
    PrevTB.style.width = LastWid;

    LastStart =	Start;
    Start += CurrWid;
  }

  TB.style.width = TotalLen - LastStart;

  i--;
  TB = yToolbars[i];
  var TBInd = TB.sourceIndex;
  var A	= TB.document.all;
  var item;
  for (i in A) {
    item = A.item(i);
    if (! item)	continue;
    if (! item.style) continue;
    if (item.sourceIndex <= TBInd) continue;
    if (item.style.position == "absolute") continue;
    item.style.posTop =	RelTop;
  }
}

function DoLayout()
{
  LayoutTBs();
}

function BtnMouseOver()
{
  if (event.srcElement.tagName != "IMG") return	false;
  var image = event.srcElement;
  var element =	image.parentElement;

  if (image.className == "Ico")	element.className = "BtnMouseOverUp";
  else if (image.className == "IcoDown") element.className = "BtnMouseOverDown";

  event.cancelBubble = true;
}

function BtnMouseOut()
{
  if (event.srcElement.tagName != "IMG") {
    event.cancelBubble = true;
    return false;
  }

  var image = event.srcElement;
  var element =	image.parentElement;
  yRaisedElement = null;

  element.className = "Btn";
  image.className = "Ico";

  event.cancelBubble = true;
}

function BtnMouseDown()
{
  if (event.srcElement.tagName != "IMG") {
    event.cancelBubble = true;
    event.returnValue=false;
    return false;
  }

  var image = event.srcElement;
  var element =	image.parentElement;

  element.className = "BtnMouseOverDown";
  image.className = "IcoDown";

  event.cancelBubble = true;
  event.returnValue=false;
  return false;
}

function BtnMouseUp()
{
  if (event.srcElement.tagName != "IMG") {
    event.cancelBubble = true;
    return false;
  }

  var image = event.srcElement;
  var element =	image.parentElement;

  if (element.YUSERONCLICK) eval(element.YUSERONCLICK +	"anonymous()");

  element.className = "BtnMouseOverUp";
  image.className = "Ico";

  event.cancelBubble = true;
  return false;
}

function getEl(sTag,start)
{
  while	((start!=null) && (start.tagName!=sTag)) start = start.parentElement;
  return start;
}

function cleanHtml()
{
  var fonts = HtmlEdit.document.body.all.tags("FONT");
  var curr;
  for (var i = fonts.length - 1; i >= 0; i--) {
    curr = fonts[i];
    if (curr.style.backgroundColor == "#ffffff") curr.outerHTML	= curr.innerHTML;
  }
}

function getPureHtml()
{
  var str = "";
  var paras = HtmlEdit.document.body.all.tags("P");
  if (paras.length > 0)	{
    for	(var i=paras.length-1; i >= 0; i--) str	= paras[i].innerHTML + "\n" + str;
  }
  else {
    str	= HtmlEdit.document.body.innerHTML;
  }
  return str;
}


function Editor()
{
  this.put_HtmlMode=setMode;
  this.put_value=putText;
  this.get_value=getText;
}

function getText()
{
  if (bTextMode)
    return HtmlEdit.document.body.innerText;
  else
  {
    cleanHtml();
    cleanHtml();
    return HtmlEdit.document.body.innerHTML;
  }
}

function putText(v)
{
  if (bTextMode)
    HtmlEdit.document.body.innerText = v;
  else
    HtmlEdit.document.body.innerHTML = v;
}

function UserDialog(what)
{
  if (!validateMode()) return;
  
  HtmlEdit.focus();	
  HtmlEdit.document.execCommand(what, true);

  pureText = false;
  HtmlEdit.focus();
}

function validateMode()
{
  if (!	bTextMode) return true;
  alert("请取消“查看HTML源代码”选项，然后再使用系统编辑功能!");
  HtmlEdit.focus();
  return false;
}

function format(what,opt)
{
  if (!validateMode()) return;
  if (opt=="removeFormat")
  {
    what=opt;
    opt=null;
  }

  if (opt==null) HtmlEdit.document.execCommand(what);
  else HtmlEdit.document.execCommand(what,"",opt);

  pureText = false;
  HtmlEdit.focus();
}

function setMode(newMode)
{
  var cont;
  bTextMode = newMode;
  if (bTextMode) {
    cleanHtml();
    cleanHtml();

    cont=HtmlEdit.document.body.innerHTML;
    HtmlEdit.document.body.innerText=cont;
  }
  else {
    cont=HtmlEdit.document.body.innerText;
    HtmlEdit.document.body.innerHTML=cont;
  }
  HtmlEdit.focus();
}

function foreColor()
{
  if (!	validateMode())	return;
  var arr = showModalDialog("selcolor.htm", "", "dialogWidth:18.5em; dialogHeight:17.5em; status:0");
  if (arr != null) format('forecolor', arr);
  else HtmlEdit.focus();
}

function InsertTable()
{
  if (!	validateMode())	return;
  var arr = showModalDialog("table.htm", "", "dialogWidth:300pt;dialogHeight:236pt;help:0;status:0");

  if (arr != null){
    content=HtmlEdit.document.body.innerHTML;
    content=content+arr;
    HtmlEdit.document.body.innerHTML=content;
  }
  HtmlEdit.focus();
}


function InsertImg()
{
  if (!	validateMode())	return;
  var arr = showModalDialog("image.htm", "", "dialogWidth:430px; dialogHeight:230px; status:0");

  if (arr != null){
    content=HtmlEdit.document.body.innerHTML;
    content=content+arr;
    HtmlEdit.document.body.innerHTML=content;
  }
  HtmlEdit.focus();
}

function specialtype(Mark){
  if (!Error()) return;
  var sel,RangeType
  sel = HtmlEdit.document.selection.createRange();
  RangeType = HtmlEdit.document.selection.type;
  if (RangeType == "Text"){
    sel.pasteHTML("<" + Mark + ">" + sel.text + "</" + Mark + ">");
    sel.select();
  }
  HtmlEdit.focus();
}

function help()
{
  var arr = showModalDialog("help.htm", "", "dialogWidth:580px; dialogHeight:460px; status:0");
}

function save()
{
  if (bTextMode){
//编辑器嵌入其他网页时使用下面这一句（请将form1改成相应表单名）
  parent.myform.Content.value=HtmlEdit.document.body.innerText;
//单独打开编辑器时使用下面这一句（请将form1改成相应表单名）  
//  self.opener.form1.content.value+=HtmlEdit.document.body.innerText;
  }
  else{
//编辑器嵌入其他网页时使用下面这一句（请将form1改成相应表单名）
  parent.myform.Content.value=HtmlEdit.document.body.innerHTML;
//单独打开编辑器时使用下面这一句（请将form1改成相应表单名）  
//  self.opener.form1.content.value+=HtmlEdit.document.body.innerHTML;
  }
  HtmlEdit.focus();
  return false;
}