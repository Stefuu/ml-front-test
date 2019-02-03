import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { rem } from 'polished'
import axios from 'axios'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import Content from '../../components/modules/Content'
import Container from '../../components/modules/Container'
import Flex from '../../components/elements/Flex'
import Box from '../../components/elements/Box'
import Button from '../../components/inputs/Button'
import { formatCurrency, formatDecimals } from '../../helpers'

const DescriptionContainer = styled(Box)`
  line-height: 1.3;
  margin-top: ${rem(32)};
  font-Size: ${rem(16)};
  color: ${theme('colors.b40')};
  span {
    white-space: pre-line;
    word-break: break-word;
  }
`

const Price = styled(Box)`
  margin-top: 20px;
  span {
    line-height: 1;
    font-size: ${rem(46)}
  }
  small {
    line-height: 1.6;
    font-size: ${rem(18)}
    vertical-align: top;
    margin-left: 5px;
  }
`

const renderItemDetailsIfItem = (item) => {
  if(item){
    return (
      <Flex
        flexDirection={['column', 'row']}>
        <Flex 
          maxWidth={[590, 560, 661]}
          flexDirection='column'>
          <Box height={[200, 400, 600]}>
            <img height='100%' src={item.picture} alt='Product' />
          </Box>
          <Box
            fontSize={rem(28)}>
            <span>Descripcíon del producto</span>
          </Box>
          <DescriptionContainer>
            <span>{item.description}</span>
          </DescriptionContainer>
        </Flex>
        <Flex 
          lineHeight={1.3}
          maxWidth={190}
          flexDirection='column'>
          <Box>
            <span>
              {item.condition === 'new' ? 'Nuevo - ' : ''}{item.sold_quantity} vendidos
            </span>
          </Box>
          <Box
            fontWeight='bold'
            fontSize={24}
            mt={5}>
            <span>{item.title}</span>
          </Box>
          <Price>
            <span>$ {formatCurrency(item.price.amount)}</span><small>{formatDecimals(item.price.decimals)}</small>
          </Price>
          <Button
            mt={rem(54)}
            fontSize={rem(18)}
            width={rem(248)}
            height={rem(45)}>
            Comprar
          </Button>
        </Flex>
      </Flex>
    )
  }
}

class ProductDetails extends React.Component {
  state = {}

  componentDidMount = async () => {
    try {
      const response = await axios(`http://localhost:8088/api/items/${this.props.match.params.id}`)
      
      const item = response.data.item
      console.log('item', item)
      this.setState({ item })
    } 
    catch(error) {
        this.setState({ error })
    }
    // this.props.match.params
  }

  render () {
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
