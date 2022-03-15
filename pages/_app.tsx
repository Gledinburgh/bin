import '../styles/globals.css'
import 'antd/dist/antd.css'
import { BreakpointProvider } from '../Context/MediaQuery'
import { queries } from '../data/mediaQueries'


import { GeneralContextWrapper } from '../Context/GeneralContext';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <BreakpointProvider queries={queries}>
      <GeneralContextWrapper>
        <Component {...pageProps} />
      </GeneralContextWrapper>

    </BreakpointProvider>
  )
}

export default MyApp
