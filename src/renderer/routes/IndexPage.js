import React from 'react';
import Layout from 'antd/lib/layout';

const { Header, Footer, Sider, Content } = Layout;

const IndexPage = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default IndexPage;
