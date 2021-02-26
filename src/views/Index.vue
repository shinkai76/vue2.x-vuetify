<template>
    <div class="page-wrap pt-5">
      <v-card class="current-info-wrap" flat>
        <v-row  no-gutters justify="center">
          <input class="search-input" type="text"
                 :value="searchValue"
                 placeholder="公钥\区块\交易\账户"
          >
          <v-btn rounded width="120" height="44" elevation="0" class="search-btn ml-4"
          >搜索</v-btn>
        </v-row>
        <v-row no-gutters class="mt-10">
          <v-col cols="10">
            <v-row no-gutters justify="space-around" class="data-wrap">
              <v-col cols="3"
                     v-for="(item, index) in infoItems"
                     :key="index"
                     :class="['text-center', {'mb30': index <= 4} ]"
              >
                <div class="info-title">{{ item }}</div>
                <div class="info-data">{{ infoData.height }}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" class="progress-wrap">
            进度图
          </v-col>
        </v-row>
      </v-card>
      <div class="tables-wrap">
        <v-row no-gutters class="text-center mt-n15">
          <v-col class="ml-6 mr-4 table-container">123</v-col>
          <v-col class="mr-6 ml-4 table-container">456</v-col>
        </v-row>
      </div>
    </div>
</template>
<script>
export default {
    name: "index",
    data: ()=> ({
      searchValue: '',
      infoItems: ['最新区块高度', '交易总数量', '账户总数量', '投票数量', '合约总数', '节点数量',
      '质押TAFT总量', '参与投票人数'],
      infoData: {
        height: '109,887,441'
      }

    }),
    mounted(){
      this.init()
    },
    methods: {
      init(){

      }
    }
}
</script>
<style lang="less" scoped>
.current-info-wrap {
  padding-top: 30px;
  height: 340px;
  background: linear-gradient(270deg, #4580DF 0%, #223DD8 100%);
  border-radius: 10px;
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
  .data-wrap {

    .info-title {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 6px;
    }
    .info-data {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
    }
  }
  .mb30 {
    margin-bottom: 30px;
  }
  .tables-wrap {
    position: relative;
    z-index: 10;
    .table-container {
      width: 560px;
      height: 531px;
      background: #FFFFFF;
      box-shadow: 2px 2px 8px 0px rgba(45, 69, 133, 0.17);
      border-radius: 10px;
    }
  }
</style>
