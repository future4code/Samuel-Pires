import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from '../pages/Singn/SignIn'
import SignUp from '../pages/Singn/SignUp'
import Feed from "../pages/Private/Feed";
import Post from "../pages/Private/Post";
export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'}>
          <SignIn />
        </Route>
        <Route exact path={'/signup'}>
          <SignUp />
        </Route>
        <Route exact path={'/post/:id'}>
          <Post />
        </Route>
        <Route exact path={'/'}>
          <Feed />
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}