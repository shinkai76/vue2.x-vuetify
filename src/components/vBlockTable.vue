<template>
  <v-card flat  v-bind="$attrs">
    <v-card-title class="d-flex justify-center">
      区块
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
        <span class="default-blue">{{ item.name1 }}</span>
      </template>
      <template v-slot:item.name2="{ item }">
        <div class="d-flex">
          <div class="ellipsis text-left">
            <div>打包者：<span class="default-blue">{{ item.name2 }}</span></div>
            <div>验证者：<span class="default-blue">123</span></div>
          </div>
          <div class="default-blue d-flex align-center more" @click="showDetail(item)">
              更多
          </div>
          <div v-show="isDetailShow" class="detail" v-click-outside="{
            handler: onClickOutside,
            include: include,
          }">
            <div>打包者：<span class="default-blue">{{ item.name2 }}</span></div>
            <div>验证者：<span class="default-blue">123</span></div>
          </div>
        </div>
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
  name: "vBlockTable",
  data: ()=> ({
    loading: false,
    headers: [],
    data: [],
    isDetailShow: false,

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
    include () {
      return [document.querySelector('.more')]
    },
    onClickOutside() {
      this.isDetailShow = false
    },
    getData() {
      this.loading = true
    },
    changeRoute() {

    },
    showDetail() {
      this.isDetailShow = true
    },
    clickRow(rowData) {
      console.log( rowData )
    }
  }
}
</script>

<style scoped lang="less">
.detail {
  min-width: 500px;
  position: absolute;
  z-index: 3000;
  padding: 16px;
  left: 50%;
  transform: translate(-50%);
  text-align: left;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px 0px rgba(45, 69, 133, 0.17);
}
</style>
