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
      <el-table-column width="100px" align="center" prop="date" label="日期" />
      <el-table-column label="企业名称" align="center">
        <el-table-column
          align="center"
          prop="debtor"
          label="债务人"
          width="80"
        />

        <el-table-column
          prop="sponsor"
          align="center"
          label="担保人"
          width="80"
        />
      </el-table-column>

      <el-table-column label="债券标的" align="center">
        <el-table-column prop="capital" align="center" label="本金" width="80" />

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
          prop="closeDown"
          align="center"
          label="抵押、查封情况"
          width="120"
        />
      </el-table-column>
      <el-table-column
        prop="occurrenceTime"
        align="center"
        label="发生时间"
        width="150"
      />
      <el-table-column
        prop="expiresTime"
        label="失效时间"
        align="center"
        width="150"
      />
      <el-table-column
        prop="pleading"
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
  </div>
</template>
<script>
import tables from '@/components/tables'
export default {
  name: 'CreditDebt',
  data() {
    return {
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 3, // 每页的数据条数
      tableData: [
        {
          date: '2020-11-20',
          debtor: '佘凯宇',
          sponsor: '佘凯宇',
          capital: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          closeDown: '已查封',
          occurrenceTime: '2020-11-18',
          expiresTime: '2020-11-21',
          pleading: 'a.txt',
          other: '无'
        },
        {
          date: '2020-11-20',
          debtor: '佘凯宇',
          sponsor: '佘凯宇',
          capital: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          closeDown: '已查封',
          occurrenceTime: '2020-11-18',
          expiresTime: '2020-11-21',
          pleading: 'a.txt',
          other: '无'
        },
        {
          date: '2020-11-20',
          debtor: '佘凯宇',
          sponsor: '佘凯宇',
          capital: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          closeDown: '已查封',
          occurrenceTime: '2020-11-18',
          expiresTime: '2020-11-21',
          pleading: 'a.txt',
          other: '无'
        },
        {
          date: '2020-11-20',
          debtor: '佘凯宇',
          sponsor: '佘凯宇',
          capital: 10000,
          interest: 100,
          total: 10100,
          address: '汕头市长荣大厦',
          closeDown: '已查封',
          occurrenceTime: '2020-11-18',
          expiresTime: '2020-11-21',
          pleading: 'a.txt',
          other: '无'
        },
        {
          date: '2020-11-20',
          debtor: '佘凯宇',
          sponsor: '佘凯宇',
          capital: 20000,
          interest: 200,
          total: 20200,
          address: '汕头市长荣大厦',
          closeDown: '已查封',
          occurrenceTime: '2020-11-18',
          expiresTime: '2020-11-21',
          pleading: 'a.txt',
          other: '无'
        }
      ]
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
      console.log('编辑')
    },
    delClick() {
      console.log('删除')
    }
  }
}
</script>
<style lang="scss">
</style>
