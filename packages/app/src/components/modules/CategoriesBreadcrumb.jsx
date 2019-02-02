import React from 'react'
import Box from '../elements/Box'
import { rem } from 'polished'

const CategoriesBreadcrumb = (props) => (
  <Box
    py={rem(16)}>
    {props.categories.map((cat, index) => (
      <span key={index}>{cat}{props.categories.length !== index + 1 ? ' > ' : ''}</span>
    ))}
  </Box>
)

export default CategoriesBreadcrumb
