import tag from 'clean-tag'
import styled from 'styled-components'
import { theme } from 'styled-tools'

const SearchButton = styled(tag.button)`
    background-color: ${theme('colors.b5')}
    cursor: pointer;
    width: 42px;
    height: 100%;
    display: flex;
    justify-content: center;
    outline: none;
`

export default SearchButton
