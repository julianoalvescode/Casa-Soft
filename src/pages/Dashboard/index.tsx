import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './../../components/Header'
import Customers from '../../components/Customers'

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />

            <Switch>
                <div className="container">
                    <Route
                        path="/admin"
                        exact
                        component={() => <h1>Seja Bem-vindo</h1>}
                    />
                    <Route path="/admin/consulta" component={Customers} />
                </div>
            </Switch>
        </>
    )
}

export default Dashboard
