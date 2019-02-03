import React from 'react'
import { render } from 'react-testing-library'
import Content from './Content'

describe('Content', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Content />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
