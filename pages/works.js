import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import pizzaApp from '../public/images/works/pizzaApp.png'
import handGesture from '../public/images/works/handGesture.png'
import objectDetection from '../public/images/works/objectDetection.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import glowWithFlow from '../public/images/works/glowWithFlow.png'
import demoAPi from '../public/images/works/demoApp.png'
import movieApi from '../public/images/works/movieApi.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pizzaDelivery" title="pizza Delivery" thumbnail={pizzaApp}>
                 Real Time Pizza Delivery App Socket.io
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="handGesture"
            title="hand Gesture"
            thumbnail={handGesture}
          >
            Real Time AI Hands Gesture Recognization App
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="objectDetection"
            title="object Detection"
            thumbnail={objectDetection}
          >
            A Real Time AI Object Detection App
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="glowWithFlow" thumbnail={glowWithFlow} title="glow With Flow">
             React Portfolio Website for client
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="demoApp"
            thumbnail={demoAPi}
            title="demo App"
          >
           Simple Demo website for my works
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="movieApp" thumbnail={movieApi} title="movies App">
              Movies overview and rating website
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)
export default Works
