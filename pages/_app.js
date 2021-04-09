import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import {AnimateSharedLayout} from 'framer-motion'
import firebaseInit from '../firebase'




firebaseInit()

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
    <ParallaxProvider>
      <Navbar/>
        <Component {...pageProps} />
    </ParallaxProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
