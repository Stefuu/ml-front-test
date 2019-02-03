import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'

storiesOf('app/components/elements/Flex', module)
  .addParameters({ jest: ['Flex.test.js'] })
  .add('README', doc(readmeFile))
