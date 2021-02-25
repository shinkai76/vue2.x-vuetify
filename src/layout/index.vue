<template>
    <v-container>
        <Nav></Nav>
        <router-view></router-view>
        <Footer></Footer>
    </v-container>
</template>
<script>
import Footer from "./footer"
import Nav from "./header"
export default {
    name: "layout",
    components: {Footer, Nav}
}
</script>