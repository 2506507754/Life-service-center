/**
 * v 1.2.1
 * ������onclick�¼��������Ӱ�죬
 * ͬʱ������ҳ�����ʱ�����layer��λ
 * ʹ�õ�����layer�ܹ���סselect����
 * �޸��˶�������"1999-02-11asdf"�������������͵�ʶ�����
 *
 * ��javascript�ű���������ʽ����������
 * �����ǣ�����һ��<script>������Ӵ˽ű����������µ�ҳ��������ӣ�
 * <input name=birth value="�۽�ѡ������" onfocus="pickDate(this)">
 * ��ҳ���Ͽ��ԶԶ��<input>��ǽ�������ѡ����Щ<input>��ǿ�����<form>����ڣ�Ҳ���Բ��ڣ�
 * ���ң���ǵ����ƿ��п��ޣ�����Ҳ�ɣ�Ҳ����˵�������κ����ơ�
 * ����ʹ������� pickDate.js.htm ʾ��ҳ�档
 *
 * ���ű���ʹ��������ȫ��javascript������������
 * spanPickDate��spanPickDate_year��spanPickDate_month��spanPickDate_currentInput��
 * pickDate()��pickDate_listDays()
 * ��˵��ñ��ű���ҳ����ñ���ʹ�������г���javascript�����������ơ�
 */

//������һ���㣺
document.write("<span id=spanPickDate style='position:absolute; display:none;'><iframe id='ifmPickDate' frameborder='no' width=134 height=161 ></iframe></span>");

ifmPickDate.document.write(
    "<body leftMargin=0 rightMargin=0 topMargin=0 bottomMargin=0 bgColor='lightyellow' SCROLL='no'>"+
    "<table id=innerTable style='font-size:9pt' cellspacing=0 cellpadding=1 border=0>"+
      "<tr>"+
        "<td align=center>"+
          "<a style='cursor:hand; color:blue' onclick='spanPickDate_year.innerText--;return'>&lt;&lt;</a>"+
          "<a id=spanPickDate_year style='color:red' onpropertychange='window.parent.pickDate_listDays(innerText,spanPickDate_month.innerText)'>2000</a>"+
          "<a style='cursor:hand; color:blue' onclick='spanPickDate_year.innerText++'>&gt;&gt;</a> �� "+
          "<a style='cursor:hand; color:blue' onclick='if(nextSibling.innerText>1)nextSibling.innerText--'>&lt;&lt;</a>"+
          "<a id=spanPickDate_month style='color:red' onpropertychange='if(innerText.length<2)innerText=&quot;0&quot;+innerText; else window.parent.pickDate_listDays(spanPickDate_year.innerText,innerText)'>02</a>"+
          "<a style='cursor:hand; color:blue' onclick='if(previousSibling.innerText<12)previousSibling.innerText++'>&gt;&gt;</a> �� "+
        "</td>"+
      "</tr>"+
      "<tr>"+
        "<td>"+
          "<span id=spanPickDate_days></span>"+
        "</td>"+
      "</tr>"+
    "</table>"+
    "</body>"
    );


ifmPickDate.document.close();

var spanPickDate_currentInput = null;

function hidePickDateLayer()
{
	var x = window.event.x;
	var y = window.event.y;
	var rc = spanPickDate.getBoundingClientRect();
	if(x < rc.left || x > rc.right || y < rc.top || y > rc.bottom)
		spanPickDate.style.display='none'
}

function pickDate(input)
{
	if(typeof(input) == 'undefined' || input == null) 
	{
		alert("�Ƿ��ı�ǣ�"+input);
		return;
	}
    var dt = input.value;
    //ȡĬ��ѡ�е�ʱ�䣺���������������ڣ�ȡ�����ڣ�����ȡ��ǰ����
    var matchResult=dt.match(/(\d{4,4})-(\d{2,2})-(\d{2,2})/);
    if(matchResult) 
    {
    	if(matchResult[2]>0&&matchResult[2]<13&&matchResult[3]>0&&matchResult[3]<32)
    	{
        	dt = new Date(matchResult[1],matchResult[2]-1,matchResult[3]);
        }else{
        	dt=new Date();
	}
    } else {
        dt = new Date();
    }
    var rc = input.getBoundingClientRect();
    spanPickDate.style.left = rc.left+document.body.scrollLeft;
    spanPickDate.style.top = rc.bottom+document.body.scrollTop;

    input.attachEvent("onblur",hidePickDateLayer);

    spanPickDate.style.display = '';
    spanPickDate_currentInput = input;
    ifmPickDate.document.all.spanPickDate_year.innerText = dt.getFullYear();
    ifmPickDate.document.all.spanPickDate_month.innerText = dt.getMonth()+1;
}
function pickDate_listDays(year,month)
{
    var days = "<table width=100% style='font-size:9pt'><tr><td style='color:red'>��</td><td>һ</td><td>��</td><td>��</td><td>��</td><td>��</td><td style='color:red'>��</td></tr>";

    //�ڴ˽�ÿ����������ɣ�
    var day = new Date(year,month-1,1).getDay();
    days += "\n<tr>";
    for(var i = 0; i < day; i++) days += "<td></td>";

    var daysOfMonth = 31;
    if(month == 4 || month == 6 || month == 9 || month == 11) daysOfMonth = 30;
    if(month == 2) {
        if(year % 4 != 0 || year % 100 == 0 && year % 400 != 0) daysOfMonth = 28; //�����ꣿ
        else daysOfMonth = 29;
    }

    for(var i = 1; i <= daysOfMonth; i++) {
        days += "<td style='cursor:hand' onclick='window.parent.spanPickDate_currentInput.value = spanPickDate_year.innerText+&quot;-&quot;+spanPickDate_month.innerText+&quot;-&quot;+innerText; window.parent.spanPickDate.style.display=&quot;none&quot;'"
            +" style='color:"+(day == 0 || day == 6 ? "red" : "green")+"'>"+(i < 10 ? "0" : "")+i+"</td>";

        if(++day == 7) {
            days += "</tr>\n</tr>";
            day = 0;
        }
    }
    days += "</tr></table>";
    ifmPickDate.spanPickDate_days.innerHTML = days;
}
