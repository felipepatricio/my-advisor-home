import Head from 'next/head'
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
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="bulma, consultoria, desenvolvimento, website, job, free, freelancer" />
        <title>Meu conselheiro</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
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
