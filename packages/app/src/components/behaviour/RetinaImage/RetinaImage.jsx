import styled from 'styled-components'
import { height, space, width } from 'styled-system'

const RetinaImage = styled.div`
    background-image: url(${props => props.regular});
    background-size: contain;
    background-repeat: no-repeat;
    @media 
    (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
        background-image: url(${props => props.retina});
    }
    ${height}
    ${space}
    ${width}
`

export default RetinaImage
