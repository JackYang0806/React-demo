import App from "@/App"
import Login from "@/views/login"
import Home from "@/views/home"
import Products from "@/views/products"
import CustomerCase from "@/views/customerCase"
import Page404 from '@/views/pages/404'
const routes = [{
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        component: App,
        onEnter: ({ params }, replace) => console.log(params),
        routes: [{
                path: "/home",
                component: Home,
            },
            {
                path: "/products",
                component: Products,
            },
            {
                path: "/case",
                component: CustomerCase,
            },
        ]
    }, {
        path: "*",
        components: Page404
    }
]
export default routes