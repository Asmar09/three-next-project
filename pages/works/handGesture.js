import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="hand Gesture">
    <Container>
      <Title>
        Real Time Hand Recognization <Badge>2020</Badge>
      </Title>
      <P>
      A real time gesture recognition app using Tensorflow.JS, 
      a pre-trained handpose model and the fingerpose library!
      </P>
      <P>
      Detecting gestures from hand poses in real time.
      Controlling web application using detected gestures!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS, Tensorflow.JS</span>
        </ListItem>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://hands-gesture.herokuapp.com/">
            <Badge mr={2}>Link</Badge>
           click here to visit website {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/handGesture_01.jpg" alt="handGesture" />
        <WorkImage src="/images/works/handGesture_02.jpg" alt="handGesture" />
      </SimpleGrid>
      <WorkImage src="/images/works/handGesture_03.jpeg" alt="handGesture" />
      <WorkImage src="/images/works/handGesture_04.png" alt="handGesture" />
    </Container>
  </Layout>
)

export default Work
