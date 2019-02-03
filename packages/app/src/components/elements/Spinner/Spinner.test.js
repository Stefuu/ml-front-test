import React from 'react'
import { render } from 'react-testing-library'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
