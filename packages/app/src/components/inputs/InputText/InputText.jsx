import React from 'react'
import { rem } from 'polished'
import { theme } from 'styled-tools'
import tag from 'clean-tag'
import styled, { css } from 'styled-components'
import { width, maxWidth } from 'styled-system'

export default styled(({fluid, ...props}) => <tag.input {...props} />)`
    font-size: ${rem(16)};
    padding: ${rem(5)} ${rem(0)} ${rem(5)} ${rem(13)};
    ::placeholder { 
        color: ${theme('colors.b30')};
    }
    border: none;
    border-top-left-radius: ${rem(4)};
    border-bottom-left-radius: ${rem(4)};
    outline: none;
    ${props => props.fluid && css`
        width: 100%;
    `}
    ${maxWidth}
    ${width}
`
