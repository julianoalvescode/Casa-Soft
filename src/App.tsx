import React from 'react'

import { ToastContainer } from 'react-toastify'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'

import { light } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={light}>
                <Router>
                    <Routes />
                    <GlobalStyle />
                    <ToastContainer />
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
