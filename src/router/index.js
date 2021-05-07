import App from "@/App"
import Login from "@/views/login"
import Home from "@/views/home"
import Products from "@/views/products"
import CustomerCase from "@/views/customerCase"
const routes = [{
        path: "/",
        exact: true,
        component: App,
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
    },
    {
        path: "/login",
        component: Login,
    }
]
export default routes