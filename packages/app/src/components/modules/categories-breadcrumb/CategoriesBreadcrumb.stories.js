import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, array } from '@storybook/addon-knobs'
import { doc } from 'storybook-readme'
import CategoriesBreadcrumb from './CategoriesBreadcrumb'
import readmeFile from './README.md'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'

storiesOf('app/components/modules/CategoriesBreadcrumb', module)
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['CategoriesBreadcrumb.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <CategoriesBreadcrumb categories={array('categories', ['Computación', ' Periféricos de PC', ' Mouses'])} />
    </ThemeProvider>
  ))
