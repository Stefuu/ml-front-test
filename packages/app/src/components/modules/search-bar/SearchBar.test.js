import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should be able to type the search term', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    )

    let input
    input = getByTestId('input-search')
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'TEST VALUE' } })
    expect(input.value).toBe('TEST VALUE')
  })
})
