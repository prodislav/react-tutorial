import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Container from './App.js';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './home';
// import TodoItem from './TodoItem';
// import { Link } from 'react-router-dom';


const RouterComponent = () => {
    return (
        "My Application running with Netlify"
        // <BrowserRouter>
        //     <Switch>
        //         <Route path='/home' component={Home} />
        //         <Route path='/list' component={Container} />
        //         <Route path='/todoItem/:id' component={TodoItem} />
        //     </Switch>
        //     <footer>
        //         <li><Link to={`/home`}>{'Home'}</Link></li>
        //         <li><Link to={`/todoItem/${5}`}>{'5 todo'}</Link></li>
        //         <li><Link to={`/list`}>{'List'}</Link></li>
        //     </footer>
        // </BrowserRouter>
    )
}

RouterComponent.displayName = 'RouterComponent'

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
