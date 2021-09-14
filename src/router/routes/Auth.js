import { lazy } from "react"

const LoginRoutes = [
    {
        path : '/login',
        component: lazy(() => import('../../views/pages/login')),
        exact : true
    }
]

export default LoginRoutes