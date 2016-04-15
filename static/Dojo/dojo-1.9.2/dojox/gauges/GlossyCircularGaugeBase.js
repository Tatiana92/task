//>>built
define("dojox/gauges/GlossyCircularGaugeBase",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojox/gfx","./AnalogGauge","./AnalogCircleIndicator","./TextIndicator","./GlossyCircularGaugeNeedle"],function(_1,_2,_3,_4,_5,_6,_7,_8){
return _1("dojox.gauges.GlossyCircularGaugeBase",[_5],{_defaultIndicator:_6,_needle:null,_textIndicator:null,_textIndicatorAdded:false,_range:null,value:0,color:"black",needleColor:"#c4c4c4",textIndicatorFont:"normal normal normal 20pt serif",textIndicatorVisible:true,textIndicatorColor:"#c4c4c4",_majorTicksOffset:130,majorTicksInterval:10,_majorTicksLength:5,majorTicksColor:"#c4c4c4",majorTicksLabelPlacement:"inside",_minorTicksOffset:130,minorTicksInterval:5,_minorTicksLength:3,minorTicksColor:"#c4c4c4",noChange:false,title:"",font:"normal normal normal 10pt serif",scalePrecision:0,textIndicatorPrecision:0,_font:null,constructor:function(){
this.startAngle=-135;
this.endAngle=135;
this.min=0;
this.max=100;
},startup:function(){
this.inherited(arguments);
if(this._needle){
return;
}
var _9=Math.min((this.width/this._designWidth),(this.height/this._designHeight));
this.cx=_9*this._designCx+(this.width-_9*this._designWidth)/2;
this.cy=_9*this._designCy+(this.height-_9*this._designHeight)/2;
this._range={low:this.min?this.min:0,high:this.max?this.max:100,color:[255,255,255,0]};
this.addRange(this._range);
this._majorTicksOffset=this._minorTicksOffset=_9*this._majorTicksOffset;
this._majorTicksLength=_9*this._majorTicksLength;
this._minorTicksLength=_9*this._minorTicksLength;
this.setMajorTicks({fixedPrecision:true,precision:this.scalePrecision,font:this._font,offset:this._majorTicksOffset,interval:this.majorTicksInterval,length:this._majorTicksLength,color:this.majorTicksColor,labelPlacement:this.majorTicksLabelPlacement});
this.setMinorTicks({offset:this._minorTicksOffset,interval:this.minorTicksInterval,length:this._minorTicksLength,color:this.minorTicksColor});
this._needle=new _8({hideValue:true,title:this.title,noChange:this.noChange,color:this.needleColor,value:this.value});
this.addIndicator(this._needle);
this._textIndicator=new _7({x:_9*this._designTextIndicatorX+(this.width-_9*this._designWidth)/2,y:_9*this._designTextIndicatorY+(this.height-_9*this._designHeight)/2,fixedPrecision:true,precision:this.textIndicatorPrecision,color:this.textIndicatorColor,value:this.value?this.value:this.min,align:"middle",font:this._textIndicatorFont});
if(this.textIndicatorVisible){
this.addIndicator(this._textIndicator);
this._textIndicatorAdded=true;
}
_3.connect(this._needle,"valueChanged",_2.hitch(this,function(){
this.value=this._needle.value;
this._textIndicator.update(this._needle.value);
this.onValueChanged();
}));
},onValueChanged:function(){
},_setColorAttr:function(_a){
this.color=_a?_a:"black";
if(this._gaugeBackground&&this._gaugeBackground.parent){
this._gaugeBackground.parent.remove(this._gaugeBackground);
}
if(this._foreground&&this._foreground.parent){
this._foreground.parent.remove(this._foreground);
}
this._gaugeBackground=null;
this._foreground=null;
this.draw();
},_setNeedleColorAttr:function(_b){
this.needleColor=_b;
if(this._needle){
this.removeIndicator(this._needle);
this._needle.color=this.needleColor;
this._needle.shape=null;
this.addIndicator(this._needle);
}
},_setTextIndicatorColorAttr:function(_c){
this.textIndicatorColor=_c;
if(this._textIndicator){
this._textIndicator.color=this.textIndicatorColor;
this.draw();
}
},_setTextIndicatorFontAttr:function(_d){
this.textIndicatorFont=_d;
this._textIndicatorFont=_4.splitFontString(_d);
if(this._textIndicator){
this._textIndicator.font=this._textIndicatorFont;
this.draw();
}
},setMajorTicksOffset:function(_e){
this._majorTicksOffset=_e;
this._setMajorTicksProperty({"offset":this._majorTicksOffset});
return this;
},getMajorTicksOffset:function(){
return this._majorTicksOffset;
},_setMajorTicksIntervalAttr:function(_f){
this.majorTicksInterval=_f;
this._setMajorTicksProperty({"interval":this.majorTicksInterval});
},setMajorTicksLength:function(_10){
this._majorTicksLength=_10;
this._setMajorTicksProperty({"length":this._majorTicksLength});
return this;
},getMajorTicksLength:function(){
return this._majorTicksLength;
},_setMajorTicksColorAttr:function(_11){
this.majorTicksColor=_11;
this._setMajorTicksProperty({"color":this.majorTicksColor});
},_setMajorTicksLabelPlacementAttr:function(_12){
this.majorTicksLabelPlacement=_12;
this._setMajorTicksProperty({"labelPlacement":this.majorTicksLabelPlacement});
},_setMajorTicksProperty:function(_13){
if(this.majorTicks){
_2.mixin(this.majorTicks,_13);
this.setMajorTicks(this.majorTicks);
}
},setMinorTicksOffset:function(_14){
this._minorTicksOffset=_14;
this._setMinorTicksProperty({"offset":this._minorTicksOffset});
return this;
},getMinorTicksOffset:function(){
return this._minorTicksOffset;
},_setMinorTicksIntervalAttr:function(_15){
this.minorTicksInterval=_15;
this._setMinorTicksProperty({"interval":this.minorTicksInterval});
},setMinorTicksLength:function(_16){
this._minorTicksLength=_16;
this._setMinorTicksProperty({"length":this._minorTicksLength});
return this;
},getMinorTicksLength:function(){
return this._minorTicksLength;
},_setMinorTicksColorAttr:function(_17){
this.minorTicksColor=_17;
this._setMinorTicksProperty({"color":this.minorTicksColor});
},_setMinorTicksProperty:function(_18){
if(this.minorTicks){
_2.mixin(this.minorTicks,_18);
this.setMinorTicks(this.minorTicks);
}
},_setMinAttr:function(min){
this.min=min;
if(this.majorTicks!=null){
this.setMajorTicks(this.majorTicks);
}
if(this.minorTicks!=null){
this.setMinorTicks(this.minorTicks);
}
this.draw();
this._updateNeedle();
},_setMaxAttr:function(max){
this.max=max;
if(this.majorTicks!=null){
this.setMajorTicks(this.majorTicks);
}
if(this.minorTicks!=null){
this.setMinorTicks(this.minorTicks);
}
this.draw();
this._updateNeedle();
},_setScalePrecisionAttr:function(_19){
this.scalePrecision=_19;
this._setMajorTicksProperty({"precision":_19});
},_setTextIndicatorPrecisionAttr:function(_1a){
this.textIndicatorPrecision=_1a;
this._setMajorTicksProperty({"precision":_1a});
},_setValueAttr:function(_1b){
_1b=Math.min(this.max,_1b);
_1b=Math.max(this.min,_1b);
this.value=_1b;
if(this._needle){
var _1c=this._needle.noChange;
this._needle.noChange=false;
this._needle.update(_1b);
this._needle.noChange=_1c;
}
},_setNoChangeAttr:function(_1d){
this.noChange=_1d;
if(this._needle){
this._needle.noChange=this.noChange;
}
},_setTextIndicatorVisibleAttr:function(_1e){
this.textIndicatorVisible=_1e;
if(this._textIndicator&&this._needle){
if(this.textIndicatorVisible&&!this._textIndicatorAdded){
this.addIndicator(this._textIndicator);
this._textIndicatorAdded=true;
this.moveIndicatorToFront(this._needle);
}else{
if(!this.textIndicatorVisible&&this._textIndicatorAdded){
this.removeIndicator(this._textIndicator);
this._textIndicatorAdded=false;
}
}
}
},_setTitleAttr:function(_1f){
this.title=_1f;
if(this._needle){
this._needle.title=this.title;
}
},_setOrientationAttr:function(_20){
this.orientation=_20;
if(this.majorTicks!=null){
this.setMajorTicks(this.majorTicks);
}
if(this.minorTicks!=null){
this.setMinorTicks(this.minorTicks);
}
this.draw();
this._updateNeedle();
},_updateNeedle:function(){
this.value=Math.max(this.min,this.value);
this.value=Math.min(this.max,this.value);
if(this._needle){
var _21=this._needle.noChange;
this._needle.noChange=false;
this._needle.update(this.value,false);
this._needle.noChange=_21;
}
},_setFontAttr:function(_22){
this.font=_22;
this._font=_4.splitFontString(_22);
this._setMajorTicksProperty({"font":this._font});
}});
});
