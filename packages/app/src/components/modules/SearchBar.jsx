
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { rem } from 'polished'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import Container from '../modules/container'
import Flex from '../elements/Flex'
import Box from '../elements/Box'
import InputText from '../inputs/InputText'
import SearchButton from '../inputs/SearchButton'
import RetinaImage from '../behaviour/RetinaImage'
import LogoImageRegular from '../../assets/Logo_ML.png'
import LogoImageRetina from '../../assets/Logo_ML@2x.png'
import SearchImageRegular from '../../assets/ic_Search.png'
import SearchImageRetina from '../../assets/ic_Search@2x.png'

const StyledBox = styled(Box)`
  padding: 10px 0px 10px 10px;
  background-color: ${theme('colors.secondary')};
`

const SearchBar = (props) => (
  <StyledBox>
    <Container>
      <Flex>
        <Box as={Link} to='/' mr={rem(27)}>
          <RetinaImage
            width={rem(53)}
            height={rem(36)}
            regular={LogoImageRegular}
            retina={LogoImageRetina}
            alt='Logo' />
        </Box>
        <Flex
          onSubmit={props.onSubmit}
          mr={rem(5)}
          as={'form'}
          width='100%'>
          <InputText
            fluid
            onChange={props.onChange}
            value={props.searchTerm}
            type='text'
            placeholder='Nunca dejes de buscar' />
          <SearchButton onClick={props.onSubmit}>
            <RetinaImage
              width={rem(20)}
              height={rem(18)}
              regular={SearchImageRegular}
              retina={SearchImageRetina}
              alt='Logo' />
          </SearchButton>
        </Flex>
      </Flex>
    </Container>
  </StyledBox>
)

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
}

export default SearchBar
