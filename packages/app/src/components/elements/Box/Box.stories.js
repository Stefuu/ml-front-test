import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'

storiesOf('app/components/elements/Box', module)
  .addParameters({ jest: ['Box.test.js'] })
  .add('README', doc(readmeFile))
