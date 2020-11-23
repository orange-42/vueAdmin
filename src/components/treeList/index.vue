<template>
  <div>
    <el-input
      v-model="filterText"
      popper-class="my-input"
      size="mini"
      style="width:100% !important"
      placeholder="请输出搜索内容"
    >
      <i
        slot="suffix"
        class="el-icon-search el-input__icon"
      />
    </el-input>
    <el-tree
      ref="tree"
      :data="data"
      default-expand-all
      :filter-node-method="filterNode"
      :props="defaultProps"
    />
  </div>
</template>

<script>
export default {
  name: 'TreeList',
  data() {
    return {
      filterText: '',
      data: [
        {
          label: '综合管理信息平台',
          children: [
            {
              label: '1.二级企业',
              id: 'p1',
              children: [
                {
                  label: '101 三级企业',
                  id: 'ps1'
                }
              ]
            },
            {
              label: '2.二级企业',
              id: 'p2',
              children: [
                {
                  label: '201 三级企业',
                  id: 'ps201'
                },
                {
                  label: '202 三级企业',
                  id: 'ps202'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

<style scoped>
</style>
