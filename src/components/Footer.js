import React from 'react';
import styled from 'styled-components';

const SiteFooter = styled.footer`
    padding:4rem 3rem;
    background-color:royalblue;

    h3{
        color:#fff;
        text-align:center;
    }
`

const Footer = () => {
    return (
        <SiteFooter>
            <h3>Footer</h3>
        </SiteFooter>
    );
};

export default Footer;