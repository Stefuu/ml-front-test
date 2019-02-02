import React from 'react'
import Box from '../components/elements/Box'

const PageContainer = (props) => (
  <Box
    m='0 auto'
    maxWidth={1040}>
    {props.children}
  </Box>
)

export default PageContainer
