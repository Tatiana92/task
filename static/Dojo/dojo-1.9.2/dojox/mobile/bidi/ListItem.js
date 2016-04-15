//>>built
define("dojox/mobile/bidi/ListItem",["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./common","dojo/_base/window"],function(_1,_2,_3,_4,_5){
return _1(null,{_applyAttributes:function(){
if(!this.textDir&&this.getParent()&&this.getParent().get("textDir")){
this.textDir=this.getParent().get("textDir");
}
this.inherited(arguments);
if(this.textDir){
this._applyTextDirToTextElements();
}
},_setRightTextAttr:function(_6){
if(!this.templateString&&!this.rightTextNode){
this.rightTextNode=_3.create("div",{className:"mblListItemRightText"},this.labelNode,"before");
}
if(this.rightTextNode){
this.rightText=_6;
this.rightTextNode.innerHTML=this._cv?this._cv(_6):_6;
if(this.textDir){
this.rightTextNode.innerHTML=_4.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir);
}
}
},_setLabelAttr:function(_7){
this.inherited("_setLabelAttr",arguments);
this.labelNode.innerHTML=_4.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir);
},_applyTextDirToTextElements:function(){
if(this.labelNode.innerHTML){
this.labelNode.innerHTML=_4.removeUCCFromText(this.labelNode.innerHTML);
this.labelNode.innerHTML=_4.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir);
this.labelNode.style.cssText="text-align: start";
return;
}
var _8=0;
_2.forEach(this.domNode.childNodes,function(_9){
if(_8===0){
if(_9.nodeType===3&&(_9.nodeValue===_4.MARK.RLE||_9.nodeValue===_4.MARK.LRE)){
_9.nodeValue=(_9.nodeValue===_4.MARK.RLE)?_4.MARK.LRE:_4.MARK.RLE;
_8=2;
return;
}
var _a=(_9.nodeType===1&&_9.childNodes.length===1)?_9.firstChild:_9;
if(_a.nodeType===3&&_a.nodeValue){
if(_a.nodeValue.search(/[.\S]/)!=-1){
_8=1;
textNode=_5.doc.createTextNode((this.getTextDir(_a.nodeValue).toLowerCase()==="rtl")?_4.MARK.RLE:_4.MARK.LRE);
_3.place(textNode,_9,"before");
}
}
}else{
if(_8===1&&_9.nodeName.toLowerCase()==="div"){
_8=2;
textNode=_5.doc.createTextNode(_4.MARK.PDF);
_3.place(textNode,_9,"before");
}
}
},this);
},_setTextDirAttr:function(_b){
if(_b&&this.textDir!==_b){
this.textDir=_b;
this._applyTextDirToTextElements();
if(this.rightTextNode){
this.rightTextNode.innerHTML=_4.removeUCCFromText(this.rightTextNode.innerHTML);
this.rightTextNode.innerHTML=_4.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir);
}
}
}});
});
