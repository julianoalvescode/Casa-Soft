import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility;
    }


    .erro {
        margin-top: 1.25rem;
    }


`
