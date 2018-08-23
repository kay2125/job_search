import React, { Component } from 'react';
import {Button, Row, Col } from 'antd';
import JobItem from './job-item';



class MainContent extends Component {
  render() {
    return (
      <div>
          <JobItem />
      </div>
    );
  }
}

export default MainContent;
