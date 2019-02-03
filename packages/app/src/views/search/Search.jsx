import React from 'react'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import Content from '../../components/modules/content'

const Search = () => <Content />

export default withSearchBar(Search)
