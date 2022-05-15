import React from 'react';
import styled from 'styled-components';

const SiteMain = styled.main`
    padding:1rem 3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;

    h1{
        color:#333;
    }
`

const Main = ({countDowm}) => {
    return (
        <SiteMain>
            <h1>Timer : {countDowm}</h1>
        </SiteMain>
    );
};

export default Main;