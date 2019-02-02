import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../elements/Flex'
import Box from '../elements/Box'
import tag from 'clean-tag'
import { rem } from 'polished'
import { theme } from 'styled-tools'
import { formatCurrency } from '../../helpers'
import RetinaImage from '../behaviour/RetinaImage'
import ShippingImageRegular from '../../assets/ic_shipping.png'
import ShippingImageRetina from '../../assets/ic_shipping@2x.png'

const StyledImg = styled(tag.img)`
    height: 100%;
    border-radius: 4px;
`

const Container = styled(Flex)`
    border-bottom: 1px solid ${theme('colors.b5')};
    border-radius: 4px;
    cursor: pointer;
`

const City = styled(Box)`
    font-size: ${rem(12)};
    margin-top: ${rem(40)};
    margin-right: ${rem(80)};
    color: ${theme('colors.b60')};
`

const renderShippingImageIfFree = (item) => {
  if (item.free_shipping) {
    return <RetinaImage
      mt={rem(5)}
      ml={rem(10)}
      width={rem(18)}
      height={rem(18)}
      regular={ShippingImageRegular}
      retina={ShippingImageRetina}
      alt='Shipping Icon' />
  }

  return null
}

const ProductItem = ({ item, history }) => {
  return (
    <Container
      onClick={() => history.push(`/items/${item.id}`)}
      mx={rem(16)}
      py={rem(16)}
      justifyContent='space-between'>
      <Flex justifyContent='flex-start'>
        <Box
          pr={16}
          height={rem(175)}>
          <StyledImg src={item.picture} alt='Product picture' />
        </Box>
        <Flex mt={rem(16)}>
          <Box>
            <Flex fontSize={rem(26)}>
              <span>$ {formatCurrency(item.price.amount)}</span>
              {renderShippingImageIfFree(item)}
            </Flex>
            <Box
              mt={rem(16)}
              maxWidth={rem(420)}
              fontSize={rem(18)}>
              <span>{item.title}</span>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <City>
        <span>Capital Federal</span>
      </City>
    </Container>
  )
}

ProductItem.propTypes = {
  item: PropTypes.object
}

export default withRouter(ProductItem)
