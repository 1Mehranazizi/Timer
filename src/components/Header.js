import React from 'react';
import styled from "styled-components";

const SiteHeader = styled.header`
    padding:1.2rem 3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:royalblue;

    h3{
        color:#fff;
    }
`

const Header = ({timeLeft}) => {
    return (
        <SiteHeader>
            <h3>Time Left :{timeLeft}</h3>
        </SiteHeader>
    );
};

export default Header;