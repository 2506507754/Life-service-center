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
 * File Name: common.js
 * 	Common objects and functions shared by all pages that compose the
 * 	File Browser dialog window.
 * 
 * Version:  2.0 Beta 1
 * Modified: 2004-05-31 23:07:53
 * 
 * File Authors:
 * 		Frederico Caldeira Knabben (fredck@fckeditor.net)
 */

var oConnector = new Object() ;
oConnector.ResourceType = '' ;
oConnector.CurrentFolder = '/' ;

// Get the connector path from the URL.
oConnector.Regex = new RegExp( '[\?&]Connector=([^&]+)', 'i' ) ;
oConnector.ConnectorUrl = oConnector.Regex.exec( window.top.location.search )[1] ;

oConnector.SendCommand = function( command, params, callBackFunction )
{
	var sUrl = this.ConnectorUrl + '?Command=' + command ;
	sUrl += '&Type=' + this.ResourceType ;
	sUrl += '&CurrentFolder=' + escape( this.CurrentFolder ) ;
	
	if ( params ) sUrl += '&' + params ;

	var oXML = new FCKXml() ;
	
	if ( callBackFunction )
		oXML.LoadUrl( sUrl, callBackFunction ) ;	// Asynchronous load.
	else
		return oXML.LoadUrl( sUrl ) ;
}

var oIcons = new Object() ;

oIcons.AvailableIconsArray = [ 
	'ai','avi','bmp','cs','dll','doc','exe','fla','gif','htm','html','jpg','js',
	'mdb','mp3','pdf','ppt','rdp','swf','swt','txt','vsd','xls','xml','zip' ] ;
	
oIcons.AvailableIcons = new Object() ;

for ( var i = 0 ; i < oIcons.AvailableIconsArray.length ; i++ )
	oIcons.AvailableIcons[ oIcons.AvailableIconsArray[i] ] = true ;

oIcons.GetIcon = function( fileName )
{
	var sExtension = fileName.substr( fileName.lastIndexOf('.') + 1 ).toLowerCase() ;

	if ( this.AvailableIcons[ sExtension ] == true )
		return sExtension ;
	else
		return 'default.icon' ;
}