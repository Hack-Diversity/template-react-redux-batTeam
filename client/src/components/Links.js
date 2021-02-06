import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

<<<<<<< HEAD
const HomeWrapper = styled.div.attrs({
  //create custom wrapper
})``;


const Collapse = styled.div.attrs({
    className:"collapse navbar-collapse",
    //make content display
})`
    display:none;
    @media screen and (max-width: 420px) {
        display: none;
=======
const HomeWrapper = styled.div``;

const Collapse = styled.div.attrs({
    // className: 'collapse navbar-collapse',
})`
    @media screen and (max-width: 420px) {
        display: flex;
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        flex-grow: 1;
    }
`;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
    @media screen and (max-width: 420px) {
        flex-direction: row;
<<<<<<< HEAD
        justify-content: flex-start;
=======
        justify-content: space-between;
        /* justify-content: flex-start; */
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        width: 100%;
    }
`;

const Item = styled.div.attrs({
<<<<<<< HEAD
    className: 'collapse navbar-collapse',
=======
    // className: 'collapse navbar-collapse',
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
})`
    @media screen and (max-width: 420px) {
        /* margin-right: 2em; */
    }
`;

<<<<<<< HEAD
const logoStyles = {
    height: '60px',
    width: '60px',
    backgroundColor:'white',
    margin:`10px`,
    padding:`0`,
};

//Navlink styles
const navbarStyles = {
    marginLeft: `1px`,
    color:`black`,
    display:`inline`,
};

const Books = styled.div.attrs({
    className: 'book-container',
})`

    @media screen and (max-width: 420px) {
        flex-direction: row;
        justify-content: space-between;
        /* justify-content: flex-start; */
    }
`;


=======
const homeStyles = {
    marginLeft: `1em`
};

const logoStyles = {
    height: '40px',
    width: '40px',
};

>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeWrapper>
                    <Logo logoStyles={logoStyles} />
                    <Link
                        to="/"
                        className="navbar-brand"
<<<<<<< HEAD
                        style={navbarStyles}
=======
                        style={homeStyles}
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                    >
                        Home
                    </Link>
                </HomeWrapper>
                <Collapse>
<<<<<<< HEAD
                  <List>
                      <Item>
                          <Link
                              to="/items"
                              className="nav-link"
                          >
                              Items
                          </Link>
                      </Item>
                      <Item>
                          <Link
                              to="/item/create"
                              className="nav-link"
                          >
                              Create Item
                          </Link>
                      </Item>
                      <Item>
                          <Link to="/items/react-table-v6" className="nav-link">
                              Items (react-table-v6)
                          </Link>
                      </Item>
                  </List>
              </Collapse>
=======
                    <List>
                        <Item>
                            <Link
                                to="/items"
                                className="nav-link"
                            >
                                Items
                            </Link>
                        </Item>
                        <Item>
                            <Link
                                to="/item/create"
                                className="nav-link"
                            >
                                Create Item
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/items/react-table-v6" className="nav-link">
                                Items (react-table-v6)
                            </Link>
                        </Item>
                    </List>
                </Collapse>
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            </React.Fragment>
        );
    }
}

export default Links;
