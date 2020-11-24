<template>
  <el-row :gutter="20">
    <el-form ref="form" :model="form" label-width="80px">
      <el-col v-for="(it,i) in titleList" :key="i" :span="6">
        <div class="grid-content bg-purple">
          <el-form-item :label="it.name">
            <el-input v-model="form[it.fields]" />
          </el-form-item>
        </div>
      </el-col>
    </el-form>
  </el-row>
</template>
<script>
export default {
  props: {
    form: {
      type: Object
    },
    titleList: {
      type: Array
    }
  },
  data() {
    return {

    }
  },
  created() {
    console.log(this.form, 'form')
    // 获取表单的对象属性
    Object.keys(this.form).forEach(key => {
      console.log(key)
    })
  }
}
</script>
<style lang="scss">
</style>
