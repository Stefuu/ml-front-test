import React from 'react'
import { render } from 'react-testing-library'
import Flex from './Flex'

describe('Flex', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Flex />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
