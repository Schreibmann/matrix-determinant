import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from '@ui/theme'
import App from './App'
import { Table } from '@src/table'


const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider>
      <App>
        <Table />
      </App>
    </ThemeProvider>
  </Provider>
)

export default hot(module)(Root)
