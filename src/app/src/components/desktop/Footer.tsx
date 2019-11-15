import React from 'react'
import { Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import { Link } from '@ui/link'

interface IProps {
  prop?: any
}

const Footer = (prop: IProps) => (
  <Row justify='center' basis={40}>
    <Layout >
      <Text>
        Square matrix determinant calculator based on
      <Space />
        <Link href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%93%D0%B0%D1%83%D1%81%D1%81%D0%B0' size='x' weight='small' color="cadetblue">
          Gauss scheme
      </Link>.
      <Space />©
      <Space />2019
      <Space />
        <Link href='https://t.me/schreibmann' size='x' weight='small' color="cadetblue">
          Schreibmann
      </Link>
      </Text>
    </Layout>
  </Row >
)

export default Footer
