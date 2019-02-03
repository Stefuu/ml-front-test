import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import Error from './Error'

storiesOf('app/components/elements/Error', module)
  .addParameters({ jest: ['Button.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Content.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <Error />
    </ThemeProvider>
  ))
