import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import InputText from './InputText'
import GlobalStyle from '../../modules/GlobalStyle'
import Content from '../../modules/content'
import Flex from '../../elements/Flex'

storiesOf('app/components/inputs/InputText', module)
  .addParameters({ jest: ['InputText.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addParameters({ jest: ['Content.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <Flex
        alignItems='center'
        justifyContent='center'
        as={Content}
        width={'100vw'}
        color='#FFE600'>
        <GlobalStyle />
        <InputText />
      </Flex>
    </ThemeProvider>
  ))
