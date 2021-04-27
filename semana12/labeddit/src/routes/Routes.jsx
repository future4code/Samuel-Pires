import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from '../pages/Singn/SignIn'
import SignUp from '../pages/Singn/SignUp'

export default function (){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'}>
          <SignIn />
        </Route>
        <Route exact path={'/signup'}>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}