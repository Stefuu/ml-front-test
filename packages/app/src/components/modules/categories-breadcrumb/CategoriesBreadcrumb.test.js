import React from 'react'
import { render } from 'react-testing-library'
import CategoriesBreadcrumb from './CategoriesBreadcrumb'

describe('CategoriesBreadcrumb', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<CategoriesBreadcrumb />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
