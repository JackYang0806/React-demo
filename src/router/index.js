import App from "@/App"
import Home from "@/views/home"
import Products from "@/views/products"
import CustomerCase from "@/views/customerCase"
const routes = [
  {
    path: "/",
    component:App,
    routes: [
      {
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
    ],
  },
]
export default routes
