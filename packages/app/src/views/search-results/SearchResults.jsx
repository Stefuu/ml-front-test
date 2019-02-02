import React from 'react'
import SearchBar from '../../common/SearchBar'
import { withSearchBar } from '../../common/SearchBarContext'
import axios from 'axios'
import querystring from 'querystring'

class SearchResults extends React.Component {
  state = {
    products: []
  }

  componentDidMount = async () => {
    const { location } = this.props
    const { q } = querystring.parse(location.search.replace(/\?/g, ''))
    try {
      const response = await axios(`http://localhost:8088/api/items?q=${q}`)
      const products = response.data
      this.setState({ products })
    } 
    catch(error) {
        this.setState({ error })
    }
  }

  render () {
    const { products, error } = this.state
    const { onSubmit, onChange, searchTerm } = this.props.context
    
    return (
      <div>
        <SearchBar
          onSubmit={onSubmit}
          onChange={onChange}
          searchTerm={searchTerm}/>
          {(products.length > 0 && !error) && <div>prods</div>}
      </div>
    )
  }
}

export default withSearchBar(SearchResults)
