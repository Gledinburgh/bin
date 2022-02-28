import '../styles/globals.css'
import 'antd/dist/antd.css'

import { GeneralContextWrapper } from '../Context/GeneralContext';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GeneralContextWrapper>
      <Component {...pageProps} />
    </GeneralContextWrapper>
  )
}

export default MyApp
