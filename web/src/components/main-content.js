import React, { Component } from 'react';
import {Button, Row, Col, Select} from 'antd';
import JobItem from './job-item';

const Option = Select.Option;


class MainContent extends Component {



  render() {
    return (
      <div>
      <Row className="main-section">
          <Col>
          <h3 className="filters-sub-title"> <span style={{marginTop:10,"float" : "left"}}> RESULTS ({this.props.job_data.length}) </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}>
                <Select
                defaultValue="Relevance"
                size="large"
                placeholder="Select a job type"
                style={{ width: '100%' }}
              >
                <Option value="sample">Sample</Option>
              </Select>
          </span>
            <span style={{"float" : "right","margin":10,fontSize : 14, fontWeight : 100, color : "#9ea59c"}}>Sort By</span>

          </h3>
          </Col>
      </Row>
          <JobItem job_data={this.props.job_data}/>

      </div>
    );
  }
}

export default MainContent;
