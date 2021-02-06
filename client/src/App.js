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
} from './pages';

class App extends Component {
    render() {

        const publicViews = ( //Change components here to link to correct component or page
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.BOOK} component={ItemUpdate} />
                <Route exact path={routes.DETAILS} component={Details} />
                <Route exact path={`${routes.CART}/item`} component={ItemsList} />
                <Route exact path={routes.ADMIN} component={Admin} />
                <Route exact path={routes.ADD_BOOKS} component={AddBooks} />
                <Route exact path={routes.ERROR} component={Error} />
            </Switch>
        );

        return (
          <Router>
                <CssBaseline />
                <div className="app--main">
                    <div className="view-container">
                    <PageLayout />
                        {publicViews}
                    <Footer />
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
