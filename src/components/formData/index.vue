<template>
  <div>
    <el-form
      ref="dengmiQueryForm"
      :model="dengmiQueryForm"
      label-width="100px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label-width="105px" label="企业名称:">
            <el-input
              v-model="dengmiQueryForm.mimian"
              placeholder="请输入企业名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="法人代表:">
            <el-input
              v-model="dengmiQueryForm.mimu"
              placeholder="请输入法人代表"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="注册资金:">
            <el-input
              v-model="dengmiQueryForm.mige"
              placeholder="请输入注册资金"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label-width="105px" label="办公地址:">
            <el-input
              v-model="dengmiQueryForm.midi"
              placeholder="请输入办公地址"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="企业户数:">
            <el-input
              v-model="dengmiQueryForm.zuozhe"
              placeholder="请输入企业户数"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="经济性质:">
            <el-input
              v-model="dengmiQueryForm.midiLength"
              placeholder="请输入经济性质"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label-width="105px" label="级次:">
            <el-cascader
              v-model="dengmiQueryForm.level"
              :options="dengmiQueryForm.levelList"
              :props="{ checkStrictly: true }"
              placeholder="请选择级次"
              clearable
              @change="handleChange"
            />
            <!-- <el-cascader
             placeholder="请选择级次"
              v-model="dengmiQueryForm.level"
              :options="dengmiQueryForm.levelList"
              @change="handleChange"
            ></el-cascader> -->
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="企业职工总数:">
            <el-input
              v-model="dengmiQueryForm.midiLength"
              placeholder="请输入企业职工总数"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="105px" label="经营情况:">
            <el-input
              v-model="dengmiQueryForm.zuozhe"
              placeholder="请输入经营情况"
            />
          </el-form-item>
        </el-col>

      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label-width="105px" label="离退休人员:">
            <el-input placeholder="请输入离退休人员" />
          </el-form-item>
        </el-col>
        <!-- <el-col span="8">
                    <el-form-item label="经营情况">
                        <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
                    </el-form-item>
                </el-col>
                <el-col span="8">
                    <el-form-item label="企业职工总数">
                        <el-input v-model="dengmiQueryForm.midiLength"></el-input>
                    </el-form-item>
                </el-col> -->
      </el-row>
      <p class="title">在岗在职人员</p>
      <el-row>
        <el-col :span="12">
          <el-form-item label="职工总数:">
            <el-input
              v-model="dengmiQueryForm.zuozhe"
              placeholder="请输入职工总数"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label-width="180px" label="达到离岗退养条件人员:">
            <el-input
              v-model="dengmiQueryForm.midiLength"
              placeholder="请输入达到离岗退养条件人员"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <p class="title">不在岗人员</p>
      <el-row>
        <el-col :span="12">
          <el-form-item label="职工总数:">
            <el-input placeholder="请输入职工总数" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label-width="180px" label="达到离岗退养条件人员:">
            <el-input placeholder="请输入达到离岗退养条件人员" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button size="small" class="save" type="primary" @click="submitForm">保存</el-button>
          <!-- <el-button type="warning" @click="resetForm" icon="el-icon-search" plain>重置</el-button> -->
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'FormData',
  data() {
    return {
      dengmiQueryForm: {
        mimian: '',
        mimu: '',
        mige: '',
        midi: '',
        zuozhe: '',
        midiLength: '',
        levelList: [{
          value: '1',
          label: '一级',
          children: [{
            value: '2',
            label: '二级',
            children: [{
              value: '3',
              label: '三级'
            }]
          }]
        }],
        level: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleChange(value) {
      console.log(value)
    }
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  }
}
</script>
<style lang="scss">
.title {
  text-align: left;
  font-weight: 700;
  color: #606266;
}
.save {
    float: right;
    margin-top: 15px;
}
</style>
