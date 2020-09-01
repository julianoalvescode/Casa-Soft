import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 2rem;

    .actions-container {
        display: flex;
        justify-content: space-around;
    }

    svg {
        cursor: pointer;
    }

    th {
        &:last-child {
            text-align: center;
        }
    }
`
