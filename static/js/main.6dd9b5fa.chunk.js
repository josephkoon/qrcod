(this.webpackJsonpqrcod=this.webpackJsonpqrcod||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(21),a(12)),i=a(13),s=a(15),d=a(14),h=(a(22),a(40),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={qr:null,size:"250",color:"0-0-0",data:"",error:""},e}return Object(i.a)(a,[{key:"getQR",value:function(){if(this.state.data){var e=this.state.size+"x"+this.state.size,t=this.state.data,a=this.state.color,n="http://api.qrserver.com/v1/create-qr-code/?data=".concat(t,"&size=").concat(e,"&format=").concat("png","&color=").concat(a);this.setState({qr:n})}else this.setState({error:"A Link is Required"})}},{key:"openTab",value:function(){var e=this.state.size+"x"+this.state.size,t=this.state.data,a=this.state.color;window.open("http://api.qrserver.com/v1/create-qr-code/?data=".concat(t,"&size=").concat(e,"&format=").concat("png","&color=").concat(a))}},{key:"changeData",value:function(e){this.setState({data:e.target.value})}},{key:"changeSize",value:function(e){this.setState({size:e})}},{key:"changeColor",value:function(e){this.setState({color:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingTop:"4px",backgroundColor:"black",color:"white"},className:"col-12"},r.a.createElement("h2",null,"QR CODE GENERATOR")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Paste a Link (Up to 900 Characters)"),r.a.createElement("input",{placeholder:"Required",className:"form-control",onChange:this.changeData.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Size (In Pixels)"),r.a.createElement("div",{class:"dropdown show"},r.a.createElement("a",{style:{minWidth:"200px"},class:"btn btn-light dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.size),r.a.createElement("div",{style:{minWidth:"200px"},class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement("a",{onClick:function(){return e.changeSize("250")},class:"dropdown-item",href:"#"},"250x250"),r.a.createElement("a",{onClick:function(){return e.changeSize("500")},class:"dropdown-item",href:"#"},"500x500"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Color"),r.a.createElement("div",{class:"dropdown show"},r.a.createElement("a",{style:{minWidth:"200px"},class:"btn btn-light dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.color),r.a.createElement("div",{style:{minWidth:"200px"},class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement("a",{onClick:function(){return e.changeColor("0-0-0")},class:"dropdown-item",href:"#"},"(Black) 0-0-0"),r.a.createElement("a",{onClick:function(){return e.changeColor("255-0-0")},class:"dropdown-item",href:"#"},"(Red) 255-0-0"),r.a.createElement("a",{onClick:function(){return e.changeColor("0-0-255")},class:"dropdown-item",href:"#"},"(Blue) 0-0-255"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-lg btn-block btn-dark",onClick:this.getQR.bind(this)},"GENERATE MY QR !"),r.a.createElement("br",null),r.a.createElement("p",{style:{color:"red"}},this.state.error),r.a.createElement("br",null)),r.a.createElement("div",{style:{textAlign:"center"},className:"col-sm-6"},r.a.createElement("br",null),!this.state.qr&&r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{display:"inline-block",height:this.state.size+"px",width:this.state.size+"px",border:"4px dashed black"}})),this.state.qr&&r.a.createElement("div",null,r.a.createElement("img",{src:this.state.qr}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-light",onClick:this.openTab.bind(this)},"Open in Separate Tab"),r.a.createElement("p",null,"( Test with Camera App )")))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6dd9b5fa.chunk.js.map