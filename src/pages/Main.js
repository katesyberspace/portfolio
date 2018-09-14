import React from 'react'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'


import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/projects' component={Projects}/>
    </Switch>  
)

export default Main