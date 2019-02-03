import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../../components/themes/default'
import { ThemeProvider } from 'styled-components'
import ProductDetails from './ProductDetails'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../components/modules/GlobalStyle'
import SearchBarProovider from '../../components/contexts/SearchBarContext'

storiesOf('app/views/product-details/ProductDetails', module)
  .addParameters({ jest: ['ProductDetails.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('simple', () => (
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
  ))
