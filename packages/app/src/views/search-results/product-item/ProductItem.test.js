import React from 'react'
import { render, cleanup } from 'react-testing-library'
import ProductItem from './ProductItem'
import item from './__fixtures__/item.json'
import { BrowserRouter } from 'react-router-dom'

describe('ProductItem', () => {
  afterEach(cleanup)

  it('Should [snapshot]', async () => {
    const { container } = render(
      <BrowserRouter>
        <ProductItem item={item} />
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render shipping icon when shipping is free', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ProductItem item={item} />
      </BrowserRouter>
    )
    const firstProduct = await getByTestId('product-item-1')
    const shippingIco = await getByTestId('shipping_ico')
    expect(firstProduct).not.toBe(undefined)
    expect(shippingIco).not.toBe(undefined)
  })

  it('Should not render shipping icon when shipping is not free', async () => {
    const { queryByTestId, getByTestId } = render(
      <BrowserRouter>
        <ProductItem item={{ ...item, free_shipping: false }} />
      </BrowserRouter>
    )
    const firstProduct = await getByTestId('product-item-1')
    expect(firstProduct).not.toBe(undefined)
    expect(queryByTestId('shipping_ico')).toBeNull()
  })
})
