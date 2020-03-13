/* Visen 编写第一个版本 V1.0
 * 功 能：设置菜单置于最顶层，防止被Select或iframe遮罩
 * 原 理：在菜单显示时，同步在菜单的后面垫上一个与菜单同样大小的iframe
 * 开 关：enableMenu为打开、关闭开关。
 * 接 口：如何调用,jsp找到doshow(xxx,1)函数,该为doshow(xxx,3)
 * 菜单是调用Window.createPopup方法，建立一个菜单弹出对象 ，IE版本5.5以上支持该对象。
 * 
 */
 var enableMenu=0;
 var oPopup = window.createPopup();
 var menuTimer;
function setMenuPrepos(obj){
	
 
  try {
  obj.style.display="block";
  richContext(obj);
  setIsEnable();
  obj.style.display="none";
  }
  catch(err){
  }

}

/*
 *功能：停止设置菜单置于最顶层
 *原理：在菜单显示时，同步在菜单的后面垫上一个与菜单同样大小的iframe
 *
 */
function unMenuPrepos(obj){
   
	setIsDisable();
	//alert(event.offsetY);
  	if(event.offsetY>-93)
	  oPopup.hide();
}

//菜单显示事件，在移动到父菜单时调用，obj为父菜单对象,num为调用模式，3,1为显示，0为隐藏。

function doShow(obj,num)
{
  if(num==3){
   setIsEnable();
   num=1;
  }
  if(num==1)
  {
	  setMenuPrepos(obj);
  }
  else
  {

  unMenuPrepos(obj);

  }
}
//打开菜单遮罩效果,该函数已经淘汰，暂保留。
function setIsEnable(){
 enableMenu=1;
}
//关闭菜单遮罩效果,该函数已经淘汰，暂保留。
function setIsDisable(){
 enableMenu=0;
}
//获得Menu对象，如将对象menubar_3替换为menu_3

function getobj(obj){
   try{
   return obj.id.replace("bar","");}
   catch(err){
   return "";
   }
}

//弹出菜单函数，计算菜单位置，以及内容。

function richContext(obj)
{
	//alert("ok");
  try{//防止弹出错误
  var lefter2 = event.offsetY+0;
  //var topper2 = event.offsetX;
  var topper2 = obj.offsetX;
  var iposLeft=menutd.offsetLeft+menutd1.offsetWidth+obj.offsetLeft-10;//相对左偏移
  var iposTop=menutd.offsetTop+menutd.offsetHeight;//相对Top偏移
  var ioffsetWidth=obj.offsetWidth;//相对width偏移
  var ioffsetHeight=obj.offsetHeight;//相对heigth偏移
   var div= obj.innerHTML;
  div=div.replace(/class="Menu_OutTable"/g,'style="border: 1px solid #B4B7B9;"');
  div=div.replace(/class="Menu_OutTd"/g,'style="font-size: 12px;line-height: 24px;color: #3D6A83;border-top: 1px solid #676767;border-right: 1px none #676767;border-bottom: 1px dashed #676767;border-left: 1px none #676767;" onmouseover=this.style.background="#cccccc"; onmouseout=this.style.background="#ffffff"');
  div=div.replace(/class=Menu_OutTable/g,'style="border: 1px solid #B4B7B9;"');
  div=div.replace(/class=Menu_OutTd/g,'style="font-size: 12px;line-height: 24px;color: #3D6A83;border-top: 1px solid #676767;border-right: 1px none #676767;border-bottom: 1px dashed #676767;border-left: 1px none #676767;" onmouseover=this.style.background="#cccccc"; onmouseout=this.style.background="#ffffff"');
  oPopup.document.body.innerHTML = div; 
   obj.document.body.onmouseout =function func_onmouseouto() {parent.Menu_next.menuTimer=setTimeout("parent.Menu_next.oPopup.hide();",4000);} ;
  obj.document.body.onmouseover =function func_onmouseouover() {clearTimeout(parent.Menu_next.menuTimer);}; 
  ActEvent(oPopup.document.body);
 oPopup.document.body.onmouseout =function func_onmouseouto() {parent.Menu_next.menuTimer=setTimeout("parent.Menu_next.oPopup.hide();",4000);} ;
  oPopup.document.body.onmouseover =function func_onmouseouover() {clearTimeout(parent.Menu_next.menuTimer);}; 
   oPopup.show(topper2, 0, ioffsetWidth, ioffsetHeight,obj );
  }
  catch(err) {
	  
  }
}
//公有设置函数。,设置整个表格的样式。
function ActEvent(oPopupBody) {
  var xchild = oPopupBody.childNodes(0).childNodes(0).childNodes(0).childNodes(0).childNodes(0).childNodes(0);
  xchild.style.cssText ="font-size: 12px;line-height: 24px;color: #3D6A83;border-top: 1px solid #676767;border-right: 1px none #676767;border-bottom: 1px dashed #676767;border-left: 1px none #676767;";

 
} 
