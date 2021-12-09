import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSkype
} from 'react-icons/io5'
import ecomwise from '../public/images/works/ecomwise.png'
import technowise from '../public/images/works/technowise.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Pakistan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Asmar Munir
          </Heading>
          <p>MERN Stack ( Programmer / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/asmar.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        A highly motivated and ambitious individual able to give timely and accurate advice, guidance, support and training to team
members and individuals. Possessing excellent management skills and having the ability to work with the minimum of
supervision whilst leading a team of twelve or more. Having a proven ability to lead by example, consistently hit targets,
improve best practices and organized time efficiently.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Faisalabad, Pakistan.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s of science in software engineering 
          from Riphah International University, Pakistan
        </BioSection>
        <BioSection>
          <BioYear>Oct-2020 to June-2021</BioYear>
          Works as a React Developer
        </BioSection>
        <BioSection>
          <BioYear>June-2021 to present</BioYear>
          Works as a MERN Stack Developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
           Fashion, Music,{' '}
          <Link href="https://www.scribd.com/books?utm_medium=cpc&utm_source=google_search&utm_campaign=3Q_Google_Search_Beta_NB_RoW&utm_term=read%20free%20books%20online&utm_device=c&gclid=CjwKCAjwiY6MBhBqEiwARFSCPrNl4hrMQtpX-GHIQBPafWl7H_i38ML5J7B9eAd4BvRDeFbmwGfSchoCI_0QAvD_BwE" target="_blank">
            Reading Books
          </Link>
          , Playing Games,{' '}
          <Link href="https://www.sciencefocus.com/future-technology/future-technology-22-ideas-about-to-change-our-world/" target="_blank">
            Technology
          </Link>
          , Programming, Development
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Asmar09" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Asmar09
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/asmar-munir-806109159/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @asmar-munir
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Asmar88289611" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Asmar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/asmar_munir/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @asmar_munir
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://join.skype.com/invite/Wc79RDgTUJGV" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoSkype} />}
              >
                @Asmar_Munir
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://ecomwise.ph/"
            title="Ecomwise"
            thumbnail={ecomwise}
          >
            drop-shipping business of Technowise360 Products
          </GridItem>
          <GridItem
            href="https://technowise360.com/"
            title="Technowise"
            thumbnail={technowise}
          >
            E-Commerce system for Customers side
          </GridItem>
        </SimpleGrid>

        {/* <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
