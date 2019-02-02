import React from 'react'
import SearchBar from '../../common/SearchBar'

class Search extends React.Component {
  state = {
    searchTerm: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
  }

  onChange = (e) => this.setState({ searchTerm: e.target.value })

  render () {
    return (
      <SearchBar 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        searchTerm={this.state.searchTerm} 
      />
    )
  }
}

export default Search
