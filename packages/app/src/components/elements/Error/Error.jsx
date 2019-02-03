import React from 'react'
import Flex from '../../elements/Flex'

const Error = () => (
  <Flex
    justifyContent='center'
    alignItems='center'
    width='100vw'
    height={300}
    fontSize={26}>
    <span>Se produjo un error, vuelva a intentarlo más tarde</span>
  </Flex>
)

export default Error
