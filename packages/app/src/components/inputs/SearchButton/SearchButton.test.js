import React from 'react'
import { render } from 'react-testing-library'
import SearchButton from './SearchButton'

describe('SearchButton', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<SearchButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
