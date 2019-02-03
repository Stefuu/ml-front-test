import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, color } from '@storybook/addon-knobs'
import { doc } from 'storybook-readme'
import Content from './Content'
import readmeFile from './README.md'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'

storiesOf('app/components/modules/Content', module)
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Content.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <Content color={color('color', 'gray')}>
        <div><span style={{color: '#fff'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>
      </Content>
    </ThemeProvider>
  ))
