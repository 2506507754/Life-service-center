/**
 *
 */

// Constants
var VERTICAL  = "|";
var COLON     = ":";
var COMMA     = ",";
var SEMICOLON = ";";
var SPACE     = " ";
var SBRACKET_L = "(";
var SBRACKET_R = ")";
var MBRACKET_L = "[";
var MBRACKET_R = "]";
var BBRACKET_L = "{";
var BBRACKET_R = "}"

var NEWLINE = String.fromCharCode(10);
var CHAR34  = String.fromCharCode(34);

//
function HTMLDecode(text) {
	if (typeof(text) != "string")
	    text = text.toString() ;
	text = text.replace(/&lt;/g, "<") ;
	text = text.replace(/&gt;/g, ">") ;
	text = text.replace(/&amp;/g, "&") ;
	text = text.replace(/&quot;/g, "\"") ;
	text = text.replace(/&#146;/g, "\'") ;
	return text ;
}


function trim(str) {
    var result = str;
    if (result != "") {
        while (result.substring(0,1) == ' ') 
            result = result.substring(1, result.length);
        while (result.substring(result.length - 1, result.length) == ' ')
            result = result.substring(0, result.length - 1);
    }
    return result;
} 

function getStyleSheet(sid) {
    for (var i = 0; i < document.styleSheets.length; i++) {
          tStyleSheet = document.styleSheets[i];
          if (tStyleSheet.id == sid) 
                return tStyleSheet;
    }
    return null;
}

