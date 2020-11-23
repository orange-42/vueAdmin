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
        <formContent />
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
    dialogVisible: {
      type: Boolean
    },
    titles: {
      type: String
    },
    submit: {
      type: String
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
