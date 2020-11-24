<template>
  <div class="main-content">
    <!-- 顶部操作导航栏 -->

    <head-options
      :is-print="isPrint"
      :is-create="isCreate"
      :is-delete="isDelete"
    />
    <find-options class="findOp" />
    <tabs />
  </div>
</template>
<script>
import headOptions from '@/components/headOptions' // 顶部操作栏
import findOptions from './findOptions'
import tabs from './tabs'
export default {
  name: 'CompanyInfo',
  components: {
    headOptions,
    findOptions,
    tabs
  },
  data() {
    return {
      isPrint: true,
      isCreate: true,
      isDelete: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.findOp {
    position: relative;
    top: 12px;
}
.main-content {
  margin: 0 10px;
  box-shadow: 3px 4px 5px 5px #eee;
}
</style>
