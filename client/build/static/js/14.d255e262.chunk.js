(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{309:function(e,r,o){"use strict";o.r(r);var t=o(10),a=o(23),n=o(24),s=o(27),i=o(25),l=o(26),c=o(0),d=o.n(c),u=o(12),g=o(49),f=o(2),p=o.n(f),h=o(268),m=o(182),b=o.n(m),E=o(313),v=o(206),C=o(35),x=o(50),w=o(30),I=function(e){function r(){var e;return Object(a.a)(this,r),(e=Object(s.a)(this,Object(i.a)(r).call(this))).handleChange=function(r){return function(o){Object(x.a)(e.state.ErrorMsg)||e.props.ResetLogErr(),e.setState(Object(t.a)({},r,o.target.value))}},e.handleSubmit=function(r){r.preventDefault();var o={user_name:e.state.UserName,password:e.state.Password};e.props.LoginUser(o,e.props.history)},e.state={UserName:"",Password:"",IsLoggedIn:!1,ErrorMsg:""},e}return Object(l.a)(r,e),Object(n.a)(r,[{key:"componentDidMount",value:function(){this.setState({IsLoggedIn:this.props.user.IsLoggedIn}),this.state.IsLoggedIn&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(e,r){if(e===this.props)return null;Object(x.a)(this.props.user.IsLoggedIn)||this.setState({IsLoggedIn:this.props.user.IsLoggedIn}),Object(x.a)(this.props.Errors.LogErrors)||this.setState({ErrorMsg:this.props.Errors.LogErrors}),Object(x.a)(this.props.Errors.LogErrors)&&this.setState({ErrorMsg:""})}},{key:"render",value:function(){var e=this.props.classes,r=this.state.ErrorMsg;return d.a.createElement("div",null,d.a.createElement("div",{className:e.goBackContainer},d.a.createElement(v.a,{variant:"contained",className:e.goBackButton,component:w.b,to:"/"},"Go Back Home")),d.a.createElement("div",{className:e.login},d.a.createElement(h.a,{classes:{root:e.paper}},d.a.createElement("div",{className:e.Avatar},d.a.createElement(b.a,{className:e.AccountCircle})),d.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},function(e,r){return Object(x.a)(e)?null:d.a.createElement("div",{className:r.ErrContainer},d.a.createElement("p",{className:r.ErrP},e))}(r,e),d.a.createElement(E.a,{required:!0,classes:{root:e.textField},value:this.state.UserName,label:"Username",onChange:this.handleChange("UserName"),margin:"normal",variant:"filled"}),d.a.createElement(E.a,{required:!0,classes:{root:e.textField},value:this.state.Password,type:"password",label:"Password",onChange:this.handleChange("Password"),margin:"normal",variant:"filled"}),d.a.createElement(v.a,{className:e.button,variant:"contained",color:"primary",type:"submit"},"login")))))}}],[{key:"getDerivedStateFromProps",value:function(e,r){return e===r?null:Object(x.a)(e.Errors.LogErrors)?Object(x.a)(e.user.IsLoggedIn)?Object(x.a)(e.Errors.LogErrors)?{ErrorMsg:""}:void 0:{IsLoggedIn:e.user.IsLoggedIn}:{ErrorMsg:e.Errors.LogErrors}}}]),r}(c.Component);I.protoType={classes:p.a.object.isRequired,user:p.a.object.isRequired,LoginUser:p.a.func.isRequired,Errors:p.a.object.isRequired,ResetLogErr:p.a.func.isRequired};r.default=Object(g.b)((function(e){return{user:e.user,Errors:e.Errors}}),{LoginUser:C.c,ResetLogErr:C.e})(Object(u.a)((function(e){return{login:{position:"relative",top:0,left:0,display:"flex",height:"100%",width:"100%",minWidth:300,overflow:"hidden",margin:"50px 0"},paper:{display:"flex",flexDirection:"column",flexWrap:"nowrap",padding:e.spacing(3,2),width:"35%",minWidth:300,maxWidth:800,margin:"auto",overflow:"hidden",backgroundColor:"#424242"},Avatar:{width:"25%",minWidth:130,height:"auto",margin:"10px auto"},AccountCircle:{width:"100%",height:"100%",fill:"#fff"},form:{width:"100%",height:"100%",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-evenly",overflow:"hidden",marginBottom:20},textField:{width:"70%",maxWidth:700,minWidth:250,margin:"20px auto",color:"#fff",borderColor:"#fff","& label":{color:"#a9a9a9"},"& label.Mui-focused":{color:"#ccc"},"& .MuiInputBase-input":{color:"#f5f5f5"},"& .MuiFilledInput-underline:after":{borderBottomColor:"#a9a9a9"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}},button:{width:"70%",maxWidth:700,minWidth:250,boxShadow:"none",margin:"".concat(e.spacing(1),"px auto"),backgroundColor:"#419aff",borderColor:"#419aff",color:"#fff",textTransform:"capitalize",letterSpacing:1,padding:"6px 1.5rem",borderBottom:"3px solid #357ac5","&:hover":{backgroundColor:"#357ac5",borderColor:"#357ac5"},"&active":{boxShadow:"none",backgroundColor:"#357ac5",borderColor:"#357ac5"}},goBackButton:{boxShadow:"none",margin:e.spacing(1),backgroundColor:"#419aff",borderColor:"#419aff",color:"#fff",borderBottom:"3px solid #357ac5","&:hover":{backgroundColor:"#357ac5",borderColor:"#357ac5"},"&active":{boxShadow:"none",backgroundColor:"#357ac5",borderColor:"#357ac5"}},goBackContainer:{display:"flex",margin:"1rem 2rem"},ErrContainer:{width:"70%",maxWidth:"700",minWidth:"250",margin:"20px auto",backgroundColor:"#f00",padding:10,borderRadius:5,textAlign:"center"},ErrP:{color:"#fff",textTransform:"uppercase",fontSize:14,letterSpacing:1}}}))(I))}}]);
//# sourceMappingURL=14.d255e262.chunk.js.map