(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9JuW":function(t,e,a){"use strict";a.r(e);a("IzEo");var r=a("bx4M"),s=a("p0pE"),i=a.n(s),o=a("mrSG"),n=a("q1tI"),l=a.n(n),c=a("MuoO"),p=a("L6Kr"),u=a("WqWh"),d=a("faBS"),y=a("gmfD"),h=a("Qp6+"),g=class extends n["Component"]{constructor(){super(...arguments),this.state={cate:"allPost",query:{size:20,page:1},filter:{post:""}},this.initData=(t=>{var e=t.query,a=void 0===e?this.state.query:e,r=t.filter,s=void 0===r?this.state.filter:r,o=this.state.cate,n=this.props.dispatch,l=Object(d["b"])({cate:o,query:a,type:"post"});n({type:"post/queryList",payload:{query:i()({},l,s),addon:{type:o}}})}),this.listQuery=(t=>{var e=this.state.query,a=i()({},e,t);this.setState({query:a}),this.initData({query:a})}),this.filterQuery=(t=>{var e=this.state.filter,a=i()({},e,t);this.setState({filter:a}),this.initData({filter:a})})}componentDidMount(){this.initData({})}render(){var t=this.state,e=t.cate,a=t.query,s=t.filter,o=this.props,n=o.post,c=o.category,g=o.loadingPost,m=o.loadingCategory,f=c[e]||{},v=n[e]||[],q=n.total[e]||0,E=i()({},s,Object(d["a"])(c.all));return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement(p["a"],{img:f.cover,span:f.slug}),l.a.createElement(r["a"],{bordered:!1,style:{margin:"20px 0"},loading:m},l.a.createElement(h["a"],{value:E,onChange:this.filterQuery})),l.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:g},l.a.createElement(y["a"],{list:v}),l.a.createElement(u["a"],{value:i()({},a,{total:q}),onChange:this.listQuery}))))}};g=o["a"]([Object(c["connect"])(t=>{var e=t.post,a=t.category,r=t.loading;return{post:e,category:a,loadingPost:r.models.post,loadingCategory:r.models.category}})],g),e["default"]=g}}]);