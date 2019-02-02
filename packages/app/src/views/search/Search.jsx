import React from 'react'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import Content from '../../components/modules/Content'

class Search extends React.Component {
  render () {
    return (
      <Content />
    )
  }
}

export default withSearchBar(Search)
