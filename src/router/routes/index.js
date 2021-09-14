import DashboardRoute from './Dashboard'
import AuthRoute from './Auth'

const titleDocument = 'Antares | Reliable IoT Platform'

const DefaultRoute = '/dashboard'

const Routes = [
    ...DashboardRoute,
    ...AuthRoute
]

export {DefaultRoute, titleDocument, Routes}