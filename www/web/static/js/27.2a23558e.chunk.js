(this["webpackJsonpocpp-cs"]=this["webpackJsonpocpp-cs"]||[]).push([[27],{783:function(e,t,n){"use strict";function a(){return"f".concat((+new Date).toString(16)).concat((e=1e3,t=9999,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e));var e,t}n.d(t,"a",(function(){return a}))},788:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(836),r=(n(0),n(98)),s=n(33),i=n(2);function c(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{children:Object(i.jsx)("title",{children:e.title})}),Object(i.jsx)("h2",{className:"title gx-mb-4",children:Object(i.jsx)(s.a,{to:e.url,className:"gx-text-dark",children:Object(i.jsxs)(a.b,{children:[e.icon,e.title]})})})]})}},792:function(e,t,n){"use strict";function a(e,t){var n=e.match.params||{},a=t.match.params||{};return n.param1!==a.param1||n.param2!==a.param2||n.param3!==a.param3}n.d(t,"a",(function(){return a}))},799:function(e,t,n){"use strict";var a=n(16),r=n(15),s=n(19),i=n(20),c=n(0),o=n.n(c),d=n(759),l=n(187),p=n(2),u=null,h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).searchHandle=function(e){r.setState({searchValue:e}),r.state.searchDelay||!r.props.onSearch?(r.setState({searchPending:!0}),window.clearTimeout(u),u=window.setTimeout((function(){r.setState({searchPending:!1}),r.props.onSearch&&r.props.onSearch(e)}),r.state.searchDelay)):r.props.onSearch(e)},r.searchOnChange=function(e){r.searchHandle(e.target.value)},r.state={searchValue:e.defaultValue||"",searchPending:!1,searchDelay:e.hasOwnProperty("searchDelay")?e.searchDelay:1e3},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.intl,a=t.className,r=this.state,s=r.searchValue,i=r.searchPending,c=this.props.placeholder||n.formatMessage({id:"search.placeholder"});return Object(p.jsx)(d.a.Search,{placeholder:c,className:a,value:s,onChange:this.searchOnChange,onSearch:function(){return e.searchHandle(s)},loading:i})}}]),n}(o.a.Component);t.a=Object(l.c)(h)},801:function(e,t,n){"use strict";var a=n(7),r=n(16),s=n(15),i=n(19),c=n(20),o=n(0),d=n.n(o),l=n(165),p=n(293),u=n(2),h=function(e){var t=e.id,n=e.style,a=e.children,r=e.className;return Object(u.jsx)(p.Scrollbars,{id:t,className:r,style:n,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,autoHeightMin:0,autoHeightMax:200,thumbMinSize:30,universal:!0,children:a})},j=n(799),m=n(760),b=n(816),f=n(187),O=m.a.Header,x=m.a.Content,g=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=Object(a.a)(this.props.children,4),t=e[0],n=e[1],r=e[2],s=e[3];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b.a,{spinning:!!this.props.pending,children:Object(u.jsxs)("div",{className:"isomorphicNoteComponent",children:[Object(u.jsx)("div",{style:{width:"340px"},className:"isoNoteListSidebar",children:Object(u.jsxs)("div",{className:"isoNoteListWrapper",children:[this.props.onSearch&&Object(u.jsx)(j.a,{placeholder:this.props.searchPlaceholder,className:"isoSearchNotes",onSearch:this.props.onSearch,searchDelay:this.props.searchDelay}),Object(u.jsx)("div",{className:"isoNoteList",children:r?Object(u.jsx)(h,{children:Object(u.jsx)("div",{className:"isoNoteListHolder",children:r})}):Object(u.jsx)("span",{className:"isoNoResultMsg",children:Object(u.jsx)(l.a,{id:"nothing.found"})})})]})}),Object(u.jsxs)(m.a,{className:"isoNotepadWrapper",children:[Object(u.jsxs)(O,{className:"isoHeader",children:[t,n]}),Object(u.jsx)(x,{className:"isoNoteEditingArea",children:s&&Object(u.jsx)(h,{children:Object(u.jsx)("div",{className:"isoNoteContentHolder",children:s})})})]})]})})})}}]),n}(d.a.Component);t.a=Object(f.c)(g)},833:function(e,t,n){"use strict";var a=n(28),r=n(16),s=n(15),i=n(19),c=n(20),o=n(10),d=n.n(o),l=n(0),p=n.n(l),u=n(187),h=n(848),j=n(95),m=n(2),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).load=Object(a.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.props.items){e.next=3;break}return s.setState({items:s.props.items}),e.abrupt("return");case 3:if(!s.props.query){e.next=11;break}return s.setState({pending:!0}),t=[],s.state.searchText&&s.props.async&&t.push({field:s.props.labelKey||"label",compare:"IKE",value:"%".concat(s.state.searchText,"%")}),e.next=9,s.context.api.q(s.props.query,{search:t},{toTree:!0,parentKey:s.props.parentKey});case 9:n=e.sent,s.setState({pending:!1,items:n});case 11:case"end":return e.stop()}}),e)}))),s.onSearch=function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.props.async&&s.setState({searchText:t},(function(){return s.load()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={searchText:"",pending:!1,items:[]},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){return Object(m.jsx)(h.a,{allowClear:this.props.allowClear,loading:!!this.state.pending,value:this.state.pending?null:this.props.value,treeDefaultExpandAll:this.props.treeDefaultExpandAll,showSearch:!0,placeholder:this.props.placeholder,treeNodeFilterProp:"children",onChange:this.props.onChange,onSearch:this.onSearch,treeData:this.state.items,filterTreeNode:function(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}})}}]),n}(p.a.Component);b.contextType=j.a,t.a=Object(u.c)(b)},872:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(16),s=n(15),i=n(19),c=n(20),o=n(10),d=n.n(o),l=n(0),p=n.n(l),u=n(783),h=n(187),j=n(50),m=n(435),b=n(836),f=n(143),O=n(287),x=n(824),g=n(849),v=n(801),y=n(95),S=n(792),N=n(772),w=n(794),T=n(825),P=n(3),k=n(759),C=n(765),I=n(816),M=n(761),D=n(833),E=n(2),K=k.a.TextArea,F=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).pendingStart=function(){s.props.onPendingStart?s.props.onPendingStart():s.setState({pending:!0})},s.pendingEnd=function(){s.props.onPendingEnd?s.props.onPendingEnd():s.setState({pending:!1})},s.load=Object(a.a)(d.a.mark((function e(){var t,n,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.props.itemId,n=Object(u.a)(),a=!1,!t||"add"===t){e.next=11;break}return s.pendingStart(),r={},e.next=8,s.context.api.q("/resource/get",{id:s.props.itemId});case 8:!1!==(i=e.sent)&&i.id?r=i:a=!0,s.setState({item:r,notFound:a,formKey:n},(function(){return s.pendingEnd()}));case 11:"add"===t&&s.setState({item:{node:s.props.nodeId},notFound:a,formKey:n});case 12:case"end":return e.stop()}}),e)}))),s.save=function(){var e=Object(a.a)(d.a.mark((function e(t){var n,a,r,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({savePending:!0}),n=s.props,a=n.itemId,r=n.intl,i=Object(P.a)(Object(P.a)({},t),{},{node:t.node||null,id:a&&"add"!==a?a:null}),e.next=5,s.context.api.q("/resource/set",i);case 5:c=e.sent,s.setState({savePending:!1}),!1===c?m.b.error(r.formatMessage({id:"save.fail"})):(m.b.success(r.formatMessage({id:"save.success"})),s.props.onChange&&s.props.onChange(),"add"===a&&c.id?s.props.history.push("/admin/resource/".concat(c.id,"/")):s.load());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.m=function(e){return s.props.intl.formatMessage({id:"admin.resource."+e})},s.state={formKey:Object(u.a)(),savePending:!1,pending:!1,item:{},notFound:!1},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(e){e.itemId!==this.props.itemId&&this.load(),e.intl.locale!==this.props.intl.locale&&this.load()}},{key:"render",value:function(){var e=this.state,t=e.savePending,n=e.pending,a=e.notFound,r=e.item,s=e.formKey,i=this.props,c=i.intl,o=i.itemId;return a?Object(E.jsx)(C.a,{type:"error",message:c.formatMessage({id:"nothing.found"})}):Object(E.jsx)(E.Fragment,{children:o&&Object(E.jsx)(I.a,{spinning:!!n,children:Object(E.jsx)(M.a,{layout:"vertical",name:"profile",initialValues:{name:r.name||"",description:r.description||"",data:r.data||"",node:r.node||"",type:r.type||"",sequence:r.sequence||!1},onFinish:this.save,onFinishFailed:this.onFormFinishFailed,children:Object(E.jsxs)(b.b,{direction:"vertical",style:{width:"100%"},children:[Object(E.jsx)(M.a.Item,{label:this.m("node"),name:"node",children:Object(E.jsx)(D.a,{parentKey:"node",treeDefaultExpandAll:!0,query:"/resource/list",allowClear:!0})}),Object(E.jsx)(M.a.Item,{rules:[{required:!0}],label:this.m("name"),name:"name",children:Object(E.jsx)(k.a,{})}),Object(E.jsx)(M.a.Item,{label:this.m("description"),name:"description",children:Object(E.jsx)(k.a,{})}),Object(E.jsx)(M.a.Item,{label:this.m("data"),name:"data",children:Object(E.jsx)(K,{rows:6})}),Object(E.jsx)(M.a.Item,{label:this.m("type"),name:"type",children:Object(E.jsx)(k.a,{})}),Object(E.jsx)(M.a.Item,{children:Object(E.jsx)(O.a,{loading:t,type:"primary",htmlType:"submit",children:c.formatMessage({id:"save"})})})]})},s)})})}}]),n}(p.a.Component);F.contextType=y.a;var H=Object(j.i)(Object(h.c)(F)),q=n(788),A=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).pendingStart=function(){s.props.onPendingStart?s.props.onPendingStart():s.setState({pending:!0})},s.pendingEnd=function(){s.props.onPendingEnd?s.props.onPendingEnd():s.setState({pending:!1})},s.setParams=function(){var e=s.props.match.params,t=e.param1,n=e.param2;s.setState({itemId:t,mode:n})},s.loadTree=Object(a.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({pending:!0}),t=[],s.state.treeSearch&&(t.push({lstr:"(",field:"name",compare:"IKE",value:"%".concat(s.state.treeSearch,"%")}),t.push({condition:"OR",field:"description",compare:"IKE",value:"%".concat(s.state.treeSearch,"%"),rstr:")"})),e.next=5,s.context.api.q("/resource/list",{search:t},{toTree:!0,parentKey:"node"});case 5:n=e.sent,s.setState({tree:n,treeKey:Object(u.a)(),pending:!1});case 7:case"end":return e.stop()}}),e)}))),s.onTreeSelect=function(e){Array.isArray(e)&&e[0]&&s.props.history.push("/admin/resource/".concat(e[0],"/"))},s.onTreeSearch=function(e){s.setState({treeSearch:e},(function(){return s.loadTree()}))},s.onAddStart=function(){var e=s.state.itemId;e?s.props.history.push("/admin/resource/".concat(e,"/add")):s.props.history.push("/admin/resource/add")},s.onDelete=Object(a.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props,n=t.intl,a=t.history,r=s.state.itemId,s.pendingStart(),e.next=5,s.context.api.q("/resource/delete",{id:r});case 5:!1!==e.sent?(m.b.success(n.formatMessage({id:"delete.success"})),a.push("/admin/resource/"),s.loadTree()):(m.b.error(n.formatMessage({id:"delete.fail"})),s.pendingEnd());case 7:case"end":return e.stop()}}),e)}))),s.m=function(e){return s.props.intl.formatMessage({id:"admin.resource."+e})},s.state={treeSearch:"",treeKey:Object(u.a)(),tree:[],itemId:null,mode:null},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setParams(),this.loadTree()}},{key:"componentDidUpdate",value:function(e){Object(S.a)(e,this.props)&&this.setParams(),e.intl.locale!==this.props.intl.locale&&this.loadTree()}},{key:"render",value:function(){var e=this,t=this.props.intl,n=this.state,a=n.pending,r=n.treeKey,s=n.itemId,i=n.mode;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(q.a,{title:this.m("resource"),url:"/admin/resource",icon:Object(E.jsx)(N.a,{})}),Object(E.jsxs)(v.a,{pending:a,onSearch:this.onTreeSearch,children:[Object(E.jsx)("div",{}),Object(E.jsx)("div",{className:"isoNoteBtns",children:Object(E.jsxs)(b.b,{children:[Object(E.jsx)(f.a,{title:this.m("btn.add"),children:Object(E.jsx)(O.a,{onClick:this.onAddStart,type:"primary",icon:Object(E.jsx)(w.a,{})})}),Object(E.jsx)(x.a,{title:"".concat(t.formatMessage({id:"delete.sure"})),onConfirm:function(){return e.onDelete()},okText:t.formatMessage({id:"yes"}),cancelText:t.formatMessage({id:"no"}),children:Object(E.jsx)(f.a,{title:this.m("btn.delete"),children:Object(E.jsx)(O.a,{icon:Object(E.jsx)(T.a,{})})})})]})}),Object(E.jsx)(g.a,{defaultExpandParent:!0,defaultSelectedKeys:[s],defaultExpandedKeys:[s],treeData:this.state.tree,onSelect:this.onTreeSelect},r),Object(E.jsx)("div",{children:s&&Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(H,{itemId:"add"!==i?s:"add",nodeId:s&&"add"!==s?s:null,onChange:this.loadTree,onPendingStart:this.pendingStart,onPendingEnd:this.pendingEnd})})})]})]})}}]),n}(p.a.Component);A.contextType=y.a;t.default=Object(j.i)(Object(h.c)(A))}}]);