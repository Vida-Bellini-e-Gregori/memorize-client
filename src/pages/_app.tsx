import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { DeckContextProvider } from '../Context/DeckContext'
import '../styles/global.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <DeckContextProvider>
        <Component {...pageProps} />
      </DeckContextProvider>
    </SessionProvider>
  )
}
