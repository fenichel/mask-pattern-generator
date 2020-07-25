(this["webpackJsonpmask-pattern-2"]=this["webpackJsonpmask-pattern-2"]||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/face-points-lines-labels.c6ac9eee.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/face_mask_earloop.7ac6b580.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/face_mask_laces.e6748e96.jpg"},45:function(e,t,n){e.exports=n(57)},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),r=n.n(i),s=(n(50),n(51),n(52),n(44)),l=n(22),h=n(36),c=n(5),u=n(6),m=n(14),p=n(8),d=n(7),b=n(12),g=n(13),f=n(9),y=n(37),E=n(34),v={cm:.1,in:.01},T=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.props.onValueChange(e)}},{key:"render",value:function(){var e=v[this.props.unit]||1;return o.a.createElement(b.a.Group,{as:g.a,controlId:this.props.id},o.a.createElement(f.a,{md:"5"},o.a.createElement(b.a.Label,{className:"labelText",size:"sm"},this.props.label)),o.a.createElement(f.a,{md:"6"},o.a.createElement(E.a,{size:"sm"},o.a.createElement(b.a.Control,{type:"number",placeholder:this.props.label,step:e,value:this.props.val,onChange:this.handleChange,name:this.props.id}),o.a.createElement(E.a.Append,null,o.a.createElement(E.a.Text,null,this.props.unit)))))}}]),n}(o.a.Component),k=n(40),C=n.n(k),j=n(41),w=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("g",null,o.a.createElement("line",{x1:"-25",y1:"-30",x2:"25",y2:"-30",stroke:"black",fill:"none",strokeWidth:".5px"}),o.a.createElement("text",{x:"-25",y:"-35",fontSize:"4px",fontFamily:"sans-serif"},"This line should be 5 cm (2 inches) long when printed"))}}]),n}(o.a.Component);function O(){var e=document.getElementById("maskPattern").cloneNode(!0);e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("style","background-color: transparent");var t=[].slice.call(document.head.querySelectorAll("style")).filter((function(e){return/\.patternSvg/.test(e.innerText)})).map((function(e){return e.innerText})).join("\n"),n=document.createElement("style");return n.innerHTML=t,e.insertBefore(n,e.firstChild),e}function x(e){return e*Math.PI/180}function P(e,t){return Math.cos(e)*t}function N(e,t){return Math.sin(e)*t}var M=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("polyline",{points:this.props.points,stroke:"black",fill:"none",strokeWidth:".5px"}))}}]),n}(o.a.Component),I={noseToChin:"Nose to chin",earHeight:"Ear height",earToBridge:"Ear to nose bridge",earToNose:"Ear to nose tip",bridgeToTip:"Nose bridge to nose tip"},B=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).makeInfo=function(){var e=[];for(var t in I)e.push(I[t]+": "+this.props.vals[t]+" mm");return e},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("g",{transform:"translate(20,15)",fontSize:"3px",fontFamily:"sans-serif"},o.a.createElement("text",{fontSize:"4px",y:"-5"},this.props.vals.patternName),this.makeInfo().map((function(e,t){return o.a.createElement("text",{key:t,y:4*t},e)}))))}}]),n}(o.a.Component),A=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setDimensions(e),a.earToNoseRiseAngle=x(5),a.noseChinAngle=x(90),a.tabWidth=25,a.chinThroatAngle=x(10),a.download=a.download.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"download",value:function(){C()(O(),!1,this.props.patternName+".svg")}},{key:"setEarTop",value:function(){this.earTop={x:0,y:0,label:"Ear top"}}},{key:"setEarBottom",value:function(){this.earBottom={x:0,y:this.props.earHeight,label:"Ear bottom"}}},{key:"setBridgePoint",value:function(){var e=function(e,t,n){var a=t*t+n*n-e*e,o=2*t*n;return Math.acos(a/o)}(this.props.bridgeToTip,this.props.earToBridge,this.props.earToNose)+this.earToNoseRiseAngle;this.bridgePoint={x:P(e,this.props.earToBridge),y:-N(e,this.props.earToBridge),label:"Bridge of nose"}}},{key:"setNoseTipPoint",value:function(){this.nosePoint={x:P(this.earToNoseRiseAngle,this.props.earToNose),y:-N(this.earToNoseRiseAngle,this.props.earToNose),label:"Tip of nose"}}},{key:"roundChin",value:function(){this.aboveChin={x:this.chinPoint.x+P(this.noseChinAngle,20),y:this.chinPoint.y-N(this.noseChinAngle,20),label:"c"},this.belowChin={x:this.chinPoint.x-P(this.chinThroatAngle,20),y:this.chinPoint.y+N(this.chinThroatAngle,20),label:"d"}}},{key:"roundNose",value:function(){var e=this.nosePoint.y-this.bridgePoint.y,t=this.nosePoint.x-this.bridgePoint.x,n=Math.atan(e/t);this.aboveNose={x:this.nosePoint.x-P(n,5),y:this.nosePoint.y-N(n,5),label:"a"},this.belowNose={x:this.nosePoint.x-P(this.noseChinAngle,5),y:this.nosePoint.y+N(this.noseChinAngle,5),label:"b"}}},{key:"setChinPoint",value:function(){this.chinPoint={x:this.nosePoint.x-P(this.noseChinAngle,this.props.noseToChin+12),y:this.nosePoint.y+N(this.noseChinAngle,this.props.noseToChin+12),label:"Point of chin"}}},{key:"setThroatPoint",value:function(){var e=this.chinPoint.x-P(this.chinThroatAngle,31),t=this.chinPoint.y+N(this.chinThroatAngle,31);this.throatPoint={x:e,y:t,label:"Throat"}}},{key:"setTabPoints",value:function(){this.tabTop={x:-this.tabWidth,y:this.earTop.y,label:"Tab top"},this.tabBottom={x:-this.tabWidth,y:this.earBottom.y,label:"Tab bottom"}}},{key:"setDimensions",value:function(){this.setEarTop(),this.setEarBottom(),this.setBridgePoint(),this.setNoseTipPoint(),this.setChinPoint(),this.setThroatPoint(),this.setTabPoints(),this.roundChin(),this.roundNose()}},{key:"getOutlinePoints",value:function(){var e=[this.earTop,this.tabTop,this.tabBottom,this.earBottom,this.throatPoint],t=[];return e.forEach((function(e){return t.push(e.x,e.y)})),t}},{key:"getLabelPoints",value:function(){return[this.earTop,this.tabTop,this.earBottom,this.tabBottom,this.bridgePoint,this.aboveNose,this.belowNose,this.throatPoint,this.aboveChin,this.belowChin]}},{key:"getFrontCurvePath",value:function(){var e=[this.aboveNose,this.nosePoint,{x:this.nosePoint.x+10,y:this.nosePoint.y+(this.chinPoint.y-this.nosePoint.y)/4},{x:this.nosePoint.x,y:this.nosePoint.y+3*(this.chinPoint.y-this.nosePoint.y)/4},this.belowChin,this.throatPoint,this.throatPoint],t="";return e.forEach((function(e){t+=e.x+" "+e.y+" "})),"m "+this.bridgePoint.x+" "+this.bridgePoint.y+" Q "+t}},{key:"getUpperCurvePath",value:function(){var e=(this.bridgePoint.x-this.earTop.x)/3,t=.8*(this.bridgePoint.y-this.earTop.y),n=[{x:this.bridgePoint.x-e,y:this.bridgePoint.y-t},this.bridgePoint,this.bridgePoint],a="";return n.forEach((function(e){a+=e.x+" "+e.y+" "})),"m "+this.earTop.x+" "+this.earTop.y+" Q "+a}},{key:"render",value:function(){return this.setDimensions(this.props),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"downloadButton"},o.a.createElement(j.a,{onClick:this.download},"Download pattern")),o.a.createElement(g.a,null,o.a.createElement("svg",{width:"300mm",height:"300mm",viewBox:"-50 -55 250 245",id:"maskPattern"},o.a.createElement(w,null),o.a.createElement(B,{vals:this.props}),o.a.createElement("g",{transform:"translate(0, 0)"},o.a.createElement(M,{points:this.getOutlinePoints()}),o.a.createElement("line",{x1:this.earTop.x,y1:this.earTop.y,x2:this.earBottom.x,y2:this.earBottom.y,strokeDasharray:"4",stroke:"black",strokeWidth:".5px"}),o.a.createElement("path",{d:this.getFrontCurvePath(),fill:"none",stroke:"black",strokeWidth:".5px"}),o.a.createElement("path",{d:this.getUpperCurvePath(),fill:"none",stroke:"black",strokeWidth:".5px"}))))))}}]),n}(o.a.Component),F=n(25),S=n.n(F),L=n(26),W=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.props.onValueChange(e)}},{key:"render",value:function(){return o.a.createElement(b.a.Group,{as:g.a,controlId:this.props.id},o.a.createElement(f.a,{md:"5"},o.a.createElement(b.a.Label,{className:"labelText",size:"sm"},this.props.label)),o.a.createElement(f.a,{md:"6"},o.a.createElement(b.a.Control,{type:"text",placeholder:this.props.label,value:this.props.val,onChange:this.handleChange,name:this.props.id,size:"sm"})))}}]),n}(o.a.Component),D=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.props.onValueChange(e)}},{key:"render",value:function(){return o.a.createElement(b.a.Group,{as:g.a},o.a.createElement(f.a,{md:"5"},o.a.createElement(b.a.Label,{className:"labelText"},this.props.label)),o.a.createElement(f.a,{md:"6"},o.a.createElement(b.a.Control,{as:"select",onChange:this.handleChange,name:this.props.id},"  ",this.props.options.map((function(e){return o.a.createElement("option",{key:e[1],value:e[1]},e[0])})))))}}]),n}(o.a.Component),H={noseToChin:95,earHeight:45,earToNose:115,earToThroat:90,bridgeToTip:30,earToBridge:110,chinToThroat:55},V={mm:function(e){return Math.round(e)},cm:function(e){return Math.round(e)/10},in:function(e){return Math.round(100*e/25.4)/100}},z={mm:function(e){return e},cm:function(e){return 10*e},in:function(e){return 25.4*e}};var K=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state=function(){var e={unit:"mm",patternName:"Your name here",showLabels:!1};return Object.keys(H).forEach((function(t){var n=H[t];e[t]=n,e[t+"InMM"]=n})),e}(),a.handleInputChange=a.handleInputChange.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"handleInputChange",value:function(e){var t=this,n=e.target,a=n.name;if("unit"===a){var o=n.value,i={unit:o};Object.keys(H).forEach((function(e){i[e]=V[o](t.state[e+"InMM"])})),this.setState(i)}else if("patternName"===a)this.setState({patternName:n.value});else if("showLabels"===a)console.log("show labels: "+n.value),this.setState({showLabels:n.checked});else{var r,s=parseFloat(n.value),l=z[this.state.unit](s);this.setState((r={},Object(h.a)(r,a,s),Object(h.a)(r,a+"InMM",l),r))}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{fluid:!0},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(L.a,{src:S.a,width:200})),o.a.createElement(f.a,{as:b.a,md:7,lg:8},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(W,{id:"patternName",label:"Name",val:this.state.patternName,onValueChange:this.handleInputChange})),o.a.createElement(f.a,null,o.a.createElement(D,{id:"unit",label:"Units",options:[["mm","mm"],["cm","cm"],["inches","in"]],onValueChange:this.handleInputChange}))),o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(T,{id:"noseToChin",label:"Nose to chin with mouth open to talk (C to D)",unit:this.state.unit,val:this.state.noseToChin,onValueChange:this.handleInputChange}),o.a.createElement(T,{id:"earHeight",label:"Ear height (A to E)",unit:this.state.unit,val:this.state.earHeight,onValueChange:this.handleInputChange}),o.a.createElement(T,{id:"earToBridge",label:"Ear top to nose bridge (A to B)",unit:this.state.unit,val:this.state.earToBridge,onValueChange:this.handleInputChange})),o.a.createElement(f.a,null,o.a.createElement(T,{id:"earToNose",label:"Ear top to nose tip (A to C)",unit:this.state.unit,val:this.state.earToNose,onValueChange:this.handleInputChange}),o.a.createElement(T,{id:"bridgeToTip",label:"Nose bridge to nose tip (B to C)",unit:this.state.unit,val:this.state.bridgeToTip,onValueChange:this.handleInputChange})))))),o.a.createElement(y.a,null,o.a.createElement(A,{patternName:this.state.patternName,noseToChin:Math.ceil(this.state.noseToChinInMM),earHeight:Math.ceil(this.state.earHeightInMM),earToNose:Math.ceil(this.state.earToNoseInMM),earToThroat:Math.ceil(this.state.earToThroatInMM),bridgeToTip:Math.ceil(this.state.bridgeToTipInMM),earToBridge:Math.ceil(this.state.earToBridgeInMM),chinToThroat:Math.ceil(this.state.chinToThroatInMM),showLabels:this.state.showLabels})))}}]),n}(o.a.Component),R=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Create your pattern"),o.a.createElement("p",null,"Measure your face and use the Create Pattern tab to create and download your pattern."),o.a.createElement("p",null,"Open your pattern with a browser and print it."),o.a.createElement("p",null,"Use a ruler to check that the line at the top left is 5 cm long."),o.a.createElement("p",null,"If it's the wrong length, adjust your print settings until the line is the correct length."),o.a.createElement("h2",null,"Cutting and sewing"),o.a.createElement("p",null,"Follow the instructions in ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=KBR98YKAr7w&list=WL"},"this excellent video")," to make your mask."),o.a.createElement("p",null,"To cut the lining fabric, cut along the dashed line at the ear.  Cut on the solid line for the main fabric."))}}]),n}(o.a.Component),U=n(21),G=n(11),_=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(G.a.Item,{justify:"center"},o.a.createElement(U.a,null,o.a.createElement(U.a.Image,{src:this.props.imgSrc,width:500,height:500,fluid:!0}),o.a.createElement(U.a.Caption,null,this.props.caption)))}}]),n}(o.a.Component),q=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(G.a,{horizontal:!0},o.a.createElement(G.a.Item,null,this.props.itemName),o.a.createElement(G.a.Item,null,this.props.description))}}]),n}(o.a.Component),J=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{variant:"flush"},o.a.createElement(G.a.Item,null,"To size your mask you will measure the distances between a few points on your face."),o.a.createElement(q,{itemName:"A",description:"The top of your ear"}),o.a.createElement(q,{itemName:"B",description:"The bridge of your nose"}),o.a.createElement(q,{itemName:"C",description:"The tip of your nose"}),o.a.createElement(q,{itemName:"D",description:"The point of your chin"}),o.a.createElement(q,{itemName:"E",description:"The bottom of your ear, just above the end of your jawbone"}),o.a.createElement(_,{imgSrc:S.a,caption:"The points and lines you will measure."}),o.a.createElement(G.a.Item,null,"To make these measurements, you need a string and a ruler."),o.a.createElement(G.a.Item,null,"Start by cutting a piece of string about six inches long and tying a knot at one end."),o.a.createElement(G.a.Item,null,"To measure a single line, place the knot at the start point on your face and hold it in place with a finger."),o.a.createElement(G.a.Item,null,"Use your other hand to pull the string to the end point."),o.a.createElement(G.a.Item,null,"Mark the end point by pinching the string with your fingers."),o.a.createElement(G.a.Item,null,"Keeping the end point pinched, lay the string along the ruler to measure the length from the knot to the end point."),o.a.createElement(q,{itemName:"A to B",description:"The top of your ear to the bridge of your nose, following your cheekbone. For the bridge of the nose, use the point where you want the top of the mask to sit on your nose."}),o.a.createElement(q,{itemName:"A to C",description:"The top of your ear to the point of your nose."}),o.a.createElement(q,{itemName:"B to C",description:"The bridge of your nose to the point of your nose."}),o.a.createElement(q,{itemName:"C to D",description:"The point of your nose to the tip of your chin. Measure this with your mouth open, as though you were talking."}),o.a.createElement(q,{itemName:"A to E",description:"The top of your ear to the bottom of your ear, measured directly in front your ear."})))}}]),n}(o.a.Component),Y=n(42),Q=n.n(Y),$=n(43),X=n.n($),Z=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(U.a,null,o.a.createElement("h1",null,"Custom Mask Pattern Generator"),o.a.createElement("p",null,"This is a utility for generating sewing patterns for custom masks, based on the dimensions of your face."),o.a.createElement("p",null,"My goals for the pattern are:"),o.a.createElement("ul",null,o.a.createElement("li",null,"The mask stays up when you talk."),o.a.createElement("li",null,"The mask has minimal bulk in front of your mouth."),o.a.createElement("li",null,"The mask fits snugly, with no gaping at the nose, chin, or ears.")),o.a.createElement("p",null,"I'm still iterating on the pattern and trying to dial in my math--if it doesn't fit right on you, please let me know and/or come back in a week to try again."),o.a.createElement("p",null,"Use the tabs at the top of the page to navigate."),o.a.createElement("img",{src:Q.a,height:"500",alt:"Our model wearing a face mask with elastic earloops."}),o.a.createElement("img",{src:X.a,height:"500",alt:"Our model wearing a face mask with laces behind the neck and over the top of the head."}),o.a.createElement("p",null,"Made by Rachel Fenichel. Last updated July 25 2020."))}}]),n}(o.a.Component),ee=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"feedbackText"},"Do you have suggestions for improving this tool? Have you found a bug in my math? Do you think my math checks out but my assumptions are wrong? "),o.a.createElement("p",{className:"feedbackText"},"Fill out the ",o.a.createElement("a",{href:"https://forms.gle/maSWbYPFmoq8v5DE7"},"feedback form"),", or head over to ",o.a.createElement("a",{href:"https://github.com/fenichel/mask-pattern-generator/issues"},"my GitHub repo")," to file issues or make pull requests."))}}]),n}(o.a.Component);var te=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,{defaultActiveKey:"introduction",id:"navtabs",transition:!1},o.a.createElement(l.a,{eventKey:"introduction",title:"Introduction"},o.a.createElement(Z,null)),o.a.createElement(l.a,{eventKey:"measuring",title:"Measurement instructions"},o.a.createElement(J,null)),o.a.createElement(l.a,{eventKey:"createPattern",title:"Create Pattern"},o.a.createElement(K,null)),o.a.createElement(l.a,{eventKey:"sewing",title:"Sewing instructions"},o.a.createElement(R,null))),o.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.58921113.chunk.js.map