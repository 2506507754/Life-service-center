/* Visen ��д��һ���汾 V1.0
 * �� �ܣ����ò˵�������㣬��ֹ��Select��iframe����
 * ԭ ���ڲ˵���ʾʱ��ͬ���ڲ˵��ĺ������һ����˵�ͬ����С��iframe
 * �� �أ�enableMenuΪ�򿪡��رտ��ء�
 * �� �ڣ���ε���,jsp�ҵ�doshow(xxx,1)����,��Ϊdoshow(xxx,3)
 * �˵��ǵ���Window.createPopup����������һ���˵��������� ��IE�汾5.5����֧�ָö���
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
 *���ܣ�ֹͣ���ò˵��������
 *ԭ���ڲ˵���ʾʱ��ͬ���ڲ˵��ĺ������һ����˵�ͬ����С��iframe
 *
 */
function unMenuPrepos(obj){
   
	setIsDisable();
	//alert(event.offsetY);
  	if(event.offsetY>-93)
	  oPopup.hide();
}

//�˵���ʾ�¼������ƶ������˵�ʱ���ã�objΪ���˵�����,numΪ����ģʽ��3,1Ϊ��ʾ��0Ϊ���ء�

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
//�򿪲˵�����Ч��,�ú����Ѿ���̭���ݱ�����
function setIsEnable(){
 enableMenu=1;
}
//�رղ˵�����Ч��,�ú����Ѿ���̭���ݱ�����
function setIsDisable(){
 enableMenu=0;
}
//���Menu�����罫����menubar_3�滻Ϊmenu_3

function getobj(obj){
   try{
   return obj.id.replace("bar","");}
   catch(err){
   return "";
   }
}

//�����˵�����������˵�λ�ã��Լ����ݡ�

function richContext(obj)
{
	//alert("ok");
  try{//��ֹ��������
  var lefter2 = event.offsetY+0;
  //var topper2 = event.offsetX;
  var topper2 = obj.offsetX;
  var iposLeft=menutd.offsetLeft+menutd1.offsetWidth+obj.offsetLeft-10;//�����ƫ��
  var iposTop=menutd.offsetTop+menutd.offsetHeight;//���Topƫ��
  var ioffsetWidth=obj.offsetWidth;//���widthƫ��
  var ioffsetHeight=obj.offsetHeight;//���heigthƫ��
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
//�������ú�����,��������������ʽ��
function ActEvent(oPopupBody) {
  var xchild = oPopupBody.childNodes(0).childNodes(0).childNodes(0).childNodes(0).childNodes(0).childNodes(0);
  xchild.style.cssText ="font-size: 12px;line-height: 24px;color: #3D6A83;border-top: 1px solid #676767;border-right: 1px none #676767;border-bottom: 1px dashed #676767;border-left: 1px none #676767;";

 
} 
