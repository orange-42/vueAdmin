<template>
  <tables :table-head="tableHead" :dormitory="dormitory" />
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
      tableHead: [
        // { key: "No", label: "序号" },
        { key: 'address', label: '地址' },
        { key: 'area', label: '面积(㎡)' },
        { key: 'property', label: '权属情况' },
        { key: 'usage', label: '使用情况(出租/自用/空置)' },
        { key: 'deposit', label: '月租金(元)' },
        { key: 'tenant', label: '承租方' },

        { key: 'Duration', label: '出租起止时间' }
      ],
      dormitory: [
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          property: '2000㎡',
          usage: '良好',
          deposit: 2000,
          tenant: '蛋壳找房',

          Duration: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          property: '2000㎡',
          usage: '良好',
          tenant: '蛋壳找房',
          deposit: 2000,
          Duration: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          property: '2000㎡',
          usage: '良好',
          tenant: '蛋壳找房',
          deposit: 2000,
          Duration: '2020-11-1 至 2020-11-15'
        },
        {
          address: '广东汕头龙湖区尚海阳光',
          area: 123,
          property: '2000㎡',
          usage: '良好',
          tenant: '蛋壳找房',
          deposit: 2000,
          Duration: '2020-11-1 至 2020-11-15'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
</style>
