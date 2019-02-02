import React from 'react'
import Box from '../components/elements/Box'
import RetinaImage from '../components/behaviour/RetinaImage'
import Logo from '../assets/Logo_ML.png'
import RetinaLogo from '../assets/Logo_ML@2x.png'

const SearchBar = () => (
  <Box>
    <Box>
      <RetinaImage height='36px' regular={Logo} retina={RetinaLogo} alt='' />
    </Box>
  </Box>
)

export default SearchBar
