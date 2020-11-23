<template>
  <div>
    <!-- 顶部操作导航栏 -->
    <div class="head-option">
      <div class="tab-left" />
      <!-- 按钮 -->
      <div class="tab-right">
        <el-button v-show="isPrint" size="small" type="warning">打印</el-button>
        <el-button v-show="isCreate" size="small" type="success" @click="creates">新增</el-button>
        <el-button v-show="isDelete" size="small" type="danger" @click="deleteSel">批量删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeadOptions',
  props: {
    isPrint: {
      type: Boolean
    },
    isCreate: {
      type: Boolean
    },
    isDelete: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    creates() {
      console.log('新增1')
      this.$emit('creates')
    },
    deleteSel() {
      this.$emit('deletesel')
    }
  }
}
</script>
<style lang="scss">
.head-option {
  width: 98%;
  height: 45px;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  .tab-left {
    background: #2b8bef;
    height: 72%;
    border: 0;
    position: relative;
    top:7.5px;
    width: 3.5px;
     display: inline-block;
  }
  .tab-right {
     display: inline-block;
     float: right;
     line-height: 43px;
  }
}
</style>
