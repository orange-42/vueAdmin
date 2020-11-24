<template>
  <div>
    <el-table
      ref="tables"
      :row-class-name="tableRowClassName"
      :data="tables.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      style="width: 100%"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
      @select-all="selectAll"
    >
      <el-table-column type="selection" align="center" width="55" />
      <el-table-column
        v-for="info in tableHead"
        :key="info.key"
        :property="info.key"
        align="center"
        :label="info.label"
      >
        <template slot-scope="scope">
          <span v-if="scope.column.property == 'No'">{{
            scope.$index + 1
          }}</span>
          <span>{{ scope.row[scope.column.property] }}</span>
        </template>
      </el-table-column>
      <el-table-column width="110" align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="handleEdit(scope.$index, scope.row)"
          />
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
    <el-pagination
      class="page"
      align="left"
      :current-page="currentPage"
      :page-sizes="[1, 3, 8, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tables.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <dialogs
      ref="dialoges"
      :submit="submitText"
      :title-list="titleList"
      :form="form"
      :titles="titles"
      :dialog-visible="dialogVisible"
      @closeDialog="closeDialog"
      @submits="submits"
    />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
import dialogs from '@/components/contentDialog'
export default {
  name: 'Tables',
  components: {
    Pagination,
    dialogs
  },
  //  从父页面取得值进行table加载
  props: {
    // 表头
    tableHead: {
      type: Array,
      default: []
    },
    // 表格内容
    dormitory: {
      type: Array,
      default: []
    },
    // 弹窗表单  的值
    form: {
      type: Object
    },
    // 弹窗表单的 表头信息
    titleList: {
      type: Array
    },
    // 弹窗的标题
    titles: {
      type: String
    },
    // 弹窗 提交按钮的文字定义
    submitText: {
      type: String
    }
  },
  data() {
    return {
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 3, // 每页的数据条数
      dialogVisible: false,
      tableDatas: [],
      // tableHead: [
      //   // { key: "No", label: "序号" },
      //   { key: "unitcode", label: "单位代码" },
      //   { key: "unitname", label: "单位简称" },
      //   { key: "unitnames", label: "单位全称" },
      //   { key: "mnemonicCode", label: "助记码" },
      //   { key: "unitType", label: "单位类型" },
      // ],
      // dormitory: [
      //   {
      //     id: 1,
      //     unitcode: 123,
      //     unitname: "小米",
      //     unitnames: "小米集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 2,
      //     unitcode: 234,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 3,
      //     unitcode: 456,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 4,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 5,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 6,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 7,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 8,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 9,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 10,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 11,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      //   {
      //     id: 12,
      //     unitcode: 666,
      //     unitname: "华为",
      //     unitnames: "华为集团",
      //     mnemonicCode: "asd1264",
      //     unitType: "国企",
      //   },
      // ],
      listLoading: true,
      multipleSelection: [],
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      search: ''
    }
  },
  computed: {
    // 模糊搜索
    tables() {
      const search = this.search
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.dormitory.filter((data) => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some((key) => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return String(data[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      this.tableDatas = this.dormitory
      this.$emit('tabledata', this.tableDatas)
      return this.dormitory
    }
  },
  created() {
    this.tableDatas = this.dormitory
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.dialogVisible = true
    },
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tables.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    selectAll() {
      console.log(this.multipleSelection, 'all')
    },

    // 添加索引
    tableRowClassName(row, index) {
      console.log('分配索引', row, index)
      // 给每条数据添加一个索引
      row.row.index = row.rowIndex
    },
    // 操作多选

    handleSelectionChange(val) {
      console.log(val, 'vals')
      this.multipleSelection = val
    },
    closeDialog() {
      this.dialogVisible = false
    },
    submits() {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss">
.page {
  margin-top: 15px;
}
</style>
