import React, { Component } from 'react';
import styled from 'styled-components';

import Links from './Links';

<<<<<<< HEAD

const Container = styled.div.attrs({
    className: 'container d-flex',
=======
const Container = styled.div.attrs({
    className: 'container',
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
<<<<<<< HEAD
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
=======
`;

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20px;

    @media screen and (min-width: 992px) {
        padding: 0.5em 25%;
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
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
