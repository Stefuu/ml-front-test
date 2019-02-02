import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import { withTests } from '@storybook/addon-jest'
import results from '../../../.jest-test-results.json'
import readmeFile from './README.md'

storiesOf('app/components/elements/Flex', module)
  .addDecorator(withTests({ results }))
  .addParameters({ jest: ['Flex.test.js'] })
  .add('README', doc(readmeFile))
