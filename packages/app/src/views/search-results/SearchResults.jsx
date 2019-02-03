import React from 'react'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import axios from 'axios'
import querystring from 'querystring'
import Content from '../../components/modules/content'
import Container from '../../components/modules/container'
import CategoriesBreadcrumb from '../../components/modules/categories-breadcrumb'
import ProductItem from './product-item'
import Box from '../../components/elements/Box'
import Flex from '../../components/elements/Flex'
import Spinner from '../../components/elements/Spinner'
import Error from '../../components/elements/Error'

const renderProductsListIfProducts = (products) => {
  if(products && products.length > 0){
    return (
      <Box background='#fff'>
      {
        products.map((item, index) => (
        <ProductItem qa={`product-item-${index+1}`} key={index} item={item} />
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
    this.setState({ loading: true })
    const { location, context } = this.props
    const { q } = querystring.parse(location.search.replace(/\?/g, ''))
    const term = fromQuery ? q : context.searchTerm

    try {
      const response = await axios(`http://localhost:8088/api/items?q=${term}&limit=4`)
      const products = response.data.items
      const categories = response.data.categories
      this.setState({ products, categories, loading: false })
    } 
    catch(error) {
        this.setState({ error, loading: false })
    }
  }

  componentDidMount = async () => this.getData(true)

  componentWillReceiveProps = (nextProps) => {
    if(this.props.context.lastSearchTerm !== nextProps.context.lastSearchTerm) {
      this.getData()
    }
  }

  render () {
    const { products, categories, loading, error } = this.state

    if(error) return <Error />

    if(loading) {
      return (
        <Flex 
          alignItems='center'
          justifyContent='center'
          width='100%'
          height='100vh'>
          <Spinner size={100} color='#999' />
        </Flex>
      )
    }
    
    return (
      <Content>
          <Container>
            {(categories && categories.length > 0) ? <CategoriesBreadcrumb categories={categories} /> : <Box height={60}/>}
            {renderProductsListIfProducts(products)}
          </Container>
      </Content>
    )
  }
}

export default withSearchBar(SearchResults)
