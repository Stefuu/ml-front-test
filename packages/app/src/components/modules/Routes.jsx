import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { Route } from 'react-router'
import Search from '../../views/search'
import SearchResults from '../../views/search-results'
import ProductDetails from '../../views/product-details'
import SearchBarProvider from '../contexts/SearchBarContext'

const Routes = () => (
  <SearchBarProvider>
    <Switch>
      <Route
        exact
        path='/'
        component={Search}
      />
      <Route
        exact
        path='/items'
        component={SearchResults}
      />
      <Route
        exact
        path='/items/:id'
        component={ProductDetails}
      />
      <Redirect to='/' />
    </Switch>
  </SearchBarProvider>
)

export default Routes
