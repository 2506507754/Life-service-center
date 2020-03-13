/*
 * FCKeditor - The text editor for internet
 * Copyright (C) 2003-2004 Frederico Caldeira Knabben
 * 
 * Licensed under the terms of the GNU Lesser General Public License:
 * 		http://www.opensource.org/licenses/lgpl-license.php
 * 
 * For further information visit:
 * 		http://www.fckeditor.net/
 * 
 * File Name: fck_2_ie.js
 * 	This is the second part of the "FCK" object creation. This is the main
 * 	object that represents an editor instance.
 * 	(IE specific implementations)
 * 
 * Version:  2.0 Beta 1
 * Modified: 2004-05-31 23:07:49
 * 
 * File Authors:
 * 		Frederico Caldeira Knabben (fredck@fckeditor.net)
 */

FCK.Paste = function()
{

	if ( FCKConfig.ForcePasteAsPlainText )
	{
		FCK.PasteAsPlainText() ;	
		return false ;
	}
	else if ( FCKConfig.AutoDetectPasteFromWord && FCKBrowserInfo.IsIE55OrMore )
	{
		var sHTML = FCK.GetClipboardHTML() ;
		var re = /<\w[^>]* class="?MsoNormal"?/gi ;
		if ( re.test( sHTML ) )
		{
			if ( confirm( FCKLang["PasteWordConfirm"] ) )
			{
				FCK.CleanAndPaste( sHTML ) ;
				return false ;
			}
		}
	}
	else
		return true ;
}

FCK.PasteAsPlainText = function()
{
	var sText = FCKTools.HTMLEncode( clipboardData.getData("Text") ) ;

	FCKDebug.Output( 'FCK.PasteAsPlainText: ' + sText ) ;

	sText = sText.replace( /\n/g, '<BR>' ) ;
	this.InsertHtml( sText ) ;	
}

FCK.InsertHtml = function( html )
{
	var oSel = FCKSelection.Delete() ;
	oSel.createRange().pasteHTML( html ) ; 
	this.Focus() ;
}

FCK.InsertElement = function( element )
{
	this.InsertHtml( element.outerHTML ) ;
}

FCK.GetClipboardHTML = function()
{
	var oDiv = document.getElementById( '___FCKHiddenDiv' ) ;
	
	if ( !oDiv )
	{
		var oDiv = document.createElement( 'DIV' ) ;
		divEdit.id = '___FCKHiddenDiv' ;
		oDiv.style.display		= 'none' ;
		oDiv.style.visibility	= 'hidden' ;
		oDiv.style.overflow		= 'hidden' ;
		oDiv.style.position		= 'absolute' ;
		oDiv.style.width		= 1 ;
		oDiv.style.height		= 1 ;
	
		document.body.appendChild( oDiv ) ;
		
		// Get the element again (must be done to work)
		oDiv = document.getElementById( '___FCKHiddenDiv' ) ;
	}
	
	var oTextRange = document.body.createTextRange() ;
	oTextRange.moveToElementText( oDiv ) ;
	oTextRange.execCommand( 'Paste' ) ;
	
	var sData = oDiv.innerHTML ;
	oDiv.innerHTML = '' ;
	
	return sData ;
}

FCK.AttachToOnSelectionChange = function( functionPointer )
{
	this.EditorDocument.attachEvent( 'onselectionchange', functionPointer ) ;
}

