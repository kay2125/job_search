import React, { Component } from 'react';
import { Select,Slider,Checkbox, Row, Col } from 'antd';
const Option = Select.Option;
const marks = {
  1: {
    style: {
      color: '#283F54',
    },
    label: <strong>1</strong>,
  },
  100: {
    style: {
      color: '#283F54',
    },
    label: <strong>40+</strong>,
  },
};
class LeftSidebar extends Component {
  render() {
    return (
      <div>
      <Row className="filters-section">
          <Col>
              <h3 className="filters-title"> <span style={{"float" : "left"}}> FILTERS </span>
              <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear all filters </span>  </h3>
              </Col>
          </Row>
          <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Skills </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
           <Select
                  mode="tags"
                  size="large"
                  placeholder="Please select"
                  defaultValue={['UI', 'mobile', 'PHP', 'Photoshop']}

                  style={{ width: '100%' }}
                >
                  <Option value="JS"> JS</Option>
                  <Option value="HTML"> HTML</Option>
                </Select>
          </Col>
      </Row>
      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Availability </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
                <p className="checkbox-custom"><Checkbox checked={true}>Hourly</Checkbox></p>
                <p className="checkbox-custom"><Checkbox checked={true}>Part-time (20 hrs/wk)</Checkbox></p>
                <p className="checkbox-custom"><Checkbox checked={true}>Full-time (40 hrs/wk)</Checkbox></p>
          </Col>
      </Row>

      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Job type </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
                <Select
                size="large"
                placeholder="Select a job type"
                style={{ width: '100%' }}
              >
                <Option value="sample">Sample</Option>
              </Select>
          </Col>
      </Row>

      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Pay rate /hr ($) </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
                <Slider range marks={marks}  defaultValue={[45, 80]} />
                <p className="checkbox-custom"><Checkbox checked={true}>Include profiles without pay rates</Checkbox></p>
          </Col>
      </Row>

      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Experience level </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
                <Select
                size="large"
                placeholder="Select your experience level"
                style={{ width: '100%' }}
              >
                <Option value="sample">Sample</Option>
              </Select>
          </Col>
      </Row>

      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Countries </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
                <Select
                size="large"
                placeholder="Enter state, province or country"
                style={{ width: '100%' }}
              >
                <Option value="sample">Sample</Option>
              </Select>
          </Col>
      </Row>


      <Row className="left-section-tab">
          <Col>
          <h3 className="filters-sub-title"> <span style={{"float" : "left"}}> Languages </span>
          <span style={{"float" : "right",fontSize : 14, fontWeight : 100, color : "#9ea59c"}}> Clear</span>  </h3>
               <Select
                  mode="tags"
                  size="large"
                  placeholder="Please select"
                  defaultValue={['English']}

                  style={{ width: '100%' }}
                >
                  <Option value="French"> French</Option>
                  <Option value="German"> German</Option>
                </Select>
          </Col>
      </Row>
      </div>
    );
  }
}

export default LeftSidebar;
