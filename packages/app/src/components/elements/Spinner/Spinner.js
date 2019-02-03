import styled from 'styled-components'

const Spinner = styled.div`
  animation: rotate 1s infinite linear;
  border: solid ${props => props.thickness}px transparent;
  border-radius: 50%;
  border-right-color: ${props => props.color};
  border-top-color: ${props => props.color};
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  @keyframes rotate {
    from { transform: rotate(0deg) }
    to { transform: rotate(359deg) }
  }
`

Spinner.defaultProps = {
  color: 'rgba(255,255,255,.8)',
  size: 20,
  thickness: 3
}

export default Spinner
