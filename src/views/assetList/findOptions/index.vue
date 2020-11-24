<template>
  <div>
    <el-row :gutter="20">
      <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="出租方:">
              <el-select
                v-model="form.leaser"
                style="width: 100%"
                size="mini"
                placeholder="请选择出租方"
              >
                <el-option
                  v-for="item in leaserList"
                  :key="item.value"
                  :label="item.label"
                  clear
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="物业类别:">
              <el-input
                v-model="form.propertyClass"
                style="width: 100%"
                clearable
                size="mini"
              />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="企业级次:">
              <el-select
                v-model="form.enterpriseLevel"
                style="width: 100%"
                size="mini"
                placeholder="请选择企业级次"
              >
                <el-option
                  v-for="item in levelList"
                  :key="item.value"
                  :label="item.label"
                  clear
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="3">
          <span class="over" @click="changeArrow">
            <i v-if="arrows == false" class="el-icon-arrow-down over-icon" />
            <i v-else-if="arrows == true" class="el-icon-arrow-up over-icon" />
            <span class="over-word">展开</span>
          </span>
          <el-button size="mini" class="find" type="primary">查询</el-button>
        </el-col>
      </el-form>
    </el-row>
    <el-row v-show="arrows == true" :gutter="20">
      <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="出租方:">
              <el-select
                v-model="form.leaser"
                style="width: 100%"
                size="mini"
                placeholder="请选择出租方"
              >
                <el-option
                  v-for="item in leaserList"
                  :key="item.value"
                  :label="item.label"
                  clear
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="出租方:">
              <el-select
                v-model="form.leaser"
                style="width: 100%"
                size="mini"
                placeholder="请选择出租方"
              >
                <el-option
                  v-for="item in leaserList"
                  :key="item.value"
                  :label="item.label"
                  clear
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-form-item label="出租方:">
              <el-select
                v-model="form.leaser"
                style="width: 100%"
                size="mini"
                placeholder="请选择出租方"
              >
                <el-option
                  v-for="item in leaserList"
                  :key="item.value"
                  :label="item.label"
                  clear
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<style lang="scss">
.over {
  position: relative;
  right: 8px;
  top: 5px;
  .over-icon {
    color: gray;
    width: 6px;
    height: 5px;
    margin-right: 10px;
  }
  .over-word {
    font-size: 13px;
  }
}
.find {
  position: relative;
  top: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        propertyClass: '',
        leaser: '',
        enterpriseLevel: ''
      },
      arrows: false,
      leaserList: [
        { value: 1, label: '龙光地产' },
        { value: 2, label: '怡轩地产' },
        { value: 3, label: '联泰地产' }
      ],
      levelList: [
        { value: 1, label: '一级' },
        { value: 2, label: '二级' },
        { value: 3, label: '三级' }
      ]
      // propertyList:[
      //      {value:1,label:'低级物业'},
      //     {value:2,label:'中级物业'},
      //     {value:3,label:'高级物业'}
      // ]
    }
  },
  methods: {
    changeArrow() {
      this.arrows = !this.arrows
    }
  }
}
</script>
