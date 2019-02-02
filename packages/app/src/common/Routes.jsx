import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { Route } from 'react-router'
import NotFound from '../common/404'
import Search from '../views/search'
import SearchResults from '../views/search-results'
import ProductDetails from '../views/product-details'

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/404'
      component={NotFound}
    />
    <Route
      path='/'
      component={Search}
    />
    <Route
      path='/items'
      component={SearchResults}
    />
    <Route
      path='/items/:id'
      component={ProductDetails}
    />
    <Redirect to='/404' />
  </Switch>
)

export default Routes
