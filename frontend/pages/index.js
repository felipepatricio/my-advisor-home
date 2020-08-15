import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Form from '../components/Form'

import '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meu conselheiro</title>
      </Head>
      <Nav />
      <main className="main">
        <Header />
        <About />
        <Form />
      </main>
      <Footer />
    </>
  )
}
