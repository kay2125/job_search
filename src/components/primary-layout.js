import React, { Component } from 'react';
import { Layout, Menu, Input, Icon, Row, Col } from 'antd';

import logo from '../images/logo.png';

//components
import RightSidebar from './right-sidebar';
import LeftSidebar from './left-sidebar';

const { Header, Content, Footer } = Layout;
const Search = Input.Search;

class PrimaryLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header-class">
          <div className="logo">
           {/*<img src={logo} /> */}
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="nav-class"
          >
            <Menu.Item disabled key="1">HOW IT WORKS</Menu.Item>
            <Menu.Item disabled key="2">BROWSE <Icon type="down" /></Menu.Item>
            <Menu.Item disabled key="3">SEARCH</Menu.Item>
            <Menu.Item disabled key="4">My Account <Icon type="down" /></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Row className="search-row">
            <Col span={24}>
                  <Search className="search-bar"
                    placeholder="Search by keywords (PHP, .NET, graphic design, etc)"
                    enterButton="Search"
                    size="large"
                  />
            </Col>
        </Row>
        <Row className="content-row-tab">
            <Col span={5}><LeftSidebar/></Col>
            <Col span={12} offset={1}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Col>
            <Col span={5} offset={1}><RightSidebar /></Col>
        </Row>
        </Content>
        <Footer className="footer-custom swatch_5" style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default PrimaryLayout;
