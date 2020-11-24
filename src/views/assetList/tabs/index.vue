<template>
  <div class="tab">
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
      <el-tab-pane label="所有" name="first">
        <tables
          :table-head="tableHead"
          :form="form"
          :title-list="titleList"
          :dormitory="dormitory"
          :titles="titles"
          :submit-text="submitText"
        />
      </el-tab-pane>
      <el-tab-pane label="未审核" name="second" />
      <el-tab-pane label="已审核" name="third" />
    </el-tabs>
  </div>
</template>
<script>
import tables from '@/components/tables'

export default {
  components: {
    tables
  },
  data() {
    return {
      activeName: 'first',
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 3, // 每页的数据条数
      dialogVisible: false,
      titles: '编辑（企业资产列表）',
      submitText: '保存',
      tableDatas: [],
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
        { key: 'enterpriseName', label: '企业名称' },
        { key: 'EntLevel', label: '企业级次' },
        { key: 'Address', label: '地址' },
        { key: 'area', label: '面积（㎡）' },
        { key: 'Ownership', label: '权属情况' },
        { key: 'Usage', label: '使用情况（出租/自用/空置）' },
        { key: 'tenantry', label: '承租方' },
        { key: 'rent', label: '月租金（元）' },
        { key: 'leasestartTime', label: '出租起止时间' },
        { key: 'Isassess', label: '是否评估' },
        { key: 'IsHire', label: '是否公开招租' },
        { key: 'Ismortgage', label: '是否抵押' },
        { key: 'remarks', label: '备注' }
      ],
      dormitory: [
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        },
        {
          enterpriseName: '建设银行',
          EntLevel: '2级',
          Address: '汕头市龙湖区捷龙电脑城',
          area: '南方地区',
          Ownership: '70年',
          Usage: '出租',
          tenantry: '恒大地产',
          rent: '2000元',
          leasestartTime: '2020-08-22',
          Isassess: '是',
          IsHire: '是',
          Ismortgage: '是',
          remarks: '12345'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
.tabs {
  border-top: 1px solid #eee;
  padding: 20px;
  position: relative;
}
</style>
