import React from 'react';
import './stylesheet/style.css';
import Navbar from './Navbar';
import TopStories from './TopStories';
import NewStories from './NewStories';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={TopStories} exact />
                <Route path="/new" component={NewStories} exact />
            </Switch>
        </Router>
    )
}

export default App;