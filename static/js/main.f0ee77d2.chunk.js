(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={titleFilter:"Filter_titleFilter__2_Tm6",inputFilter:"Filter_inputFilter__2iAHT"}},15:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__MDrA1",labelForm:"ContactForm_labelForm__3gkGo",inputForm:"ContactForm_inputForm__2NCpQ",btnForm:"ContactForm_btnForm__3z7jk"}},21:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(13),i=n.n(o),s=(n(21),n(8)),m=n(6),l=n(7),u=n(10),b=n(9),d=n(14),h=n(3),j=n.n(h),f=n(2),p=n.n(f),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.contactUserId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget;console.log(n);var a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.addContact=function(e){var n={id:t.contactUserId,name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.contacts.filter((function(t){return t.name===e.target.elements[0].value}));if(n.length)return alert("".concat(n[0].name," is already in contacts"));t.clear(),t.props.onSubmit(t.state)},t.clear=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.labelForm,htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{className:p.a.inputForm,type:"text",name:"name",value:this.state.name,placeholder:"",id:this.nameInputId,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:p.a.labelForm,htmlFor:this.numberInputId,children:["Number",Object(a.jsx)("input",{className:p.a.inputForm,type:"tel",name:"number",value:this.state.number,placeholder:"",id:this.numberInputId,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:p.a.btnForm,type:"submit",children:"Add contact"})]})}}]),n}(r.Component),I=n(4),O=n.n(I),_=function(t){var e=t.id,n=t.name,r=t.number,c=t.onRemove;return Object(a.jsx)("li",{className:O.a.contactListItem,children:Object(a.jsxs)("div",{className:O.a.dataListItem,children:[Object(a.jsxs)("p",{className:O.a.nameListItem,children:[n,": ",r]}),Object(a.jsx)("button",{type:"button",className:O.a.btnListItem,onClick:c,children:"Delete"})]})},e)};_.defaultProps={name:"",number:"",id:""};var F=_,x=n(15),C=n.n(x),g=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)("ul",{className:C.a.listContacts,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsx)(F,{id:e,name:r,number:c,onRemove:function(){return n(e)}},e)}))})},N=n(12),L=n.n(N);function y(t){var e=t.name,n=t.onChangeFilter;return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{className:L.a.titleFilter,children:["Find contact by name",Object(a.jsx)("input",{type:"text",className:L.a.inputFilter,value:e,onChange:function(t){return n(t.target.value)}})]})})}y.defaultProps={value:"noName",number:"123 45 67"};var S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formHandleSubmit=function(e){t.contactUserId=j.a.generate();var n={id:t.contactUserId,name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))},t.filteredName=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.changeFilter=function(e){t.setState({filter:e})},t.removedContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Phonebook"}),Object(a.jsx)(v,{onSubmit:this.formHandleSubmit,contacts:this.state.contacts}),Object(a.jsx)("h2",{className:"title",children:"Contacts"}),Object(a.jsx)(y,{value:t,onChangeFilter:this.changeFilter}),Object(a.jsx)(g,{contacts:this.filteredName(),onRemoveContact:this.removedContact})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__m_s3r",dataListItem:"ContactListItem_dataListItem__2iQeu",nameListItem:"ContactListItem_nameListItem__Irva7",btnListItem:"ContactListItem_btnListItem__2xFuy"}}},[[30,1,2]]]);
//# sourceMappingURL=main.f0ee77d2.chunk.js.map