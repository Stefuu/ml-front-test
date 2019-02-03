import React from 'react'
import { render } from 'react-testing-library'
import Error from './Error'

describe('Error', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Error />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
