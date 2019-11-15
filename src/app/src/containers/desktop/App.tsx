import React, { FunctionComponent } from 'react'
import { Column, Layout } from '@ui/layout'
import Footer from '../../components/desktop/Footer'
import Header from '../../components/desktop/Header'

const App: FunctionComponent = ({ children }) => (
  <Column fill>
    <Header />
    <Layout margin={'0 auto'} grow={1}>{children}</Layout>
    <Footer />
  </Column>
)

export default App
