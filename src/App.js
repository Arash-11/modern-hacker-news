import React from 'react';
import './stylesheet/style.css';
import Navbar from './components/Navbar';
import TopStories from './pages/TopStories';
import NewStories from './pages/NewStories';
import SpecificComments from './pages/SpecificComments';
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
                <Route path="/storycomments" component={SpecificComments} exact />
            </Switch>
        </Router>
    )
}

export default App;