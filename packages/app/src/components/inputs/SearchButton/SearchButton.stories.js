import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import readmeFile from './README.md'
import centered from '@storybook/addon-centered'
import theme from '../../themes/default'
import { ThemeProvider } from 'styled-components'
import SearchButton from './SearchButton'
import GlobalStyle from '../../modules/GlobalStyle'
import RetinaImage from '../../behaviour/RetinaImage'
import SearchImageRegular from '../../../assets/ic_Search.png'
import SearchImageRetina from '../../../assets/ic_Search@2x.png'
import Flex from '../../elements/Flex'

storiesOf('app/components/inputs/SearchButton', module)
  .addParameters({ jest: ['InputText.test.js'] })
  .add('README', doc(readmeFile))
  .addDecorator(centered)
  .addParameters({ jest: ['SearchButton.test.js'] })
  .add('simple', () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <SearchButton>
          <Flex
            alignItems='center'
            width={17}
            height={36}>
            <RetinaImage
              width={20}
              height={18}
              regular={SearchImageRegular}
              retina={SearchImageRetina}
              alt='Logo' />
          </Flex>
        </SearchButton>
      </React.Fragment>
    </ThemeProvider>
  ))
