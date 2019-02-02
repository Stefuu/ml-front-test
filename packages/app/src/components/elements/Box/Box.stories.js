import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import { withTests } from '@storybook/addon-jest'
import results from '../../../.jest-test-results.json'
import readmeFile from './README.md'

storiesOf('app/components/elements/Box', module)
  .addDecorator(withTests({ results }))
  .addParameters({ jest: ['Box.test.js'] })
  .add('README', doc(readmeFile))
