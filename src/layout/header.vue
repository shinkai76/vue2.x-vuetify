<template>
    <v-card height="70px"
            class="head rounded-0"
            min-width="100%"
            flat
    >
      <div class="w1200 mx-auto nav-wrap d-flex justify-start align-center">
        <v-img class="flex-grow-0"  src="../assets/pic_logo.png" alt="logo" height="40" width="130"/>
        <div>
          <v-card tile
                  flat
                  v-for="item in navItems"
                  :key="item.text"
                  color="white"
          >
            {{ item.text }}
          </v-card>
        </div>
      </div>
    </v-card>
</template>
<script>
export default {
    name: "rheader",
    data: ()=> ({
      navItems: [
        {

        }
      ]
    })
}
</script>
<style lang="less" scoped>
.head {
  background: linear-gradient(270deg, #0A225E 0%, #030D2E 100%);
  .nav-wrap {
    height: 100%;
  }
}
</style>
