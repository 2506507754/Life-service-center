
function selectRow(thisObject){
    if(selectedRow != null){
        selectedRow.value = "unselected";
        selectedRow.style.backgroundColor = "";
    }
    thisObject.value = "selected";
    //thisObject.style.backgroundColor = "#A5C7DE";
    thisObject.style.backgroundColor = "FFCF00";
    selectedRow = thisObject;
    ///
    try{
	   selectedRow.children[0].children[2].checked="true";
	}
	catch(Exception){}

}

function mouseoverRow(thisRow){
   
    thisRow.style.backgroundColor = "#3969E7";
    thisRow.style.color = "";
    
}

function mouseoutRow(thisRow){
    if(thisRow.value == "unselected"){
        thisRow.style.backgroundColor = "";
        thisRow.style.color = "";
    }
    if(thisRow.value == "selected"){
        thisRow.style.backgroundColor = "#FFCF00";
        thisRow.style.color = "";
        }
    
}

