import React from 'react';
import './stylesheet/style.css';
import Navbar from './components/Navbar';
import TopStories from './pages/TopStories';
import NewStories from './pages/NewStories';
import AskStories from './pages/AskStories';
import ShowStories from './pages/ShowStories';
import Jobs from './pages/Jobs';
import UserInfo from './pages/UserInfo';
import StoryComments from './pages/StoryComments';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' component={TopStories} exact />
                <Route path='/top' component={TopStories} exact />
                <Route path='/new' component={NewStories} exact />
                <Route path='/ask' component={AskStories} exact />
                <Route path='/show' component={ShowStories} exact />
                <Route path='/jobs' component={Jobs} exact />
                <Route path='/user' component={UserInfo} exact />
                <Route path='/storycomments' component={StoryComments} exact />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default App;