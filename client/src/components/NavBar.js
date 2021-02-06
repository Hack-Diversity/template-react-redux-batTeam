import React, { Component } from 'react';
import styled from 'styled-components';

import Links from './Links';


const Container = styled.div.attrs({
    className: 'container d-flex',
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    position:relative;
`;

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg',
})`
    margin-bottom: 10px;
    background-color:rgb(180, 170, 154);
    width:100%; margin:0; padding:0;
    justify-content: space-between;

    @media screen and (min-width: 992px) {
        padding: 0.5em 20%;
    }
`;

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                </Nav>
            </Container>
        );
    }
}

export default NavBar;
