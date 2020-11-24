<template>
  <!--
    :titleList="titleList"    弹窗表单的属性列表
    :form="form"              弹窗表单的值
    :tableHead="tableHead"    表格的表头定义
    :dormitory="dormitory"    表格的值的定义
    :titles="titles"          弹窗标题的定义
    :submitText="submitText"  弹窗提交按钮的文字定义
 -->
  <tables
    :title-list="titleList"
    :form="form"
    :table-head="tableHead"
    :dormitory="dormitory"
    :titles="titles"
    :submit-text="submitText"
  />
</template>
<script>
import tables from '@/components/tables'
export default {
  name: 'FixedAssset',
  components: {
    tables
  },
  data() {
    return {
      titles: '资产表（编辑）',
      submitText: '保存',
      // 定义集成表单的  内部字段值
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
      // 定义 contentDialog 下的 formContent 的form内容 表头
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
      ],
      tableHead: [
        // { key: "No", label: "序号" },
        { key: 'address', label: '地址' },
        { key: 'area', label: '面积(㎡)' },
        { key: 'Ownership', label: '权属情况' },
        { key: 'Usage', label: '使用情况(出租/自用/空置)' },
        { key: 'rent', label: '月租金(元)' },
        { key: 'tenantry', label: '承租方' },

        { key: 'leasestartTime', label: '出租起止时间' }
      ],
      dormitory: [
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          Ownership: '2000㎡',
          Usage: '良好',
          rent: 2000,
          tenantry: '蛋壳找房',
          leasestartTime: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          Ownership: '2000㎡',
          Usage: '良好',
          rent: 2000,
          tenantry: '蛋壳找房',
          leasestartTime: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          Ownership: '2000㎡',
          Usage: '良好',
          rent: 2000,
          tenantry: '蛋壳找房',
          leasestartTime: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          Ownership: '2000㎡',
          Usage: '良好',
          rent: 2000,
          tenantry: '蛋壳找房',
          leasestartTime: '2020-11-1 至 2020-11-15'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
</style>
