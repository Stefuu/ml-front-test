import React from 'react'
import { withRouter } from 'react-router-dom'
import SearchBar from '../modules/SearchBar'
const SearchContext = React.createContext()
export const Consumer = SearchContext.Consumer

class SearchBarProvider extends React.Component {

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ lastSearchTerm: this.state.searchTerm }, () => {
      this.props.history.push({
        pathname: '/items',
        search: '?q=' + this.state.searchTerm
      })
    })
  }

  onChange = (e) => this.setState({ searchTerm: e.target.value })

  state = {
    lastSearchTerm: '',
    searchTerm: '',
    onSubmit: this.onSubmit,
    onChange: this.onChange
  }

  render () {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

export const withSearchBar = (Component) => {
  return (props) => (
    <Consumer>
      {
        context => (
          <React.Fragment>
            <SearchBar
              onSubmit={context.onSubmit}
              onChange={context.onChange}
              searchTerm={context.searchTerm}
            />
            <Component {...props} context={context} />
          </React.Fragment>
        )
      }
    </Consumer>
  )
}

export default withRouter(SearchBarProvider)
