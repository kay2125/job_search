import React, { Component } from 'react';
import {Button, Row, Col } from 'antd';
import { List } from 'antd';
import time from '../images/time.svg';
const data = [
  {
    title: 'Senior Ruby on Rails Engineer',
  },
  {
    title: 'Senior product designer',
  }
];
class RightSidebar extends Component {
  render() {
    return (
      <div>
        <Row className="track-time-section">
            <Col>
                  <img className="time-image" src={time} alt="time" />
                  <h2> Track Time on Hubstaff </h2>
                  <p style={{ fontSize : 12, fontWeight : 100, color : "#9ea59c"}}> Pay Only for the hours worked </p>
                  <Button style={{width: 120}} size="large" type="primary"> Sign Up </Button>
                  <h5 style={{ "marginTop" : 10}}><a href="/">Learn More...</a></h5>
            </Col>
        </Row>
        <Row className="right-section-tab top-jobs-section">
            <Col>
                <h3 className="top-jobs-title"> TOP JOBS </h3>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={item.title}
                          description="Lorem ipsum dolor sit amet, stet liberavisse intellegebat vim ea, veri soleat comprehensam sea te, ne qui soluta patrioque."
                        />
                      </List.Item>
                    )}
                  />
            </Col>
        </Row>

        <Row className="right-section-tab top-jobs-section">
            <Col>
                <h3 className="top-jobs-title"> MOST VIEWED THIS WEEK </h3>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={item.title}
                          description="Lorem ipsum dolor sit amet, stet liberavisse intellegebat vim ea, veri soleat comprehensam sea te, ne qui soluta patrioque."
                        />
                      </List.Item>
                    )}
                  />
            </Col>
        </Row>
      </div>
    );
  }
}

export default RightSidebar;
