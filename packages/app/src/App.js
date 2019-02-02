import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './components/themes/default'
import Routes from './components/modules/Routes'
import GlobalStyle from './components/modules/GlobalStyle'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
