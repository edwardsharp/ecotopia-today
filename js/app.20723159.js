(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},i={app:0},s=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{8628:"d1e68433","6a51":"ebf2e4cf","753a":"f8b90358","81d0":"5c79f0f7","969e":"85213ec8","chunk-0bc4":"7b1bf324","chunk-45b4":"9f732e2d","chunk-463e":"017b8f96","chunk-4d5f":"0d89dafb","chunk-60b3":"b661a75c","chunk-894b":"d0578969","chunk-bc79":"dede42a5",fc1f:"bb3ea2bc"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0bc4":1,"chunk-45b4":1,"chunk-463e":1,"chunk-60b3":1,"chunk-894b":1,"chunk-bc79":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{8628:"31d6cfe0","6a51":"31d6cfe0","753a":"31d6cfe0","81d0":"31d6cfe0","969e":"31d6cfe0","chunk-0bc4":"8c9afb54","chunk-45b4":"ab0f9f9d","chunk-463e":"4e330c4f","chunk-4d5f":"31d6cfe0","chunk-60b3":"34bc75ce","chunk-894b":"bfea6634","chunk-bc79":"d5fa2aaa",fc1f:"31d6cfe0"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var r=i[s],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===o||l===a))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){r=u[s],l=r.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=s);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(e),l=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}i[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ecotopia-today/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("04f5"),a=n.n(o);a.a},"04f5":function(e,t,n){},2352:function(e,t,n){"use strict";var o=n("c1a1"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("b059"),n("619b"),n("6e25"),n("a347");var o,a,i,s,r=n("2b0e"),c=n("283e"),l=n.n(c),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",[n("nav",[n("span",[e._v(" ")]),n("router-link",{class:{active:e.$route.name&&e.$route.name.match("megaregion")},attrs:{to:"/megaregion/introduction"}},[e._v("Megaregion")]),n("router-link",{class:{active:e.$route.name&&e.$route.name.match("watershed")},attrs:{to:"/watershed/introduction"}},[e._v("Watershed")]),n("router-link",{class:{active:e.$route.name&&e.$route.name.match("bioregion")},attrs:{to:"/bioregion/introduction"}},[e._v("Bioregion")]),n("span",[e._v(" ")]),n("div",{attrs:{id:"aside-scroll-to",title:"Skip To Content"},on:{click:e.scrollToAside}},[n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])],1),n("router-view",{attrs:{name:"map",id:"map"}})],1),n("AppNav"),n("aside",{class:{"no-flex":this.asideHidden}},[n("div",{attrs:{id:"aside-wraper"}},[n("div",{attrs:{id:"aside-toggle",title:"Toggle Content"},on:{click:e.toggleAside}},[e.asideHidden?n("i",{staticClass:"material-icons"},[e._v("menu")]):n("i",{staticClass:"material-icons"},[e._v("close")])]),n("p",{class:{hidden:this.asideHidden},attrs:{id:"aside-heading"}},[e._v("LEARNING FROM CASCADIA")])]),n("div",{ref:"asideContent",class:{hidden:this.asideHidden},attrs:{id:"content"}},[n("router-view")],1)])],1)},d=[],p=n("c93e"),h=n("2f62"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.asideHidden?e._e():n("div",[e.nav.items?n("div",{attrs:{id:"items"}},e._l(e.nav.items,function(t){return n("router-link",{key:t.name,staticClass:"btn",attrs:{to:t.href},nativeOn:{click:function(n){e.routeClick(t.href)}}},[e._v(e._s(t.name))])})):e._e(),e.navSubItems?n("div",{attrs:{id:"subItems"}},e._l(e.navSubItems,function(t){return n("router-link",{key:t.name,staticClass:"btn subItem",attrs:{to:t.href},nativeOn:{click:function(n){e.routeClick(t.href)}}},[e._v(e._s(t.name))])})):e._e()])},f=[],g=(n("7f7f"),{name:"AppNav",data:function(){return{nav:[],navSubItems:[],watershed:{items:[{name:"Introduction",href:"/watershed/introduction"},{name:"Terminals",href:"/watershed/terminals"},{name:"Dams",href:"/watershed/dams"},{name:"Hanford",href:"/watershed/hanford"}]},megaregion:{items:[{name:"Introduction",href:"/megaregion/introduction"},{name:"Energy",href:"/megaregion/energy"},{name:"Crops",href:"/megaregion/crops"}]},subItems:{dams:[{name:"Transformation",href:"/watershed/dams/transformation"}],hanford:[{name:"Legacy",href:"/watershed/hanford/legacy"},{name:"Plumes",href:"/watershed/hanford/plumes"},{name:"Floods",href:"/watershed/hanford/floods"}],crops:[{name:"Grand Coulee",href:"/megaregion/crops/grandcoulee"},{name:"Basin Project",href:"/megaregion/crops/basinproject"}]}}},computed:Object(p["a"])({},Object(h["b"])(["asideHidden"])),watch:{$route:function(e,t){this.initNav()}},mounted:function(){this.initNav()},methods:{initNav:function(){/watershed/.test(this.$route.name)?this.nav=this.watershed:/megaregion/.test(this.$route.name)?this.nav=this.megaregion:this.nav=[],/watershedDams/.test(this.$route.name)?this.navSubItems=this.subItems.dams:/watershedHanford/.test(this.$route.name)?this.navSubItems=this.subItems.hanford:/megaregionCrops/.test(this.$route.name)?this.navSubItems=this.subItems.crops:this.navSubItems=[]},routeClick:function(e){e===this.$route.path&&xe.$emit("route-click")}}}),w=g,y=(n("b428"),n("2877")),b=Object(y["a"])(w,m,f,!1,null,"4dab4c10",null),v=b.exports,k={name:"App",components:{AppNav:v},watch:{$route:function(e,t){document.querySelector("aside > #content").scrollTop=0}},computed:Object(p["a"])({},Object(h["b"])(["asideHidden"])),methods:{toggleAside:function(){this.$store.dispatch("toggle")},scrollToAside:function(){this.$refs.asideContent.scrollIntoView()}}},L=k,C=(n("034f"),Object(y["a"])(L,u,d,!1,null,null,null)),_=C.exports,x=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside-content"},[e._m(0),n("img",{staticClass:"fullwidth",attrs:{src:"images/waterbody.png"}}),n("br"),n("div",{staticClass:"caption"},[e._v("Does the territory inhabit you?")]),n("br"),n("Accordion",{attrs:{open:!1}},[n("h3",{attrs:{slot:"header"},slot:"header"},[e._v("legends")]),n("div",{staticClass:"flex"},[n("div",[n("img",{attrs:{src:"icons/legends/woody.png"}}),e._v("\n        Woody wetlands\n      ")]),n("div",[n("img",{attrs:{src:"icons/legends/herbaceous.png"}}),e._v("\n        Herbaceous wetlands\n      ")]),n("div",[n("img",{attrs:{src:"icons/legends/peaks.png"}}),e._v("\n        Crazy beautiful mountains\n      ")]),n("div",[n("img",{attrs:{src:"icons/legends/watery.png"}}),e._v("\n        We love water\n      ")])])]),n("p",[e._v("The Columbia Gorge is one of the most beautiful sights on earth. But a watershed is more than a beautiful view.")]),n("p",[e._v("The Columbia River watershed is a far-flung territory including parts of six US states and one Canadian province. Its border is traced, not by governments or treaties, but by every drop of liquid that finds a common path to the ocean.")]),n("p",[e._v("Rainfall washes over forested slopes and grassy plains. Snow and ice collect on mountain peaks. Dew glistens on high deserts. Groundwater bubbles up from artesian springs. Pools spill over into rivulets that become creeks and gushing torrents, before rejoining rivers that gradually converge into a powerful flood. A watershed is defined by endless circulation through a territory. What it takes from the clouds, it gives back to the sea.")]),n("p",[e._v("Human bodies are up to 60% water. We too are part of the shed, along with other living species. What we do outside ourselves inevitably seeps back in.")]),n("p",[e._v("This map is about political ecology. It suggests that human decisions are shaped by exterior realities that have always already gotten under our skin. Like most maps, this one will guide you to real and imaginary places. It will deliver loads of information, with a wealth of topographical detail that increases as you zoom in. It will also show you texts and images, and it will even talk to you via multimedia recordings. The aim is to provide multiple viewpoints on a reality that is at once pragmatic and utopian.")]),n("p",[e._v("The main sections are accessed through the navigational bar at the top, while specific locations and themes are reached by the panel at lower left. Sometimes further buttons appear at the bottom of the map, to take you through more complex stories. When in doubt, just click on any word or marker or object that you see, and there's a good chance it will reveal something.")]),n("p",[e._v("Watershed is a scientific category that provides the frame for citizen activism and advocacy. Two riskier and more speculative headings also appear: Megaregion and Bioregion. They're like the red and the blue pill. Which one will you choose? Which one is which?")]),n("p",[e._v('This project has been made using public research and open-source software, with generous contributions from a growing list of local organizations and inhabitants. Legends for each map can be found at the top of the text column. Sources and collaborators are identified at the end. Pages will be added as new possibilities emerge. The whole thing has been coordinated by a Portland-based artist and curator, Mack McFarland, and by an inquisitive stranger, Brian Holmes, who came to the Pacific Northwest with the quixotic hope of "Learning from Cascadia."')]),n("br"),n("Accordion",[n("h3",{attrs:{slot:"header"},slot:"header"},[e._v("sources")]),n("p",[e._v("This work is made with public data and free software. Code repository "),n("a",{attrs:{href:"https://github.com/Brian393/ecotopia-today",target:"blank"}},[e._v("here")]),e._v(".")]),n("p",[e._v("Major sources for this page include:")]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://nhd.usgs.gov/NHDPlus_HR.html",target:"_blank"}},[e._v("National Hydrology Dataset")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://www.arcgis.com/home/item.html?id=1b243539f4514b6ba35e7d995890db1d",target:"_blank"}},[e._v("Esri World Hillshade Layer")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://www.fws.gov/wetlands/Data/Mapper.html",target:"_blank"}},[e._v("National Wetlands Inventory")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"http://www.cec.org/tools-and-resources/map-files/land-cover-2010-landsat-30m",target:"_blank"}},[e._v("North American Land Cover Monitoring System")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://www.openstreetmap.org",target:"__blank"}},[e._v("OpenStreetMap")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://www.bing.com/maps/aerial",target:"_blank"}},[e._v("Bing Maps Aerial")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",target:"_blank"}},[e._v("National Geographic World Map")])]),n("p",[e._v("-- "),n("a",{attrs:{href:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer",target:"_blank"}},[e._v("USGS Topo Map")])]),n("p",[e._v("These sources have been combined and put online using two amazing tools: "),n("a",{attrs:{href:"https://www.qgis.org/en/site/",target:"_blank"}},[e._v("QGIS")]),e._v(" and "),n("a",{attrs:{href:"https://openlayers.org/",target:"_blank"}},[e._v("OpenLayers")]),e._v(".")]),n("p",[e._v("Thanks to all the creators of this fabulous stuff!")])])],1)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Outside in")])])}],T=n("e711"),R=n("d54e"),O={name:"WatershedIntroduction",components:{Accordion:R["a"],AppLightBox:T["a"]},data:function(){return{images:[{thumb:"images/Dams/ArrowLakesDam.jpg",src:"images/Dams/ArrowLakesDam.jpg",caption:"ArrowLakesDam"},{thumb:"images/Dams/BonnevilleDam.jpg",src:"images/Dams/BonnevilleDam.jpg",caption:"BonnevilleDam"},{thumb:"images/Dams/BoundaryDam.jpg",src:"images/Dams/BoundaryDam.jpg",caption:"BoundaryDam"},{thumb:"images/Dams/BridgeRiverDam.jpg",src:"images/Dams/BridgeRiverDam.jpg",caption:"BridgeRiverDam"}]}}},M=O,H=(n("bfe4"),Object(y["a"])(M,j,P,!1,null,"3d53b592",null)),S=H.exports,$=n("8afe"),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"map",attrs:{id:"map"}},[n("div",{ref:"popup",staticClass:"ol-popup"},[n("div",{ref:"popupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),n("div",{ref:"popupContent",staticClass:"ol-popup-content"}),n("div",{staticClass:"ol-popup-twitter-content"},[n("div",{ref:"loadingTweets",staticClass:"hidden"},[e._v("Loading Tweets...")]),n("div",{ref:"twitterContent"})])]),n("div",{ref:"titletip",staticClass:"titletip"},[n("div",{ref:"titletipContent",staticClass:"titletip-content"})]),n("div",{ref:"tooltip",staticClass:"ol-tooltip"})])},A=[],G=(n("a481"),n("5bc0"),n("0710")),W=n("5eee"),I=n("3e6b"),D=n("5831"),N=n("a2e1"),z=n("6c77"),E=n("6cbf"),V=n("8682"),J=n("83a6"),F=n("8f3a"),q=n("9d47"),Q={name:"Map",data:function(){return{olmap:void 0}},computed:Object(p["a"])({},Object(h["b"])(["asideHidden"]),{popup:function(){return new G["a"]({element:this.$refs.popup,autoPan:!0,autoPanAnimation:{duration:250}})},titletip:function(){return new G["a"]({element:this.$refs.titletip,offset:[10,0],positioning:"center-left"})},tooltip:function(){return new G["a"]({element:this.$refs.tooltip,offset:[10,0],positioning:"center-left"})}}),watch:{$route:function(e,t){this.closePopup(),this.initMap()},asideHidden:function(){this.olmap.updateSize(),this.toggleScaleLine()}},methods:{initMap:function(){},initBaseMap:function(){var e=this;this.olmap||(this.olmap=new W["a"]({target:"map",overlays:[this.popup,this.titletip,this.tooltip],controls:Object(F["a"])({attributionOptions:{collapsible:!0}}).extend([new q["a"]({units:"us",minWidth:150})])}),this.toggleScaleLine(),this.olmap.on("singleclick",function(t){var n=e.olmap.forEachFeatureAtPixel(t.pixel,function(e){return e});if(n){var o=n.getProperties();console.log("has feature! props:",o),o.title&&o.image&&o.text1?(e.$refs.popupContent.classList.remove("hidden"),e.$refs.twitterContent.classList.add("hidden"),e.$refs.popupContent.innerHTML="<h4>"+o.title+"</h4>",e.$refs.popupContent.innerHTML+=o.image?o.image.replace("cascadia/",""):"",e.$refs.popupContent.innerHTML+=o.text1+"<br>",e.$refs.popupContent.innerHTML+=o.text2?o.text2+"<br>":"",e.$refs.popupContent.innerHTML+=o.text3?o.text3+"<br>":"",e.popup.setPosition(t.coordinate),e.closeTooltip()):o.key2?(e.$refs.popupContent.classList.remove("hidden"),e.$refs.twitterContent.classList.add("hidden"),e.$refs.popupContent.innerHTML=o.key2.replace("cascadia/",""),e.popup.setPosition(t.coordinate)):o.title?(e.$refs.popupContent.classList.remove("hidden"),e.$refs.twitterContent.classList.add("hidden"),e.$refs.popupContent.innerHTML=o.title,e.popup.setPosition(t.coordinate)):o.key?(e.$refs.popupContent.classList.remove("hidden"),e.$refs.twitterContent.classList.add("hidden"),e.$refs.popupContent.innerHTML=o.key,e.popup.setPosition(t.coordinate)):o.timeline&&window.twttr&&(e.$refs.popupContent.classList.add("hidden"),e.$refs.twitterContent.classList.remove("hidden"),e.$refs.loadingTweets.classList.remove("hidden"),e.$refs.twitterContent.innerHTML="",window.twttr.widgets.createTimeline({sourceType:"url",url:o.timeline},e.$refs.twitterContent).then(function(){e.$refs.loadingTweets.classList.add("hidden")}),e.popup.setPosition(t.coordinate))}else e.closePopup()}),window.addEventListener("keydown",function(t){27===t.keyCode&&e.closePopup()}),window.addEventListener("resize",function(t){e.toggleScaleLine()}),this.olmap.on("pointermove",function(t){var n=e.olmap.getEventPixel(t.originalEvent),o=e.olmap.hasFeatureAtPixel(n);e.$refs.map.style.cursor=o?"pointer":""}))},closePopup:function(){return this.popup.setPosition(void 0),this.$refs.popupCloser.blur(),!1},closeTitletip:function(){return this.titletip.setPosition(void 0),!1},closeTooltip:function(){return this.tooltip.setPosition(void 0),!1},makeGeoJSONPointVectorLayer:function(e,t,n,o,a){return new I["a"]({source:new D["a"]({url:e,format:new N["a"]}),minResolution:o,maxResolution:a,style:new z["b"]({image:new E["a"]({src:t})}),label:n})},makeGeoJSONFillVectorLayer:function(e,t,n,o,a,i){return new I["a"]({source:new D["a"]({format:new N["a"],url:e}),minResolution:t,maxResolution:n,style:new z["b"]({stroke:new V["a"]({color:o,width:a}),fill:new J["a"]({color:i})}),fill:i,fillColor:i})},makeGeoJSONLineVectorLayer:function(e,t,n,o,a){return new I["a"]({source:new D["a"]({format:new N["a"],url:e}),minResolution:t,maxResolution:n,style:new z["b"]({stroke:new V["a"]({color:o,width:a})}),strokeColor:o})},toggleScaleLine:function(){this.asideHidden||window.innerWidth<850?document.querySelector(".ol-scale-line").classList.remove("hidden"):document.querySelector(".ol-scale-line").classList.add("hidden")}}},U=Q,K=Object(y["a"])(U,B,A,!1,null,null,null),X=K.exports,Z=n("a2c7"),Y=n("480c"),ee=n("9c78"),te=n("2ef1"),ne=n("256f"),oe={name:"MapWatershed",extends:X,data:function(){return{centerPoints:{introductionwater:{center:[-120.4,46.1],resolution:700},introductionbio:{center:[-121.2,51],resolution:4500},terminals:{center:[-122.9,45.8],resolution:220},hanford1:{center:[-119.54,46.692],resolution:4},legacy:{center:[-119.529,46.555],resolution:6},floods:{center:[-119.51,46.607574],resolution:50},plumes:{center:[-119.51,46.607574],resolution:50},stopit:{center:[-122.68,45.84],resolution:220},dams:{center:[-119.9,46.9],resolution:700},transformation:{center:[-119.9,46.9],resolution:700}}}},computed:{watershedBaseLayers:function(){return[new Y["a"]({source:new te["a"]({url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"}),opacity:.9,minResolution:2,maxResolution:16e3}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Columbia/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3}),new Y["a"]({source:new te["a"]({url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"}),opacity:.7,minResolution:2,maxResolution:8})]},watershedTerminalsLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([this.makeGeoJSONPointVectorLayer("geojson/stopped.geojson","icons/stop.png",null,2,32e3),this.makeGeoJSONPointVectorLayer("geojson/planned.geojson","icons/stopit.png",null,2,32e3)])},watershedDamsLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([this.makeGeoJSONPointVectorLayer("geojson/Rapids.geojson","icons/Tsagaglalal.png",null,2,32e3)])},watershedDamsTransformationLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([this.makeGeoJSONPointVectorLayer("geojson/MajorHydroCRB.geojson","icons/damOther.png",null,2,32e3),this.makeGeoJSONPointVectorLayer("geojson/Bureau.geojson","icons/damBR.png",null,2,32e3),this.makeGeoJSONPointVectorLayer("geojson/ArmyCorps.geojson","icons/damAC.png",null,2,32e3)])},watershedHanfordLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:160})])},watershedHandfordLegacyLayers:function(){return[new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:80}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Leaks/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:80}),this.makeGeoJSONFillVectorLayer("geojson/HanfordLabels.geojson",1,80,"rgba(60, 20, 20, 0.0)",2,"rgba(255, 255, 0, 0.0)")]},watershedHanfordPlumesLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Hanford/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:80}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Leaks/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:80}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/HanfordPlumes/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:80})])},watershedHanfordFloodsLayers:function(){return Object($["a"])(this.watershedBaseLayers).concat([new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Floods/{z}/{x}/{y}.png"}),opacity:.7,minResolution:2,maxResolution:16e3})])}},created:function(){xe.$on("route-click",this.initMap)},beforeDestroy:function(){xe.$off("route-click",this.initMap)},mounted:function(){this.initMap()},methods:{initMap:function(){var e=this;switch(this.$route.name){case"watershedIntroduction":this.initWatershedIntro();break;case"watershedTerminals":this.initWatershedTerminals();break;case"watershedDams":this.initWatershedDams();break;case"watershedDamsTransformation":this.initWatershedDamsTransformation();break;case"watershedHanford":this.initWatershedHanford();break;case"watershedHanfordLegacy":this.initWatershedHanfordLegacy();break;case"watershedHanfordPlumes":this.initWatershedHanfordPlumes();break;case"watershedHanfordFloods":this.initWatershedHanfordFloods();break;default:this.initWatershedIntro()}this.olmap.on("pointermove",function(t){var n=e.olmap.forEachFeatureAtPixel(t.pixel,function(e){return e});if(n){var o=n.getProperties();o.key&&(e.$refs.titletipContent.innerHTML=o.key,e.titletip.setPosition(t.coordinate))}else e.closeTitletip(),e.closeTooltip()})},initWatershedIntro:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedBaseLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.introductionwater.center),resolution:this.centerPoints.introductionwater.resolution,minResolution:2}))},initWatershedTerminals:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedTerminalsLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.terminals.center),resolution:this.centerPoints.terminals.resolution,minResolution:2}))},initWatershedDams:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedDamsLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.dams.center),resolution:this.centerPoints.dams.resolution,minResolution:2}))},initWatershedDamsTransformation:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedDamsTransformationLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.transformation.center),resolution:this.centerPoints.transformation.resolution,minResolution:2}))},initWatershedHanford:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedHanfordLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.hanford1.center),resolution:this.centerPoints.hanford1.resolution,minResolution:1}))},initWatershedHanfordLegacy:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedHandfordLegacyLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.legacy.center),resolution:this.centerPoints.legacy.resolution,minResolution:1}))},initWatershedHanfordPlumes:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedHanfordPlumesLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.plumes.center),resolution:this.centerPoints.plumes.resolution,minResolution:1}))},initWatershedHanfordFloods:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.watershedHanfordFloodsLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.floods.center),resolution:this.centerPoints.floods.resolution,minResolution:2}))}}},ae=oe,ie=Object(y["a"])(ae,o,a,!1,null,null,null),se=ie.exports,re=n("a226"),ce={name:"MapMegaregion",extends:X,data:function(){return{centerPoints:{introductionmetro:{center:[-122.4,45.564222],resolution:200},energy:{center:[-120.1,47.1],resolution:798},crops:{center:[-119.3,46.5],resolution:900},coulee:{center:[-118.989,47.948],resolution:6},basin:{center:[-119.4,46.9],resolution:300}},radius:300,mousePosition:void 0}},computed:{baseLayers:function(){var e=this,t=new Y["a"]({source:new re["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",function(t){e.spyglass(t)}),t.on("postcompose",function(e){e.context.restore()}),[new Y["a"]({preload:1/0,source:new te["a"]({url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_CityLights_2012/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg"}),minResolution:800}),new Y["a"]({preload:1/0,source:new te["a"]({url:"https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:40,loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0}),new Y["a"]({preload:1/0,source:new te["a"]({url:"https://{a-d}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"}),opacity:1,minResolution:20,maxResolution:799,loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0}),new Y["a"]({source:new te["a"]({url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/Coastlines/default/GoogleMapsCompatible_Level9/{z}/{y}/{x}.png"}),minResolution:200}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/PDX-new/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:1600}),new Y["a"]({title:"OpenRailwayMap",visible:!0,minResolution:40,opacity:1,source:new te["a"]({url:"https://{a-c}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",crossOrigin:null,tilePixelRatio:2,maxZoom:19,opaque:!1,loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0})}),new Y["a"]({minResolution:20,opacity:1,source:new te["a"]({tileUrlFunction:function(t,n,o){var a=t[0],i=t[1],s=-t[2]-1;return"https://t0.tiles.virtualearth.net/tiles/t"+e.computeQuadKey(i,s,a)+".jpg"}}),loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0}),new I["a"]({source:new D["a"]({format:new N["a"],url:"geojson/USmegaregions2.geojson"}),minResolution:1600,maxResolution:8e3,style:new z["b"]({stroke:new V["a"]({width:.5,color:"rgba(255, 255, 255, 0.8)"}),fill:new J["a"]({color:"rgba(255, 255, 255, 0.3)"})})}),t]},energyLayers:function(){return Object($["a"])(this.baseLayers).concat([this.makeGeoJSONPointVectorLayer("geojson/CascadiaHydro2.geojson","icons/dam.png","Hydro power",2,2e3),this.makeGeoJSONPointVectorLayer("geojson/CascadiaNuclear.geojson","icons/nukes.gif","Nuclear power",2,2e3),this.makeGeoJSONPointVectorLayer("geojson/CascadiaWind.geojson","icons/wind.png","Wind Power",2,2e3),this.makeGeoJSONPointVectorLayer("geojson/CascadiaNatGas.geojson","icons/natgas.png","Natural Gas",2,2e3),this.makeGeoJSONPointVectorLayer("geojson/CascadiaCoal.geojson","icons/coal.png","Coal Power",2,2e3)])},cropsLayers:function(){return[new Y["a"]({preload:1/0,source:new te["a"]({url:"https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3,loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Crops/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3})]},grandCouleeLayers:function(){var e=this,t=new Y["a"]({source:new re["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",function(t){e.spyglass(t)}),t.on("postcompose",function(e){e.context.restore()}),[new Y["a"]({preload:1/0,source:new te["a"]({url:"https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:16e3}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Crops/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3}),t]},basinProjectLayers:function(){var e=this,t=new Y["a"]({source:new re["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",function(t){e.spyglass(t)}),t.on("postcompose",function(e){e.context.restore()}),[new Y["a"]({preload:1/0,source:new te["a"]({url:"https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}),opacity:1,minResolution:1,maxResolution:16e3}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/Crops/{z}/{x}/{y}.png"}),opacity:.6,minResolution:2,maxResolution:16e3}),new Y["a"]({preload:1/0,source:new te["a"]({url:"http://ecotopia.today/cascadia/Tiles/CBP/{z}/{x}/{y}.png"}),opacity:1,minResolution:2,maxResolution:16e3}),this.makeGeoJSONFillVectorLayer("geojson/CBP-Crops.geojson",2,80,"rgba(189, 7, 97, 0)",0,"rgba(189, 7, 97, 0)"),t]}},created:function(){xe.$on("route-click",this.initMap)},beforeDestroy:function(){xe.$off("route-click",this.initMap)},mounted:function(){var e=this;this.initMap(),window.addEventListener("keydown",function(t){38===t.keyCode?(e.radius=Math.min(e.radius+5,800),e.olmap.render()):40===t.keyCode&&(e.radius=Math.max(e.radius-5,0),e.olmap.render())}),this.olmap.on("pointermove",function(t){var n=e.olmap.forEachFeatureAtPixel(t.pixel,function(e){return e});if(n){var o=n.getProperties();o.CropGroup&&o.key?(e.$refs.titletipContent.innerHTML=o.key,e.titletip.setPosition(t.coordinate)):o.title&&o.image&&(e.$refs.tooltip.innerHTML=o.image.replace("cascadia/",""),e.$refs.tooltip.innerHTML+="<div>"+o.title+"</div>",e.tooltip.setPosition(t.coordinate))}else e.closeTitletip(),e.closeTooltip();e.mousePosition=e.olmap.getEventPixel(t.originalEvent),e.olmap.render()})},methods:{initMap:function(){switch(this.$route.name){case"megaregionIntroduction":this.initMegaregionIntroduction();break;case"megaregionEnergy":this.initMegaregionEnergy();break;case"megaregionCrops":this.initMegaregionCrops();break;case"megaregionCropsGrandCoulee":this.initmegaregionCropsGrandCoulee();break;case"megaregionCropsBasinProject":this.initmegaregionCropsBasinProject();break;default:}},initMegaregionIntroduction:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.baseLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.introductionmetro.center),resolution:this.centerPoints.introductionmetro.resolution,minResolution:1,maxResolution:16e3}))},initMegaregionEnergy:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.energyLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.energy.center),resolution:this.centerPoints.energy.resolution,minResolution:1,maxResolution:8e3}))},initMegaregionCrops:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.cropsLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.crops.center),resolution:this.centerPoints.crops.resolution,minResolution:2,maxResolution:2e3}))},initmegaregionCropsGrandCoulee:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.grandCouleeLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.coulee.center),resolution:this.centerPoints.coulee.resolution,minResolution:1,maxResolution:2e3}))},initmegaregionCropsBasinProject:function(){this.initBaseMap(),this.olmap.setLayerGroup(new ee["a"]({layers:this.basinProjectLayers})),this.olmap.setView(new Z["a"]({center:Object(ne["c"])(this.centerPoints.basin.center),resolution:this.centerPoints.basin.resolution,minResolution:2,maxResolution:2e3}))},computeQuadKey:function(e,t,n){for(var o=[],a=n;a>0;a--){var i=0,s=1<<a-1;0!==(e&s)&&i++,0!==(t&s)&&(i+=2),o.push(i)}return o.join("")},spyglass:function(e){var t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath(),this.mousePosition&&(t.arc(this.mousePosition[0]*n,this.mousePosition[1]*n,this.radius*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}}},le=ce,ue=Object(y["a"])(le,i,s,!1,null,null,null),de=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"map"}})},he=[],me=n("d0e9"),fe={name:"MapBioregion",data:function(){return{olmap:void 0}},created:function(){xe.$on("route-click",this.initMap)},beforeDestroy:function(){xe.$off("route-click",this.initMap)},mounted:function(){console.log("$route.name:",this.$route.name," $route.params.subitem:",this.$route.params.subitem),this.olmap=new W["a"]({target:"map",layers:[new Y["a"]({source:new me["a"]})],view:new Z["a"]({center:[0,0],zoom:0})})}},ge=fe,we=Object(y["a"])(ge,pe,he,!1,null,null,null),ye=we.exports;r["a"].use(x["a"]);var be=new x["a"]({routes:[{path:"/",redirect:"/watershed/introduction"},{path:"/watershed/introduction",name:"watershedIntroduction",components:{default:S,map:se}},{path:"/watershed/terminals",name:"watershedTerminals",components:{default:function(){return n.e("chunk-60b3").then(n.bind(null,"869f9"))},map:se}},{path:"/watershed/dams",name:"watershedDams",components:{default:function(){return n.e("chunk-0bc4").then(n.bind(null,"e2ad"))},map:se}},{path:"/watershed/dams/transformation",name:"watershedDamsTransformation",components:{default:function(){return n.e("chunk-45b4").then(n.bind(null,"5561"))},map:se}},{path:"/watershed/hanford",name:"watershedHanford",components:{default:function(){return n.e("969e").then(n.bind(null,"969e"))},map:se}},{path:"/watershed/hanford/legacy",name:"watershedHanfordLegacy",components:{default:function(){return n.e("fc1f").then(n.bind(null,"fc1f"))},map:se}},{path:"/watershed/hanford/plumes",name:"watershedHanfordPlumes",components:{default:function(){return n.e("6a51").then(n.bind(null,"6a51"))},map:se}},{path:"/watershed/hanford/floods",name:"watershedHanfordFloods",components:{default:function(){return n.e("8628").then(n.bind(null,"8628"))},map:se}},{path:"/megaregion/introduction",name:"megaregionIntroduction",components:{default:function(){return n.e("chunk-894b").then(n.bind(null,"5e0b"))},map:de}},{path:"/megaregion/energy",name:"megaregionEnergy",components:{default:function(){return n.e("chunk-bc79").then(n.bind(null,"c669"))},map:de}},{path:"/megaregion/crops",name:"megaregionCrops",components:{default:function(){return n.e("chunk-463e").then(n.bind(null,"93bb"))},map:de}},{path:"/megaregion/crops/grandcoulee",name:"megaregionCropsGrandCoulee",components:{default:function(){return n.e("753a").then(n.bind(null,"753a"))},map:de}},{path:"/megaregion/crops/basinproject",name:"megaregionCropsBasinProject",components:{default:function(){return n.e("81d0").then(n.bind(null,"81d0"))},map:de}},{path:"/bioregion/introduction",name:"bioregion",components:{default:function(){return n.e("chunk-4d5f").then(n.bind(null,"94ef"))},map:ye}}]});r["a"].use(h["a"]);var ve={asideHidden:!1},ke={toggle:function(e){console.log("store toggle!!"),e.asideHidden=!e.asideHidden}},Le={toggle:function(e){e.commit("toggle")}},Ce={asideHidden:function(e){return e.asideHidden}},_e=new h["a"].Store({state:ve,getters:Ce,actions:Le,mutations:ke});n.d(t,"eventBus",function(){return xe}),r["a"].use(l.a),r["a"].config.productionTip=!1;var xe=new r["a"];new r["a"]({router:be,store:_e,render:function(e){return e(_)}}).$mount("#app")},"9c0a":function(e,t,n){},a347:function(e,t,n){},acc8:function(e,t,n){},b022:function(e,t,n){"use strict";var o=n("9c0a"),a=n.n(o);a.a},b059:function(e,t,n){},b428:function(e,t,n){"use strict";var o=n("b60b"),a=n.n(o);a.a},b60b:function(e,t,n){},bfe4:function(e,t,n){"use strict";var o=n("acc8"),a=n.n(o);a.a},c1a1:function(e,t,n){},d54e:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{ref:"accordion",class:e.accordionClasses},[n("div",{staticClass:"heading",on:{click:e.toggleAccordion}},[e.isOpen?n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")]):n("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")]),n("span",{staticClass:"headingText"},[e._t("header")],2)]),n("div",{staticClass:"body"},[n("div",{staticClass:"content"},[e._t("default")],2)])])},a=[],i=(n("cadf"),n("551c"),{name:"Accordion",props:{open:Boolean},data:function(){return{isOpen:this.open}},computed:{accordionClasses:function(){return{"is-closed":!this.isOpen}}},methods:{toggleAccordion:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$refs.accordion.offsetTop>window.innerHeight&&setTimeout(function(){e.$refs.accordion.scrollIntoView()},500)}}}),s=i,r=(n("b022"),n("2877")),c=Object(r["a"])(s,o,a,!1,null,"97997bfe",null);t["a"]=c.exports},e711:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"link",on:{click:e.open}},[e._t("default")],2),e.isOpen?n("LightBox",{attrs:{images:e.images,showCaption:!0},on:{onOpened:e.onOpenChange}}):e._e()],1)},a=[],i=(n("cadf"),n("551c"),n("1c09")),s=n.n(i),r={name:"AppLightBox",components:{LightBox:s.a},props:{images:Array},data:function(){return{isOpen:!1}},methods:{open:function(){this.isOpen=!0},onOpenChange:function(e){this.isOpen=e}}},c=r,l=(n("2352"),n("2877")),u=Object(l["a"])(c,o,a,!1,null,"5cc4adc2",null);t["a"]=u.exports}});
//# sourceMappingURL=app.20723159.js.map