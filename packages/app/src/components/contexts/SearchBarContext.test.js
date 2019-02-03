import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import SearchBarContextProvider, { withSearchBar } from './SearchBarContext'

describe('SearchBarContext', () => {
  afterEach(cleanup)

  let currentContext = {}

  const Component = (props) => {
    currentContext = { ...props.context }
    return <div />
  }

  const SearchBar = withSearchBar(Component)

  it('Should render [snapshot]', async () => {
    const { container } = render(
      <BrowserRouter>
        <SearchBarContextProvider>
          <SearchBar />
        </SearchBarContextProvider>
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should store the typed search term into the context', async () => {
    const Component = () => (
      <BrowserRouter>
        <SearchBarContextProvider>
          <SearchBar />
        </SearchBarContextProvider>
      </BrowserRouter>
    )

    const { getByTestId } = render(<Component />)

    let input
    input = getByTestId('input-search')
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'TEST VALUE' } })
    expect(input.value).toBe('TEST VALUE')
    expect(currentContext.searchTerm).toBe('TEST VALUE')
  })

  it('Should store the previous search term into the context', async () => {
    const Component = () => (
      <BrowserRouter>
        <SearchBarContextProvider>
          <SearchBar />
        </SearchBarContextProvider>
      </BrowserRouter>
    )

    const { getByTestId } = render(<Component />)

    const searchButton = getByTestId('search-button')

    let input
    input = getByTestId('input-search')
    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'TEST VALUE' } })
    expect(input.value).toBe('TEST VALUE')

    fireEvent.click(searchButton)
    fireEvent.change(input, { target: { value: 'TEST VALUE 2' } })

    expect(input.value).toBe('TEST VALUE 2')
    expect(currentContext.lastSearchTerm).toBe('TEST VALUE')

    fireEvent.click(searchButton)
    expect(currentContext.lastSearchTerm).toBe('TEST VALUE 2')
  })
})
