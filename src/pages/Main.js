import React from 'react'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Projects from './Projects'


import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/projects' component={Projects}/>
    </Switch>  
)

export default Main