<template>
  <div>
    <!-- <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      size="mini"
      style="width:100% !important"
      :fetch-suggestions="querySearch"
      placeholder="请输入搜索内容"
      @select="handleSelect"
    >
      <i
        class="el-icon-search el-input__icon"
        slot="suffix"
        @click="handleIconClick"
      >
      </i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete> -->
  </div>
</template>

<script>
export default {
  name: 'FindInput',
  data() {
    return {
      restaurants: [],
      state: ''
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    loadAll() {
      return [

      ]
    },
    handleSelect(item) {
      console.log(item)
    },
    handleIconClick(ev) {
      console.log(ev)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
