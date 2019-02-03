import React from 'react'
import theme from '../../components/themes/default'
import { ThemeProvider } from 'styled-components'
import { render, waitForElement } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../components/modules/GlobalStyle'
import SearchBarProovider from '../../components/contexts/SearchBarContext'
import ProductDetails from './ProductDetails'

const Component = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SearchBarProovider>
        <div style={{ width: '100vw' }}>
          <GlobalStyle />
          <ProductDetails match={{ params: { id: 'MLA688402084' } }} />
        </div>
      </SearchBarProovider>
    </ThemeProvider>
  </BrowserRouter>
)

describe('SearchBar', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<Component />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the components after loading', async () => {
    const { getByText } = render(<Component />)
    const buttonBuy = await waitForElement(() => getByText('Comprar'))
    expect(buttonBuy).not.toBe(undefined)
  })
})
