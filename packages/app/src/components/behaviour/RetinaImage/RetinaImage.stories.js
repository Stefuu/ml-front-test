import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import RetinaImage from './RetinaImage'
import LogoImageRegular from '../../../assets/Logo_ML.png'
import LogoImageRetina from '../../../assets/Logo_ML@2x.png'

storiesOf('app/components/behaviours/RetinaImage', module)
  .addParameters({ jest: ['RetinaImage.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <RetinaImage
        width={53}
        height={36}
        regular={LogoImageRegular}
        retina={LogoImageRetina}
        alt='Logo' />
    </ThemeProvider>
  ))
