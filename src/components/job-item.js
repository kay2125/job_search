import React, { Component } from 'react';
import {Button, Row, Col,Tag } from 'antd';



class JobItem extends Component {
  render() {
    return (
      <div>
            <Row>
                  <Col>
                      <h3>Senior PHP Developer &nbsp; <Tag className="tag-custom" color="#5cc770">hourly</Tag></h3>
                  </Col>
            </Row>
      </div>
    );
  }
}

export default JobItem;
