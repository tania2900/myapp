import { lazy } from "react"

const DashboardRoute = [
    {
        path : '/classcomp',
        component: lazy(() => import('../../ClassComp')),
        exact : true
    },
    {
        path : '/app',
        component: lazy(() => import('../../App')),
        exact : true
    }
]

export default DashboardRoute