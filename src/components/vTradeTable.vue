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
    headers: [],
    data: []

  }),
  mounted() {
    console.log(this.$attrs)
    this.headers = this.$attrs.headers
    this.data = this.$attrs.data
    this.title = this.$attrs.title
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
