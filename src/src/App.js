import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Header from './Header'
import Footer from'./Footer'
import Home from './actions/Home'
import Login from './actions/Login'
import Logout from './actions/Logout'
import Information from './actions/Information'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'

class App extends Component {

    toInfPage = () => {
        console.log('1');
        return <Redirect to='/thongtin' />;
    }

    render() {
        return (
            <Router>
              <div className="program">
                <Header />
                <Switch>
                  <Route path='/' exact component={Login} />
                  <Route path='/login' component={Login} />
                  <Route path='/thongtin' component={Information} />
                  <Route path='/home' component={Home} />
                  <Route path='/logout' component={Logout} />
                </Switch> 
                <Footer />
              </div>
            </Router>
        );
    }
}

export default App;