import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

export default (routes) => {

    function childrenMap(childNodes) {
        return (
            <Route path={childNodes.path} key={childNodes.path} render={() => {
                return (
                    <Fragment>
                        <Route component={childNodes.component} />
                        <Switch>
                            {
                                childNodes.children.map(child => {
                                    return <Route path={child.path} key={child.path} render={() => {
                                        if (child.children) {
                                            return childrenMap(child)
                                        } else {
                                            if (child.path != "/login" && child.meta.requiredAuth) {
                                                if (localStorage.getItem("token")) {
                                                    return <child.component />
                                                } else {
                                                    return <Redirect to="/login" />
                                                }
                                            } else {
                                                return <child.component />
                                            }
                                        }
                                    }} />
                                })
                            }
                            <Redirect from={childNodes.path} to={childNodes.children[0].path} />
                        </Switch>
                    </Fragment>
                )
            }} />
        )
    }

    return routes.map(item => {
        if (item.children) {
            return childrenMap(item);
        } else {
            return <Route path={item.path} key={item.path} render={() => {
                if (item.path != "/login" && item.meta.requiredAuth) {
                    if (localStorage.getItem("token")) {
                        return <item.component />
                    } else {
                        return <Redirect to="/login" />
                    }
                } else {
                    return <item.component />
                }
            }} />
        }
    })
}

{/* <Route path="/home" render={() => {
    return (
        <Fragment>
            <Route path="/home" component={Home} />
            <Switch>
                <Route path="/home/one" component={HomeOne} />
                <Route path="/home/two" component={HomeTwo} />
            </Switch>
        </Fragment>
    )
}} /> */}