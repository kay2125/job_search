import React, { Component } from 'react';
import { Layout, Menu,message, Input, Icon, Row, Col } from 'antd';
import logo from '../images/hublogo.jpg';
import request from 'superagent';

//components
import RightSidebar from './right-sidebar';
import LeftSidebar from './left-sidebar';
import MainContent from './main-content';

const { Header, Content, Footer } = Layout;
const Search = Input.Search;

class PrimaryLayout extends Component {
  constructor(props){
   super(props);
   this.state={
     job_data:[],
   }
 }

//making api call to get list of jobs
//using superagent to consume rest apis

 componentDidMount(){
    var component=this;
    request
   .get("http://localhost:3000/Tasks/")
   .end(function(err,res){
     if(res.status === 200)
     {
       component.setState({
         job_data:res.body,
       })
     }
     else {
       message.error("Unable to fetch data. Please try again after sometime")
     }
   })

  }
  render() {
    return (
      <Layout className="layout">
        <Header className="header-class">
           <img className="logo-class" src={logo}  alt="logo"/>
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
                  <div style={{ background: '#fff', padding: 24, minHeight: 280 }}><MainContent job_data={this.state.job_data}/></div>
            </Col>
            <Col span={5} offset={1}><RightSidebar /></Col>
        </Row>
        </Content>

        <Footer className="footer-custom swatch_5" style={{ textAlign: 'center' }}>
          <Row>
              <Col span={4}>
                    <h3 className="footer-text"> Hubstaff Talent </h3>
              </Col>
              <Col span={4} offset={1}>
                    <h4 className="footer-text"> TALENT </h4>
                    <ul className="footer-sub-text">
                    <li className="footer-li-text"> How it works </li>
                    <li className="footer-li-text"> Why we are free </li>
                    <li className="footer-li-text"> Agencies </li>
                    </ul>
              </Col>
              <Col span={4} offset={1}>
                    <h4 className="footer-text"> HUBSTAFF </h4>
                    <ul className="footer-sub-text">
                    <li className="footer-li-text"> About </li>
                    <li className="footer-li-text"> Time Tracking </li>
                    <li className="footer-li-text"> Developer </li>
                    <li className="footer-li-text"> Resources </li>
                    </ul>
              </Col>
              <Col span={4} offset={1}>
                    <h4 className="footer-text"> SUPPORT </h4>
                    <ul className="footer-sub-text">
                    <li className="footer-li-text"> Help </li>
                    <li className="footer-li-text"> Blog </li>
                    <li className="footer-li-text"> FAQ </li>
                    <li className="footer-li-text"> Email Us </li>
                    <li className="footer-li-text"> Terms </li>
                    <li className="footer-li-text"> Privacy </li>
                    </ul>
              </Col>
              <Col span={4} offset={1}>
                    <h4 className="footer-text"> SOCIAL </h4>
                    <ul className="footer-sub-text">
                    <li className="footer-li-text"> <Icon style={{fontSize:22}} type="twitter" /> &nbsp;&nbsp;&nbsp; <Icon style={{fontSize:22}} type="facebook" /> &nbsp;&nbsp;&nbsp; <Icon style={{fontSize:22}} type="linkedin" /></li>
                    </ul>
              </Col>
          </Row>
        </Footer>
      </Layout>
    );
  }
}

export default PrimaryLayout;
