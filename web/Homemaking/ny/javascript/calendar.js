/*
显示日期表函数 showDateTimeBar(obj, format, default[, func[, arg1[, arg2[,....]]]])
obj是要存放数据的表单名
format是要输出的格式
default是显示时的默认,y/m/d h:n:s,如m/4/2010 12:34:s就是2010年当前月份4号12点34分当前秒
func是按确定后调用的函数
arg1,arg2,...传给函数的参数
*/
var today = new Date();
var currentYear = today.getFullYear(); //当前年
var currentMonth = today.getMonth(); //当前月份
var currentDate = today.getDate(); //当前日期
var currentDay = today.getDay(); //当前星期
var nowHours = today.getHours();
var nowMinutes = today.getMinutes();
var nowSeconds = today.getSeconds();
var year = currentYear; //年
var month = currentMonth; //月
var date = currentDate; //日
var day = currentDay; //星期
var yearUnits = "年"; //年单位
var monthUnits = "月"; //月单位
var dateUnits = "日"; //日期单位
var selectYear = 0; //已选的
var selectMonth = 0;
var selectDate = 0;
var selectHours = 0;
var selectMinute = 0;
var selectSecond = 0;
var todayStyle = 'border: 1px solid #FFFFFF; background-color: #66FFFF; font-weight: bold; cursor:default';
var selectDayStyle = 'border: 1px solid #FFFFFF; background-color: #0066FF; font-weight: bold; color: #FFFFFF; cursor:default';
var noTodayStyle = 'border: 1px solid #FFFFFF; cursor:default'; 
var showDateTimeBarArgs = null;
var outObj = null;

var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var monthNames = new Array("一","二","三","四","五","六","七","八","九","十","十一","十二");
var hasSubDateTime = false;
var subDateTimeFormStr = "";
var subDateTimeForm = "";

document.onload = initDateTimeBar();

function changeMonth(n) {
    month += n;
    while(month<0) {
        month += 12;
        year--;
    }
    year += Math.floor(month/12);
    month = month % 12;
    showDateTable();
}

function showYearMonth() {
    var str = "";
    str += year + yearUnits;
    str += monthNames[month] + monthUnits;
    var YM = document.getElementById("YearMonth");
    YM.innerHTML = str;
}

function showDateTable() {
    getMonthFirstDate(year,month) //回到当月第一天
    showYearMonth();
    var i = 1 - day;
    var j = 1; //行计器
    var monthDays = getMonthDays(year,month); //取得当月的天数
    var emptyTD = '<td style="border: 1px solid #FFFFFF; cursor:default ">&nbsp;</td>';
    var TRstr = '<tr align="center" valign="middle">';
    var table = '<table width="100%" border="0" cellspacing="0" cellpadding="0">';
    table += '<tr><th scope="col">日</th><th scope="col">一</th><th scope="col">二</th><th scope="col">三</th><th scope="col">四</th><th scope="col">五</th><th scope="col">六</th></tr>';
    table += TRstr;
    
    for(; i<1 ; i++,j++) {
        table += emptyTD;
    }
    
    for(; i<=monthDays ; i++,j++) {
        if(j>7) {
            table += '</tr>' + TRstr;
            j = 1;
        }
        table += getDateTD(year,month,i);
    }
    
    for(; j<=7 ; i++,j++) {
        table += emptyTD;
    }
    
    table += '</tr></table>';
    var Dtbl = document.getElementById("dateTable");
    Dtbl.innerHTML = table; //写入
}


function getDateTD(y,m,d) {
    var TDstyle = noTodayStyle;
    var TDstr = '<td ';
    if(currentYear==y && currentMonth==m && currentDate==d) {
        TDstyle = todayStyle;
        //alert('今天');
    }
    if(selectYear==y && selectMonth==m && selectDate==d) {
        TDstyle = selectDayStyle;
        //alert('选择');
    }
    TDstr += 'style="' + TDstyle + '" ';
    TDstr += 'onmouseover="onMouseOverTD(this)" ';
    TDstr += 'onmouseout="onMouseOutTD(this)" ';
    TDstr += 'onclick="onMouseClickTD(' + y + ',' + m + ',' + d + ')" )"';
    TDstr += '>';
    TDstr += d;
    TDstr += '</td>';
    return TDstr;
}

function getMonthFirstDate(y,m) {
    var dateObj = new Date(y,m);
    year = dateObj.getFullYear();
    month = dateObj.getMonth();
    date = dateObj.getDate();
    day = dateObj.getDay();
}

function getTodayDate() {
    var TodayDate = new Date();
    year = TodayDate.getFullYear();
    month = TodayDate.getMonth();
    date = TodayDate.getDate();
}

function getMonthDays(y,m) {
    d = monthDays[m];
    if(m==1) //当是二月份时
        d += isLeapYear(y);
    return d;
}

function isLeapYear(y) {
    if((y%4==0 && y%100!=0) || y%400==0)
        return 1;
    else
        return 0;
}

function showTimeTable() {
    //getNowTime();
    var i = 0;
    var isNowHours = "";
    var isNowMinute = "";
    var isNowSecond = "";
    var allStr = "";
    allStr += '<table width="100" border="0" cellspacing="0" cellpadding="0">';
    allStr += ' <tr>';
    allStr += ' <th scope="col">time:</th>';
    allStr += ' <th scope="col">';
    allStr += ' <select name="timeHours" id="timeHours" onChange="setSelectDataTime(\'Hours\', this.value)">';
    
    //for(i=0; i<24; i++) //小时设置
    for(i=8; i<19; i++) {
        isNowHours = i==nowHours ? " selected" : "";
        allStr += '<option value="' + i + '"' + isNowHours + '>' + i + '</option>';
    }
    
    allStr += ' </select>';
    allStr += ' </th>';
    allStr += ' <th scope="col">:</th>';
    allStr += ' <th scope="col">';
    allStr += " <select name='timeMinute' id='timeMinute' onChange=\"setSelectDataTime(\'Minute\', this.value)\">";
    
    //for(i=0;i<60;i++) //分钟设置
    for(i=0;i<60;i+=30) {
        isNowMinute = i==nowMinutes ? " selected" : "";
        allStr += '<option value="' + i + '"' + isNowMinute + '>' + i + '</option>';
    }
    
    allStr += ' </select>';
    allStr += ' </th>';
    allStr += ' <th scope="col">:</th>';
    allStr += ' <th scope="col">';
    allStr += ' <select name="timeSecond" id="timeSecond" onChange="setSelectDataTime(\'Second\', this.value)">';
    
    //for(i=0;i<60;i++) //秒数设置
    for(i=0;i<60;i++) {
        isNowSecond = i==nowSeconds ? " selected" : "";
        allStr += '<option value="' + i + '"' + isNowSecond + '>' + i + '</option>';
    }
    
    allStr += ' </select>';
    allStr += ' </th>';
    allStr += ' </tr>';
    allStr += '</table>';
    var Ttbl = document.getElementById("timeTable");
    Ttbl.innerHTML = allStr;
}

function getNowTime() {
    var now = new Date();
    nowHours = now.getHours();
    nowMinutes = now.getMinutes();
}

function initDateTimeBar() {
    var allStr = ''; //输出要显示的板
    allStr += '<div id="DateTimeLayer" style="position:absolute; left:50px; top:50px; z-index:1; background-color: #9999FF; layer-background-color: #9999FF; border: 1px solid #000000; visibility: hidden;">';
    allStr += '<table width="300" border="0" cellpadding="0" cellspacing="0" bgcolor="#D4D0C8">';
    allStr += ' <tr align="center" valign="middle">';
    allStr += ' <td width="31"><input type="button" name="Submit5" value="&lt;&lt;" onclick="changeMonth(-12)" /></td>';
    allStr += ' <td width="24"><input type="button" name="Submit22" value="&lt;" onclick="changeMonth(-1)" /></td>';
    allStr += ' <td width="100" id="YearMonth">日期时间板</td>';
    allStr += ' <td width="23"><input type="button" name="Submit32" value="&gt;" onclick="changeMonth(1)" /></td>';
    allStr += ' <td width="30"><input type="button" name="Submit42" value="&gt;&gt;" onclick="changeMonth(12)" /></td>';
    allStr += ' <td width="31"><input type="button" value="X" onclick="hideDateTimeBar()"></td>';
    allStr += ' </tr>';
    allStr += ' <tr>';
    allStr += ' <td colspan="6" id="dateTable">&nbsp;</td>';
    allStr += ' </tr>';
    allStr += ' <tr>';
    allStr += ' <td colspan="4" id="timeTable">time:</td>';
    allStr += ' <td colspan="2"><input type="button" value=" 确定 " onclick="onConfirm()"></td>';
    allStr += ' </tr>';
    allStr += '</table>';
    
    document.writeln(allStr);
    hideDateTimeBar();
}

function writeToObj(y, m, d, h, M, s) {
    if(y==0) {
        y = currentYear;
        m = currentMonth;
        d = currentDate;
    }
    var fun = showDateTimeBarArgs[3]; //输入后调用的函数
    var args = new Array(); //给函数的参数
    for(var i=4; i<showDateTimeBarArgs.length; i++) {
        args.push(showDateTimeBarArgs[i]);
    }
    
    m++;
    
    h = h<10 ? ('0' + h) : h;
    M = M<10 ? ('0' + M) : M;
    m = m<10 ? ('0' + m) : m;
    d = d<10 ? ('0' + d) : d;
    s = s<10 ? ('0' + s) : s;
    
    var dateStr = y + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;
    if(outObj != null) {
        outObj.value = dateStr;
    }
    if(fun != null) {
        fun.apply(null,args);; //运行指定要调用的函数
    }
    
    return dateStr;
}


function getTop(obj) {
    var h=0;
    h = obj.offsetTop;
    //alert(obj.tagName);
    if(obj.tagName != "BODY")
        h += getTop(obj.offsetParent);
    return h;
}

function getLeft(obj) {
    var h=0;
    h = obj.offsetLeft;
    //alert(obj.tagName);
    if(obj.tagName != "BODY")
        h += getLeft(obj.offsetParent);
    return h;
}

function setSelectDataTime(variable, value) {
    if(value==null) value = 0;
    switch(variable) {
        case 'Year':
            selectYear = value;
            break;
        case 'Month':
            selectMonth = value;
            break;
        case 'Date':
            selectDate = value;
            break;
        case 'Hours':
            selectHours = value;
            break;
        case 'Minute':
            selectMinute = value;
            break;
        case 'Second':
            selectSecond = value;
            break;
        case 'init':
            selectYear = 0;
            selectMonth = 0;
            selectDate = 0;
            selectHours = 0;
            selectMinute = 0;
            selectSecond = 0;
            break;
    }
}

function setDefault(datetimeStr) {
    var now = null;
    if(datetimeStr != "") {
        datetimeStr = datetimeStr.toLowerCase();
        datetimeStr = datetimeStr.replace('y',currentYear);
        datetimeStr = datetimeStr.replace('m',currentMonth);
        datetimeStr = datetimeStr.replace('d',currentDate);
        datetimeStr = datetimeStr.replace('h',nowMinutes);
        datetimeStr = datetimeStr.replace('n',nowMinutes);
        datetimeStr = datetimeStr.replace('s',nowSeconds);
        now = new Date(datetimeStr);
    } else {
        now = new Date();
    }
    year = now.getFullYear(); //当前年
    month = now.getMonth(); //当前月份
    date = now.getDate(); //当前日期
    nowHours = now.getHours();
    nowMinutes = now.getMinutes();
    nowSeconds = now.getSeconds();
    setSelectDataTime('Hours', nowHours);
    setSelectDataTime('Minute', nowMinutes);
    setSelectDataTime('Second', nowSeconds);
}

function getNow() {
    var today = new Date();
    currentYear = today.getFullYear(); //当前年
    currentMonth = today.getMonth(); //当前月份
    currentDate = today.getDate(); //当前日期
    currentDay = today.getDay(); //当前星期
    nowHours = today.getHours();
    nowMinutes = today.getMinutes();
    nowSeconds = today.getSeconds();
}

//===============显示样式===================
function onMouseOverTD(obj) {
    obj.style.border="1px solid #0000FF";
    //obj.style.borderWidth = '1px';
    //obj.style.borderStyle = 'solid';
    //obj.style.borderColor = '#0000FF';
    //obj.style.background="#CCCCCC";
}

function onMouseOutTD(obj) {
    obj.style.border="1px solid #FFFFFF";
    //obj.style.background="#FFFFFF";
}

function onMouseClickTD(y, m, d) {
    selectYear = y; //已选的
    selectMonth = m;
    selectDate = d;
    //selectHours = 0;
    //selectMinute = 0;
    //selectSecond = 0;
    //writeToObj(y, m, d, h, M, 0) //写到标签中
    showDateTable(); //刷新日历
    //hideDateTimeBar(); //隐藏
}

function hideDateTimeBar() {
    outObj = null;
    showDateTimeBarArgs = null;
    var DTL = document.getElementById("DateTimeLayer");
    DTL.style.visibility="hidden";
}

function showDateTimeBar() {
    showDateTimeBarArgs=showDateTimeBar.arguments;
    outObj = showDateTimeBarArgs[0];
    
    var DTL = document.getElementById("DateTimeLayer");
    var i=0;
    getNow(); //取得当前时间
    setSelectDataTime('init'); //设置已选的时间日期
    if(showDateTimeBarArgs[2] == null) {
        setDefault('');
    } else {
        setDefault(showDateTimeBarArgs[2]);
    }
    DTL.style.left = getLeft(outObj) + "px";
    DTL.style.top = (getTop(outObj) + outObj.offsetHeight) + "px";
    showDateTable();
    showTimeTable();
    DTL.style.visibility = "visible";
}

function onConfirm() {
    writeToObj(selectYear, selectMonth, selectDate, selectHours, selectMinute, selectSecond);
    hideDateTimeBar(); //隐藏
}

function test(str) {
    //alert(str);
}

</script>


