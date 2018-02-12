define("spectre-canjs@2.1.2#sp-toast/sp-toast.stache!steal-stache@4.0.1#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.0.1#can-view-import","can-stache-bindings@4.0.5#can-stache-bindings"],function(e,t,a){var r=t("sp-toast/sp-toast.stache",[{tokenType:"chars",args:["\r\n",1]},{tokenType:"start",args:["div",!1,2]},{tokenType:"attrStart",args:["class",2]},{tokenType:"attrValue",args:["toast toast-",2]},{tokenType:"special",args:["severity",2]},{tokenType:"special",args:["#unless(visible)",2]},{tokenType:"attrValue",args:[" animated fadeOut",2]},{tokenType:"special",args:["/unless",2]},{tokenType:"attrEnd",args:["class",2]},{tokenType:"end",args:["div",!1,2]},{tokenType:"chars",args:["\r\n  ",2]},{tokenType:"special",args:["#if(custom)",3]},{tokenType:"chars",args:["\r\n    ",3]},{tokenType:"start",args:["content",!0,4]},{tokenType:"end",args:["content",!0,4]},{tokenType:"chars",args:["\r\n  ",4]},{tokenType:"special",args:["else",5]},{tokenType:"chars",args:["\r\n    ",5]},{tokenType:"special",args:["#if(dismissable)",6]},{tokenType:"start",args:["button",!1,6]},{tokenType:"attrStart",args:["class",6]},{tokenType:"attrValue",args:["btn btn-clear float-right",6]},{tokenType:"attrEnd",args:["class",6]},{tokenType:"attrStart",args:["on:click",6]},{tokenType:"attrValue",args:["hide()",6]},{tokenType:"attrEnd",args:["on:click",6]},{tokenType:"end",args:["button",!1,6]},{tokenType:"close",args:["button",6]},{tokenType:"special",args:["/if",6]},{tokenType:"chars",args:["\r\n    ",6]},{tokenType:"special",args:["#if(iconClass)",7]},{tokenType:"start",args:["i",!1,7]},{tokenType:"attrStart",args:["class",7]},{tokenType:"special",args:["iconClass",7]},{tokenType:"attrEnd",args:["class",7]},{tokenType:"end",args:["i",!1,7]},{tokenType:"close",args:["i",7]},{tokenType:"special",args:["/if",7]},{tokenType:"chars",args:["\r\n    ",7]},{tokenType:"special",args:["#if(heading)",8]},{tokenType:"start",args:["span",!1,8]},{tokenType:"attrStart",args:["class",8]},{tokenType:"attrValue",args:["text-bold",8]},{tokenType:"attrEnd",args:["class",8]},{tokenType:"end",args:["span",!1,8]},{tokenType:"special",args:["heading",8]},{tokenType:"close",args:["span",8]},{tokenType:"special",args:["/if",8]},{tokenType:"chars",args:["\r\n    ",8]},{tokenType:"special",args:["body",9]},{tokenType:"chars",args:["\r\n  ",9]},{tokenType:"special",args:["/if",10]},{tokenType:"chars",args:["\r\n",10]},{tokenType:"close",args:["div",11]},{tokenType:"chars",args:["\r\n",11]},{tokenType:"done",args:[12]}]);return function(t,a,s){var n=Object.assign({module:e},a);return r(t,n,s)}}),define("spectre-canjs@2.1.2#sp-toast/ViewModel",["exports","can-define/map/map"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default=a.default.extend("ToastItem",{fade:{type:"boolean",value:!0},timer:{},autoHide:{type:"number",value:5e3,set:function(e){var t=this;return e&&(this.timer&&window.clearTimeout(this.timer),this.timer=setTimeout(function(){t.hide()},e)),e}},custom:{type:"boolean",value:!1},severity:{value:"info",type:function(e){var t=["primary","info","success","warning","error"];return t.indexOf(e)>-1?e:t[0]}},dismissable:{value:!0,type:"boolean"},iconClass:{type:"string",value:"icon icon-error_outline"},visible:{value:!0,type:"boolean"},body:{value:"",type:"string"},heading:{value:"",type:"string"},fadeTime:{type:"number",value:1e3},element:"*",hide:function(){var e=this;this.visible&&(this.visible=!1,this.fade?setTimeout(function(){e.dispatch("hide",[e])},this.fadeTime):this.dispatch("hide",[this]))}})}),define("spectre-canjs@2.1.2#sp-toast/sp-toast",["exports","./sp-toast.stache","can-component","./ViewModel","./sp-toast.less"],function(e,t,a,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(t),o=s(a),i=s(r);o.default.extend({tag:"sp-toast",view:n.default,ViewModel:i.default}),e.default=i.default}),define("can-arcgis@2.1.3#components/select-widget/template.stache!steal-stache@4.0.1#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.0.1#can-view-import","can-stache-bindings@4.0.5#can-stache-bindings","spectre-canjs/sp-toast/"],function(e,t,a){var r=t("components/select-widget/template.stache",[{tokenType:"start",args:["can-import",!0,1]},{tokenType:"attrStart",args:["from",1]},{tokenType:"attrValue",args:["spectre-canjs/sp-toast/",1]},{tokenType:"attrEnd",args:["from",1]},{tokenType:"end",args:["can-import",!0,1]},{tokenType:"chars",args:["\r\n\r\n",1]},{tokenType:"start",args:["div",!1,3]},{tokenType:"attrStart",args:["class",3]},{tokenType:"attrValue",args:["workorder-picker container",3]},{tokenType:"attrEnd",args:["class",3]},{tokenType:"attrStart",args:["style",3]},{tokenType:"attrValue",args:["background:#fff;width:300px;padding:10px;",3]},{tokenType:"attrEnd",args:["style",3]},{tokenType:"end",args:["div",!1,4]},{tokenType:"chars",args:["\r\n    ",4]},{tokenType:"start",args:["p",!1,5]},{tokenType:"attrStart",args:["class",5]},{tokenType:"attrValue",args:["text-bold",5]},{tokenType:"attrEnd",args:["class",5]},{tokenType:"end",args:["p",!1,5]},{tokenType:"special",args:["title",5]},{tokenType:"close",args:["p",5]},{tokenType:"chars",args:["\r\n    ",5]},{tokenType:"special",args:["#if message",6]},{tokenType:"chars",args:["\r\n        ",6]},{tokenType:"start",args:["sp-toast",!0,7]},{tokenType:"attrStart",args:["heading:from",7]},{tokenType:"attrValue",args:["'Oops'",7]},{tokenType:"attrEnd",args:["heading:from",7]},{tokenType:"attrStart",args:["body:from",7]},{tokenType:"attrValue",args:["message",7]},{tokenType:"attrEnd",args:["body:from",7]},{tokenType:"attrStart",args:["severity:from",7]},{tokenType:"attrValue",args:["'warning'",7]},{tokenType:"attrEnd",args:["severity:from",7]},{tokenType:"attrStart",args:["dismissable:from",7]},{tokenType:"attrValue",args:["false",7]},{tokenType:"attrEnd",args:["dismissable:from",7]},{tokenType:"end",args:["sp-toast",!0,8]},{tokenType:"chars",args:["\r\n    ",8]},{tokenType:"special",args:["/if",9]},{tokenType:"chars",args:["\r\n    ",9]},{tokenType:"special",args:["#if(selectGraphicsLayer.graphics.items.length)",10]},{tokenType:"chars",args:["\r\n        ",10]},{tokenType:"start",args:["p",!1,11]},{tokenType:"end",args:["p",!1,11]},{tokenType:"chars",args:["You've selected ",11]},{tokenType:"special",args:["selectGraphicsLayer.graphics.items.length",11]},{tokenType:"chars",args:[" features.\r\n            ",11]},{tokenType:"start",args:["button",!1,12]},{tokenType:"attrStart",args:["class",12]},{tokenType:"attrValue",args:["btn",12]},{tokenType:"attrEnd",args:["class",12]},{tokenType:"attrStart",args:["type",12]},{tokenType:"attrValue",args:["button",12]},{tokenType:"attrEnd",args:["type",12]},{tokenType:"attrStart",args:["on:el:click",12]},{tokenType:"attrValue",args:["clearSelected()",12]},{tokenType:"attrEnd",args:["on:el:click",12]},{tokenType:"end",args:["button",!1,12]},{tokenType:"chars",args:["Cancel",12]},{tokenType:"close",args:["button",12]},{tokenType:"chars",args:["\r\n        ",12]},{tokenType:"close",args:["p",13]},{tokenType:"chars",args:["\r\n        ",13]},{tokenType:"start",args:["ul",!1,14]},{tokenType:"attrStart",args:["class",14]},{tokenType:"attrValue",args:["menu",14]},{tokenType:"attrEnd",args:["class",14]},{tokenType:"end",args:["ul",!1,14]},{tokenType:"chars",args:["\r\n            ",14]},{tokenType:"comment",args:[" menu header text ",15]},{tokenType:"chars",args:["\r\n            ",15]},{tokenType:"start",args:["li",!0,16]},{tokenType:"attrStart",args:["class",16]},{tokenType:"attrValue",args:["divider",16]},{tokenType:"attrEnd",args:["class",16]},{tokenType:"attrStart",args:["data-content",16]},{tokenType:"attrValue",args:["Actions",16]},{tokenType:"attrEnd",args:["data-content",16]},{tokenType:"end",args:["li",!0,16]},{tokenType:"chars",args:["\r\n            ",16]},{tokenType:"comment",args:[" menu item ",17]},{tokenType:"chars",args:["\r\n            ",17]},{tokenType:"special",args:["#each(actions)",18]},{tokenType:"chars",args:["\r\n                ",18]},{tokenType:"start",args:["li",!1,19]},{tokenType:"attrStart",args:["class",19]},{tokenType:"attrValue",args:["menu-item",19]},{tokenType:"attrEnd",args:["class",19]},{tokenType:"end",args:["li",!1,19]},{tokenType:"chars",args:["\r\n                    ",19]},{tokenType:"start",args:["a",!1,20]},{tokenType:"attrStart",args:["href",20]},{tokenType:"attrValue",args:["#",20]},{tokenType:"attrEnd",args:["href",20]},{tokenType:"attrStart",args:["on:click",20]},{tokenType:"attrValue",args:["../onActionClick(., scope.event)",20]},{tokenType:"attrEnd",args:["on:click",20]},{tokenType:"end",args:["a",!1,20]},{tokenType:"chars",args:["\r\n                        ",20]},{tokenType:"start",args:["i",!1,21]},{tokenType:"attrStart",args:["class",21]},{tokenType:"special",args:["iconClass",21]},{tokenType:"attrEnd",args:["class",21]},{tokenType:"end",args:["i",!1,21]},{tokenType:"close",args:["i",21]},{tokenType:"chars",args:[" ",21]},{tokenType:"special",args:["label",21]},{tokenType:"chars",args:["\r\n                    ",21]},{tokenType:"close",args:["a",22]},{tokenType:"chars",args:["\r\n                ",22]},{tokenType:"close",args:["li",23]},{tokenType:"chars",args:["\r\n            ",23]},{tokenType:"special",args:["/each",24]},{tokenType:"chars",args:["\r\n        ",24]},{tokenType:"close",args:["ul",25]},{tokenType:"chars",args:["\r\n    ",25]},{tokenType:"special",args:["else",26]},{tokenType:"chars",args:["\r\n\r\n        ",26]},{tokenType:"start",args:["sp-select-field",!0,28]},{tokenType:"attrStart",args:["properties:from",28]},{tokenType:"attrValue",args:["layerProperties",28]},{tokenType:"attrEnd",args:["properties:from",28]},{tokenType:"attrStart",args:["value:bind",28]},{tokenType:"attrValue",args:["layer",28]},{tokenType:"attrEnd",args:["value:bind",28]},{tokenType:"end",args:["sp-select-field",!0,28]},{tokenType:"chars",args:["\r\n\r\n        ",28]},{tokenType:"special",args:["#if(layer)",30]},{tokenType:"chars",args:["\r\n\r\n            ",30]},{tokenType:"start",args:["sp-select-field",!0,32]},{tokenType:"attrStart",args:["properties:from",32]},{tokenType:"attrValue",args:["queryProperties",32]},{tokenType:"attrEnd",args:["properties:from",32]},{tokenType:"attrStart",args:["value:bind",32]},{tokenType:"attrValue",args:["query",32]},{tokenType:"attrEnd",args:["value:bind",32]},{tokenType:"end",args:["sp-select-field",!0,34]},{tokenType:"chars",args:[" \r\n\r\n            ",34]},{tokenType:"special",args:["#if(query)",36]},{tokenType:"chars",args:["\r\n                ",36]},{tokenType:"special",args:["#eq(query, 'spatial')",37]},{tokenType:"chars",args:["\r\n                    ",37]},{tokenType:"start",args:["draw-widget",!0,38]},{tokenType:"attrStart",args:["view:from",38]},{tokenType:"attrValue",args:["view",38]},{tokenType:"attrEnd",args:["view:from",38]},{tokenType:"attrStart",args:["graphics:u:layer:bind",38]},{tokenType:"attrValue",args:["drawGraphicsLayer",38]},{tokenType:"attrEnd",args:["graphics:u:layer:bind",38]},{tokenType:"end",args:["draw-widget",!0,40]},{tokenType:"chars",args:["\r\n                    \r\n                    ",40]},{tokenType:"special",args:["#if(drawGraphicsLayer.graphics.items.length)",42]},{tokenType:"chars",args:["\r\n                        ",42]},{tokenType:"start",args:["button",!1,43]},{tokenType:"attrStart",args:["class",43]},{tokenType:"attrValue",args:["btn btn-primary",43]},{tokenType:"attrEnd",args:["class",43]},{tokenType:"attrStart",args:["on:el:click",43]},{tokenType:"attrValue",args:["searchGraphics()",43]},{tokenType:"attrEnd",args:["on:el:click",43]},{tokenType:"end",args:["button",!1,43]},{tokenType:"chars",args:["\r\n                            ",43]},{tokenType:"start",args:["i",!1,44]},{tokenType:"attrStart",args:["class",44]},{tokenType:"attrValue",args:["esri-icon-search",44]},{tokenType:"attrEnd",args:["class",44]},{tokenType:"end",args:["i",!1,44]},{tokenType:"close",args:["i",44]},{tokenType:"chars",args:[" Search",44]},{tokenType:"close",args:["button",44]},{tokenType:"chars",args:[" \r\n                    ",44]},{tokenType:"special",args:["/if",45]},{tokenType:"chars",args:["\r\n                ",45]},{tokenType:"special",args:["else",46]},{tokenType:"chars",args:["\r\n                    ",46]},{tokenType:"start",args:["sp-form",!0,47]},{tokenType:"attrStart",args:["is:u:saving:bind",47]},{tokenType:"attrValue",args:["formIsSaving",47]},{tokenType:"attrEnd",args:["is:u:saving:bind",47]},{tokenType:"attrStart",args:["fields:from",47]},{tokenType:"attrValue",args:["selectedQuery.fields",47]},{tokenType:"attrEnd",args:["fields:from",47]},{tokenType:"attrStart",args:["object:from",47]},{tokenType:"attrValue",args:["queryFormObject",47]},{tokenType:"attrEnd",args:["object:from",47]},{tokenType:"attrStart",args:["on:submit",47]},{tokenType:"attrValue",args:["searchFormSubmit(queryFormObject)",47]},{tokenType:"attrEnd",args:["on:submit",47]},{tokenType:"attrStart",args:["on:cancel",47]},{tokenType:"attrValue",args:["reset()",47]},{tokenType:"attrEnd",args:["on:cancel",47]},{tokenType:"end",args:["sp-form",!0,52]},{tokenType:"chars",args:["\r\n                ",52]},{tokenType:"special",args:["/eq",53]},{tokenType:"chars",args:["\r\n            ",53]},{tokenType:"special",args:["/if",54]},{tokenType:"chars",args:["\r\n        ",54]},{tokenType:"special",args:["/if",55]},{tokenType:"chars",args:["\r\n    ",55]},{tokenType:"special",args:["/if",56]},{tokenType:"chars",args:["\r\n",56]},{tokenType:"close",args:["div",57]},{tokenType:"done",args:[57]}]);return function(t,a,s){var n=Object.assign({module:e},a);return r(t,n,s)}}),define("can-arcgis@2.1.3#util/assignGraphics",["exports","esri-loader"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return(0,t.loadModules)(["esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol"]).then(function(t){var r=a(t,3),s=r[0],n=r[1],o=r[2];return e.forEach(function(e){var t=void 0;switch(e.geometry.type){case"polyline":t=new n({color:"#de4343",width:"5px",style:"solid"});break;case"polygon":t=new o({color:"#de4343",style:"solid",outline:{color:"#000",width:1}});break;case"point":default:t=new s({color:"red",outline:{color:"#000",width:"0.5px"}})}e.symbol=t}),e})};var a=function(){function e(e,t){var a=[],r=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){s=!0,n=e}finally{try{!r&&i.return&&i.return()}finally{if(s)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()}),define("can-arcgis@2.1.3#components/select-widget/ViewModel",["exports","can-define/map/map","can-define/list/list","can-util/js/string/string","esri-loader","can-arcgis/util/assignGraphics","can-arcgis/util/decorateAccessor","can-reflect"],function(e,t,a,r,s,n,o,i){"use strict";function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var l=p(t),c=p(a),y=p(r),g=p(n),u=p(o),d=p(i),k=function(){function e(e,t){var a=[],r=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){s=!0,n=e}finally{try{!r&&i.return&&i.return()}finally{if(s)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=l.default.extend("SelectWidget",{seal:!1},{message:"string",view:{set:function(e){var t=this;return this.view&&this.view.map.remove(this.selectGraphicsLayer),e&&(this.selectGraphicsLayer||(0,s.loadModules)(["esri/layers/GraphicsLayer"]).then(function(a){var r=k(a,1)[0];t.selectGraphicsLayer=(0,u.default)(new r({listMode:"hide"})),e.map.add(t.selectGraphicsLayer)})),e}},title:{type:"string",value:"Select Features"},layerOptions:{get:function(){var e=this;return d.default.getOwnEnumerableKeys(this.layers).map(function(t){return{label:e.layers[t].label||t,value:t}})}},layerAlias:{value:"Layer to select"},layerProperties:{get:function(){return{options:this.layerOptions,alias:this.layerAlias}}},layers:l.default,layer:{type:"string",set:function(e){if(!e)return e;if(localStorage.selectedLayer=e,!this.layers[e])return e;var t=this.layers[e],a=this.view.map.findLayerById(t.supportId);return a&&a.sublayers.forEach(function(e){e.visible=t.supportIds.indexOf(e.id)>-1}),e}},selectedLayer:{get:function(){return this.layers[this.layer]||"custom"}},actions:c.default,query:{type:"string",value:"spatial"},queries:{get:function(){return(this.selectedLayer.queries||[]).concat([{value:"spatial",label:"From the map"}])}},queryProperties:{get:function(){return{options:this.queries,alias:"Select features by"}}},selectedQuery:{get:function(){var e=this,t=this.queries.filter(function(t){return t.value===e.query});return t.length?t[0]:{}}},queryFormObject:{Value:l.default},formIsSaving:"boolean",drawGraphicsLayer:{},selectGraphicsLayer:{},searchFormSubmit:function(e){var t=y.default.sub(this.selectedQuery.queryTemplate||"1=1",e);this.selectFeatures({where:t})},searchGraphics:function(){var e=this;if(this.activeButton=null,1===this.drawGraphicsLayer.graphics.items.length)this.selectFeatures({geometry:this.drawGraphicsLayer.graphics.getItemAt(0).geometry}),this.clearDrawing();else if(this.drawGraphicsLayer.graphics.items.length>1){var t=this.drawGraphicsLayer.graphics.map(function(e){return e.geometry}).toArray();(0,s.loadModules)(["esri/geometry/geometryEngine"]).then(function(a){var r=k(a,1)[0].union(t);e.clearDrawing(),e.selectFeatures({geometry:r})})}},clearDrawing:function(){this.drawGraphicsLayer.graphics.removeAll()},clearSelected:function(){this.selectGraphicsLayer.graphics.removeAll(),this.drawGraphicsLayer.graphics.removeAll(),this.formIsSaving=!1},selectFeatures:function(e){var t=this;this.message=null,(0,s.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"]).then(function(a){var r=k(a,2),s=r[0],n=r[1],o=Object.assign(new n,{outFields:["*"],returnGeometry:!0,outSpatialReference:t.view.spatialReference},e);new s({url:t.selectedLayer.url+"/query"}).execute(o).then(function(e){e.features.length?t.highlightFeatures(e.features):t.message="No features were selected",t.formIsSaving=!1}).otherwise(function(e){console.log(e)})})},highlightFeatures:function(e){var t=this;e.length&&(0,g.default)(e).then(function(e){t.drawGraphicsLayer.removeAll(),t.selectGraphicsLayer.addMany(e),t.view.goTo(e)})},onActionClick:function(e,t){return t&&t.preventDefault(),e.onClick(this.selectGraphicsLayer.graphics,this),!1}})}),define("can-arcgis@2.1.3#components/select-widget/select-widget",["exports","can-component","./template.stache","./ViewModel","../draw-widget/draw-widget","spectre-canjs/sp-form/sp-form","spectre-canjs/sp-form/fields/sp-select-field/sp-select-field","spectre-canjs/sp-toast/sp-toast"],function(e,t,a,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(t),o=s(a),i=s(r);e.default=n.default.extend({tag:"select-widget",ViewModel:i.default,view:o.default})}),define("can-arcgis@2.1.3#config/select/select",["exports","can-stache","sweetalert2","../../components/select-widget/select-widget","spectre-canjs/sp-form/fields/sp-text-field/sp-text-field","sweetalert2/dist/sweetalert2.css"],function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),n=r(a),o="https://services1.arcgis.com/6bXbLtkf4y11TosO/arcgis/rest/services/Restaurants/FeatureServer/0";e.default={title:"Use the search icon widget to select features",debug:!0,viewOptions:{center:[-93.28697204589844,44.294471740722656],zoom:12},mapOptions:{basemap:"gray",layers:[{type:"feature",options:{url:o,id:"resteraunts",outFields:["*"]}}]},widgets:[{parent:"expand",iconClass:"esri-icon-search",type:"renderer",renderer:(0,s.default)('<select-widget \n            layers:from="layers"\n            view:from="view"\n            actions:from="actions" />'),options:{layers:{Resteraunts:{url:o,queries:[{value:"name",label:"Establishment Name",fields:[{name:"name",placeholder:"Example: KFC"}],queryTemplate:"EstablishmentName LIKE '%{name}%'"},{value:"riskType",label:"Risk Type",queryTemplate:"RiskType = {risk}",fields:[{name:"risk",alias:"Risk Type",editTag:"sp-select-field",options:[{value:1,label:"Inspected one time per year"},{value:2,label:"Inspected two times per year"},{value:3,label:"Inspected three times per year"}]}]}]}},actions:[{label:"Log Selected Features",iconClass:"esri-icon-announcement",onClick:function(e){(0,n.default)({title:"Features",html:e.map(function(e){return"<li>"+e.attributes.EstablishmentName+"</li>"}).join("")})}}]}}]}});
//# sourceMappingURL=select.js.map