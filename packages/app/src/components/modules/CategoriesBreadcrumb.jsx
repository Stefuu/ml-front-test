import React from 'react'
import Box from '../elements/Box'
import styled from 'styled-components'
import { rem } from 'polished'
import { theme } from 'styled-tools'

const Container = styled(Box)`
 color: ${theme('colors.b40')};
 font-size: 14px;
 span {
   :last-child {
     font-weight: bold;
   }
 }
`

const CategoriesBreadcrumb = (props) => (
  <Container
    py={rem(16)}>
    {props.categories.map((cat, index) => {
      const lastIndex = props.categories.length !== index + 1
      return (
        <span key={index}>
          {cat}{lastIndex ? ' > ' : ''}
        </span>
      )
    })}
  </Container>
)

export default CategoriesBreadcrumb
