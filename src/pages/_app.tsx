import type { AppProps } from 'next/app'
import AppContextProvider from '../AppContextProvider'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
