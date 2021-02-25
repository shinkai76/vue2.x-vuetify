import Layout from "@/layout"

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component:()=> import("@/views/Index.vue")
            }
        ]
    },
    {
        path: "*",
        redirect: "/404",
    },
    {
        path: "/404",
        name: "404",
        component: ()=> import("@/views/404.vue")
    }
]
export default routes