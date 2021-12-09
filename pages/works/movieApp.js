import {
  Container,
  Badge,
  Link,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="movie App">
    <Container>
      <Title>
        Movie Info <Badge>2020</Badge>
      </Title>
      <P>
        Simple React project which is fetch latest movies data
      </P>
      <P>
       
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Search movies with their name</ListItem>
        <ListItem>Complete overview about movies</ListItem>
        <ListItem>Official IBM movie rating </ListItem>
        <ListItem>Modern and flexible design</ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Snap Shots</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://movies-website-asmar09.netlify.app/">
            <Badge mr={2}>Link</Badge>
           click here to visit website {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/movieApi_01.png" alt="movie" />
        <WorkImage src="/images/works/movieApi_02.png" alt="movie" />
      </SimpleGrid>
      <WorkImage src="/images/works/movieApi_03.png" alt="movie" />
      <WorkImage src="/images/works/movieApi_04.png" alt="movie" />
    </Container>
  </Layout>
)

export default Work
