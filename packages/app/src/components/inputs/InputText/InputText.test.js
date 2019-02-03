import React from 'react'
import { render } from 'react-testing-library'
import InputText from './InputText'

describe('InputText', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<InputText />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
