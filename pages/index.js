import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login'
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) { return <Login /> }
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black bg-blue-400 overflow-hidden">
      <Head>
        <title>Chat-app-web3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <Header />
          {/* Messages */}
          <Messages/>

        </div>

     



    </div>
  )
}
