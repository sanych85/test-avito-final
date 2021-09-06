import React from 'react'
import styled from 'styled-components';
import { Heading } from '../components'
const Page404 = () => {
    return (
        <Page404Wrapper>
            <Heading  type = "h2">Sorry, page not found. You may follow to the  <a href="./">main page</a> </Heading>
        </Page404Wrapper>
    )
}

export default Page404


const Page404Wrapper = styled.section `
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
