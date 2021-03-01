<template>
  <v-card flat  v-bind="$attrs">
    <v-card-title class="d-flex justify-center">
      交易
    </v-card-title>
    <v-data-table
        @click:row="clickRow"
        height="400"
        :disable-sort="true"
        no-data-text="暂无数据"
        hide-default-footer
        :headers="headers"
        :items="data"
        :loading="loading"
        loading-text="Loading..."
    >
      <template v-slot:item.name1="{ item }">
        <span class="default-blue ellipsis">{{ item.name1 }}</span>
      </template>
      <template v-slot:item.name2="{ item }">
        <div class="d-flex">
          <span class="default-blue">{{ item.name3 }}</span>
          <span>-></span>
          <span class="default-blue">B</span>
        </div>
      </template>
      <template v-slot:item.name3="{ item }">
        {{ item.name3 }} AT
      </template>
      <template v-slot:footer>
        <div class="text-center mx-auto default-blue" @click="changeRoute()">
          查看更多>>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "vTradeTable",
  data: ()=> ({
    loading: false,
    headers: [
      {
        text: '交易哈希',
        align: 'center',
        value: 'name1',
      },
      {
        text: '方向',
        align: 'center',
        value: 'name2',
      },
      {
        text: '金额',
        align: 'center',
        value: 'name3',
      }
    ],
    data: [],
    page: undefined,
    limit: undefined
  }),
  props: ['currentPage'],
  created() {
    console.log(this.$attrs)
  },
  watch: {
    currentPage(cur) {
      this.page = cur
      this.getData()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getData()
    },
    getData() {
      this.loading = true
    },
    changeRoute() {

    },
    clickRow(rowData) {
      console.log( rowData )
    }
  }
}
</script>

<style scoped>

</style>
