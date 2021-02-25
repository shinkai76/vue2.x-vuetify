<template>
    <div class="wrap">
        <Nav></Nav>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import  Footer from "./footer"
import  Nav from "./header"
export default {
    name: "layout",
    components: { Footer,  Nav}
}
</script>
<style lang="less" scoped>
.wrap {
  height: 100%;
  width: 100%;
}
</style>
