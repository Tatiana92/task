//>>built
define("dojox/calendar/_VerticalScrollBarBase",["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/on","dojo/dom-style","dijit/_WidgetBase"],function(_1,_2,_3,on,_4,_5){
return _1("dojox.calendar._VerticalScrollBarBase",_5,{value:0,minimum:0,maximum:100,_scrollHandle:null,buildRendering:function(){
this.inherited(arguments);
this.own(on(this.domNode,"scroll",_3.hitch(this,function(_6){
this.value=this._getDomScrollerValue();
this.onChange(this.value);
this.onScroll(this.value);
})));
},_getDomScrollerValue:function(){
return this.domNode.scrollTop;
},_setDomScrollerValue:function(_7){
this.domNode.scrollTop=_7;
},_setValueAttr:function(_8){
_8=Math.min(this.maximum,_8);
_8=Math.max(this.minimum,_8);
if(this.value!=_8){
this.value=_8;
this.onChange(_8);
this._setDomScrollerValue(_8);
}
},onChange:function(_9){
},onScroll:function(_a){
},_setMinimumAttr:function(_b){
_b=Math.min(_b,this.maximum);
this.minimum=_b;
},_setMaximumAttr:function(_c){
_c=Math.max(_c,this.minimum);
this.maximum=_c;
_4.set(this.content,"height",_c+"px");
}});
});
