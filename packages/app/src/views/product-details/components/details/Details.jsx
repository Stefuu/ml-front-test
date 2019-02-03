import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Flex from '../../../../components/elements/Flex'
import Box from '../../../../components/elements/Box'
import { rem } from 'polished'
import Button from '../../../../components/inputs/Button'
import { formatCurrency, formatDecimals } from '../../../../helpers'

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

const Details = ({ item }) => (
  <Flex
    flexDirection={['column', 'row']}>
    <Flex
      mr={rem(32)}
      maxWidth={[590, 560, 661]}
      flexDirection='column'>
      <Box height={[200, 400, 600]}>
        <img height='100%' src={item.picture} alt='Product' />
      </Box>
      <Box
        mt={35}
        fontSize={rem(28)}>
        <span>Descripcíon del producto</span>
      </Box>
      <DescriptionContainer>
        <span>{item.description}</span>
      </DescriptionContainer>
    </Flex>
    <Flex
      lineHeight={1.3}
      maxWidth={250}
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
        data-testid='button-buy'
        mt={rem(54)}
        fontSize={rem(18)}
        width={rem(248)}
        height={rem(45)}>
            Comprar
      </Button>
    </Flex>
  </Flex>
)

export default Details
