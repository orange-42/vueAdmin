<template>
  <div class="main-content">
    <!-- 顶部操作导航栏 -->

    <head-options
      :is-print="isPrint"
      :is-create="isCreate"
      :is-delete="isDelete"
    />
    <el-container class="container">
      <el-aside width="25%" class="aside">
        <div><p class="unit">单位列表</p></div>
        <!-- <find-input></find-input> -->
        <tree-list />
      </el-aside>
      <el-main>
        <infos />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import headOptions from '@/components/headOptions' // 顶部操作栏
import treeList from '@/components/treeList' // 树状图列表
// import findInput from "@/components/findInput";             // 搜索框
import infos from './components/company-Information' // 企业信息
export default {
  name: 'CompanyInfo',
  components: {
    headOptions,
    treeList,
    // findInput,
    infos
  },
  data() {
    return {
      isPrint: false,
      isCreate: false,
      isDelete: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.unit {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.container {
  height: 524px;
  // border: 1px solid #eee
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
</style>
