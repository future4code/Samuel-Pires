import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import Header from './components/Header'

const Browser = styled(BrowserRouter)`
  width: 100vw;
`

function App() {
  return (
    <Browser>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>
        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </Browser>
  );
}

export default App;
