import React from 'react'
import { rem } from 'polished'
import axios from 'axios'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import Content from '../../components/modules/content'
import Container from '../../components/modules/container'
import Flex from '../../components/elements/Flex'
import Box from '../../components/elements/Box'
import Spinner from '../../components/elements/Spinner'
import Error from '../../components/elements/Error'
import Details from './components/details'

const renderItemDetailsIfItem = (item) => {
  if(item){
    return (
      <Details item={item} />
    )
  }
}

class ProductDetails extends React.Component {
  state = {
    loading: true
  }

  componentDidMount = async () => {
    try {
      const response = await axios(`http://localhost:8088/api/items/${this.props.match.params.id}`)
      const item = response.data.item
      this.setState({ item, loading: false })
    } 
    catch(error) {
        this.setState({ error, loading: false })
    }
  }

  render () {
    const { loading, error } = this.state

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
      <Content pt={rem(30)}>
        <Container>
          <Box 
          p={rem(32)}
          background='#fff'>
          {renderItemDetailsIfItem(this.state.item)}
          </Box>
        </Container>
      </Content>
    )
  }
}

export default withSearchBar(ProductDetails)
