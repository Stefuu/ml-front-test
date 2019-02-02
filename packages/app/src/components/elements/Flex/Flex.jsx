import { withProps } from 'recompose'
import Box from '../Box'

const Flex = withProps(props => ({ display: 'flex', ...props }))(Box)

export default Flex
