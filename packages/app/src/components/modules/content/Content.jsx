import styled from 'styled-components'
import { theme } from 'styled-tools'
import Box from '../../elements/Box'

const Content = styled(Box)`
  min-height: 100vh;
  background-color: ${props => props.color || theme('colors.b5')};
`

export default Content
