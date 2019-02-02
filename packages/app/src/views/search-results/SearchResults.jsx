import React from 'react'
import styled from 'styled-components'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import axios from 'axios'
import querystring from 'querystring'
import Content from '../../components/modules/Content'
import Container from '../../components/modules/Container'
import CategoriesBreadcrumb from '../../components/modules/CategoriesBreadcrumb'
import ProductItem from '../../components/modules/ProductItem'
import Box from '../../components/elements/Box'

const renderProductsListIfProducts = (products) => {
  if(products && products.length > 0){
    return (
      <Box background='#fff'>
      {
        products.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))
      }
      </Box>
    )
  }

  return null
}

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
      const response = await axios(`http://localhost:8088/api/items?q=${term}&limit=4`)
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
            {renderProductsListIfProducts(products)}
          </Container>
      </Content>
    )
  }
}

export default withSearchBar(SearchResults)
