import React from 'react'
import theme from '../../components/themes/default'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../components/modules/GlobalStyle'
import SearchBarProovider from '../../components/contexts/SearchBarContext'
import Search from './Search'

const Component = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SearchBarProovider>
        <div style={{ width: '100vw' }}>
          <GlobalStyle />
          <Search />
        </div>
      </SearchBarProovider>
    </ThemeProvider>
  </BrowserRouter>
)

describe('Search', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Component />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should be able to type into the input and submit', async () => {
    const { getByTestId } = render(<Component />)
    const input = getByTestId('input-search')
    const searchButton = getByTestId('search-button')
    fireEvent.change(input, { target: { value: 'notebook' } })
    fireEvent.click(searchButton)
    fireEvent.change(input, { target: { value: 'TEST VALUE' } })
    expect(input.value).toBe('TEST VALUE')
    fireEvent.click(searchButton)
    fireEvent.change(input, { target: { value: 'TEST VALUE 2' } })
    expect(input.value).toBe('TEST VALUE 2')
  })
})
