<HTML>
   <HEAD>
      <meta http-equiv="Content-Type" content="text/html; charset=gb2312">
      <TITLE>日历</TITLE>      
      <STYLE TYPE="text/css">
         .today {color:navy; font-weight:bold}
         .days {font-weight:bold}
		 TD{ font-size : 12px; color:blue}
		 
      </STYLE>
      <SCRIPT LANGUAGE="JavaScript">         
         var months = new Array("一月", "二月", "三月",
            "四月", "五月", "六月", "七月", "八月", "九月",
            "十月", "十一月", "十二月");
         var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31,
            30, 31, 30, 31);
         var days = new Array("日", "一", "二","三", "四", "五", "六");

         function getDays(month, year) {
            // Test for leap year when February is selected.
            if (1 == month)
               return ((0 == year % 4) && (0 != (year % 100))) ||
                  (0 == year % 400) ? 29 : 28;
            else
               return daysInMonth[month];
         }

         function getToday() {
            // Generate today's date.
            this.now = new Date();
            this.year = this.now.getFullYear();
            this.month = this.now.getMonth();
            this.day = this.now.getDate();
            this.hour = this.now.getHours();
            this.minute = this.now.getMinutes();
            this.second = this.now.getSeconds();
         }

         // Start with a calendar for today.
         today = new getToday();

         function newCalendar() {
            today = new getToday();
            var parseYear = parseInt(document.all.year
               [document.all.year.selectedIndex].text);
            var newCal = new Date(parseYear,
               document.all.month.selectedIndex, 1);
            var day = -1;
            var startDay = newCal.getDay();
            var daily = 0;
            if ((today.year == newCal.getFullYear()) &&
                  (today.month == newCal.getMonth()))
               day = today.day;
            // Cache the calendar table's tBody section, dayList.
            var tableCal = document.all.calendar.tBodies.dayList;
            var intDaysInMonth =
               getDays(newCal.getMonth(), newCal.getFullYear());
            for (var intWeek = 0; intWeek < tableCal.rows.length;
                  intWeek++)
               for (var intDay = 0;
                     intDay < tableCal.rows[intWeek].cells.length;
                     intDay++) {
                  var cell = tableCal.rows[intWeek].cells[intDay];

                  // Start counting days.
                  if ((intDay == startDay) && (0 == daily))
                     daily = 1;

                  // Highlight the current day.
                  cell.className = (day == daily) ? "today" : "";

                  // Output the day number into the cell.
                  if ((daily > 0) && (daily <= intDaysInMonth))
                     cell.innerText = daily++;
                  else
                     cell.innerText = "";
               }
         }
         
          function addZero(val){
		 	   				if(parseInt(val)<10) val="0"+val;		 	   				
		 	   				return val;
		 	   }

         function getDate() {
		 				var sDate;
            // This code executes when the user clicks on a day
            // in the calendar.
            if ("TD" == event.srcElement.tagName)
               // Test whether day is valid.
               if ("" != event.srcElement.innerText){
                  //alert(event.srcElement.innerText);
				  sDate = document.all.year.value + "-" + addZero(document.all.month.value) + "-" + addZero(event.srcElement.innerText)+" "+addZero(today.hour)+":"+addZero(today.minute)+":"+addZero(today.second);				  
			      document.all.ret.value = sDate;
			}else document.all.ret.value='';
 		    window.close();
         }
		 	   
		 	  
		 		 
         function changeto(highlightcolor){
            source=event.srcElement
            if(source.tagName=="TABLE") return
            if(source.tagName=="TR") return
            while(source.tagName!="TD") source=source.parentElement
            if(source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
               source.style.backgroundColor=highlightcolor
         }

         function changeback(originalcolor){
            source=event.srcElement
            if(source.tagName=="TABLE") return
            if(source.tagName=="TR") return
            while(source.tagName!="TD") source=source.parentElement
            if(event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="ignore") return
            if(event.toElement!=source)source.style.backgroundColor=originalcolor
         }
 

      </SCRIPT>
	  
   </HEAD>
<BODY ONLOAD="newCalendar();" OnUnload="window.returnValue = document.all.ret.value;" class="bodybg">
 
<div align="right">
  <input type="hidden" name="ret">
  <TABLE ID="calendar" border="2" borderColorDark=#ffffff 
            borderColorLight=#dddddd   cellpadding="0" cellspacing="0"  class="bodybg">
    <THEAD> 
    <TR> 
      <TD COLSPAN=7 ALIGN=CENTER> 
        <!-- Month combo box -->
        <SELECT ID="month" ONCHANGE="newCalendar()">
          <SCRIPT LANGUAGE="JavaScript">
                        // Output months into the document.
                        // Select current month.
                        for (var intLoop = 0; intLoop < months.length;
                              intLoop++){                             
                           document.write("<OPTION VALUE= " + (intLoop + 1) + " " +
                              (today.month == intLoop ?
                                 "Selected" : "") + ">" +
                              months[intLoop]);
                              }
                     </SCRIPT>
        </SELECT>
        <!-- Year combo box -->
        <SELECT ID="year" ONCHANGE="newCalendar()">
          <SCRIPT LANGUAGE="JavaScript">
                        // Output years into the document.
                        // Select current year.
                        for (var intLoop = today.year-50; intLoop < (today.year + 10);
                              intLoop++)
                           document.write("<OPTION VALUE= " + intLoop + " " +
                              (today.year == intLoop ?
                                 "Selected" : "") + ">" +
                              intLoop);
                     </SCRIPT>
        </SELECT>
      </TD>
    </TR>
    <TR CLASS="days" > 
      <!-- Generate column for each day. -->
      <SCRIPT LANGUAGE="JavaScript">
                  // Output days.
                  for (var intLoop = 0; intLoop < days.length;
                        intLoop++)
                     document.write("<TD > <font size='2' color=#3366cc>" + days[intLoop] + "</font></TD>");
               </SCRIPT>
    </TR>
    </THEAD> 
	<TBODY ID="dayList"ALIGN=CENTER  style="cursor:hand" ONCLICK="getDate()" onmouseout="changeback('#fff9ec');" onmouseover="changeto('#FFCC00');"> 
    <!-- Generate grid for individual days. -->
    <SCRIPT LANGUAGE="JavaScript">
               for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
                  document.write("<TR>");
                  for (var intDays = 0; intDays < days.length;
                        intDays++){
				 		
                     document.write("<TD></TD>");
               
			       }  
				  document.write("</TR>");
               }
			 </SCRIPT>
    </TBODY> 
  </TABLE>
</div>
</BODY>
</HTML>




