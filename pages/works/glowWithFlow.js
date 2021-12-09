import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="glow With Flow">
    <Container>
      <Title>
        Glow With flow <Badge>2021</Badge>
      </Title>
      <P>
       A complete client based portfolio website. In which client has shown her designed and tell about the fashion in which she worked for.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iPhone Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Mail.js</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>About Website</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://glow-with-flow.vercel.app/">
            <Badge mr={2}>link</Badge>
            click here to visit website{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/glowwithFlow_01.png" alt="glowWithFlow" />
      <WorkImage src="/images/works/glowwithFlow_02.png" alt="glowWithFlow" />
    </Container>
  </Layout>
)

export default Work
