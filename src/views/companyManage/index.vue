<template>
  <div class="main-content">
    <!-- 顶部操作导航栏 -->
    <head-options
      :is-print="isPrint"
      :is-create="isCreate"
      :is-delete="isDelete"
      @creates="createItem"
      @deletesel="delSelect"
    />
    <el-container class="container">
      <!-- <el-aside width="25%" class="aside">
        <div><p class="unit">单位列表</p></div>
        <tree-list></tree-list>
      </el-aside> -->
      <el-aside width="340px" class="aside">
        <div class="head-tree">
          <div class="head-item">
            <p class="unit">单位列表</p>
          </div>
          <div class="head-item btn">
            <el-button
              type="text"
              size="mini"
              class="add-btn"
              @click="createGroup"
            >
              <!-- @click="() => append(node, data)" -->

              添加组织
            </el-button>
            <!-- <el-button
              type="text"
              size="mini"
              class="add-btn"
              @click="createGroup"
            >
              编辑名称
            </el-button>
            <el-button
              type="text"
              size="mini"
              class="add-btn"
              @click="createGroup"
            >
              删除
            </el-button> -->
          </div>
        </div>
        <!-- <tree-list></tree-list> -->
        <high-tree ref="highTree" />
      </el-aside>
      <el-main>
        <!-- <tables ref="table" @tabledata="tabledata"></tables> -->
        <form-data />
      </el-main>
    </el-container>
    <dialogs
      ref="dialoges"
      :submit="submitText"
      :titles="titles"
      :dialog-visible="dialogVisible"
      @closeDialog="closeDialog"
      @submits="submits"
    />
  </div>
</template>
<script>
import headOptions from '@/components/headOptions' // 顶部操作栏
import treeList from '@/components/treeList' // 树状图列表
import tables from '@/components/tables'
import formData from '@/components/formData'
import highTree from '@/components/highTree'
import dialogs from '@/components/contentDialog'
export default {
  name: 'CompanyManage',
  components: {
    treeList,
    headOptions,
    dialogs,
    formData,
    highTree,
    tables
  },
  data() {
    return {
      dialogVisible: false,
      submitText: '保存',
      titles: '新增',
      totalData: [],
      isPrint: false,
      isCreate: true,
      isDelete: false
    }
  },
  methods: {
    // 新增
    createItem() {
      this.dialogVisible = true
    },
    // 关闭弹窗
    closeDialog() {
      this.dialogVisible = false
    },
    // 弹窗保存事件
    submits() {
      this.dialogVisible = false
    },
    tabledata(data) {
      console.log(data, 'data')
      this.totalData = data
    },
    createGroup() {
      this.$refs.highTree.createGroups()
    },
    // 批量删除
    delSelect() {
      var self = this
      const selectArray = this.$refs.table.$refs.tables.selection
      const table = this.$refs.table.$refs.tables.data
      this.$confirm('是否删除选中项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          selectArray.map((item) => {
            self.totalData.splice(item.index, 1)
          })
          this.$refs.table.$refs.tables.clearSelection()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  padding: 30px;
}

.container {
  height: 530px;
}
.aside {
  background: white !important;
  margin: 10px;
  border: 1px solid #eee;
  height: 500px;
  overflow: auto;
}
.main-content {
  margin: 0 10px;
  box-shadow: 3px 4px 5px 5px #eee;
}
.head-tree {
  .unit {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
  .head-item {
    display: inline-block;
  }
  .btn {
    width:225px;
    // border: 1px solid;
    text-align: right;

  }
}
</style>
