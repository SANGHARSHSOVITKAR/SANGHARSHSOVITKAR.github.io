(this["webpackJsonpjira-app"]=this["webpackJsonpjira-app"]||[]).push([[0],{176:function(e,t,n){e.exports=n(360)},181:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),i=n.n(o),s=(n(181),n(7)),c=n(8),l=n(11),u=n(10),p=n(12),m=(n(63),n(21)),d=n.n(m),g=n(46),h=window.require("request"),f=function(){var e=Object(g.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){var r={method:"GET",url:"https://mitrmedia.atlassian.net/rest/api/3/issue/createmeta",headers:{"cache-control":"no-cache",authorization:"Basic ".concat(t),"content-type":"application/json"},json:!0};h(r,(function(t,a,r){if(t)throw new Error(t);return n&&n(r),e(r)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(36),v=n(9),w=n(85),b=n(148),S=n(155),E=n(152),x=n(153);n(169);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.outerBoxPadding;return r.a.createElement(b.a,{style:{width:"335px",justifyContent:"center",padding:e}},this.props.subHeading&&r.a.createElement("div",null," ",r.a.createElement("h4",null,r.a.createElement("u",{style:{color:"black",textDecoration:"unset",fontSize:"22px",fontWeight:"bold"}},this.props.subHeading))),r.a.createElement(S.a,{style:{width:"98%",height:"98%",marginBottom:"0px"}},this.props.Header,r.a.createElement(E.a,{style:{color:"black",fontWeight:"normal",fontSize:"13px"}},r.a.createElement(x.a,null,this.props.children))))}}]),t}(a.Component),P=function(e){return r.a.createElement(w.a,{id:"submit",onClick:e.onClick,style:k({},e.style,{backgroundColor:"#0062cc",fontSize:"12px"})},e.name)},C=O,A=function(e){var t=e.h1,n=e.h2;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("h3",null,r.a.createElement("u",{style:{color:"black",fontWeight:"bold",textDecoration:"unset",fontSize:"35px"}},t)),n&&r.a.createElement("h4",null,r.a.createElement("u",{style:{color:"black",textDecoration:"unset",fontSize:"22px",fontWeight:"bold"}},n)))};n(356);window.AutoLogin=function(){};var D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).autoLogin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mitrqa1@mitrlearning.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"UrgDR5P082cMfsva3Ro46C64";n.setState({name:e,password:t},(function(){var e=n.convertBtoa();localStorage.setItem("AuthorizationToken","Basic ".concat(e)),f(e,(function(e){e.projects&&e.projects.length>0&&(Object.assign(n.props.history,{projectList:e}),n.setState({isAuthorizedUser:!0}))}))}))},n.handleValidSubmit=function(e,t){e.preventDefault(),n.setState({name:t.email,password:t.password},(function(){var e=n.convertBtoa();localStorage.setItem("AuthorizationToken","Basic ".concat(e)),f(e,(function(e){e.projects&&e.projects.length>0&&(Object.assign(n.props.history,{projectList:e}),n.setState({isAuthorizedUser:!0}))}))})),console.log("Login Successful",t)},n.handleInvalidSubmit=function(e,t,a){n.setState({email:a.email,error:!0}),console.log("Login failed")},n.convertBtoa=function(){var e=n.state,t=e.name,a=e.password;console.log(t,"name",a,"password");var r="".concat(t,":").concat(a),o=encodeURIComponent(r).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)}));return btoa(o)},n.state={email:!1,isAuthorizedUser:!1,name:"",password:""},window.AutoLogin=n.autoLogin,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isAuthorizedUser&&this.props.history.push("/ReportIssue"),r.a.createElement(C,{Header:r.a.createElement(A,{h1:"MITR",h2:"JIRA Issue Logger"}),outerBoxPadding:"54px 15px"},r.a.createElement("div",{style:{justifyContent:"center",padding:"0 22px 0 22px",width:"100%",height:"100%"}},r.a.createElement(y.AvForm,{onValidSubmit:this.handleValidSubmit,onInvalidSubmit:this.handleInvalidSubmit},r.a.createElement("div",{className:"form-group",style:{fontSize:"12px",justifyContent:"center",display:"flex"}},r.a.createElement("div",{style:{width:"20%"}},r.a.createElement("span",{className:"input-group-addon",style:{border:"1px solid lightgrey"}},r.a.createElement("i",{className:"glyphicon glyphicon-user","aria-hidden":"true"}))),r.a.createElement("div",{style:{width:"80%"}},r.a.createElement(y.AvField,{style:{fontSize:"inherit",height:"30px"},name:"email",type:"text",className:"form-control",placeholder:"Username",validate:{required:!0,email:!0}}))),r.a.createElement("div",{className:"form-group",style:{fontSize:"12px",justifyContent:"center",display:"flex"}},r.a.createElement("div",{style:{width:"20%"}},r.a.createElement("span",{className:"input-group-addon",style:{border:"1px solid lightgrey"}},r.a.createElement("i",{className:"glyphicon glyphicon-lock","aria-hidden":"true"}))),r.a.createElement("div",{style:{width:"80%"}},r.a.createElement(y.AvField,{style:{fontSize:"inherit",height:"30px"},name:"password",placeholder:"Password",className:"form-control",type:"password",validate:{required:{value:!0,errorMessage:"Please enter your password"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Your password must be composed only with letter and numbers"},minLength:{value:6,errorMessage:"Your password must be between 6 and 16 characters"},maxLength:{value:50,errorMessage:"Your password must be between 6 and 16 characters"}}}))),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(P,{name:"Login"})))," "))}}]),t}(a.Component),R=n(154),N=(n(357),{severity:"customfield_10604",category:"customfield_11101",platforms:"customfield_11200",found_during:"customfield_11300",rounds:"customfield_11301",testers:"customfield_11700",slides:"customfield_10800",page_no:"customfield_11820"}),T=window.require("fs"),I=window.require("request"),B=localStorage.getItem("AuthorizationToken"),z=function(){var e=Object(g.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){var r={method:"GET",url:"https://mitrmedia.atlassian.net/rest/api/3/project/".concat(t,"/components"),headers:{"cache-control":"no-cache",authorization:B,"content-type":"application/json"},json:!0};I(r,(function(t,a,r){if(t)throw new Error(t);return n&&n(r),e(r)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){var r={method:"GET",url:"https://mitrmedia.atlassian.net/rest/api/3/project/".concat(t,"/versions"),headers:{"cache-control":"no-cache",authorization:B,"content-type":"application/json"},json:!0};I(r,(function(t,a,r){if(t)throw new Error(t);return n&&n(r),e(r)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){I({method:"GET",url:"https://mitrmedia.atlassian.net/rest/api/3/issue/createmeta",qs:{projectKeys:t,expand:"projects.issuetypes.fields"},headers:{"cache-control":"no-cache",authorization:B,"content-type":"application/json"},json:!0},(function(t,a,r){if(t)throw new Error(t);var o=r.projects&&r.projects.length>0&&r.projects[0].issuetypes&&r.projects[0].issuetypes.length>0&&r.projects[0].issuetypes[0].fields;return n&&n(o),e(r)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(g.a)(d.a.mark((function e(t,n,a){var r,o,i,s,c,l,u,p,m,g,h,f,y,w,b,S;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.summary,o=n.desc,i=n.severity,s=n.issueType,c=n.selectedSlide,l=n.pageNo,u=void 0===l?"":l,p=t.key,m=t.components,g=t.phase,h=t.round,f=t.platforms,y=t.foundDuring,w=t.tester,b=t.category,S=void 0===b?"":b,e.next=4,new Promise((function(e,t){var n,l={fields:(n={summary:r,issuetype:{name:s},project:{key:p},description:{type:"doc",version:1,content:[{type:"paragraph",content:[{text:o,type:"text"}]}]}},Object(v.a)(n,N.severity,{value:i}),Object(v.a)(n,N.rounds,{value:h}),Object(v.a)(n,N.platforms,f.map((function(e){return{value:e}}))),Object(v.a)(n,N.found_during,{value:y}),Object(v.a)(n,N.testers,{value:w}),Object(v.a)(n,"versions",[{name:g}]),Object(v.a)(n,"components",m.map((function(e){return{name:e}}))),n)};["None",""].includes(c.toString())||(l.fields[N.slides]=[{value:c}]),""!==S&&(l.fields[N.category]={value:S}),""!==u&&(l.fields[N.page_no]=u),I({method:"POST",url:"https://mitrmedia.atlassian.net/rest/api/3/issue/",headers:{"cache-control":"no-cache",authorization:B,"content-type":"application/json",accept:"application/json"},body:l,json:!0},(function(t,n,r){if(t)throw new Error(t);return a&&a(r),e(r)}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){var a=T.createReadStream("./image.png"),r={method:"POST",url:"https://mitrmedia.atlassian.net/rest/api/3/issue/".concat(t,"/attachments"),headers:{"cache-control":"no-cache","x-atlassian-token":"no-check",authorization:B,"content-type":"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"},formData:{file:{value:a,options:{filename:"attachmentImage.png",contentType:null}}}};I(r,(function(t,n,a){if(t)throw new Error(t);return e(a)}))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=window.require("fs"),M=window.require("electron").shell,Y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.history.issueDetails;return r.a.createElement(C,{Header:r.a.createElement(A,{h2:"Thank you ",outerBoxPadding:"0px"})},r.a.createElement(y.AvForm,null,r.a.createElement("div",{style:{fontSize:"15px"}},r.a.createElement("p",{style:{fontWeight:"bold"}},"The issue has been logged in jira"),r.a.createElement("p",null,"if you wish to change something in ticket, please click below link."),r.a.createElement("p",null,t&&r.a.createElement(w.a,{style:{fontSize:"15px",background:"none",border:"0",color:"blue",textDecoration:"underline"},onClick:function(){return M.openExternal("https://mitrmedia.atlassian.net/browse/"+t.key)}},t.key))),r.a.createElement(P,{onClick:function(){W.existsSync("./image.png")&&W.unlink("./image.png",(function(e){e&&console.error(e)})),e.props.onBackPage()},name:"Report Another Issue"})))}}]),t}(a.Component),V=window.require("fs"),U="./image.png",X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={severity:"",issueType:"",summary:"",desc:"",isSubmit:!1,ticketID:"",isShowScreenShotPage:!1,pageNo:"",selectedSlide:"",isShowFeedBackPage:!1},n.onSubmitIssue=function(e){var t=n.state,a=t.severity,r=t.issueType,o=t.summary,i=t.desc,s=t.imgSrc,c=t.selectedSlide,l=t.pageNo;if(e===s&&n.setState({imgSrc:s}),n.setState({isSubmit:!0}),""!==a&&""!==r&&""!==o&&""!==i&&(""!==c||""!==l)){q(n.props.history.projectDetails,{summary:o,desc:i,severity:a,issueType:r,selectedSlide:c,pageNo:l},(function(e){V.existsSync("./image.png")&&_(e.key,n.props.imageBase64Data),Object.assign(n.props.history,{issueDetails:e}),n.props.setScreenShotImage(""),n.setState({isShowFeedBackPage:!0})}))}},n.showSummaryPage=function(){var e=n.props.history.projectDetails,t=e.severityArray,a=e.slideNos,o=e.page_no,i=n.state,s=i.severity,c=i.issueType,l=i.summary,u=i.desc,p=i.isSubmit,m=i.pageNo,d=i.selectedSlide;return r.a.createElement(C,{Header:r.a.createElement(A,{h2:"Creating Issue"})},r.a.createElement(y.AvForm,null,r.a.createElement("div",{style:{fontSize:"10px"}},""===l&&p&&r.a.createElement("span",{className:"issue-alert"},"Please enter summary"),r.a.createElement(R.a,{type:"text",name:"text",id:"exampleText",placeholder:"Summary",onChange:function(e){return n.setState({summary:e.target.value})}}),""===u&&p&&r.a.createElement("span",{className:"issue-alert"},"Please select description"),r.a.createElement(R.a,{type:"textarea",placeholder:"Description",name:"text",id:"exampleTextAria",onChange:function(e){return n.setState({desc:e.target.value})}}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"issue-alert"},""===m&&p&&"Please enter page number"),r.a.createElement(R.a,{type:"textarea",placeholder:"Page no.",name:"text",id:"exampleText",onChange:function(e){return n.setState({pageNo:e.target.value})}})),r.a.createElement("div",{className:"optionWrapper"},r.a.createElement("div",{style:{width:"100%",marginRight:"5px"}},""===s&&p&&r.a.createElement("span",{className:"issue-alert"},"Please select description"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({severity:e.target.value})}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Severity"),t&&t.map((function(e,t){return r.a.createElement("option",{id:t,key:t},e)})))),!o&&r.a.createElement("div",{style:{width:"100%",marginRight:"5px"}},""===d&&p&&r.a.createElement("span",{className:"issue-alert"},"Please select Slide Nos"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({selectedSlide:e.target.value})}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Slide Nos."),r.a.createElement("option",{id:-1,key:-1,value:"None"},"None"),a&&a.map((function(e,t){return r.a.createElement("option",{id:t,key:t},e)})))),r.a.createElement("div",{style:{width:"100%",marginLeft:"5px"}},""===c&&p&&r.a.createElement("span",{className:"issue-alert"},"Please select description"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({issueType:e.target.value})}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Issue Type"),["Bug","Improvement"].map((function(e,t){return r.a.createElement("option",{key:t,id:t},e)})))))),V.existsSync(U)&&r.a.createElement("div",{style:{backgroundColor:"#f5f5f5",border:"1px solid transparent",fontWeight:"normal",width:"100%",marginBottom:"5px",textAlign:"left",color:"grey"}},r.a.createElement("span",null," ","image.png"),r.a.createElement("button",{style:{float:"right",border:"0",background:"border-box"},onClick:function(){V.existsSync("./image.png")&&V.unlink("./image.png",(function(e){})),n.props.setScreenShotImage("")}},r.a.createElement("i",{style:{color:"palevioletred"},class:"glyphicon glyphicon-trash"}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"30px"}},r.a.createElement(P,{style:{marginRight:"20px"},name:" Take Snapshot",id:"submit",type:"submit",onClick:function(){n.props.toggleScreenShotPage()}}),r.a.createElement(P,{style:{marginLeft:"20px"},name:"Create Issue",id:"submit",type:"submit",onClick:n.onSubmitIssue}))),r.a.createElement("div",{style:{textDecoration:"underline",color:"blue",fontSize:"12px",marginTop:"23px",float:"left",cursor:"pointer"},onClick:function(){n.props.onPageBack()}}," ","  <- Back to Project Info"))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isShowFeedBackPage;return console.log("sangharsh"),t?r.a.createElement(Y,{history:this.props.history,onBackPage:function(){e.setState({isShowFeedBackPage:!1})}}):this.showSummaryPage()}}]),t}(a.Component),H=n(173),G=n(45),J=n(3),K=n(22),Z=window.require("screenshot-desktop"),$=window.require("electron").remote;function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=["white","red","green","blue","yellow"],ne=window.require("fs"),ae=(window.require("request"),{Width:800,height:500}),re=.5,oe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={bounds:ee({},ae),cropBounds:{width:0,height:0,x:0,y:0},textPosition:{x:0,y:0},text:"",windowSize:{width:0,height:0},zoom:0,color:"red"},n.textEditor=function(e){n.stage.addEventListener("pressup",n.enableTextEditor)},n.cropImageFunction=function(){n.stage.alpha=.3,n.stage.addEventListener("mousedown",n.enableCropSection),n.stage.addEventListener("pressmove",n.dragCropArea),n.stage.addEventListener("pressup",n.setCropImage)},n.enableTextEditor=function(e){n.setState({textPosition:{x:e.stageX,y:e.stageY}}),n.title?n.writeTextOnCanvas():n.createTextField()},n.createTextField=function(){n.title=document.createElement("input"),n.title.style.position="absolute",n.title.type="text",n.title.addEventListener("keyup",(function(e){13===e.keyCode&&n.writeTextOnCanvas(),n.setState({text:e.target.value})}));var e=n.state.textPosition,t=e.x,a=e.y;n.title.style.top="".concat(a,"px"),n.title.style.left="".concat(t,"px"),n.title.style.color=n.state.color,n.title.style.background="transparent",n.container.current.style.position="relative",n.container.current.append(n.title),n.title.focus()},n.writeTextOnCanvas=function(){var e=n.state,t=e.textPosition,a=t.x,r=t.y,o=e.text,i=new K.f(o,"20px Arial",n.state.color);i.x=a,i.y=r,n.stage.addChild(i),n.container.current.style.position="static",n.container.current.removeChild(n.title),n.setState({text:""}),n.title=null,i.addEventListener("pressmove",(function(e){var t=e.stageX,n=e.stageY;i.x=t,i.y=n})),n.stage.removeEventListener("pressup",n.enableTextEditor)},n.setCropImage=function(e){n.stage.alpha=1,setTimeout((function(){var e=n.state,t=e.cropBounds,a=e.cropBounds,r=a.width,o=a.height,i=a.x,s=a.y,c={width:t.width+20,height:t.height+20};n.cropImage=new K.a(n.stage.toDataURL()),n.cropImage.sourceRect=new K.c(i,s,r,o),n.stage.removeAllChildren(),n.setState({bounds:n.bitmap.getBounds()}),n.stage.setBounds(0,0,r,o),n.stage.addChild(n.cropImage),n.setState({windowSize:c})}),200),n.stage.removeEventListener("pressup",n.setCropImage),n.stage.removeEventListener("mousedown",n.enableCropSection),n.stage.removeEventListener("pressmove",n.dragCropArea)},n.dragCropArea=function(e){var t=e.stageX,a=e.stageY,r=t-n.newRect.x,o=a-n.newRect.y;n.newRect.graphics.clear().beginStroke("black").drawRect(0,0,r,o),n.setState({cropBounds:ee({},n.state.cropBounds,{width:r,height:o})})},n.enableCropSection=function(e){console.log(e,e.stageX,e.stageY),n.newRect&&n.stage.removeChild(n.newRect),n.newRect=new K.d,n.newRect.graphics.beginStroke("black").drawRect(0,0,1,1);var t=e.stageX,a=e.stageY;n.newRect.x=t,n.newRect.y=a,n.stage.addChild(n.newRect),n.setState({cropBounds:ee({},n.state.cropBounds,{x:t,y:a})})},n.drawRectangle=function(){n.stage.addEventListener("mousedown",n.enableRectangle),n.stage.addEventListener("pressmove",n.dragRectangle),n.stage.addEventListener("pressup",n.removeAllListeners)},n.enableRectangle=function(e){n.drawRect=new K.d,n.drawRect.graphics.beginStroke(n.state.color).drawRect(0,0,1,1);var t=e.stageX,a=e.stageY;n.drawRect.x=t,n.drawRect.y=a,n.stage.addChild(n.drawRect)},n.dragRectangle=function(e){var t=e.stageX,a=e.stageY,r=t-n.drawRect.x,o=a-n.drawRect.y;n.drawRect.graphics.clear().setStrokeStyle(5).beginStroke(n.state.color).drawRect(0,0,r,o)},n.removeAllListeners=function(){n.stage.removeEventListener("mousedown",n.enableRectangle),n.stage.removeEventListener("pressmove",n.dragRectangle),n.stage.removeEventListener("pressup",n.removeAllListeners)},n.init=function(){window.aa=Object(J.a)(n);var e=n.state,t=e.imageSrc,a=e.imgSrc2;e.windowSize;n.stage=new K.e("canvas"),window.Bitmap=K.a,n.bitmap=new K.a(t),n.bitmap.scaleX=""===a?re+.2:re,n.bitmap.scaleY=""===a?re+.2:re,n.imageContainer1=new K.b,n.imageContainer1.addChild(n.bitmap),n.imageContainer2=new K.b,""!==a&&(n.bitmap2=new K.a(a),n.bitmap2.scaleX=re,n.bitmap2.scaleY=re+.2,n.bitmap.scaleY+=.2,n.imageContainer2.addChild(n.bitmap2)),n.stage.addChild(n.imageContainer1,n.imageContainer2),n.imageContainer2.x=n.bitmap.getBounds().width*re+20,n.bitmap=new K.a(n.stage.toDataURL()),n.stage.addChild(n.bitmap),n.bitmap.getBounds()&&n.setState({bounds:n.bitmap.getBounds()})},n.container=r.a.createRef(),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"initialLoad",value:function(){var e=this;console.log(window.outerWidth,"  window.resizeTo",window.outerHeight),function(e){var t=$.BrowserWindow.getFocusedWindow();t.minimize(),setTimeout((function(){Z.all().then((function(n){var a;if(1===n.length){a=n[0];var r=new Image;r.src="data:image/png;base64, ".concat(a.toString("base64")),r.onload=function(){t.restore();var n=r.width+200;console.log(r.width+r.width/5,"sangharsh"),e(r.src,"",{width:n,height:r.height})}}else{a=n[0];var o=n[1],i=new Image,s=new Image;s.src="data:image/png;base64, ".concat(a.toString("base64")),i.src="data:image/png;base64, ".concat(o.toString("base64")),s.onload=function(){e(s.src,i.src,{width:s.width+400,height:s.height})}}})).catch((function(e){console.error(e.message)}))}))}((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;window.resizeTo(a.width,a.height);var r={width:a.width,height:a.height};e.setState({imageSrc:t,imgSrc2:n,windowSize:a,bounds:ee({},r)}),e.init(),window.addEventListener("scroll",(function(t){if(window.document.body.getBoundingClientRect().top<0){var n=e.state.zoom;e.setState({zoom:n+.2})}else{var a=e.state.zoom;e.setState({zoom:a-.2})}})),K.g.addEventListener("tick",(function(t){e.stage.update()}))}))}},{key:"componentDidMount",value:function(){this.initialLoad()}},{key:"displayColorPalet",value:function(){var e=this;return te.map((function(t){return r.a.createElement("button",{onClick:function(){return e.setState({color:t})},style:{background:t,width:"15px",height:"15px",border:"1px solid black",margin:"3px"}})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.windowSize,a=n.height,o=n.width;t.imgSrc2;return this.props.isShowScreenShotPage&&window.resizeTo(1400,1200),r.a.createElement("div",{style:{width:o,height:a,position:"absolute",top:"0",left:"0",background:"white"}},r.a.createElement("div",{style:{width:"100%",height:"10%"}},this.displayColorPalet(),r.a.createElement("button",{style:{margin:"5px",color:"black"},onClick:this.cropImageFunction},r.a.createElement("i",{className:"glyphicon glyphicon-scissors","aria-hidden":"true"}))," ",r.a.createElement("button",{style:{margin:"5px",color:"black"},onClick:this.textEditor},r.a.createElement("i",{className:"glyphicon glyphicon-text-size","aria-hidden":"true"})),r.a.createElement("button",{style:{margin:"5px",color:"black"},onClick:this.drawRectangle},r.a.createElement("i",{className:"glyphicon glyphicon-unchecked","aria-hidden":"true"})),r.a.createElement(P,{onClick:function(){ne.existsSync("./image.png")&&ne.unlink("./image.png",(function(e){e&&console.error(e)}));var t=e.stage.toDataURL().replace(/^data:image\/png;base64,/,"");window.require("fs").writeFile("./image.png",t,"base64",(function(e){})),e.props.setScreenShotImage(t),window.resizeTo(375,452),setTimeout((function(){e.props.toggleScreenShotPage()}))},style:{marginRight:"10px"},name:"Done"}),r.a.createElement(P,{onClick:function(){ne.existsSync("./image.png")&&ne.unlink("./image.png",(function(e){e&&console.error(e)})),e.props.setScreenShotImage(""),window.resizeTo(375,452),setTimeout((function(){e.props.toggleScreenShotPage()}))},style:{marginLeft:"10px"},name:"Cancel"}),r.a.createElement(P,{style:{marginLeft:"20px"},onClick:function(){setTimeout((function(){e.stage.removeAllChildren(),e.initialLoad()}))},name:"Retake Snapshot"})),r.a.createElement("div",{style:{height:"90%",width:"100%",color:"black",display:"flex"},className:"App"},r.a.createElement("div",{ref:this.container,style:{width:"90%",height:"100%",margin:"20px"}},r.a.createElement("canvas",{id:"canvas",width:o,height:a}),"\xa0")))}}]),t}(r.a.Component),ie=n(172),se=n.n(ie),ce=n(175),le=window.require("fs"),ue=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetOptions=function(e){n.setState({projectPhase:"",projectRound:"",platforms:[],foundDuring:"",projectTester:"",category:"",isSubmit:!1,nextPage:!1,isAttachment:!1}),se.a.find(n.state.projects,(function(t){t.name===e&&(z(t.id,(function(e){e&&e.length>0&&n.setState({projectName:t.key,components:[],componentsArr:e.map((function(e){return e.name}))})})),L(t.id,(function(e){e&&e.length>0&&n.setState({phasesArr:e.map((function(e){return e.name}))})})),F(t.key,(function(e){n.severity=n.getDropDownValues(e[N.severity]),n.slideNos=n.getDropDownValues(e[N.slides]),e[N.page_no]?n.page_no=!0:n.page_no=!1,n.setState({categoryArr:n.getDropDownValues(e[N.category]),roundsArr:n.getDropDownValues(e[N.rounds]),foundDuringArr:n.getDropDownValues(e[N.found_during]),testerArr:n.getDropDownValues(e[N.testers]),platformsArr:n.getDropDownValues(e[N.platforms])})})))}))},n.getDropDownValues=function(e){return e&&e.allowedValues&&e.allowedValues.map((function(e){return e.value}))},n.handleProjectChange=function(e){n.resetOptions(e.target.value)},n.handleSubmit=function(e){var t=n.state,a=t.projectName,r=t.components,o=t.projectPhase,i=t.projectRound,s=t.platforms,c=t.foundDuring,l=t.projectTester,u=t.category;e.preventDefault(),n.setState({isSubmit:!0}),""!==a&&r!==[]&&""!==o&&""!==i&&s!==[]&&""!==c&&""!==l&&(Object.assign(n.props.history,{projectDetails:{key:a,components:r,phase:o,round:i,platforms:s,foundDuring:c,tester:l,category:u,severityArray:n.severity,slideNos:n.slideNos,page_no:n.page_no}}),n.setState({nextPage:!0}))},n.IndicatorSeparator=function(e){var t=e.innerProps;return r.a.createElement("span",Object.assign({style:{alignSelf:"stretch",backgroundColor:"#5243AA",marginBottom:8,marginTop:8,width:1}},t))},n.renderMultiSelectDropDown=function(e,t,a){var o=e&&e!==[]&&e.map((function(e){return{value:e,label:e}}));return r.a.createElement(ce.a,{closeMenuOnSelect:!1,components:n.IndicatorSeparator,isMulti:!0,value:n.state[a]&&n.state[a]!==[]&&n.state[a].map((function(e){return{value:e,label:e}})),options:o,placeholder:t,onChange:function(e,t){n.setState(Object(v.a)({},a,e&&e!==[]&&e.map((function(e){return e.value}))))}})},n.onReset=function(){n.setState({projectName:"",components:[],projectPhase:"",projectRound:"",platforms:[],foundDuring:"",projectTester:"",category:"",categoryArr:[],phasesArr:[],isSubmit:!1,nextPage:!1,isAttachment:!1,componentsArr:[],roundsArr:[],foundDuringArr:[],testerArr:[],platformsArr:[]})},n.renderReportPageIntro=function(){var e=n.state,t=e.projects,a=e.projectName,o=e.components,i=e.projectPhase,s=e.projectRound,c=e.platforms,l=e.foundDuring,u=e.projectTester,p=e.category,m=e.isSubmit,d=e.categoryArr,g=e.phasesArr,h=e.componentsArr,f=e.roundsArr,y=e.foundDuringArr,v=e.testerArr,w=e.platformsArr;return r.a.createElement("div",{className:"projectFormWrapper"},""===a&&m&&r.a.createElement("span",{className:"issue-alert"},"Please select project"),r.a.createElement("select",{onChange:n.handleProjectChange,className:"drop-report-issue"},""===a&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Select Project"),t&&t.map((function(e){return r.a.createElement("option",null,e.name)}))),o&&0===o.length&&m&&r.a.createElement("span",{className:"issue-alert"},"Please select component/s"),n.renderMultiSelectDropDown(h,"Select Component/s","components"),r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement("div",{style:{width:"50%",marginRight:"5px"}},""===s&&m&&r.a.createElement("span",{className:"issue-alert"},"Please select round"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({projectRound:e.target.value})}},""===s&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Round"),f&&f!==[]&&f.map((function(e){return r.a.createElement("option",null,e)})))),r.a.createElement("div",{style:{width:"50%",marginLeft:"5px"}},""===i&&m&&r.a.createElement("span",{className:"issue-alert"},"Please select phase"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({projectPhase:e.target.value})}},""===i&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Phase"),g&&g!==[]&&g.map((function(e){return r.a.createElement("option",null,e)}))))),r.a.createElement("span",{className:"issue-alert"},""===p&&m&&"Please select category"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({category:e.target.value})}},""===p&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Category"),d&&d!==[]&&d.map((function(e){return r.a.createElement("option",null,e)}))),c&&0===c.length&&m&&r.a.createElement("span",{className:"issue-alert"},"Please select platform/s"),n.renderMultiSelectDropDown(w,"Select Platform/s","platforms"),r.a.createElement("span",{className:"issue-alert"},""===l&&m&&"Found During field is empty!"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({foundDuring:e.target.value})}},""===l&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Found During"),y&&y!==[]&&y.map((function(e){return r.a.createElement("option",null,e)}))),r.a.createElement("span",{className:"issue-alert"},""===u&&m&&"Please select tester"),r.a.createElement("select",{className:"drop-report-issue",onChange:function(e){return n.setState({projectTester:e.target.value})}},""===u&&r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Tester Name"),v&&v!==[]&&v.map((function(e){return r.a.createElement("option",null,e)}))),r.a.createElement("div",{style:{textDecoration:"underline",color:"blue",fontSize:"12px",marginTop:"23px",float:"left",cursor:"pointer"},onClick:n.onReset},"Reset"),r.a.createElement(P,{onClick:n.handleSubmit,name:"Set Environment",style:{margin:"10px 0 0 0"}}))},n.slideNos=[],n.page_no=!1,n.state={projects:n.props.history.projectList.projects,projectName:"",components:[],componentsArr:[],projectPhase:"",projectRound:"",roundsArr:[],platforms:[],platformsArr:[],foundDuring:"",foundDuringArr:[],projectTester:"",testerArr:[],category:"",categoryArr:[],phasesArr:[],isSubmit:!1,nextPage:!1,isAttachment:!1,isShowScreenShotPage:!1,imageBase64Data:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"setScreenShotImage",value:function(e){this.setState({imageBase64Data:e})}},{key:"toggleScreenShotPage",value:function(){var e=this.state.isShowScreenShotPage;this.setState({isShowScreenShotPage:!e})}},{key:"componentDidMount",value:function(){le.existsSync("./image.png")&&le.unlink("./image.png",(function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.isAttachment,a=t.isShowScreenShotPage,o=t.imageBase64Data,i=t.nextPage;return console.log(o,"imageBase64Data"),a||window.resizeTo(385,452),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(oe,{toggleScreenShotPage:function(){e.toggleScreenShotPage()},setScreenShotImage:function(t){e.setScreenShotImage(t)},isShowScreenShotPage:a}),r.a.createElement("div",{style:{display:a?"none":"block"}},this.state.nextPage&&r.a.createElement(X,{isAttachment:n,imageBase64Data:o,setIsAttachment:function(t){e.setState({isAttachment:t})},history:this.props.history,onPageBack:function(){e.setState({nextPage:!1})},setScreenShotImage:function(t){return e.setScreenShotImage(t)},toggleScreenShotPage:function(){e.toggleScreenShotPage()}}),r.a.createElement("div",{style:{display:i?"none":"block"}},r.a.createElement(C,{subHeading:"Project Selection",outerBoxPadding:"0px"},r.a.createElement(y.AvForm,null,this.renderReportPageIntro())))))}}]),t}(a.Component),pe=window.require("fs"),me=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){pe.existsSync("./image.png")&&pe.unlink("./image.png",(function(e){}))}},{key:"componentDidMount",value:function(){pe.existsSync("./image.png")&&pe.unlink("./image.png",(function(e){e&&console.error(e)}))}},{key:"render",value:function(){return r.a.createElement(H.a,null,r.a.createElement("div",{className:"App",style:{height:"98%"}},r.a.createElement("header",{className:"App-header"},r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",component:D}),r.a.createElement(G.a,{exact:!0,path:"/ScreenShotEditor",component:oe}),r.a.createElement(G.a,{exact:!0,path:"/CreateIssue",component:X}),r.a.createElement(G.a,{exact:!0,path:"/ReportIssue",component:ue}),r.a.createElement(G.a,{exact:!0,path:"/ReportFeedback",component:Y})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){}},[[176,1,2]]]);
//# sourceMappingURL=main.cda78334.chunk.js.map