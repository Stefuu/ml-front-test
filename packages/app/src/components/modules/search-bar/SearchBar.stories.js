import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import SearchBar from './SearchBar'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../../modules/GlobalStyle'

storiesOf('app/components/modules/SearchBar', module)
  .addParameters({ jest: ['SearchBarContext.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('simple', () => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <SearchBar />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  ))
