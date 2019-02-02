import React from 'react'
import SearchBar from '../../common/SearchBar'
import { withSearchBar } from '../../common/SearchBarContext'

class ProductDetails extends React.Component {
  render () {
    return (
      <SearchBar
        onSubmit={this.props.context.onSubmit}
        onChange={this.props.context.onChange}
        searchTerm={this.props.context.searchTerm}
      />
    )
  }
}

export default withSearchBar(ProductDetails)
