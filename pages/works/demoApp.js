import {
  Container,
  Badge,
  Link,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="demo App">
    <Container>
      <Title>
        DemoApp <Badge>2020</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
      <P>
           Basic Demo web app using react js and bootstrap. Info about the Services and languages in which i worked. 
           sending me message on directly to my email. using animations for images or vectors  
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Website Detail</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://asmar-demo-website.netlify.app">
            <Badge mr={2}>Link:</Badge>
            click here to visit website{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/demoApp_01.png" alt="demoApp" />
 
      <UnorderedList my={4}>
        <ListItem>
          <span>
            Animated Vectors and flexible design 
          </span>
        </ListItem>
        <ListItem>
          <span>
             contact us page sending email using React mail.js
          </span>
        </ListItem>
        <ListItem>
          <span>
                Services which is provided by this website
          </span>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/demoApp_02.png" alt="demoApp" />
    </Container>
  </Layout>
)

export default Work
