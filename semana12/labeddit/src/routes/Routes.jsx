import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from '../pages/Singn/SignIn'

export default function (){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'}>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}