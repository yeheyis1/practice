import React from 'react'
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Contact from '../src/Home/Contact/contact'
import login from '../src/Home/Login/Login'

import {BrowserRouter, Route, Link} from "react-router-dom";


class App extends React.Component {

  render(){
    return(

            <BrowserRouter>

      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route exact path="/login" Component={Login}/>
       
            </BrowserRouter>
    )
  }
}

export default App;
