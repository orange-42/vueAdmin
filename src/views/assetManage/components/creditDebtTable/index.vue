<template>
  <!-- <tables :tableHead="tableHead" :dormitory="dormitory"></tables> -->
  <div>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      style="width: 100%"
    >
      <el-table-column
        align="center"
        label="序号"
        width="50px"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column label="企业名称" align="center">
        <el-table-column
          align="center"
          prop="obligor"
          label="债务人"
          width="80"
        />

        <el-table-column
          prop="guarantee"
          align="center"
          label="担保人"
          width="80"
        />
      </el-table-column>

      <el-table-column label="债券标的" align="center">
        <el-table-column prop="principal" align="center" label="本金" width="80" />

        <el-table-column
          align="center"
          prop="interest"
          label="利息"
          width="80"
        />

        <el-table-column prop="total" align="center" label="合计" width="80" />
      </el-table-column>
      <el-table-column align="center" label="资产明细">
        <el-table-column prop="address" align="center" label="地址" width="120" />

        <el-table-column
          prop="Seizure"
          align="center"
          label="抵押、查封情况"
          width="120"
        />
      </el-table-column>
      <el-table-column
        prop="happenTime"
        align="center"
        label="发生时间"
        width="150"
      />
      <el-table-column
        prop="invalidTime"
        label="失效时间"
        align="center"
        width="150"
      />
      <el-table-column
        prop="LitigationDoc"
        label="诉讼文书"
        align="center"
        width="150"
      />
      <el-table-column prop="other" align="center" label="其他" width="150" />
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="editClick(scope.row)" />
          <!-- <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button> -->
          <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="delClick(scope.row)" />
        <!-- <el-button @click="delClick(scope.row)" type="text" size="small"></el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      align="left"
      :current-page="currentPage"
      :page-sizes="[1, 3, 8, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <content-dialog ref="dialog" :title-list="titleList" :form="form" :dialog-visible="dialogVisible" :submit="submit" :titles="titles" @closeDialog="closeDialog" />
  </div>
</template>
<script>
import tables from '@/components/tables'
import contentDialog from '@/components/contentDialog'
export default {
  name: 'CreditDebt',
  components: {
    contentDialog
  },
  data() {
    return {
      currentPage: 1, // 当前页码
      titles: '编辑债权、债务表',
      submit: '保存',
      total: 20, // 总条数
      pageSize: 3, // 每页的数据条数
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
      tableData: [
        {
          obligor: '佘凯宇',
          guarantee: '佘凯宇',
          principal: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          Seizure: '已查封',
          happenTime: '2020-11-18',
          invalidTime: '2020-11-21',
          LitigationDoc: 'a.txt',
          other: '无'
        },
        {
          obligor: '佘凯宇',
          guarantee: '佘凯宇',
          principal: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          Seizure: '已查封',
          happenTime: '2020-11-18',
          invalidTime: '2020-11-21',
          LitigationDoc: 'a.txt',
          other: '无'
        },
        {
          obligor: '佘凯宇',
          guarantee: '佘凯宇',
          principal: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          Seizure: '已查封',
          happenTime: '2020-11-18',
          invalidTime: '2020-11-21',
          LitigationDoc: 'a.txt',
          other: '无'
        },
        {
          obligor: '佘凯宇',
          guarantee: '佘凯宇',
          principal: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          Seizure: '已查封',
          happenTime: '2020-11-18',
          invalidTime: '2020-11-21',
          LitigationDoc: 'a.txt',
          other: '无'
        },
        {
          obligor: '佘凯宇',
          guarantee: '佘凯宇',
          principal: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          Seizure: '已查封',
          happenTime: '2020-11-18',
          invalidTime: '2020-11-21',
          LitigationDoc: 'a.txt',
          other: '无'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    editClick() {
      console.log(this.$refs.dialog, '编辑')
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    delClick() {
      console.log('删除')
    }
  }
}
</script>
<style lang="scss">
</style>
