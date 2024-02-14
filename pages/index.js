import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
import thumbSharecamp from '../public/images/works/sharecamp_thumb.png'
import myPic from '../public/images/shabbir.JPG'
import Image from 'next/image'
import Terminal from '../components/Terminal'





const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an web developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shabbir
          </Heading>
          <p>Full Stack Web Developer ( MERN Stack )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={myPic}
              alt="Profile image"
              width="100"
              height="100"
              priority
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelancer and a full-stack developer from India,
          while studying Bachelors in Computer Application (BCA) from BVP, Pune
          with a passion for creating digital stuff. Currently,
          making web apps using vanillaJS and learning ReactJS.
          Developing {' '}
          <Link as={NextLink} href="/works/sharecamp" passHref scroll={false}>
            ShareCamp
          </Link>
          , A social media platform for travelers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Terminal
        </Heading>
        <div
          style={{ border: "1px solid white", height: "400px" }}
        >
          <Terminal />
        </div>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Rajasthan, India.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the Bachelor&apos;s Program in Computer Application
          from Institution of Management and Entreprenourship Development.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        {/* <Heading as="h3" variant="section-title"> */}
        {/* I ♥ */}
        {/* </Heading> */}
        {/* <Paragraph> */}
        {/* Art, Music,{' '} */}
        {/* <Link href="https://illust.odoruinu.net/" target="_blank"> */}
        {/* Drawing */}
        {/* </Link> */}
        {/* , Playing Drums,{' '} */}
        {/* <Link href="" target="_blank"> */}
        {/* Photography */}
        {/* </Link> */}
        {/* , Leica, Machine Learning */}
        {/* </Paragraph> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/shabbirmitha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @shabbirmitha
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/shabbirmitha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @shabbirmitha
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_shabbir19" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @shabbir
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem */}
          {/* href="https://www.youtube.com/devaslife" */}
          {/* title="Dev as Life" */}
          {/* thumbnail={thumbYouTube} */}
          {/* > */}
          {/* My YouTube channel (&gt;150k subs) */}
          {/* </GridItem> */}
          <GridItem
            href="https://sharecamp.cyclic.app/"
            title="ShareCamp"
            thumbnail={thumbSharecamp}
          >
            A Social Media Platform
          </GridItem>
        </SimpleGrid>



      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
