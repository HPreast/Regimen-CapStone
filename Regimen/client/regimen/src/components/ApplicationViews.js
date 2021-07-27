import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { ExerciseList } from "./exercises/exerciseList";
import { ExerciseDetails } from "./exercises/exerciseDetails";
import Login from "./login";
import Register from "./register";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/exercises">
                    {isLoggedIn ? <ExerciseList /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/exercises/exerciseDetails/:id">
                    {isLoggedIn ? <ExerciseDetails /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};