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
 * File Name: fckcontextmenu.js
 * 	Defines the FCKContextMenu object that is responsible for all 
 * 	Context Menu operations.
 * 
 * Version:  2.0 Beta 1
 * Modified: 2004-05-31 23:07:49
 * 
 * File Authors:
 * 		Frederico Caldeira Knabben (fredck@fckeditor.net)
 */

var FCKContextMenu = new Object() ;

// This property is internally used to indicate that the context menu has been created.
FCKContextMenu._IsLoaded = false ;

// This method creates the context menu inside a DIV tag. Take a look at the end of this file for a sample output.
FCKContextMenu.Reload = function()
{
	// Create the Main DIV that holds the Context Menu.
	this._Div = this._Document.createElement( 'DIV' ) ;
	this._Div.className			= 'CM_ContextMenu' ;
	this._Div.style.position	= 'absolute' ;
	this._Div.style.visibility	= 'hidden' ;
	this._Document.body.appendChild( this._Div );
	
	// Create the main table for the menu items.
	var oTable = this._Document.createElement( 'TABLE' ) ;
	oTable.cellSpacing = 0 ;
	oTable.cellPadding = 0 ;
	oTable.border = 0 ;
	this._Div.appendChild( oTable ) ;

	// Create arrays with all Items to add.
	
	this.Groups = new Object() ;
	
	// Generic items that are always available.
	this.Groups['Generic'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Generic'] )
	{
		Add( new FCKContextMenuItem( this, 'Cut'	, FCKLang['Cut']	, true ) ) ;
		Add( new FCKContextMenuItem( this, 'Copy'	, FCKLang['Copy']	, true ) ) ;
		Add( new FCKContextMenuItem( this, 'Paste'	, FCKLang['Paste']	, true ) ) ;
	}
	
	// Link operations.
	this.Groups['Link'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Link'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Link'	, FCKLang['EditLink']	, true ) ) ;
		Add( new FCKContextMenuItem( this, 'Unlink'	, FCKLang['RemoveLink']	, true ) ) ;
	}

	// Table Cell operations.	
	this.Groups['TableCell'] = new FCKContextMenuGroup() ;
	with ( this.Groups['TableCell'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["InsertRow"] ) ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["DeleteRows"] ) ) ;
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["InsertColumn"] ) ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["DeleteColumns"] ) ) ;
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["InsertCell"] ) ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["DeleteCells"] ) ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["MergeCells"] ) ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["SplitCell"] ) ) ;
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["CellProperties"] ) ) ;
		Add( new FCKContextMenuItem( this, 'TableProp', FCKLang["TableProperties"], true ) ) ;
	}

	// Table operations.	
	this.Groups['Table'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Table'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Table', FCKLang["TableProperties"], true ) ) ;
	}
	
	// Image operations.
	this.Groups['Image'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Image'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', FCKLang["ImageProperties"] ) ) ;
//		Add( new FCKContextMenuItem( this, 'Image', FCKLang["ImageProperties"], true ) ) ;
	}
	
	// Select field operations.
	this.Groups['Select'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Select'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', "Selection Field Properties" ) ) ;
	}

	// Textarea operations.
	this.Groups['Textarea'] = new FCKContextMenuGroup() ;
	with ( this.Groups['Textarea'] )
	{
		Add( new FCKContextMenuSeparator() ) ;
		Add( new FCKContextMenuItem( this, 'Undefined', "Textarea Properties" ) ) ;
	}
	
	// Create all table rows (representing the items) in the context menu.
	for ( var o in this.Groups )
	{
		this.Groups[o].CreateTableRows( oTable ) ;
	}

	this._IsLoaded = true ;
}

FCKContextMenu.RefreshState = function()
{
  	// Get the actual selected tag (if any).
	var oTag = FCKSelection.GetSelectedElement() ;
	var sTagName ;
	
	if ( oTag )
	{
		sTagName = oTag.tagName.toUpperCase() ;
	}

	// Set items visibility.
	this.Groups['Link'].SetVisible( FCK.GetNamedCommandState( 'Unlink' ) != FCK_TRISTATE_DISABLED ) ;
	this.Groups['TableCell'].SetVisible( FCKSelection.HasAncestorNode('TD') ) ;		// TODO: Table Cell operations are not yet available.
	this.Groups['Table'].SetVisible( sTagName == 'TABLE' ) ;
	this.Groups['Image'].SetVisible( sTagName == 'IMG' ) ;
	this.Groups['Select'].SetVisible( sTagName == 'SELECT' ) ;
	this.Groups['Textarea'].SetVisible( sTagName == 'TEXTAREA' ) ;
	
	// Refresh the state of all visible items (active/disactive)	
	for ( var o in this.Groups )
	{
		this.Groups[o].RefreshState() ;
	}
}

/*
Sample Context Menu Output
-----------------------------------------
<div class="CM_ContextMenu">
	<table cellSpacing="0" cellPadding="0" border="0">
		<tr class="CM_Disabled">
			<td class="CM_Icon"><img alt="" src="icons/button.cut.gif" width="21" height="20" unselectable="on"></td>
			<td class="CM_Label" unselectable="on">Cut</td>
		</tr>
		<tr class="CM_Disabled">
			<td class="CM_Icon"><img height="20" alt="" src="icons/button.copy.gif" width="21"></td>
			<td class="CM_Label">Copy</td>
		</tr>
		<tr class="CM_Option" onmouseover="OnOver(this);" onmouseout="OnOut(this);">
			<td class="CM_Icon"><img height="20" alt="" src="icons/button.paste.gif" width="21"></td>
			<td class="CM_Label">Paste</td>
		</tr>
		<tr class="CM_Separator">
			<td class="CM_Icon"></td>
			<td class="CM_Label"><div></div></td>
		</tr>
		<tr class="CM_Option" onmouseover="OnOver(this);" onmouseout="OnOut(this);">
			<td class="CM_Icon"><img height="20" alt="" src="icons/button.print.gif" width="21"></td>
			<td class="CM_Label">Print</td>
		</tr>
		<tr class="CM_Separator">
			<td class="CM_Icon"></td>
			<td class="CM_Label"><div></div></td>
		</tr>
		<tr class="CM_Option" onmouseover="OnOver(this);" onmouseout="OnOut(this);">
			<td class="CM_Icon"></td>
			<td class="CM_Label">Do Something</td>
		</tr>
		<tr class="CM_Option" onmouseover="OnOver(this);" onmouseout="OnOut(this);">
			<td class="CM_Icon"></td>
			<td class="CM_Label">Just Testing</td>
		</tr>
	</table>
</div>
*/