import styled from 'styled-components'
import { height } from 'styled-system'

const RetinaImage = styled.div`
    background-image: url(${props => props.regular});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    @media 
    (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
        background-image: url(${props => props.retina});
    }
    ${height}
`

export default RetinaImage
