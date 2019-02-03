import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, color, number } from '@storybook/addon-knobs'
import { doc } from 'storybook-readme'
import Spinner from './Spinner'
import readmeFile from './README.md'

storiesOf('app/components/icons/Spinner', module)
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Spinner.test.js'] })
  .add('simple', () => (
    <Spinner size={number('size', 20)} thickness={number('thickness', 3)} color={color('color', '#000')} />
  ))
