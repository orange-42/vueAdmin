<template>
  <div class="custom-tree-container">
    <div class="block" style="width: 300px">
      <!-- <p>使用 scoped slot</p> -->
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        draggable
        :show-checkbox="ischeck"
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        @node-click="nodeclick"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        @check-change="handleCheckChange"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <!-- 如果是编辑状态 -->
          <template v-if="data.isEdit == 1">
            <el-input
              ref="input"
              v-model="newApiGroupName"
              style="height:20px line-height:20px"
              @blur="() => submitEdit(node, data)"
            />
            <!-- 放弃、提交按钮废弃，改为失去焦点自动提交 -->
            <!-- <el-button type="text"
              size="mini"
              @click="() => cancelEdit(node,data)">C</el-button>
            <el-button type="text"
              size="mini"
              @click="() => submitEdit(node,data)">S</el-button> -->
          </template>
          <!-- 如果不是编辑状态 -->
          <span v-else v-text="data.apiGroupName" />
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(node, data)"
            >
              +
            </el-button>
            <el-button
              v-if="data.id != 1"
              type="text"
              size="mini"
              @click="() => edit(node, data)"
            >
              <i class="el-icon-edit" />
            </el-button>
            <el-button
              v-if="data.id != 1"
              type="text"
              size="mini"
              @click="() => remove(node, data)"
            >
              <i class="el-icon-delete" />
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
// import { getApiGroup } from "@/api/appium";
// import { updateApiGroup } from "@/api/appium";

// let id = 1000
export default {
  name: 'AppiumTree1',
  data() {
    return {
      ischeck: false,
      data: [
        {
          id: 1,
          apiGroupName: '一级 1',
          children: [
            {
              id: 4,
              apiGroupName: '二级 1-1',
              children: [
                {
                  id: 9,
                  apiGroupName: '三级 1-1-1'
                },
                {
                  id: 10,
                  apiGroupName: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          apiGroupName: '一级 2',
          children: [
            {
              id: 5,
              apiGroupName: '二级 2-1'
            },
            {
              id: 6,
              apiGroupName: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          apiGroupName: '一级 3',
          children: [
            {
              id: 7,
              apiGroupName: '二级 3-1'
            },
            {
              id: 8,
              apiGroupName: '二级 3-2'
            }
          ]
        }
      ],
      newApiGroupName: '',
      defaultProps: {
        children: 'children',
        apiGroupName: 'apiGroupName'
      }
    }
  },
  created() {
    // this.getApiGroupData();
  },
  methods: {
    // 调api获取接口分组数据
    // getApiGroupData() {
    //   getApiGroup(1)
    //     .then((response) => {
    //       this.data = response;
    //       console.log("data:", this.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    createGroups() {
      console.log('添加分组')
      var timestamp = new Date().getTime()
      const newChild = {
        id: timestamp,
        isEdit: 0,
        // apiGroupName: "T" + timestamp,
        apiGroupName: '新的节点名称',
        children: []
      }
      // if (!data.children) {
      //   this.$set(data, "children", []);
      // }
      this.data.push(newChild)
      this.updateApiGroup(this.data)
    },
    handleDragStart(node, ev) {
      console.log('drag start', node.data.apiGroupName)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.data.apiGroupName)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.data.apiGroupName)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.data.apiGroupName)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log(
        'tree drag end: ',
        dropNode && dropNode.data.apiGroupName,
        dropType
      )
      // 调后端更新
      // this.updateApiGroup(this.data);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.data.apiGroupName, dropType)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.id === 1) {
        return false
      } else {
        return true
      }
    },
    allowDrag(draggingNode) {
      // 顶层默认分组不允许拖拽
      if (draggingNode.data.id === 1) {
        return false
      } else {
        return true
      }
      // return draggingNode.data.apiGroupName.indexOf('三级 3-2-2') === -1
    },

    append(node, data) {
      // var pid = data.parentApiGroupId + ':' + data.id
      var timestamp = new Date().getTime()
      const newChild = {
        id: timestamp,
        isEdit: 0,
        // apiGroupName: "T" + timestamp,
        apiGroupName: '新的节点名称',
        children: []
      }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
      this.updateApiGroup(this.data)
    },

    remove(node, data) {
      console.log(node, data, 'del')
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
      this.updateApiGroup(this.data)
    },

    edit(node, data) {
      console.log(
        'before:',
        data.id,
        // data.parentApiGroupId,
        data.apiGroupName,
        data.isEdit
      )
      this.$set(data, 'isEdit', 1)
      this.newApiGroupName = data.apiGroupName
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
      console.log('after:', data.id, data.apiGroupName, data.isEdit)
    },

    submitEdit(node, data) {
      console.log(node, data, 'submits')
      if (data.apiGroupName == this.newApiGroupName) {
        console.log('没有修改')
        this.newApiGroupName = ''
        this.$set(data, 'isEdit', 0)
      } else {
        this.$set(data, 'apiGroupName', this.newApiGroupName)
        this.newApiGroupName = ''
        this.$set(data, 'isEdit', 0)
        this.updateApiGroup(this.data)
      }
    },

    cancelEdit(node, data) {
      this.newApiGroupName = ''
      this.$set(data, 'isEdit', 0)
    },

    updateApiGroup(data) {
      console.log(data)
      // updateApiGroup(1, data)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },

    nodeclick(node, data, obj) {
      console.log('点击了：', node.id, node.apiGroupName)
      // this.$store.dispatch("appium/changeApiGroupId", node.id);
      // console.log(this.$store.getters.apiGroupId);
    },

    handleCheckChange(node, data, checked, indeterminate) {
      console.log(node, data, checked, indeterminate, 'data, checked, indeterminate')
      // if (checked) {
      //   this.isRed = false;
      //   this.checkIdArr.push(data.id);
      //   this.checkedKeyArr = [...this.rowOrgIdList, ...this.checkIdArr];
      //   this.checkedKeyArr = Array.from(new Set(this.checkedKeyArr));
      //   this.checkedKeyStr = this.checkedKeyArr.join(","); // 把选中的节点id数组转为字符串传给后台的参数
      // } else {
      //   this.checkedKeyArr.splice(
      //     this.checkedKeyArr.findIndex((v) => v === data.id),
      //     1
      //   );
      //   this.checkedKeyStr = this.checkedKeyArr.join(",");
      //   if (this.checkedKeyStr.length == 0) {
      //     this.checkIdArr = [];
      //     this.rowOrgIdList = [];
      //   }
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 20px;
}
/* 修改el-input高度，方案一： */
/* 某些预处理器(sass)无法识别>>>，建议使用方案二 */
/* >>> .el-input__inner {
  height: 20px;
} */
/* 修改el-input高度，方案二： */
// /deep/ .el-input__inner {
//   height: 20px;
// }
</style>
