import React from "react"
import { Container, FeatureImage, Content, ContentCard } from '../components'

const IndexPage = () => {
  return( 
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date='July 10, 2020'
          title='Lorem Ipsum dolor sit amet'
          excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis magna sit amet lectus tincidunt fermentum a sagittis lectus. Vestibulum nisi erat, tempor at lacinia eget, varius ac justo. Maecenas in turpis arcu.'
          slug='/test'
        />
      </Content>
    </Container>
  )
}
 export default IndexPage