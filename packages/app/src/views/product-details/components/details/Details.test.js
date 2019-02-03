import React from 'react'
import { render } from 'react-testing-library'
import Details from './Details'
import item from './__fixtures__/item.json'

describe('Details', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Details item={item} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
