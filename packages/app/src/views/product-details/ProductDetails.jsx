import React from 'react'
import { withSearchBar } from '../../components/contexts/SearchBarContext'
import Content from '../../components/modules/Content'
import Container from '../../components/modules/Container'
import CategoriesBreadcrumb from '../../components/modules/CategoriesBreadcrumb'

class ProductDetails extends React.Component {
  render () {
    return (
      <Content>
        <Container>
          <CategoriesBreadcrumb categories={[]} />
        </Container>
      </Content>
    )
  }
}

export default withSearchBar(ProductDetails)
