(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{370:function(e,r,a){"use strict";a.r(r);var t=a(8),o=a(16),n=a(17),i=a(19),s=a(18),l=a(20),d=a(0),c=a.n(d),u=a(95),f=a(33),p=a(3),m=a.n(p),b=a(222),g=a(183),h=a.n(g),v=a(2),x=a(93),E=a(21),j=a.n(E),O=a(94),C=a(353),y=a(360),w=a(373),k=a(111),I=a(116),L=a(99),N=c.a.forwardRef((function(e,r){var a=e.children,t=e.classes,o=e.className,n=(e.color,e.component),i=void 0===n?"label":n,s=(e.disabled,e.error,e.filled,e.focused,e.required,Object(x.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),l=Object(I.a)(),d=Object(k.a)({props:e,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]});return c.a.createElement(i,Object(v.a)({className:Object(O.a)(t.root,t["color".concat(Object(L.a)(d.color||"primary"))],o,d.disabled&&t.disabled,d.error&&t.error,d.filled&&t.filled,d.focused&&t.focused,d.required&&t.required),ref:r},s),a,d.required&&c.a.createElement("span",{className:Object(O.a)(t.asterisk,d.error&&t.error)},"\u2009","*"))})),q=Object(u.a)((function(e){return{root:Object(v.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(N),M=c.a.forwardRef((function(e,r){var a=e.classes,t=e.className,o=e.disableAnimation,n=void 0!==o&&o,i=(e.margin,e.shrink),s=(e.variant,Object(x.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),l=Object(I.a)(),d=i;"undefined"===typeof d&&l&&(d=l.filled||l.focused||l.adornedStart);var u=Object(k.a)({props:e,muiFormControl:l,states:["margin","variant"]});return c.a.createElement(q,Object(v.a)({"data-shrink":d,className:Object(O.a)(a.root,t,l&&a.formControl,!n&&a.animated,d&&a.shrink,{dense:a.marginDense}[u.margin],{filled:a.filled,outlined:a.outlined}[u.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:r},s))})),S=Object(u.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(M),F=a(359),P=c.a.forwardRef((function(e,r){var a=e.classes,t=e.className,o=e.component,n=void 0===o?"p":o,i=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(x.a)(e,["classes","className","component","disabled","error","filled","focused","margin","required","variant"])),s=Object(I.a)(),l=Object(k.a)({props:e,muiFormControl:s,states:["variant","margin","disabled","error","filled","focused","required"]});return c.a.createElement(n,Object(v.a)({className:Object(O.a)(a.root,("filled"===l.variant||"outlined"===l.variant)&&a.contained,t,l.disabled&&a.disabled,l.error&&a.error,l.filled&&a.filled,l.focused&&a.focused,l.required&&a.required,{dense:a.marginDense}[l.margin]),ref:r},i))})),R=Object(u.a)((function(e){return{root:Object(v.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:8,lineHeight:"1em",minHeight:"1em",margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{margin:"8px 14px 0"},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(P),W=a(371),B={standard:C.a,filled:y.a,outlined:w.a},D=c.a.forwardRef((function(e,r){var a=e.autoComplete,t=e.autoFocus,o=void 0!==t&&t,n=e.children,i=e.classes,s=e.className,l=e.color,d=void 0===l?"primary":l,u=e.defaultValue,f=e.disabled,p=void 0!==f&&f,m=e.error,b=void 0!==m&&m,g=e.FormHelperTextProps,h=e.fullWidth,E=void 0!==h&&h,C=e.helperText,y=e.hiddenLabel,w=e.id,k=e.InputLabelProps,I=e.inputProps,L=e.InputProps,N=e.inputRef,q=e.label,M=e.multiline,P=void 0!==M&&M,D=e.name,$=e.onBlur,T=e.onChange,U=e.onFocus,A=e.placeholder,H=e.required,z=void 0!==H&&H,V=e.rows,J=e.rowsMax,G=e.select,_=void 0!==G&&G,K=e.SelectProps,Q=e.type,X=e.value,Y=e.variant,Z=void 0===Y?"standard":Y,ee=Object(x.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]),re=c.a.useState(0),ae=re[0],te=re[1],oe=c.a.useRef(null);c.a.useEffect((function(){if("outlined"===Z){var e=j.a.findDOMNode(oe.current);te(null!=e?e.offsetWidth:0)}}),[Z,z,q]);var ne={};"outlined"===Z&&(k&&"undefined"!==typeof k.shrink&&(ne.notched=k.shrink),ne.labelWidth=ae),_&&(K&&K.native||(ne.id=void 0),ne["aria-describedby"]=void 0);var ie=C&&w?"".concat(w,"-helper-text"):void 0,se=q&&w?"".concat(w,"-label"):void 0,le=B[Z],de=c.a.createElement(le,Object(v.a)({"aria-describedby":ie,autoComplete:a,autoFocus:o,defaultValue:u,fullWidth:E,multiline:P,name:D,rows:V,rowsMax:J,type:Q,value:X,id:w,inputRef:N,onBlur:$,onChange:T,onFocus:U,placeholder:A,inputProps:I},ne,L));return c.a.createElement(F.a,Object(v.a)({className:Object(O.a)(i.root,s),disabled:p,error:b,fullWidth:E,hiddenLabel:y,ref:r,required:z,color:d,variant:Z},ee),q&&c.a.createElement(S,Object(v.a)({htmlFor:w,ref:oe,id:se},k),q),_?c.a.createElement(W.a,Object(v.a)({"aria-describedby":ie,id:w,labelId:se,value:X,input:de},K),n):de,C&&c.a.createElement(R,Object(v.a)({id:ie},g),C))})),$=Object(u.a)({root:{}},{name:"MuiTextField"})(D),T=a(357),U=a(22),A=a(34),H=a(32),z=function(e){function r(){var e;return Object(o.a)(this,r),(e=Object(i.a)(this,Object(s.a)(r).call(this))).handleChange=function(r){return function(a){Object(A.a)(e.state.ErrorMsg)||e.props.ResetLogErr(),e.setState(Object(t.a)({},r,a.target.value))}},e.handleSubmit=function(r){r.preventDefault();var a={user_name:e.state.UserName,password:e.state.Password};e.props.LoginUser(a,e.props.history)},e.state={UserName:"",Password:"",IsLoggedIn:!1,ErrorMsg:""},e}return Object(l.a)(r,e),Object(n.a)(r,[{key:"componentDidMount",value:function(){this.setState({IsLoggedIn:this.props.user.IsLoggedIn}),this.state.IsLoggedIn&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(e,r){if(e===this.props)return null;Object(A.a)(this.props.user.IsLoggedIn)||this.setState({IsLoggedIn:this.props.user.IsLoggedIn}),Object(A.a)(this.props.Errors.LogErrors)||this.setState({ErrorMsg:this.props.Errors.LogErrors}),Object(A.a)(this.props.Errors.LogErrors)&&this.setState({ErrorMsg:""})}},{key:"render",value:function(){var e=this.props.classes,r=this.state.ErrorMsg;return c.a.createElement("div",null,c.a.createElement("div",{className:e.goBackContainer},c.a.createElement(T.a,{variant:"contained",className:e.goBackButton,component:H.b,to:"/"},"Go Back Home")),c.a.createElement("div",{className:e.login},c.a.createElement(b.a,{classes:{root:e.paper}},c.a.createElement("div",{className:e.Avatar},c.a.createElement(h.a,{className:e.AccountCircle})),c.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},function(e,r){return Object(A.a)(e)?null:c.a.createElement("div",{className:r.ErrContainer},c.a.createElement("p",{className:r.ErrP},e))}(r,e),c.a.createElement($,{required:!0,classes:{root:e.textField},value:this.state.UserName,label:"Username",onChange:this.handleChange("UserName"),margin:"normal",variant:"filled"}),c.a.createElement($,{required:!0,classes:{root:e.textField},value:this.state.Password,type:"password",label:"Password",onChange:this.handleChange("Password"),margin:"normal",variant:"filled"}),c.a.createElement(T.a,{className:e.button,variant:"contained",color:"primary",type:"submit"},"login")))))}}],[{key:"getDerivedStateFromProps",value:function(e,r){return e===r?null:Object(A.a)(e.Errors.LogErrors)?Object(A.a)(e.user.IsLoggedIn)?Object(A.a)(e.Errors.LogErrors)?{ErrorMsg:""}:void 0:{IsLoggedIn:e.user.IsLoggedIn}:{ErrorMsg:e.Errors.LogErrors}}}]),r}(d.Component);z.protoType={classes:m.a.object.isRequired,user:m.a.object.isRequired,LoginUser:m.a.func.isRequired,Errors:m.a.object.isRequired,ResetLogErr:m.a.func.isRequired};r.default=Object(f.b)((function(e){return{user:e.user,Errors:e.Errors}}),{LoginUser:U.h,ResetLogErr:U.j})(Object(u.a)((function(e){return{login:{position:"relative",top:0,left:0,display:"flex",height:"100%",width:"100%",minWidth:300,overflow:"hidden",margin:"50px 0"},paper:{display:"flex",flexDirection:"column",flexWrap:"nowrap",padding:e.spacing(3,2),width:"35%",minWidth:300,maxWidth:800,margin:"auto",overflow:"hidden",backgroundColor:"#424242"},Avatar:{width:"25%",minWidth:130,height:"auto",margin:"10px auto"},AccountCircle:{width:"100%",height:"100%",fill:"#fff"},form:{width:"100%",height:"100%",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-evenly",overflow:"hidden",marginBottom:20},textField:{width:"70%",maxWidth:700,minWidth:250,margin:"20px auto",color:"#fff",borderColor:"#fff","& label":{color:"#a9a9a9"},"& label.Mui-focused":{color:"#ccc"},"& .MuiInputBase-input":{color:"#f5f5f5"},"& .MuiFilledInput-underline:after":{borderBottomColor:"#a9a9a9"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}},button:{width:"70%",maxWidth:700,minWidth:250,boxShadow:"none",margin:"".concat(e.spacing(1),"px auto"),backgroundColor:"#419aff",borderColor:"#419aff",color:"#fff",textTransform:"capitalize",letterSpacing:1,padding:"6px 1.5rem",borderBottom:"3px solid #357ac5","&:hover":{backgroundColor:"#357ac5",borderColor:"#357ac5"},"&active":{boxShadow:"none",backgroundColor:"#357ac5",borderColor:"#357ac5"}},goBackButton:{boxShadow:"none",margin:e.spacing(1),backgroundColor:"#419aff",borderColor:"#419aff",color:"#fff",borderBottom:"3px solid #357ac5","&:hover":{backgroundColor:"#357ac5",borderColor:"#357ac5"},"&active":{boxShadow:"none",backgroundColor:"#357ac5",borderColor:"#357ac5"}},goBackContainer:{display:"flex",margin:"1rem 2rem"},ErrContainer:{width:"70%",maxWidth:"700",minWidth:"250",margin:"20px auto",backgroundColor:"#f00",padding:10,borderRadius:5,textAlign:"center"},ErrP:{color:"#fff",textTransform:"uppercase",fontSize:14,letterSpacing:1}}}))(z))}}]);
//# sourceMappingURL=15.1829bc5a.chunk.js.map