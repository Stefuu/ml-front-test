import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs, color, number } from '@storybook/addon-knobs'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import Button from './Button'
import GlobalStyle from '../../modules/GlobalStyle'

storiesOf('app/components/elements/Button', module)
  .addParameters({ jest: ['Button.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Content.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Button color={color('color', '')} width={number('width', 170)} height={number('height', 56)}>Test</Button>
      </React.Fragment>
    </ThemeProvider>
  ))
