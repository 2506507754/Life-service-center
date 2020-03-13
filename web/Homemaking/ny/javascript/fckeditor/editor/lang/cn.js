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
 * File Name: cn.js
 * 	Chinese language file.
 * 
 * Version:  2.0 Beta 1
 * Modified: 2004-05-31 23:07:54
 * 
 * File Authors:
 * 		Frederico Caldeira Knabben (fredck@fckeditor.net)
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
"Dir"				: "ltr",

// Toolbar Items and Context Menu
"Cut"				: "����" ,
"Copy"				: "����" ,
"Paste"				: "ճ��" ,
"PasteText"			: "���ı�ճ��" ,
"PasteWord"			: "����Word��ճ��" ,
"Find"				: "����" ,
"SelectAll"			: "ȫ��ѡ��" ,
"RemoveFormat"		: "�����ʽ" ,
"InsertLink"		: "����/�༭ ����" ,
"RemoveLink"		: "ɾ������" ,
"InsertImage"		: "����/�༭ ͼƬ" ,
"InsertTable"		: "����/�༭ ���" ,
"InsertLine"		: "����ˮƽ��" ,
"InsertSpecialChar"	: "�����������" ,
"InsertSmiley"		: "����������" ,
"About"				: "���� FCKeditor" ,
"Bold"				: "����" ,
"Italic"			: "б��" ,
"Underline"			: "�»���" ,
"StrikeThrough"		: "����ɾ����" ,
"Subscript"			: "�±�" ,
"Superscript"		: "�ϱ�" ,
"LeftJustify"		: "������" ,
"CenterJustify"		: "���ж���" ,
"RightJustify"		: "�Ҷ���" ,
"BlockJustify"		: "���˶���" ,
"DecreaseIndent"	: "��������" ,
"IncreaseIndent"	: "��������" ,
"Undo"				: "�����ϴβ���" ,
"Redo"				: "�ظ��ϴβ���" ,
"NumberedList"		: "�Զ����" ,
"BulletedList"		: "��Ŀ����" ,
"ShowTableBorders"	: "��ʾ�����" ,
"ShowDetails"		: "��ʾ��ϸ" ,
"FontStyle"			: "��ʽ" ,
"FontFormat"		: "��ʽ" ,
"Font"				: "����" ,
"FontSize"			: "�����С" ,
"TextColor"			: "������ɫ" ,
"BGColor"			: "������ɫ" ,
"Source"			: "Դ����" ,

// Context Menu
"EditLink"			: "�༭����" ,
"InsertRow"			: "������" ,
"DeleteRows"		: "ɾ����" ,
"InsertColumn"		: "������" ,
"DeleteColumns"		: "ɾ����" ,
"InsertCell"		: "���뵥Ԫ��" ,
"DeleteCells"		: "ɾ����Ԫ��" ,
"MergeCells"		: "�ϲ���Ԫ��" ,
"SplitCell"			: "��ֵ�Ԫ��" ,
"CellProperties"	: "��Ԫ������" ,
"TableProperties"	: "�������" ,
"ImageProperties"	: "ͼƬ����" ,

// Alerts and Messages
"ProcessingXHTML"	: "���ڴ���XHTML. ���Ե�..." ,
"Done"				: "���" ,
"PasteWordConfirm"	: "ճ������������Word. ����Ҫȥ�����ĸ�ʽ��?" ,
"NotCompatiblePaste": "���������ҪInternet Explorer version 5.5 �����ϰ汾. ����Ҫճ��������ȥ����ʽ��?" ,

// Dialogs
"DlgBtnOK"			: "ȷ��" ,
"DlgBtnCancel"		: "ȡ��" ,
"DlgBtnClose"		: "�ر�" ,

// Image Dialog
"DlgImgTitleInsert"	: "����ͼƬ" ,
"DlgImgTitleEdit"	: "�༭ͼƬ" ,
"DlgImgBtnUpload"	: "���͵�������" ,
"DlgImgURL"			: "URL��ַ" ,
"DlgImgUpload"		: "�ϴ�" ,
"DlgImgBtnBrowse"	: "���������" ,
"DlgImgAlt"			: "�滻���ı�" ,
"DlgImgWidth"		: "���" ,
"DlgImgHeight"		: "�߶�" ,
"DlgImgLockRatio"	: "��������" ,
"DlgBtnResetSize"	: "���óߴ�" ,
"DlgImgBorder"		: "�߿�" ,
"DlgImgHSpace"		: "��������" ,
"DlgImgVSpace"		: "��������" ,
"DlgImgAlign"			: "���뷽ʽ" ,
"DlgImgAlignLeft"		: "����" ,
"DlgImgAlignAbsBottom"	: "���Կ���" ,
"DlgImgAlignAbsMiddle"	: "���Կ���" ,
"DlgImgAlignBaseline"	: "��׼��" ,
"DlgImgAlignBottom"	: "�ײ�" ,
"DlgImgAlignMiddle"	: "�в�" ,
"DlgImgAlignRight"	: "����" ,
"DlgImgAlignTextTop": "�ı���" ,
"DlgImgAlignTop"	: "����" ,
"DlgImgPreview"		: "Ԥ��" ,
"DlgImgMsgWrongExt"	: "�Բ���, ֻ�����ϴ��������͵��ļ�:\n\n" + FCKConfig.ImageUploadAllowedExtensions + "\n\n����ȡ��." ,
"DlgImgAlertSelect"	: "��ѡ��Ҫ�ϴ����ļ�." ,

// Link Dialog
"DlgLnkWindowTitle"	: "����" ,
"DlgLnkURL"			: "URL��ַ" ,
"DlgLnkUpload"		: "�ϴ�" ,
"DlgLnkTarget"		: "Ŀ��" ,
"DlgLnkTargetNotSet": "<��>" ,
"DlgLnkTargetBlank"	: "�´��� (_blank)" ,
"DlgLnkTargetParent": "������ (_parent)" ,
"DlgLnkTargetSelf"	: "ͬһ���� (_self)" ,
"DlgLnkTargetTop"	: "���˴��� (_top)" ,
"DlgLnkTitle"		: "����" ,
"DlgLnkBtnUpload"	: "���͵�������" ,
"DlgLnkBtnBrowse"	: "���������" ,
"DlgLnkMsgWrongExtA": "�Բ���, ֻ�����ϴ��������͵��ļ�:\n\n" + FCKConfig.LinkUploadAllowedExtensions + "\n\n����ȡ��." ,
"DlgLnkMsgWrongExtD": "�Բ���, �������͵��ļ��������ϴ�:\n\n" + FCKConfig.LinkUploadDeniedExtensions + "\n\n����ȡ��." ,

// Color Dialog
"DlgColorTitle"		: "��ɫѡ��" ,
"DlgColorBtnClear"	: "���" ,
"DlgColorHighlight"	: "����" ,
"DlgColorSelected"	: "��ѡ��" ,

// Smiley Dialog
"DlgSmileyTitle"	: "����������" ,

// Special Character Dialog
"DlgSpecialCharTitle"	: "�����������" ,

// Table Dialog
"DlgTableTitleInsert"	: "������" ,
"DlgTableTitleEdit"		: "�༭���" ,
"DlgTableRows"			: "����" ,
"DlgTableColumns"		: "����" ,
"DlgTableBorder"		: "�߿��С" ,
"DlgTableAlign"			: "���뷽ʽ" ,
"DlgTableAlignNotSet"	: "<��>" ,
"DlgTableAlignLeft"		: "����" ,
"DlgTableAlignCenter"	: "����" ,
"DlgTableAlignRight"	: "����" ,
"DlgTableWidth"			: "���" ,
"DlgTableWidthPx"		: "����" ,
"DlgTableWidthPc"		: "�ٷֱ�" ,
"DlgTableHeight"		: "�߶�" ,
"DlgTableCellSpace"		: "��Ԫ����" ,
"DlgTableCellPad"		: "��Ԫ�����" ,
"DlgTableCaption"		: "����" ,

// Table Cell Dialog
"DlgCellTitle"			: "��Ԫ������" ,
"DlgCellWidth"			: "���" ,
"DlgCellWidthPx"		: "����" ,
"DlgCellWidthPc"		: "�ٷֱ�" ,
"DlgCellHeight"			: "�߶�" ,
"DlgCellWordWrap"		: "�Զ�����" ,
"DlgCellWordWrapNotSet"	: "<��>" ,
"DlgCellWordWrapYes"	: "��" ,
"DlgCellWordWrapNo"		: "��" ,
"DlgCellHorAlign"		: "ˮƽ���뷽ʽ" ,
"DlgCellHorAlignNotSet"	: "<��>" ,
"DlgCellHorAlignLeft"	: "����" ,
"DlgCellHorAlignCenter"	: "����" ,
"DlgCellHorAlignRight"	: "����" ,
"DlgCellVerAlign"		: "��ֱ���뷽ʽ" ,
"DlgCellVerAlignNotSet"	: "<��>" ,
"DlgCellVerAlignTop"	: "����" ,
"DlgCellVerAlignMiddle"	: "����" ,
"DlgCellVerAlignBottom"	: "�׶�" ,
"DlgCellVerAlignBaseline"	: "��׼��" ,
"DlgCellRowSpan"		: "�п�Խ" ,
"DlgCellCollSpan"		: "�п�Խ" ,
"DlgCellBackColor"		: "������ɫ" ,
"DlgCellBorderColor"	: "�߿���ɫ" ,
"DlgCellBtnSelect"		: "ѡ��..." ,

// About Dialog
"DlgAboutVersion"	: "�汾" ,
"DlgAboutLicense"	: "Licensed under the terms of the GNU Lesser General Public License" ,
"DlgAboutInfo"		: "�鿴������Ϣ�뵽"
}

