import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../themes/default'
import { ThemeProvider } from 'styled-components'
import SearchBarContextProvider, { withSearchBar } from './SearchBarContext'
import { BrowserRouter } from 'react-router-dom'
import Content from '../modules/content'
import GlobalStyle from '../modules/GlobalStyle'

const SearchBar = withSearchBar(Content)

storiesOf('app/components/contexts/SearchBarContext', module)
  .addParameters({ jest: ['SearchBarContext.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('simple', () => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SearchBarContextProvider>
          <React.Fragment>
            <GlobalStyle />
            <SearchBar />
          </React.Fragment>
        </SearchBarContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  ))
