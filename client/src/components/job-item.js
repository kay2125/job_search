import React, { Component } from 'react';
import {Button, Row, Col,Tag,Icon } from 'antd';



class JobItem extends Component {
  render() {
    return (
      <div>
            <Row className="job-item-section">
                  <Col>
                      <h3>Senior PHP Developer &nbsp; <Tag className="tag-custom" color="#5cc770">hourly</Tag>
                      <span style={{"float":"right"}}>$40/hr</span></h3>

                          <p><Icon style={{"color" : "#6cb1ee"}} type="database"/>&nbsp;
                          <span style={{"color" : "#6cb1ee"}}>Epic Coders</span>&nbsp;
                          <Icon style={{"color" : "#5cc770"}} type="environment-o" />&nbsp;Indianopolis, IN</p>
                          <p>Reply rate : <b> 82% </b></p>
                          <p> Lorem ipsum dolor sit amet, ius ex graeco laoreet. Sea ponderum expetenda no. Usu populo epicurei at, purto decore at eam. Vis essent animal corpora ea, eu solet diceret nam. Ne mazim omittantur mel, usu id equidem lobortis molestiae.</p>
                          <Tag className="tag-custom">UI</Tag>
                          <Tag className="tag-custom">UX</Tag>
                          <Tag className="tag-custom">Andriod</Tag>
                          <Tag className="tag-custom">Javascript</Tag>
                          <Tag className="tag-custom">Sketch</Tag>
                  </Col>
            </Row>
      </div>
    );
  }
}

export default JobItem;
