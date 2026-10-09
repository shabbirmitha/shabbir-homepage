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
  <Layout title="IndiaVACC">
    <Container>
      <Title>
        India vACC <Badge>2025</Badge>
      </Title>
      <P>Landing Page for India vACC.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://indiavacc.org/">
            https://indiavacc.org/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, Strapi</span>
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
        <WorkImage src="/images/works/indiavacc_01.png" alt="indiavacc" />
      </AspectRatio>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <WorkImage src="/images/works/indiavacc_02.png" alt="indiavacc" />
      </AspectRatio>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <WorkImage src="/images/works/indiavacc_03.png" alt="indiavacc" />
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
