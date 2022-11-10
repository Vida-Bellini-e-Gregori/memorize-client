import type { AppProps } from 'next/app'
import { DeckContextProvider } from '../Context/DeckContext'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DeckContextProvider>
      <Component {...pageProps} />
    </DeckContextProvider>
  )
}
