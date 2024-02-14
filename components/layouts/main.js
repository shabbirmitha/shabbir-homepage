import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-computer-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-computer'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shabbir's homepage" />
        <meta name="author" content="Shabbir" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Shabbir" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vflex01" />
        <meta name="twitter:creator" content="@vflex01" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="Shabbir" />
        <meta name="og:title" content="Shabbir" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <title>Shabbir - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {/* <Box
          className="voxel-dog"
          m="auto"
          mt={['-20px', '-60px', '-120px']}
          mb={['-40px', '-140px', '-200px']}
          w={[280, 480, 640]}
          h={[280, 480, 640]}
          position="relative"
        >
        </Box> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
