(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711351ee"],{"0feb":function(e,t,i){"use strict";i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"e",(function(){return r})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return l}));i("99af");var n=i("b775"),a=i("2934");function s(e,t){return Object(n["a"])({url:"".concat(a["a"].url,"/permission?PageSize=").concat(e,"&currentPage=").concat(t),method:"get"})}function o(e){return Object(n["a"])({url:"".concat(a["a"].url,"/permission"),method:"post",data:e})}function r(e){return Object(n["a"])({url:"".concat(a["a"].url,"/permission"),method:"put",data:e})}function c(e){return Object(n["a"])({url:"".concat(a["a"].url,"/permission"),method:"delete",data:e})}function l(){return Object(n["a"])({url:"".concat(a["a"].url,"/permission/info"),method:"get"})}},"6c35":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-content"},[i("div",{staticClass:"options"},[i("head-options",{attrs:{isCreate:e.isCreate,isDelete:e.isDelete},on:{creates:e.createItem,deletesel:e.delSelect}})],1),i("div",{staticClass:"table"},[i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),i("el-table-column",{attrs:{prop:"roleName",label:"角色名称",align:"center"}}),i("el-table-column",{attrs:{prop:"description",label:"角色介绍",align:"center"}}),i("el-table-column",{attrs:{align:"center",label:"操作",width:"190"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",title:"编辑",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(i){return e.editClick(t.row)}}}),i("el-button",{attrs:{size:"mini",type:"danger",title:"删除",icon:"el-icon-delete",circle:""},on:{click:function(i){return e.delClick(t.row,t.$index)}}})]}}])})],1),i("el-pagination",{staticClass:"page",attrs:{align:"left","current-page":e.currentPage,"page-sizes":[1,3,8,10,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),i("el-dialog",{attrs:{title:"角色管理",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"角色名称"}},[i("el-input",{model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),i("el-form-item",{attrs:{label:"角色介绍"}},[i("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),i("el-tree",{ref:"trees",attrs:{data:e.permissList,"show-checkbox":"","node-key":"id","default-checked-keys":e.permissionIds,props:e.defaultProps},on:{"check-change":e.handleCheckChange}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancel}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submits}},[e._v("确 定")])],1)],1)],1)},a=[],s=(i("a4d3"),i("e01a"),i("cc5e")),o=i("0feb"),r=i("bee2"),c={name:"role",components:{headOptions:r["a"]},data:function(){return{total:0,tableSelList:[],titles:"权限管理",dialogVisible:!1,addVisible:!1,submit:"保存",labelWidth:"110px",isCreate:!0,isDelete:!0,tableData:[],pageSize:10,currentPage:1,form:{roleName:"",description:"",permissions:"",id:0},permissionIds:[],permissList:[],defaultProps:{children:"children",label:"label"},permissionLists:[]}},mounted:function(){this.getList(),this.getPermission()},methods:{getList:function(){var e=this;Object(s["e"])(this.pageSize,this.currentPage).then((function(t){e.total=t.data.total,e.tableData=t.data.list}))},submits:function(){var e=this;if(0==this.form.id){var t={permissionIds:this.permissionIds,roleName:this.form.roleName,description:this.form.description};Object(s["a"])(t).then((function(t){201==t.httpStatus&&(e.dialogVisible=!1,e.$message({message:"添加成功！",type:"success"}),e.getList())}))}else{var i={permissionIds:this.permissionIds,roleName:this.form.roleName,description:this.form.description,id:this.form.id};Object(s["f"])(i).then((function(t){200==t.httpStatus&&(e.dialogVisible=!1,e.$message({message:"修改成功！",type:"success"}),e.getList())}))}},cancel:function(){this.dialogVisible=!1},getPermission:function(){console.log(6666);var e=this;Object(o["c"])().then((function(t){console.log(t,"response");for(var i=0;i<t.data.length;i++)if(t.data[i].label=t.data[i].psName,t.data[i].children.length>0)for(var n=0;n<t.data[i].children.length;n++)t.data[i].children[n].label=t.data[i].children[n].psName;e.permissList=t.data}))},getDetails:function(e){var t=this;this.$nextTick((function(){t.$refs.trees.setCheckedKeys([])})),t.permissionIds=[],Object(s["c"])(e).then((function(e){t.permissionIds=e.data.ids}))},handleCheckChange:function(e,t,i,n){var a=this.$refs.trees.getCheckedKeys();this.$refs.trees.getCheckedNodes();this.permissionIds=a,console.log(t,i,n,a,"data, checked, indeterminate")},handleSelectionChange:function(e){this.tableSelList=e},handleSizeChange:function(e){this.currentPage=1,this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e,this.getList()},createItem:function(){this.form={roleName:"",description:"",permissions:"",id:0},this.dialogVisible=!0},handleClose:function(e){this.$refs.trees.setCheckedKeys([]),this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},delSelect:function(){for(var e=[],t=0;t<this.tableSelList.length;t++)e.push(this.tableSelList[t].id);this.del(e)},del:function(e){var t=this,i=this;this.$confirm("是否进行批量删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["b"])(e).then((function(e){200==e.httpStatus&&(i.dialogVisible=!1,i.$message({message:"删除成功！",type:"success"}),i.getList())}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},editClick:function(e,t){this.permissionIds=[],this.getDetails(e.id),this.form=e,this.dialogVisible=!0},delClick:function(e,t){this.del([e.id])}}},l=c,u=(i("9763"),i("2877")),d=Object(u["a"])(l,n,a,!1,null,"7399f318",null);t["default"]=d.exports},"91d3":function(e,t,i){},9763:function(e,t,i){"use strict";i("91d3")},cc5e:function(e,t,i){"use strict";i.d(t,"e",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"f",(function(){return r})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return u}));i("99af");var n=i("b775"),a=i("2934");function s(e,t){return Object(n["a"])({url:"".concat(a["a"].url,"/Role?PageSize=").concat(e,"&currentPage=").concat(t),method:"get"})}function o(e){return Object(n["a"])({url:"".concat(a["a"].url,"/Role"),method:"post",data:e})}function r(e){return Object(n["a"])({url:"".concat(a["a"].url,"/Role"),method:"put",data:e})}function c(e){return Object(n["a"])({url:"".concat(a["a"].url,"/Role"),method:"delete",data:e})}function l(e){return Object(n["a"])({url:"".concat(a["a"].url,"/Role/").concat(e),method:"get"})}function u(){return Object(n["a"])({url:"".concat(a["a"].url,"/Role/info"),method:"get"})}}}]);