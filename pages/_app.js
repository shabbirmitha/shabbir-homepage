import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
// import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from 'next-auth/react'
import './index.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        {/* <Payhip /> */}
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Analytics />
        </Layout>
      </Chakra>
    </SessionProvider>
  )
}

export default Website
