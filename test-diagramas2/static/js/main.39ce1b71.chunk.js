(this["webpackJsonptest-redux"]=this["webpackJsonptest-redux"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(5),c=n.n(r),o=(n(18),n(11),n(1)),l=n(4),u=Object(l.b)({name:"diagram",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1}}}),d=u.actions,s=d.increment,p=d.decrement,m=function(e){return e.counter.value},f=u.reducer,b={row:"",button:""};function v(){var e=Object(o.c)(m),t=Object(o.b)();return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,"El estado de la matriz y el digrama se corresponde"),a.a.createElement("li",null,"No se comprueba la validez de las conexiones"),a.a.createElement("li",null,"El diagrama no permite eliminar conexiones"))),a.a.createElement("span",null,"Prueba cambio estado"),a.a.createElement("div",{className:b.row},a.a.createElement("button",{className:b.button,"aria-label":"Decrement value",onClick:function(){return t(p())}},"-"),a.a.createElement("span",{className:b.value},e),a.a.createElement("button",{className:b.button,"aria-label":"Increment value",onClick:function(){return t(s())}},"+")))}var _=n(9),E=n(3),g=Object(l.b)({name:"diagram",initialState:{equipment_positions:[{id:1,x:30,y:20},{id:2,x:250,y:90},{id:3,x:250,y:20}]},reducers:{moveEquipment:function(e,t){var n=t.payload,i=n.id,a=n.x,r=n.y,c=e.equipment_positions.find((function(e){return e.id===i}));c.x=a,c.y=r}}}),x=g.actions.moveEquipment,y=function(e){return e.diagram},h=g.reducer,k=Object(l.b)({name:"network",initialState:{equipments:[{id:1,serial:"615",type:"encoder",model:"laguna",inputs:[],outputs:[1,2]},{id:2,serial:"2051",type:"decoder",model:"altum2",inputs:[1],outputs:[3,4]},{id:3,serial:"211",type:"decoder",model:"xavic",inputs:[2],outputs:[5,6]}],input_interfaces:[{id:1,type:"input",index:0,ip:"192.168.0.1",port:8e3,protocol:"rtp"},{id:2,type:"input",index:0,ip:"192.168.0.2",port:8e3,protocol:"rtp"}],output_interfaces:[{id:1,type:"output",index:0,ip:"192.168.0.11",port:8e3,target_ip:"192.168.0.2",target_port:8e3,multicast:"false",protocol:"rtp"},{id:2,type:"output",index:1,ip:"192.168.0.12",port:8e3,target_ip:"0.0.0.0",target_port:0,multicast:"false",protocol:"rtp"},{id:3,type:"output",index:0,ip:"192.168.0.13",port:8e3,target_ip:"0.0.0.0",target_port:0,multicast:"false",protocol:"rtp"},{id:4,type:"output",index:1,ip:"192.168.0.14",port:8e3,target_ip:"0.0.0.0",target_port:0,multicast:"false",protocol:"rtp"},{id:5,type:"output",index:0,ip:"192.168.0.15",port:8e3,target_ip:"0.0.0.0",target_port:0,multicast:"false",protocol:"rtp"},{id:6,type:"output",index:1,ip:"192.168.0.16",port:8e3,target_ip:"0.0.0.0",target_port:0,multicast:"false",protocol:"rtp"}],connections:[{o_id:1,i_id:1},{o_id:2,i_id:2}]},reducers:{connect:function(e,t){var n=t.payload;return e.connections=e.connections.concat(n),e},disconnect:function(e,t){var n=t.payload;return e.connections=e.connections.filter((function(e){return!(e.o_id===n.o_id&&e.i_id===n.i_id)})),e}}}),j=k.actions,N=j.connect,w=j.disconnect,O=function(e){return e.network},C=k.reducer;function q(){var e=Object(i.useRef)(null),t=Object(i.useState)(!0),n=Object(_.a)(t,2),r=n[0],c=n[1],l=Object(i.useState)(!0),u=Object(_.a)(l,2),d=u[0],s=u[1],p=Object(o.c)(m),f=Object(o.c)(O),b=Object(o.c)(y),v=Object(o.b)();return Object(i.useEffect)((function(){if(r)c(!1);else{var t=e.current;!function(e,t,n,i,a,r){if(!1===e&&(n.innerHTML=""),E.mxClient.isBrowserSupported()){E.mxEvent.disableContextMenu(n);var c=new E.mxGraph(n);new E.mxRubberband(c);var o=c.getDefaultParent();c.setPanning(!0),c.setTooltips(!1),c.setConnectable(!0),c.setEnabled(!0),c.setEdgeLabelsMovable(!1),c.setVertexLabelsMovable(!1),c.setGridEnabled(!1),c.setAllowDanglingEdges(!1),c.getModel().beginUpdate();try{var l=[],u=[];t.equipments.map((function(e){var n=10*e.inputs.length+8*(e.inputs.length-1),a=10*e.outputs.length+8*(e.outputs.length-1),d=Math.max(54,Math.max(n,a)+8),s=i.equipment_positions.find((function(t){return t.id===e.id})),p=(s.dummy,s.x),m=s.y,f=c.insertVertex(o,null,[e.type,[e.model,e.serial+r].join(" ")].join("\n"),p,m,120,d,"resizable=0");f.setConnectable(!1),f.equipment=e;var b=e.inputs.map((function(e){var i=t.input_interfaces.find((function(t){return t.id===e})),a=i.index,r=c.insertVertex(f,null,"",0,((d-n)/2+18*a)/d,10,10,"",!0,"resizable=0");return r.geometry.offset=new E.mxPoint(-10,0),r.setConnectable(!0),r.input_iface=i,{id:i.id,connectorVertex:r}}));u=u.concat(b);var v=e.outputs.map((function(e){var n=t.output_interfaces.find((function(t){return t.id===e})),i=n.index,r=c.insertVertex(f,null,"",1,((d-a)/2+18*i)/d,10,10,"",!0,"resizable=0");return r.geometry.offset=new E.mxPoint(0,0),r.setConnectable(!0),r.output_iface=n,{id:n.id,connectorVertex:r}}));return l=l.concat(v),{id:e.id,eqVertex:f}}));t.connections.map((function(e){var t=l.find((function(t){return t.id===e.o_id})),n=u.find((function(t){return t.id===e.i_id}));t&&n&&c.insertEdge(o,null,"",t.connectorVertex,n.connectorVertex,"startArrow:none;endArrow=none;strokeWidth=2;strokeColor=#aaaaaa")}))}finally{c.getModel().endUpdate()}c.getModel().addListener(E.mxEvent.CHANGE,(function(t,n){n.getProperty("edit").changes.map((function(t){if(!e)if(null!=t.previous&&t.cell.equipment)a(x({id:t.cell.equipment.id,x:t.geometry.x,y:t.geometry.y}));else if(null==t.previous&&"mxChildChange"===t.constructor.name&&t.child&&t.child.edge&&t.child.target&&t.child.source){var n=void 0,i=void 0;t.child.target.output_iface&&t.child.source.input_iface?(i=t.child.source.input_iface,n=t.child.target.output_iface):t.child.target.input_iface&&t.child.source.output_iface&&(i=t.child.target.input_iface,n=t.child.source.output_iface),i&&n&&a(N({o_id:n.id,i_id:i.id}))}}))}))}else E.mxUtils.error("Browser is not supported!",200,!1)}(d,f,t,b,v,p),s(!1)}}),[p,r,d,f,b]),a.a.createElement("div",{className:"diagram",ref:e,id:"divGraph"})}function M(e){return a.a.createElement("span",{onClick:function(){return alert(JSON.stringify(e.iface))},className:"board-cell clickable"},e.iface.index)}function S(e){return a.a.createElement("span",{onClick:function(){return alert(JSON.stringify(e.iface))},className:"board-cell clickable"},e.iface.index)}function V(e){var t=Object(o.b)();return a.a.createElement("div",{className:"board-cell"},a.a.createElement("button",{className:"board-connection-"+("true"===e.connected?"enabled":"disabled"),onClick:"true"===e.connected?function(){return t(w({o_id:e.oif,i_id:e.iif}))}:function(){return t(N({o_id:e.oif,i_id:e.iif}))}}))}function P(){var e=Object(i.useRef)(null),t=Object(o.c)(m),n=Object(o.c)(O),r=(Object(o.b)(),[]),c=[],l=[];return l.push(a.a.createElement("span",{key:"2354",className:"board-cell"})),l.push(a.a.createElement("span",{key:"2464312",className:"board-cell"})),n.input_interfaces.map((function(e){if(0==e.index){var i=n.equipments.find((function(t){return t.inputs.find((function(t){return t===e.id}))}));l.push(a.a.createElement("span",{key:"vev23257"+e.id,className:"board-cell"},a.a.createElement("div",{className:"rotated"},[i.model,i.serial+t].join(" "))))}else l.push(a.a.createElement("span",{className:"board-cell"}))})),c.push(a.a.createElement("div",{key:"adaeavef34wdaw",className:"board-row"},l)),c.push(a.a.createElement("div",{key:"vsrv1",className:"board-row"},r)),r.push(a.a.createElement("span",{className:"board-cell",key:12520})),r.push(a.a.createElement("span",{className:"board-cell",key:12521})),n.input_interfaces.map((function(e){r.push(a.a.createElement(S,{key:"iif_"+e.id,iface:e}))})),n.output_interfaces.map((function(e){var i=[];if(0==e.index){var r=n.equipments.find((function(t){return t.outputs.find((function(t){return t===e.id}))}));i.push(a.a.createElement("span",{key:"3253237",className:"board-cell"},[r.model,r.serial+t].join(" ")))}else i.push(a.a.createElement("span",{key:"464kj243",className:"board-cell"}));i.push(a.a.createElement(M,{key:"oif_"+e.id,iface:e})),n.input_interfaces.map((function(t){var r="conn_"+e.id+"_"+t.id;n.connections.find((function(n){return n.o_id===e.id&&n.i_id===t.id}))?i.push(a.a.createElement(V,{key:r,connected:"true",oif:e.id,iif:t.id})):i.push(a.a.createElement(V,{key:r,connected:"false",oif:e.id,iif:t.id}))})),c.push(a.a.createElement("div",{key:"adawdaw"+e.id,className:"board-row"},i))})),a.a.createElement("div",{className:"board",ref:e,id:"divMatrix"},c)}var z=function(){return a.a.createElement("div",null,a.a.createElement(v,null),a.a.createElement(q,null),a.a.createElement(P,null))},A=Object(l.a)({reducer:{counter:f,network:C,diagram:h}});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:A},a.a.createElement(z,null))),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.39ce1b71.chunk.js.map