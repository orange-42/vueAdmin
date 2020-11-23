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
  // props:{
  //     form:{
  //         type:Object
  //     },
  //     titleList:{
  //         type:Array
  //     }
  // },
  data() {
    return {
      form: {
        name: '123',
        address: '345',
        persons: '',
        type: '',
        fields: 'kkk',
        mmm: 'ggg',
        ppp: '',
        tyty: '',
        ssss: '',
        aaaa: '',
        rrrr: '',
        hhhh: ''
      },
      titleList: [
        { fields: 'name', name: '活动名称' },
        { fields: 'address', name: '活动地址' },
        { fields: 'persons', name: '活动人数' },
        { fields: 'type', name: '活动类型' },
        { fields: 'kkk', name: '活动kkk' },
        { fields: 'mmm', name: '活动mmm' },
        { fields: 'ppp', name: '活动ppp' },
        { fields: 'tyty', name: '活动tyt' },
        { fields: 'ssss', name: '活动ssss' },
        { fields: 'aaaa', name: '活动aaaa' },
        { fields: 'rrrr', name: '活动rrrr' },
        { fields: 'hhhh', name: '活动hhh' }

      ]
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
