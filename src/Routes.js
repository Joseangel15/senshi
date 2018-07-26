import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Account_Page from './Components/Account_Page/Account_Page';
import School_Creation from './Components/School_Creation/School_Creation';
import School_Info from './Components/School_Info/School_Info';
import About from './Components/About/About'
import Instructor_Info from './Components/Instructor_Info/Instructor_Info';
import Edit_School from './Components/Edit_School/Edit_School';

export default(

    <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Home} exact path='/Home' />
        <Route component={Account_Page} path='/Account_Page' />
        <Route component={School_Creation} path='/School_Creation' />
        <Route component={School_Info} path='/School_Info/:id' />
        <Route component={About} path='/About' />
        <Route component={Instructor_Info} path='/Instructor_Info/:id' />
        <Route component={Edit_School} path='/Edit_School/:id' />
    </Switch>


)