import { Container, Badge, Link, List, ListItem, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="pizza Delivery">
    <Container>
      <Title>
        PizzaDelivery <Badge>2021</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pizza-app-delivery.herokuapp.com/">
            Pizza App Delivery <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, ExpressJS & MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Details</Meta>
              <UnorderedList ml={4} my={4}>
               <Meta> User Side: </Meta>
        <ListItem>Login & Register Form</ListItem>
        <ListItem>Menu & Add to Cart items </ListItem>
        <ListItem>Show toast when item added in cart & show quantity of total items</ListItem>
        <ListItem>Show Cart Summary and total price</ListItem>
        <ListItem>Payment Method Cash or Card (Stripe Integration)</ListItem>
        <ListItem>Complete Order </ListItem>
        <ListItem>Real Time Track delivery Status </ListItem>
      <WorkImage src="/images/works/pizzaApp_01.png" alt="pizzaApp" />
      <WorkImage src="/images/works/pizzaApp_03.png" alt="pizzaApp" />

                   <Meta>Admin Side: </Meta>
        <ListItem>Seeing Total Orders and Customers Information</ListItem>
        <ListItem>Orders Fulfillment</ListItem>
        <ListItem>Real Time Status Change for order delivery </ListItem>
        <ListItem>Cancel orders</ListItem>

      </UnorderedList>
        </ListItem>
      </List>
      <WorkImage src="/images/works/pizzaApp_02.png" alt="pizzaApp" />
      <WorkImage src="/images/works/pizzaApp_05.png" alt="pizzaApp" />
    </Container>
  </Layout>
)

export default Work
