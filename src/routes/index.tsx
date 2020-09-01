import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from './../pages/Dashboard'

const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => <Redirect to="/admin" />}
                />
                <Route path="/admin" component={Dashboard} />
            </Switch>
        </>
    )
}

export default Routes
