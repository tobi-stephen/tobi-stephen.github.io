import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './components/home/home';
import Work from './components/work/work';
import About from './components/about/about';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/work" component={Work}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
