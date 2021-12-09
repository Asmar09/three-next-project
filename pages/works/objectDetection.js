import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="object Detection">
    <Container>
      <Title>
      object Detection <Badge>2020</Badge>
      </Title>
      <P>
      Object detection is a method in computer vision and image processing that allows us to
       find and locate where multiple objects are in an image or video.
        This algorithm draws bounding boxes around one or more objects in the image or 
        video after detecting an object. These bounding boxes are defined by a point, width, and height.
       It then assigns the objects class labels, i.e., cat, dog, or car.
      </P>
      <List ml={4} my={4}>
        <ListItem>
            <Meta >Link</Meta>
          <Link href="https://object-detections.herokuapp.com/">
           click here to visit website {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.JS and Tensorflow.JS</span>
        </ListItem>
      <ListItem>
          <Meta>Details</Meta>
              <UnorderedList ml={4} my={4}>
        <ListItem>Capture images from the webcam for object detection</ListItem>
        <ListItem>Localizing one or more objects within an image</ListItem>
        <ListItem>Classifying each object in the image</ListItem>
        <ListItem>Show bounding boxes on predicted image objects</ListItem>
      </UnorderedList>
        </ListItem>
      </List>
      <WorkImage src="/images/works/objectDetection_04.jpeg" alt="objectDetection" />
      <WorkImage
        src="/images/works/objectDetection_01.png"
        alt="objectDetection"
      />
      <WorkImage src="/images/works/objectDetection_02.png" alt="objectDetection" />
      <WorkImage src="/images/works/objectDetection_03.png" alt="objectDetection" />
    </Container>
  </Layout>
)

export default Work
