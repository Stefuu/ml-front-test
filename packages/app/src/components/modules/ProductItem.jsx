import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../elements/Flex'
import Box from '../elements/Box'
import tag from 'clean-tag'
import { rem } from 'polished'
import { theme } from 'styled-tools'

const StyledImg = styled(tag.img)`
    height: 100%;
    border-radius: 4px;
`

const Container = styled(Flex)`
    border-bottom: 1px solid ${theme('colors.b5')};
    cursor: pointer;
`

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
        <Box>
        preço e title
        </Box>
      </Flex>
      <Box>
        Cidade
      </Box>
    </Container>
  )
}

ProductItem.propTypes = {
  item: PropTypes.object
}

export default withRouter(ProductItem)
