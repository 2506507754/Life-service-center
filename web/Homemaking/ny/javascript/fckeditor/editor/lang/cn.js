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
"Cut"				: "剪切" ,
"Copy"				: "复制" ,
"Paste"				: "粘贴" ,
"PasteText"			: "纯文本粘贴" ,
"PasteWord"			: "来自Word的粘贴" ,
"Find"				: "查找" ,
"SelectAll"			: "全部选定" ,
"RemoveFormat"		: "清除格式" ,
"InsertLink"		: "插入/编辑 链接" ,
"RemoveLink"		: "删除链接" ,
"InsertImage"		: "插入/编辑 图片" ,
"InsertTable"		: "插入/编辑 表格" ,
"InsertLine"		: "插入水平线" ,
"InsertSpecialChar"	: "插入特殊符号" ,
"InsertSmiley"		: "插入表情符号" ,
"About"				: "关于 FCKeditor" ,
"Bold"				: "粗体" ,
"Italic"			: "斜体" ,
"Underline"			: "下划线" ,
"StrikeThrough"		: "文字删除线" ,
"Subscript"			: "下标" ,
"Superscript"		: "上标" ,
"LeftJustify"		: "作对齐" ,
"CenterJustify"		: "居中对齐" ,
"RightJustify"		: "右对齐" ,
"BlockJustify"		: "两端对齐" ,
"DecreaseIndent"	: "减少缩进" ,
"IncreaseIndent"	: "增加缩进" ,
"Undo"				: "撤销上次操作" ,
"Redo"				: "重复上次操作" ,
"NumberedList"		: "自动编号" ,
"BulletedList"		: "项目符号" ,
"ShowTableBorders"	: "显示表格线" ,
"ShowDetails"		: "显示明细" ,
"FontStyle"			: "样式" ,
"FontFormat"		: "格式" ,
"Font"				: "字体" ,
"FontSize"			: "字体大小" ,
"TextColor"			: "字体颜色" ,
"BGColor"			: "背景颜色" ,
"Source"			: "源代码" ,

// Context Menu
"EditLink"			: "编辑链接" ,
"InsertRow"			: "插入行" ,
"DeleteRows"		: "删除行" ,
"InsertColumn"		: "插入列" ,
"DeleteColumns"		: "删除列" ,
"InsertCell"		: "插入单元格" ,
"DeleteCells"		: "删除单元格" ,
"MergeCells"		: "合并单元格" ,
"SplitCell"			: "拆分单元格" ,
"CellProperties"	: "单元格属性" ,
"TableProperties"	: "表格属性" ,
"ImageProperties"	: "图片属性" ,

// Alerts and Messages
"ProcessingXHTML"	: "正在处理XHTML. 请稍等..." ,
"Done"				: "完成" ,
"PasteWordConfirm"	: "粘贴的内容来自Word. 你需要去除它的格式吗?" ,
"NotCompatiblePaste": "这个操作需要Internet Explorer version 5.5 或以上版本. 你需要粘贴它而不去除格式吗?" ,

// Dialogs
"DlgBtnOK"			: "确定" ,
"DlgBtnCancel"		: "取消" ,
"DlgBtnClose"		: "关闭" ,

// Image Dialog
"DlgImgTitleInsert"	: "插入图片" ,
"DlgImgTitleEdit"	: "编辑图片" ,
"DlgImgBtnUpload"	: "放送到服务器" ,
"DlgImgURL"			: "URL地址" ,
"DlgImgUpload"		: "上传" ,
"DlgImgBtnBrowse"	: "浏览服务器" ,
"DlgImgAlt"			: "替换的文本" ,
"DlgImgWidth"		: "宽度" ,
"DlgImgHeight"		: "高度" ,
"DlgImgLockRatio"	: "锁定比例" ,
"DlgBtnResetSize"	: "重置尺寸" ,
"DlgImgBorder"		: "边框" ,
"DlgImgHSpace"		: "横向坐标" ,
"DlgImgVSpace"		: "纵向坐标" ,
"DlgImgAlign"			: "对齐方式" ,
"DlgImgAlignLeft"		: "靠左" ,
"DlgImgAlignAbsBottom"	: "绝对靠底" ,
"DlgImgAlignAbsMiddle"	: "绝对靠中" ,
"DlgImgAlignBaseline"	: "基准线" ,
"DlgImgAlignBottom"	: "底部" ,
"DlgImgAlignMiddle"	: "中部" ,
"DlgImgAlignRight"	: "靠右" ,
"DlgImgAlignTextTop": "文本顶" ,
"DlgImgAlignTop"	: "顶端" ,
"DlgImgPreview"		: "预览" ,
"DlgImgMsgWrongExt"	: "对不起, 只运行上传以下类型的文件:\n\n" + FCKConfig.ImageUploadAllowedExtensions + "\n\n操作取消." ,
"DlgImgAlertSelect"	: "请选择要上传的文件." ,

// Link Dialog
"DlgLnkWindowTitle"	: "链接" ,
"DlgLnkURL"			: "URL地址" ,
"DlgLnkUpload"		: "上传" ,
"DlgLnkTarget"		: "目标" ,
"DlgLnkTargetNotSet": "<无>" ,
"DlgLnkTargetBlank"	: "新窗口 (_blank)" ,
"DlgLnkTargetParent": "父窗口 (_parent)" ,
"DlgLnkTargetSelf"	: "同一窗口 (_self)" ,
"DlgLnkTargetTop"	: "顶端窗口 (_top)" ,
"DlgLnkTitle"		: "标题" ,
"DlgLnkBtnUpload"	: "发送到服务器" ,
"DlgLnkBtnBrowse"	: "浏览服务器" ,
"DlgLnkMsgWrongExtA": "对不起, 只运行上传以下类型的文件:\n\n" + FCKConfig.LinkUploadAllowedExtensions + "\n\n操作取消." ,
"DlgLnkMsgWrongExtD": "对不起, 以下类型的文件不运行上传:\n\n" + FCKConfig.LinkUploadDeniedExtensions + "\n\n操作取消." ,

// Color Dialog
"DlgColorTitle"		: "颜色选择" ,
"DlgColorBtnClear"	: "清除" ,
"DlgColorHighlight"	: "高亮" ,
"DlgColorSelected"	: "已选择" ,

// Smiley Dialog
"DlgSmileyTitle"	: "插入表情符号" ,

// Special Character Dialog
"DlgSpecialCharTitle"	: "插入特殊符号" ,

// Table Dialog
"DlgTableTitleInsert"	: "插入表格" ,
"DlgTableTitleEdit"		: "编辑表格" ,
"DlgTableRows"			: "行数" ,
"DlgTableColumns"		: "列数" ,
"DlgTableBorder"		: "边框大小" ,
"DlgTableAlign"			: "对齐方式" ,
"DlgTableAlignNotSet"	: "<无>" ,
"DlgTableAlignLeft"		: "居左" ,
"DlgTableAlignCenter"	: "居中" ,
"DlgTableAlignRight"	: "具右" ,
"DlgTableWidth"			: "宽度" ,
"DlgTableWidthPx"		: "像素" ,
"DlgTableWidthPc"		: "百分比" ,
"DlgTableHeight"		: "高度" ,
"DlgTableCellSpace"		: "单元格间距" ,
"DlgTableCellPad"		: "单元格填充" ,
"DlgTableCaption"		: "标题" ,

// Table Cell Dialog
"DlgCellTitle"			: "单元格属性" ,
"DlgCellWidth"			: "宽度" ,
"DlgCellWidthPx"		: "像素" ,
"DlgCellWidthPc"		: "百分比" ,
"DlgCellHeight"			: "高度" ,
"DlgCellWordWrap"		: "自动换行" ,
"DlgCellWordWrapNotSet"	: "<无>" ,
"DlgCellWordWrapYes"	: "是" ,
"DlgCellWordWrapNo"		: "否" ,
"DlgCellHorAlign"		: "水平对齐方式" ,
"DlgCellHorAlignNotSet"	: "<无>" ,
"DlgCellHorAlignLeft"	: "居左" ,
"DlgCellHorAlignCenter"	: "居中" ,
"DlgCellHorAlignRight"	: "居右" ,
"DlgCellVerAlign"		: "垂直对齐方式" ,
"DlgCellVerAlignNotSet"	: "<无>" ,
"DlgCellVerAlignTop"	: "顶端" ,
"DlgCellVerAlignMiddle"	: "居中" ,
"DlgCellVerAlignBottom"	: "底端" ,
"DlgCellVerAlignBaseline"	: "基准线" ,
"DlgCellRowSpan"		: "行跨越" ,
"DlgCellCollSpan"		: "列跨越" ,
"DlgCellBackColor"		: "背景颜色" ,
"DlgCellBorderColor"	: "边框颜色" ,
"DlgCellBtnSelect"		: "选择..." ,

// About Dialog
"DlgAboutVersion"	: "版本" ,
"DlgAboutLicense"	: "Licensed under the terms of the GNU Lesser General Public License" ,
"DlgAboutInfo"		: "查看更多信息请到"
}

