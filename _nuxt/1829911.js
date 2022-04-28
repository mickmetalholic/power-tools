(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{477:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("590f5376",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";n.r(e);var o,r,c=n(30),l=(n(83),n(16),n(2)),m=n(496),d=n.n(m),v="__TIMESTAMP_CONVERTER__";(r=o||(o={}))[r.DATE_TIME=0]="DATE_TIME",r[r.TIME=1]="TIME",r[r.DATE=2]="DATE";var f=l.a.extend({name:"TimestampCard",props:{title:{type:String,required:!0}},data:function(){return{time:new Date,isMilliseconds:!1,formatType:o.DATE_TIME,hour12:!1,snackbar:!1}},computed:{FormatType:function(){return o},formatTypeList:function(){return[{type:o.DATE_TIME,text:"Datetime"},{type:o.TIME,text:"Time"},{type:o.DATE,text:"Date"}]},timeComponents:function(){var t=this;return[{label:"Year",getValue:function(t){return t.getFullYear()},setValue:function(e){t.time=new Date(d()(t.time).set("year",Number(e)).valueOf())}},{label:"Month",getValue:function(t){return t.getMonth()+1},setValue:function(e){t.time=new Date(d()(t.time).set("month",Number(e)-1).valueOf())}},{label:"Day",getValue:function(t){return t.getDate()},setValue:function(e){t.time=new Date(d()(t.time).set("date",Number(e)).valueOf())}},{label:"Hour",getValue:function(t){return t.getHours()},setValue:function(e){t.time=new Date(d()(t.time).set("hour",Number(e)).valueOf())}},{label:"Minute",getValue:function(t){return t.getMinutes()},setValue:function(e){t.time=new Date(d()(t.time).set("minute",Number(e)).valueOf())}},{label:"Second",getValue:function(t){return t.getSeconds()},setValue:function(e){t.time=new Date(d()(t.time).set("second",Number(e)).valueOf())}}]},timestamp:function(){return Math.floor(this.time.valueOf()/(this.isMilliseconds?1:1e3))},utcTime:function(){return this.time.toISOString()},formattedTimeString:function(){var time=this.time,t=this.hour12,e=this.formatType;return e===o.DATE_TIME?time.toLocaleString("en",{hour12:t}):e===o.TIME?time.toLocaleTimeString("en",{hour12:t}):time.toLocaleDateString("en")}},mounted:function(){this.isMilliseconds=this.$utils.getLocalStorage("".concat(v,"--isMilliseconds"))||this.isMilliseconds,this.formatType=this.$utils.getLocalStorage("".concat(v,"--formatType"))||this.formatType,this.hour12=this.$utils.getLocalStorage("".concat(v,"--hour12"))||this.hour12},methods:{handleInputChange:function(t){t&&(t.length<=10?(this.isMilliseconds=!1,this.time=new Date(1e3*Number(t))):(this.isMilliseconds=!0,this.time=new Date(Number(t))))},handleToggleMilliseconds:function(t){this.isMilliseconds=t,this.$utils.setLocalStorage("".concat(v,"--isMilliseconds"),t)},handleChangeFormatType:function(t){this.formatType=t,this.$utils.setLocalStorage("".concat(v,"--formatType"),t)},handleToggleIsHour12:function(t){this.hour12=t,this.$utils.setLocalStorage("".concat(v,"--hour12"),t)},copyTimestamp:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.copyTextToClipboard("".concat(t.timestamp));case 2:t.snackbar=!0;case 3:case"end":return e.stop()}}),e)})))()},copyUtcTime:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.copyTextToClipboard(t.utcTime);case 2:t.snackbar=!0;case 3:case"end":return e.stop()}}),e)})))()},copyFormattedTimeString:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.copyTextToClipboard(t.formattedTimeString);case 2:t.snackbar=!0;case 3:case"end":return e.stop()}}),e)})))()}}}),h=(n(479),n(82)),T=n(108),w=n.n(T),_=n(153),y=n(214),x=n(131),C=n(531),M=n(475),k=n(500),S=n(211),D=n(510),E=n(533),V=n(532),I=n(537),O=n(454),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.$colorScheme.Light_Red,height:"290"}},[n("v-card-title",[t._v(t._s(t.title))]),t._v(" "),n("v-container",{staticClass:"content"},[n("v-row",{staticClass:"row-1"},[n("v-col",{attrs:{cols:"4"}},[n("v-datetime-picker",{attrs:{label:"Select Datetime","time-format":"HH:mm:ss","time-picker-props":{useSeconds:!0,ampmInTitle:!0},"text-field-props":{hideDetails:!0}},scopedSlots:t._u([{key:"actions",fn:function(e){var o=e.parent;return[n("v-btn",{attrs:{color:t.$colorScheme.Light_Red},on:{click:o.okHandler}},[t._v("OK")])]}}]),model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[n("template",{slot:"dateIcon"},[n("v-icon",[t._v("mdi-calendar-range")])],1),t._v(" "),n("template",{slot:"timeIcon"},[n("v-icon",[t._v("mdi-timer-outline")])],1)],2)],1),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-row",[n("v-col",{staticClass:"timestamp-container",attrs:{cols:"6"}},[n("v-text-field",{attrs:{"hide-details":"",value:t.timestamp,label:"Unix Timestamp",type:"number"},on:{change:t.handleInputChange}})],1),t._v(" "),n("v-col",{staticClass:"button-container",attrs:{cols:"1"}},[n("v-btn",{staticClass:"button",attrs:{icon:"",small:""},on:{click:t.copyTimestamp}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-content-copy")])],1)],1),t._v(" "),n("v-col",{staticClass:"button-container",attrs:{cols:"1"}},[n("v-btn",{staticClass:"button",attrs:{icon:"",small:""},on:{click:function(e){t.time=new Date}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-refresh")])],1)],1),t._v(" "),n("v-col",{staticClass:"switch-container",attrs:{cols:"4"}},[n("v-switch",{staticClass:"switch",attrs:{value:t.isMilliseconds,label:t.isMilliseconds?"ms":"s",dense:"","hide-details":"",flat:"",ripple:!1},on:{change:t.handleToggleMilliseconds}})],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"row-2"},t._l(t.timeComponents,(function(e,o){return n("v-col",{key:o},[n("v-text-field",{attrs:{label:e.label,value:e.getValue(t.time),type:"number","hide-details":""},on:{input:e.setValue}})],1)})),1),t._v(" "),n("v-row",{staticClass:"row-3"},[n("v-col",{staticClass:"text-container text-body2",attrs:{cols:"6"}},[t._v("\n        UTC(ISO 8601)\n      ")]),t._v(" "),n("v-col",{staticClass:"text-container text-caption formatted",attrs:{cols:"5"}},[t._v("\n        "+t._s(t.utcTime)+"\n      ")]),t._v(" "),n("v-col",{staticClass:"button-container",attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:""},on:{click:t.copyUtcTime}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-content-copy")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"row-4"},[n("v-col",{attrs:{cols:"3"}},[n("v-select",{staticClass:"text-body2 select",attrs:{value:t.formatType,items:t.formatTypeList,"item-text":"text","item-value":"type",dense:"","hide-details":""},on:{change:t.handleChangeFormatType}})],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-switch",{directives:[{name:"show",rawName:"v-show",value:[t.FormatType.DATE_TIME,t.FormatType.TIME].includes(t.formatType),expression:"\n            [FormatType.DATE_TIME, FormatType.TIME].includes(formatType)\n          "}],staticClass:"switch",attrs:{value:t.hour12,label:t.hour12?"12":"24",dense:"",ripple:!1,"hide-details":"",flat:""},on:{change:t.handleToggleIsHour12}})],1),t._v(" "),n("v-col",{staticClass:"text-container text-caption formatted",attrs:{cols:"5"}},[t._v("\n        "+t._s(t.formattedTimeString)+"\n      ")]),t._v(" "),n("v-col",{staticClass:"button-container",attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:""},on:{click:t.copyFormattedTimeString}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-content-copy")])],1)],1)],1)],1),t._v(" "),n("v-snackbar",{staticClass:"snackbar",attrs:{timeout:1e3,top:"",elevation:"6"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    Copied!\n  ")])],1)}),[],!1,null,"5efa5036",null);e.default=component.exports;w()(component,{VBtn:_.a,VCard:y.a,VCardTitle:x.c,VCol:C.a,VContainer:M.a,VDivider:k.a,VIcon:S.a,VRow:D.a,VSelect:E.a,VSnackbar:V.a,VSwitch:I.a,VTextField:O.a})},479:function(t,e,n){"use strict";n(477)},480:function(t,e,n){var o=n(19)(!1);o.push([t.i,".content[data-v-5efa5036]{padding-top:0}.content .row[data-v-5efa5036]{margin:0}.content .row+.row[data-v-5efa5036],.content .v-divider+.row[data-v-5efa5036]{margin-top:12px}.content .row-1 .timestamp-container[data-v-5efa5036],.content .row-1>.col[data-v-5efa5036]{padding-top:0;padding-bottom:0}.content .row-1 .button-container[data-v-5efa5036]{padding-left:0;padding-right:0;position:relative}.content .row-1 .button-container .button[data-v-5efa5036]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.content .row-1 .switch-container[data-v-5efa5036]{position:relative}.content .row-1 .switch-container .switch[data-v-5efa5036]{position:absolute;top:0;bottom:0;left:0;right:0;padding:0;margin:auto;align-items:center}.content .row-2 .col[data-v-5efa5036],.content .row-3 .col[data-v-5efa5036]{padding-top:0;padding-bottom:0}.content .row-3 .col[data-v-5efa5036]{height:36px}.content .row-3 .col.text-container[data-v-5efa5036]{line-height:36px}.content .row-3 .col.button-container[data-v-5efa5036]{position:relative;padding:0}.content .row-3 .col.button-container .button[data-v-5efa5036]{position:absolute;margin:auto;top:0;bottom:0;left:0;right:0}.content .row-4 .col[data-v-5efa5036]{height:36px;padding-top:0;padding-bottom:0}.content .row-4 .col .select[data-v-5efa5036]{margin-top:0}.content .row-4 .col .switch[data-v-5efa5036]{margin-top:0;padding-top:2px}.content .row-4 .col.text-container[data-v-5efa5036]{line-height:36px}.content .row-4 .col.button-container[data-v-5efa5036]{padding:0;position:relative}.content .formatted[data-v-5efa5036]{font-weight:600}.snackbar[data-v-5efa5036] .v-snack__content{text-align:center}",""]),t.exports=o}}]);