<template>
  <v-card height="70px"
          class="head rounded-0"
          min-width="100%"
          flat
  >
    <div class="w1200 mx-auto nav-wrap d-flex justify-start align-center">
      <v-img class="flex-grow-0 ml-11" src="../assets/pic_logo.png" alt="logo" height="40" width="130" />
      <div class="d-flex justify-start nav-container"
           @mouseleave="currentIdx = -1"
      >
        <div v-for="(item, index) in navItems"
             :key="item.text"
             :class="['nav-block', 'nav-block-'+ index]"
             @mouseenter="currentIdx = index"
        >
          <div class="nav-text">
            {{ item.text }}
            <v-icon v-if="index === 1"
                    dark
                    x-small
                    class="chevron-down"
            >
              mdi-chevron-down
            </v-icon>
          </div>
          <v-expand-transition>
            <div class="nav-submenu-wrap transition-fast-in-fast-out"
                 v-show="index === 1 && currentIdx === index"
            >
              <div class="nav-submenu transition-fast-in-fast-out"
                   v-for="sub in item.children"
                   :key="sub.text"
              >
                {{ sub.text }}
              </div>
            </div>
          </v-expand-transition>
        </div>
      </div>
      <div class="lang-wrap ml-auto"
           @mouseleave="showLangMenu = false"
      >
        <div class="nav-lang-container"
             @mouseenter="showLangMenu = true"
        >
          <v-img class="mr-2" :src="navLangFlag"></v-img>
          {{ navLangName }}
          <v-icon class="menu-down" medium dark>mdi-menu-down</v-icon>
        </div>
        <v-expand-transition>
          <div class="lang-submenu-wrap transition-fast-in-fast-out"
               v-show="showLangMenu"
          >
            <div v-for="(item, index) in menuLang"
                 :key="index"
                 @click="selectLang(item)"
                 class="lang-submenu"
            >
              <v-img class="mr-2" :src="item.src" max-width="20" max-height="20"></v-img>
              {{ item.name }}
            </div>
          </div>
        </v-expand-transition>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "rheader",
  data: () => ( {
    navLangFlag: '',
    navLangName: '',
    menuLang: [
      {
        src: require('../assets/icon_zg.png'),
        name: '中文',
        type: 'zh'
      },
      {
        src: require('../assets/icon_yw.png'),
        name: 'English',
        type: 'en'
      },
      {
        src: require('../assets/icon_ry.png'),
        name: '日本語',
        type: 'ja'
      },
      {
        src: require('../assets/icon_alb.png'),
        name: 'عربى',
        type: 'ar'
      },
      {
        src: require('../assets/icon_yw.png'),
        name: '한국어',
        type: 'ko'
      },
      {
        src: require('../assets/icon_yw.png'),
        name: 'русский',
        type: 'ru'
      },
    ],
    map: {
      'zh': ['中文', 'Chinese'],
      'en': ['English', 'English'],
      'ja': ['日本語', 'Japanese'],
      'ar': ['عربى', 'Arabic'],
      'ko': ['한국어', 'Korean'],
      'ru': ['русский', 'Russian'],
    },
    currentIdx: -1,
    showLangMenu: false,
    navItems: [
      {
        text: '首页'
      },
      {
        text: '区块',
        children: [
          {
            text: '交易'
          }
        ]
      },
      {
        text: '投票'
      },
      {
        text: '合约'
      }
    ]
  } ),
  mounted() {
    this.initLangNav()
  },
  methods: {
    initLangNav() {
      if ( localStorage.getItem('lang') ) {
        let type =localStorage.getItem('lang')
        this.navLangName = this.map[type][0] // English
        this.navLangFlag = this.menuLang.find(el=> el.type === type ).src
        return
      }
      const {name, src, type} = this.menuLang[0] // TODO 设置初始语言
      this.navLangName = name
      this.navLangFlag = src
      localStorage.setItem('lang', type) // zh en
    },
    selectLang({src, name}) {
      this.navLangFlag = src
      this.navLangName = name
    }
  }
}
</script>
<style lang="less" scoped>
.head {
  background: linear-gradient(270deg, #0A225E 0%, #030D2E 100%);

  .nav-wrap {
    height: 100%;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;

    .nav-container {
      cursor: pointer;
      height: 100%;
      line-height: 70px;
    }

    .nav-block {
      color: #fff;
      margin-right: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-0 {
        margin-left: 80px;
      }
      &-1 :hover .chevron-down {
        transform: rotate(180deg);
      }
      .nav-submenu-wrap {
        position: absolute;
        min-width: 130px;
        top: 60px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        font-family: PingFangSC-Semibold, PingFang SC;

        .nav-submenu {
          height: 60px;
          line-height: 60px;
          background: #061643;
          cursor: pointer;

          &:hover {
            font-weight: 600;
          }
        }
      }
    }

    .nav-text {
      &:hover {
        font-weight: 600;
      }
    }
    .lang-wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 57px;
      &:hover .menu-down {
        transform: rotate(180deg);
      }
      .nav-lang-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
      }
      .lang-submenu-wrap {
        position: absolute;
        min-width: 160px;
        top: 60px;
        background: #091D53;;
        width: 160px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        .lang-submenu {
          display: flex;
          justify-content: flex-start;
          height: 54px;
          align-items: center;
          padding-left: 48px;
          &:hover {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
