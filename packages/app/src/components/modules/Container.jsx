import React from 'react'
import Box from '../elements/Box'

const Container = (props) => (
  <Box
    m='0 auto'
    maxWidth={1040}
    {...props}>
    {props.children}
  </Box>
)

export default Container
