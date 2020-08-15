import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'

import '../styles/globals.css'

import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withData(MyApp)
