import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from '../pages/Singn/SignIn'
import SignUp from '../pages/Singn/SignUp'
import Feed from "../pages/Private/Feed";

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
        <Route exact path={'/'}>
          <Feed />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}