import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import {DefaultRoute, Routes} from './routes'

const Loading = () => (
    <h4>Loading....</h4>
)

const ResolveRoutes = () => {
    return Routes.map((route,index) => (
        <Route
        key={index} 
        path={route.path}
        exact={route.exact}
        render={props => (
            <route.component {...props} />
        )}
        />
    ))
}



const Router = (props) => {

    const isUserLoggedIn = () => localStorage.getItem('user')

    return (
        <AppRouter>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route 
                        exact
                        path="/"
                        render={() => {
                            return isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to={"/login"} />
                        }}
                    />

                    {ResolveRoutes()}
                </Suspense>
            </Switch>

        </AppRouter>
    )
}

export default Router