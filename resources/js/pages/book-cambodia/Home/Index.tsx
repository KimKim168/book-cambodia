import React from 'react'
import Layout from '../bookCamboLayout/layout'
import MySearch from '../../rule-library/components/my-search'
import MyBookCard from '../components/my-book-card'

const Index = () => {
  return (
    <Layout>
      <MySearch/>
      <MyBookCard/>
    </Layout>
  )
}

export default Index
