<template>
  <div>
    <el-dialog
      ref="dialog"
      :title="titles"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <!--  -->
      <div>
        <!-- {{content}} -->
        <formContent ref="forms" :title-list="titleList" :form="form" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button
          type="primary"
          @click="submits"
        >{{ submit }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import formContent from './component/formContent'
export default {
  components: { formContent },
  props: {
    // 定义组件的开关
    dialogVisible: {
      type: Boolean
    },
    // 定义组件的标题
    titles: {
      type: String
    },
    // 定义组件确定按钮的文字
    submit: {
      type: String
    },
    form: {
      type: Object
    },
    titleList: {
      type: Array
    }
  },
  data() {
    return {
      // titles:"提示",
      content: '这是一个片段'
      // submit:"确定"
    }
  },
  methods: {
    close() {
      this.$emit('closeDialog')
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('closeDialog')
        })
        .catch(_ => {})
    },
    submits() {
      this.$emit('submits')
    }
  }
}
</script>
