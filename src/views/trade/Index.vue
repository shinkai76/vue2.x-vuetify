<template>
  <div class="w1200 pt-5 mx-auto">
    <TopSearch :placeholder="search.placeholder" :value="search.value" @search="onSearch" />
    <div class="table-wrap mt30">
      <vBlockTable :currentPage="currentPage" :limit="limit" >
        <template v-slot:title>
          <div class="text-center">区块</div>
        </template>
      </vBlockTable>
      <div class="text-center">
        <v-pagination
            :value="currentPage"
            :length="pageTotal"
            total-visible="7"
            @next="onNextPage(currentPage)"
            @previous="onPrePage(currentPage)"
            @input="onClickPage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TopSearch from "@/components/TopSearch"
import vBlockTable from "@/components/vBlockTable"
export default {
  name: "trade",
  components: { TopSearch, vBlockTable },
  data: ()=>({
    search: {
      placeholder: '区块高度',
      value: ''
    },
    limit: 11, // 请求11条数据
    currentPage: 1,
    pageTotal: 3,
    loading: false
  }),
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getData()
    },
    getData() {

    },
    onSearch() { // TopSearch 触发的

    },
    onClickPage(clickedNum) {
      this.currentPage = clickedNum
    },
    onNextPage(currentPage) {
      console.log('next', currentPage )
    },
    onPrePage(currentPage) {
      console.log('pre', currentPage )
    }
  }
}
</script>

<style scoped lang="less">

.table-wrap {
  width: 1200px;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px 0px rgba(45, 69, 133, 0.17);
  border-radius: 10px;
}
</style>
