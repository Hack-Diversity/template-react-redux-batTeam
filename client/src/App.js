import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

<<<<<<< HEAD
import {
  PageLayout,
  Footer
} from './components';

import {
  ItemsList,
  ItemUpdate,
  ItemsTable
} from './items';


// Pages
import {
    Home,
    Books,
    Details,
    Cart,
    AddBooks,
    Admin,
    Error
=======
// Static/Stateless
import {
    NavBar,
    PageLayout,
    Welcome
} from './components';

// Pages
import {
    ItemInsert,
    ItemsList,
    ItemsTable,
    ItemUpdate
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
} from './pages';

class App extends Component {
    render() {

<<<<<<< HEAD
        const publicViews = ( //Change components here to link to correct component or page
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.BOOK} component={ItemUpdate} />
                <Route exact path={routes.DETAILS} component={Details} />
                <Route exact path={`${routes.CART}/item`} component={ItemsList} />
                <Route exact path={routes.ADMIN} component={Admin} />
                <Route exact path={routes.ADD_BOOKS} component={AddBooks} />
                <Route exact path={routes.ERROR} component={Error} />
=======
        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Welcome} />
                <Route exact path={routes.ITEMS} component={ItemsList} />
                <Route exact path={`${routes.ITEMS}/react-table-v6`} component={ItemsTable} />
                <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />
                <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            </Switch>
        );

        return (
<<<<<<< HEAD
          <Router>
                <CssBaseline />
                <div className="app--main">
                    <div className="view-container">
                    <PageLayout />
                        {publicViews}
                    <Footer />
=======
            <Router>
                <CssBaseline />
                <NavBar />
                <div className="app--main">
                    <PageLayout />
                    <div className="view-container">
                        {publicViews}
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
