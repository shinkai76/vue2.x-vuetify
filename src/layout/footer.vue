<template>
    <v-container>
        <v-footer fixed padless class="footer-wrap align-start">
          <v-card class="w1200 mx-auto"  color="transparent" flat>
            <v-row class="justify-space-between">
              <v-col cols="2"
                     v-for="item in links"
                     :key="item.title"
              >
                <v-card color="transparent" flat class="white--text">
                  <v-card-title class="px-0 pt-0">
                    <div class="wrap-title">{{ item.title }}</div>
                  </v-card-title>
                  <v-card-subtitle class="px-0 pt-2 pb-3">
                    <v-divider class="wrap-divider" />
                  </v-card-subtitle>
                  <v-card-text class="pl-0">
                    <ul class="pl-0">
                      <li class="wrap-link"
                          v-for="sub in item.subtitle"
                          :key="sub.text"
                      >
                        <a class="white--text d-block mb-1"
                           @click="changeRoute(sub.link)"
                        >{{ sub.text }}</a>
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-footer>
    </v-container>
</template>
<script>
export default {
    name: "rfooter",
    data: ()=> ({
      links: [
        {
          title: 'TAF 官网',
          subtitle: [
            {
              text: '白皮书',
              link: 'whitepaper'
            }
          ]
        },
        {
          title: '社区',
          subtitle: [
            {
              text: '开发者中心',
              link: 'developer'
            },
            {
              text: '社群',
              link: 'community'
            },
          ]
        },
        {
          title: '工具',
          subtitle: [
            {
              text: '钱包下载',
              link: 'walletDownload'
            },
            {
              text: '水龙头',
              link: 'faucet'
            },
          ]
        },
      ]
    }),
    methods: {
      changeRoute(link) {
        console.log( link )
      }
    }
}
</script>

<style lang="less" scoped>
.footer-wrap {
  height: 144px;
  padding-top: 30px;
  background: linear-gradient(270deg, #0A225E 0%, #030D2E 100%);

  .wrap-title {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 20px;
  }
  .wrap-divider {
    width: 60px;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.39;
  }
  .wrap-link {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
  .pl85 {
    padding-left: 85px;
  }
}

</style>
