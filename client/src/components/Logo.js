import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../styles/assets/logo.svg';

<<<<<<< HEAD
 const Wrapper = styled.a.attrs({
=======
const Wrapper = styled.a.attrs({
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    className: 'navbar-brand',
})``;

class Logo extends Component {
    render() {
        const { logoStyles } = this.props;

        return (
            <Wrapper href="https://localtest:8000">
                <img src={logo} className="app--logo" style={logoStyles} alt="React Logo" />
            </Wrapper>
        );
    }
}

Logo.propTypes = {
    linkStyles: PropTypes.object,
    logoStyles: PropTypes.object,
};

export default Logo;
