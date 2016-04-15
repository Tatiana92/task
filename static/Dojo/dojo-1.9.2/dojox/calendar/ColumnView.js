//>>built
require({cache:{"url:dojox/calendar/templates/ColumnView.html":"<div data-dojo-attach-events=\"keydown:_onKeyDown\">\n\t\n\t<div data-dojo-attach-point=\"header\" class=\"dojoxCalendarHeader\">\n\t\t<div class=\"dojoxCalendarYearColumnHeader\" data-dojo-attach-point=\"yearColumnHeader\">\n\t\t\t<table cellspacing=\"0\" cellpadding=\"0\"><tr><td><span data-dojo-attach-point=\"yearColumnHeaderContent\"></span></td></tr></table>\t\t\n\t\t</div>\n\t\t<div data-dojo-attach-point=\"columnHeader\" class=\"dojoxCalendarColumnHeader\">\n\t\t\t<table data-dojo-attach-point=\"columnHeaderTable\" class=\"dojoxCalendarColumnHeaderTable\" cellpadding=\"0\" cellspacing=\"0\"></table>\n\t\t</div>\n\t</div>\n\t\n\t<div data-dojo-attach-point=\"secondarySheetNode\"></div>\n\t\n\t<div data-dojo-attach-point=\"scrollContainer\" class=\"dojoxCalendarScrollContainer\">\n\t\t<div data-dojo-attach-point=\"sheetContainer\" style=\"position:relative;left:0;right:0;margin:0;padding:0\">\n\t\t\t<div data-dojo-attach-point=\"rowHeader\" class=\"dojoxCalendarRowHeader\">\n\t\t\t\t<table data-dojo-attach-point=\"rowHeaderTable\" class=\"dojoxCalendarRowHeaderTable\" cellpadding=\"0\" cellspacing=\"0\"></table>\n\t\t\t</div>\n\t\t\t<div data-dojo-attach-point=\"grid\" class=\"dojoxCalendarGrid\">\n\t\t\t\t<table data-dojo-attach-point=\"gridTable\" class=\"dojoxCalendarGridTable\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%\"></table>\n\t\t\t</div>\n\t\t\t<div data-dojo-attach-point=\"itemContainer\" class=\"dojoxCalendarContainer\" data-dojo-attach-event=\"mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd\">\n\t\t\t\t<table data-dojo-attach-point=\"itemContainerTable\" class=\"dojoxCalendarContainerTable\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%\"></table>\n\t\t\t</div>\n\t\t</div> \n\t</div>\n\t\n\t<div data-dojo-attach-point=\"vScrollBar\" class=\"dojoxCalendarVScrollBar\">\n\t\t<div data-dojo-attach-point=\"vScrollBarContent\" style=\"visibility:hidden;position:relative;width:1px;height:1px;\" ></div>\n\t</div>\n\t\n</div>\n"}});
define("dojox/calendar/ColumnView",["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/sniff","dojo/_base/fx","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/on","dojo/date","dojo/date/locale","dojo/query","dojox/html/metrics","./SimpleColumnView","dojo/text!./templates/ColumnView.html","./ColumnViewSecondarySheet"],function(_1,_2,_3,_4,fx,_5,_6,_7,_8,_9,on,_a,_b,_c,_d,_e,_f,_10){
return _1("dojox.calendar.ColumnView",_e,{templateString:_f,baseClass:"dojoxCalendarColumnView",secondarySheetClass:_10,secondarySheetProps:null,headerPadding:3,buildRendering:function(){
this.inherited(arguments);
if(this.secondarySheetNode){
var _11=_3.mixin({owner:this},this.secondarySheetProps);
this.secondarySheet=new this.secondarySheetClass(_11,this.secondarySheetNode);
this.secondarySheetNode=this.secondarySheet.domNode;
}
},destroy:function(_12){
if(this.secondarySheet){
this.secondarySheet.destroy(_12);
}
this.inherited(arguments);
},_setVisibility:function(_13){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet._setVisibility(_13);
}
},resize:function(_14){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet.resize();
}
},invalidateLayout:function(){
this._layoutRenderers(this.renderData);
if(this.secondarySheet){
this.secondarySheet._layoutRenderers(this.secondarySheet.renderData);
}
},onRowHeaderClick:function(e){
},resizeSecondarySheet:function(_15){
if(this.secondarySheetNode){
var _16=_8.getMarginBox(this.header).h;
_7.set(this.secondarySheetNode,"height",_15+"px");
this.secondarySheet._resizeHandler(null,true);
var top=(_15+_16+this.headerPadding)+"px";
_7.set(this.scrollContainer,"top",top);
if(this.vScrollBar){
_7.set(this.vScrollBar,"top",top);
}
}
},updateRenderers:function(obj,_17){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet.updateRenderers(obj,_17);
}
},_setItemsAttr:function(_18){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet.set("items",_18);
}
},_setStartDateAttr:function(_19){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet.set("startDate",_19);
}
},_setColumnCountAttr:function(_1a){
this.inherited(arguments);
if(this.secondarySheet){
this.secondarySheet.set("columnCount",_1a);
}
},_setHorizontalRendererAttr:function(_1b){
if(this.secondarySheet){
this.secondarySheet.set("horizontalRenderer",_1b);
}
},_getHorizontalRendererAttr:function(){
if(this.secondarySheet){
return this.secondarySheet.get("horizontalRenderer");
}
return null;
},_setExpandRendererAttr:function(_1c){
if(this.secondarySheet){
this.secondarySheet.set("expandRenderer",_1c);
}
},_getExpandRendererAttr:function(){
if(this.secondarySheet){
return this.secondarySheet.get("expandRenderer");
}
return null;
},_setTextDirAttr:function(_1d){
this.secondarySheet.set("textDir",_1d);
this._set("textDir",_1d);
},_defaultItemToRendererKindFunc:function(_1e){
return _1e.allDay?null:"vertical";
},getSecondarySheet:function(){
return this.secondarySheet;
},_onGridTouchStart:function(e){
this.inherited(arguments);
this._doEndItemEditing(this.secondarySheet,"touch");
},_onGridMouseDown:function(e){
this.inherited(arguments);
this._doEndItemEditing(this.secondarySheet,"mouse");
},_configureScrollBar:function(_1f){
this.inherited(arguments);
if(this.secondarySheetNode){
var _20=this.isLeftToRight()?true:this.scrollBarRTLPosition=="right";
_7.set(this.secondarySheetNode,_20?"right":"left",_1f.scrollbarWidth+"px");
_7.set(this.secondarySheetNode,_20?"left":"right","0");
}
},_refreshItemsRendering:function(){
this.inherited(arguments);
if(this.secondarySheet){
var rd=this.secondarySheet.renderData;
this.secondarySheet._computeVisibleItems(rd);
this.secondarySheet._layoutRenderers(rd);
}
},_layoutRenderers:function(_21){
if(!this.secondarySheet._domReady){
this.secondarySheet._domReady=true;
this.secondarySheet._layoutRenderers(this.secondarySheet.renderData);
}
this.inherited(arguments);
},invalidateRendering:function(){
if(this.secondarySheet){
this.secondarySheet.invalidateRendering();
}
this.inherited(arguments);
}});
});
