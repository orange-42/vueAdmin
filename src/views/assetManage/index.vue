<template>
  <div class="main-content">
    <!-- 顶部操作导航栏 -->
    <head-options @creates="createItem" @deletesel="delSelect" />
    <el-container class="container">
      <el-aside width="22vw" class="aside">
        <div class="head-tree"><p class="unit">单位列表</p>
          <el-button
            type="text"
            size="mini"
            class="add-btn"
            @click="createGroup"
          >
            <!-- @click="() => append(node, data)" -->

            添加组织
          </el-button>
        </div>
        <!-- <tree-list></tree-list> -->
        <high-tree ref="highTree" />
      </el-aside>
      <el-main>
        <div class="title">
          <label>债权、债务</label>
          <label class="total">合计：</label>
        </div>
        <credit-debe-table />
        <div class="title  means">
          <label>资产</label>
          <label class="total">合计：</label>
        </div>
        <fixed-asset-table />
        <!-- <tables ref="table" @tabledata="tabledata"></tables> -->
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
import highTree from '@/components/highTree'
// import tables from "@/components/tables";
import dialogs from '@/components/contentDialog'
import creditDebeTable from './components/creditDebtTable'
import fixedAssetTable from './components/fixedAssetTable'
export default {
  name: 'AssetManage',
  components: {
    treeList,
    headOptions,
    dialogs,
    // tables,
    creditDebeTable,
    fixedAssetTable,
    highTree
  },
  data() {
    return {
      dialogVisible: false,
      submitText: '保存',
      titles: '新增',
      totalData: []
    }
  },
  methods: {
    // 新增
    createItem() {
      this.dialogVisible = true
    },
    createGroup() {
      this.$refs.highTree.createGroups()
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
    // 批量删除
    delSelect() {
      var self = this

      const selectArray = this.$refs.table.$refs.tables.selection
      console.log(selectArray, 'selectArray')
      const table = this.$refs.table.tableDatas
      console.log(table, 'tabless')
      this.$confirm('是否删除选中项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          for (var i = 0; i < table.length; i++) {
            for (var j = 0; j < selectArray.length; j++) {
              if (table[i].id == selectArray[j].id) {
                console.log(i)
                table.splice(i, 1)
                self.$refs.table.$refs.tables.clearSelection()
                // console.log(self.$refs.table)
                self.$refs.table.handleCurrentChange(1)
                self.$forceUpdate()
              }
            }
          }
          this.$refs.table.tableDatas = table
          // selectArray.map((item) => {
          //   self.$refs.table.tableDatas.splice(
          //     table.findIndex(item1 => item1.id === item.id),
          //     // item.index,
          //      1);
          //
          // });
          //
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
.unit {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.head-tree {
  position: relative;
  .add-btn {
    position: absolute;
    top: 0;
    line-height: 20px;
    right: 0;
  }
}
.container {
  // height: 530px;
}
.aside {
  background: white !important;
  margin: 10px;
  border: 1px solid #eee;
  height: 500px;
}
.main-content {
  margin: 0 10px;
  box-shadow: 3px 4px 5px 5px #eee;
}
.title {
  // border: 1px solid;
  position: relative;
  color: #6f83a4;
  margin-bottom: 15px;
}
.total {
  position: absolute;
  right: 100px;
}
.means {
  margin-top:15px;
}
</style>
