import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider
      appId= "IzFdaAFHqZFdBqJeE1hpPoYys8F3dCMhvRWxITIN"
      serverUrl= "https://tswjt0dunioo.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
