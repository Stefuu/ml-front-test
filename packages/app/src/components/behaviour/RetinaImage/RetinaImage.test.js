import React from 'react'
import { render } from 'react-testing-library'
import RetinaImage from './RetinaImage'
import LogoImageRegular from '../../../assets/Logo_ML.png'
import LogoImageRetina from '../../../assets/Logo_ML@2x.png'

describe('RetinaImage', () => {
  it('Should render [snapshot]', async () => {
    const { container } = render(<RetinaImage
      width={53}
      height={36}
      regular={LogoImageRegular}
      retina={LogoImageRetina}
      alt='Logo' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
