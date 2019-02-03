import React from 'react'
import { render } from 'react-testing-library'
import Button from './Button'

describe('Button', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
