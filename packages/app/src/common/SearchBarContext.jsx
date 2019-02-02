import React from 'react'
const SearchContext = React.createContext()
export const Consumer = SearchContext.Consumer

class SearchBarProvider extends React.Component {

  onSubmit = (e) => {
    e.preventDefault()
  }

  onChange = (e) => this.setState({ searchTerm: e.target.value })

  state = {
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
      {context => <Component {...props} context={context} />}
    </Consumer>
  )
}

export default SearchBarProvider
