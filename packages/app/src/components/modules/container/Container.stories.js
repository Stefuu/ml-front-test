import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, number } from '@storybook/addon-knobs'
import { doc } from 'storybook-readme'
import Container from './Container'
import readmeFile from './README.md'
import theme from '../../themes/default'
import styled, { ThemeProvider } from 'styled-components'

const Text = styled.div`
  background-color: #000;
  color: #fff;
`

storiesOf('app/components/modules/Container', module)
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Container.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <Container maxWidth={number('maxWidth', 400)}>
        <Text><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></Text>
      </Container>
    </ThemeProvider>
  ))
