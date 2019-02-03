import React from 'react'
import axios from 'axios'
import theme from '../../components/themes/default'
import { ThemeProvider } from 'styled-components'
import { render, wait } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../components/modules/GlobalStyle'
import SearchBarProovider from '../../components/contexts/SearchBarContext'
import SearchResults from './SearchResults'
import data from './__fixtures__/data.json'
jest.mock('axios')

const Component = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SearchBarProovider>
        <div style={{ width: '100vw' }}>
          <GlobalStyle />
          <SearchResults location={{ search: '?q=notebook&limit=4' }} context={{ searchTerm: '' }} />
        </div>
      </SearchBarProovider>
    </ThemeProvider>
  </BrowserRouter>
)

describe('SearchResults', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Component />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the products list', async () => {
    axios.mockImplementation(() => ({data}))

    const { getByTestId } = render(<Component />)
    await wait(() => expect(getByTestId('product-item-1')).not.toBe(undefined))
  })
})
