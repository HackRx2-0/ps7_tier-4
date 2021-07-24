import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';

const Fulllayout = (props) => {

    return (
        <div>

            <Header />
   
            <div className="page-wrapper d-block">
                <div className="page-content container-fluid">
                    <Switch>
                        {ThemeRoutes.map((prop, key) => {
                            if (prop.redirect) {
                                return (
                                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                                );
                            } else {
                                return (
                                    <Route
                                        path={prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            }
                        })}
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Fulllayout;
