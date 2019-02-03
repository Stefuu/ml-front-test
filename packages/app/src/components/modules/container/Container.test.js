import React from 'react'
import { render } from 'react-testing-library'
import Container from './Container'

describe('Container', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Container />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
