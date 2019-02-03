import React from 'react'
import { render } from 'react-testing-library'
import Error from './Error'

describe('Error', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Error />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
