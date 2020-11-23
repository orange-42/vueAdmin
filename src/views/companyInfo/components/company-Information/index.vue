<template>
  <div>
    <div v-for="(item, index) in infoList" :key="index">
      <div class="title">{{ item.title }}</div>
      <div>
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline form"
        >
          <el-form-item
            v-for="(it, i) in item.info"
            :key="i"
            class="form-item"
            :label="it.label + ':'"
          >
            <el-input
              v-model="formInline.legalPerson"
              size="small"
              :placeholder="it.label"
            />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInformation',
  data() {
    return {
      title: '企业基础信息',
      formInline: {
        user: '',
        regCapital: ''
      },
      infoList: [
        {
          title: '企业基础信息',
          info: [{ label: '法人' }, { label: '注册资金' }]
        },
        {
          title: '企业人事信息',
          info: [{ label: '职工人数' }]
        },
        {
          title: '企业资产信息',
          info: [{ label: '总资产' }, { label: '总负债' }, { label: '净资产' }]
        },
        {
          title: '企业财务信息'
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.title {
  color: #6f83a4;
}
.form {
  margin: 2% 5%;
  .form-item {
    margin-right: 1vw;
  }
}
</style>
