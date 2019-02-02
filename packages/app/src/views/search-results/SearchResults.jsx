import React from 'react'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import axios from 'axios'
import querystring from 'querystring'
import Content from '../../components/modules/Content'
import Container from '../../components/modules/Container'
import CategoriesBreadcrumb from '../../components/modules/CategoriesBreadcrumb'

class SearchResults extends React.Component {
  state = {
    products: [],
    categories: []
  }

  getData = async (fromQuery) => {
    const { location, context } = this.props
    const { q } = querystring.parse(location.search.replace(/\?/g, ''))
    const term = fromQuery ? q : context.searchTerm
    
    try {
      const response = await axios(`http://localhost:8088/api/items?q=${term}`)
      const products = response.data.items
      const categories = response.data.categories
      this.setState({ products, categories })
    } 
    catch(error) {
        this.setState({ error })
    }
  }

  componentDidMount = async () => this.getData(true)

  componentWillReceiveProps = (nextProps) => {
    if(this.props.context.lastSearchTerm !== nextProps.context.lastSearchTerm) {
      this.getData()
    }
  }

  render () {
    const { products, categories, error } = this.state
    return (
      <Content>
          <Container>
            {(categories && categories.length > 0) && <CategoriesBreadcrumb categories={categories} />}
          </Container>
      </Content>
    )
  }
}

export default withSearchBar(SearchResults)
