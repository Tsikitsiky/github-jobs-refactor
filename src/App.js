import React from 'react'
import { Route, Switch } from 'react-router';
import Home from './pages/Home'
import Description from './pages/Description'

function App() {
    return (
        <div>
            <h1>Github <span>Jobs</span></h1>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/description:id">
                    <Description />
                </Route>
            </Switch>
        </div>
    )
}

export default App
