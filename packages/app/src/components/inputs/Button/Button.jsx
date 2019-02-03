import styled from 'styled-components'
import { theme } from 'styled-tools'
import { height, space, width } from 'styled-system'
import tag from 'clean-tag'

const Button = styled(tag.button)`
    cursor: pointer;
    outline: none;
    border-radius: 6px;
    color: ${theme('colors.b0')};
    background-color: ${theme('colors.primary')};
    ${height}
    ${space}
    ${width}
`

export default Button
