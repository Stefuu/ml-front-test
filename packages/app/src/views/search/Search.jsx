import React from 'react'
import SearchBar from '../../common/SearchBar'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { withSearchBar } from '../../common/SearchBarContext'
import Box from '../../components/elements/Box'

const SearchContainer = styled(Box)`
  min-height: 100vh;
  background-color: ${theme('colors.b5')};
`

class Search extends React.Component {
  render () {
    return (
      <SearchContainer>
        <SearchBar
          onSubmit={this.props.context.onSubmit}
          onChange={this.props.context.onChange}
          searchTerm={this.props.context.searchTerm}
        />
      </SearchContainer>
    )
  }
}

export default withSearchBar(Search)
