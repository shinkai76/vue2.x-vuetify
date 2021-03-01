<template>
  <div class="w1200 pt-5 mx-auto">
    <TopSearch :placeholder="search.placeholder" :value="search.value" @search="onSearch" />
    <div class="detail-info-wrap mt30">

    </div>
  </div>
</template>

<script>
import TopSearch from "@/components/TopSearch"
export default {
  name: "tradeDetail",
  components: { TopSearch },
  data: ()=> ({
    search: {
      placeholder: '区块高度',
      value: ''
    }
  }),
  created() {

  },
  mounted() {
    this.init()
  },
  activated() {
    this.update()
  },
  methods: {
    init() {
      this.getData()
    },
    update() {

    },
    getData() {

    },
    onSearch() { // TopSearch 触发的

    },
  },

}
</script>

<style scoped lang="less">
.detail-info-wrap {
  width: 1200px;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px 0px rgba(45, 69, 133, 0.17);
  border-radius: 10px;
}
</style>
