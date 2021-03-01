<template>
  <v-card flat  v-bind="$attrs">
    <v-card-title class="d-flex justify-center">
      <slot name="title">区块</slot>
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
        <span class="default-blue" @click="toDetail(item)">{{ item.name1 }}</span>
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
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "vBlockTable",
  data: ()=> ({
    loading: false,
    headers: [
      {
        text: '区块高度',
        align: 'center',
        value: 'name1',
      },
      {
        text: '节点',
        align: 'center',
        value: 'name2',
      },
      {
        text: '交易数量',
        align: 'center',
        value: 'name3',
      },
      {
        text: '时间',
        align: 'center',
        value: 'name4',
      },
    ],
    data: [{
      name1: '1',
      name2: '2',
      name3: '3',
      name4: '4',
    }],
    isDetailShow: false,
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
    include () {
      return [document.querySelector('.more')]
    },
    onClickOutside() {
      this.isDetailShow = false
    },
    getData() {
      this.loading = true
    },
    toDetail(item) {
      this.$router.push({
        path: '/tradeDetail',
        query: {
          item
        }
      })
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
