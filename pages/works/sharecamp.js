import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ShareCamp">
    <Container>
      <Title>
        ShareCamp <Badge>2019-</Badge>
      </Title>
      <P>
        A Social Media Platform for Traveling Freakz to share Campgrounds.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sharecamp.cyclic.app/">
            https://sharecamp.cyclic.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, MongoDB</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <WorkImage src="/images/works/sharecamp_01.png" alt="ShareCamp" />
      </AspectRatio>
      
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <WorkImage src="/images/works/sharecamp_02.png" alt="ShareCamp" />
      </AspectRatio>
      
      <AspectRatio maxW="640px" ratio={1} my={4}>
        <WorkImage src="/images/works/sharecamp_03.png" alt="ShareCamp" />
      </AspectRatio>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
