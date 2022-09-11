import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import NoMatch from "../components/NoMatch";

function AppRouter() {

    return (
        <>
            <NavBar />
            <Switch>
                <Route path='/' component={Dashboard} exact={true} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </>
    )
}

export default AppRouter;