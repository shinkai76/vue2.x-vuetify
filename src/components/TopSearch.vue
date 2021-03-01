<template>
  <div class="w1200"  v-bind="$attrs" v-on="$listeners">
    <v-card class="search-wrap" flat>
      <v-row no-gutters justify="center">
        <input class="search-input" type="text"
               :value="value"
               :placeholder="placeholder"
        >
        <v-btn rounded
               width="120"
               height="44"
               elevation="0"
               class="search-btn ml-4"
               @click="onSearch"
        >搜索</v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
name: "TopSearch",
  data:()=> ({
    value: '',
    placeholder: ''
  }),
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const {value, placeholder} = this.$attrs
      this.value = value
      this.placeholder = placeholder
    },
    onSearch() {
      console.log(this.value)
      this.$listeners.search()
    }
  }
}
</script>

<style scoped lang="less">

.search-wrap {
  height: 100px;
  background: linear-gradient(270deg, #4580DF 0%, #223DD8 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  .search-input {
    height: 44px;
    width: 540px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #FFFFFF;
    border-radius: 22px !important;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    padding: 12px 38px;
  }

  .search-btn {
    background: #FFFFFF;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #3B6DDD;
  }
}
.search-input::-webkit-input-placeholder {
  color: #FFFFFF !important ;
}
</style>
