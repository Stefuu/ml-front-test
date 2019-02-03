import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs, object } from '@storybook/addon-knobs'
import theme from '../../../../components/themes/default'
import { ThemeProvider } from 'styled-components'
import Details from './Details'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../../../components/modules/GlobalStyle'
import item from './__fixtures__/item.json'

storiesOf('app/views/product-details/components/Details', module)
  .addParameters({ jest: ['Details.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('simple', () => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Details item={object('item', item)} />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  ))
