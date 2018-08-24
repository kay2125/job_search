import React, { Component } from 'react';
import { Row, Col,Tag,Icon } from 'antd';

class JobItem extends Component {
  render() {
    return (
      <div>
      {/*looping through the list of jobs fetched as props to display the list of job items */}
          {this.props.job_data.map((val)=>{
            return(
              <Row className="job-item-section">
                      <Col>
                          <h3>{val.Title} &nbsp; <Tag className="tag-custom" color={val.Status === "hourly" ? "#5cc770" : val.Status === "full-time" ? "#2db7f5" : "#ffd321"}>{val.Status}</Tag>
                          <span style={{"float":"right"}}>{val.charge}</span></h3>

                              <p><Icon style={{"color" : "#6cb1ee"}} type="database"/>&nbsp;
                              <span style={{"color" : "#6cb1ee"}}>Epic Coders</span>&nbsp;
                              <Icon style={{"color" : "#5cc770"}} type="environment-o" />&nbsp;{val.loc}</p>
                              <p>Reply rate : <b> {val.reply_rate} </b></p>
                              <p> {val.desc}</p>
                              <Tag className="tag-custom">UI</Tag>
                              <Tag className="tag-custom">UX</Tag>
                              <Tag className="tag-custom">Andriod</Tag>
                              <Tag className="tag-custom">Javascript</Tag>
                              <Tag className="tag-custom">Sketch</Tag>
                      </Col>
                </Row>
            )
          })
        }
      </div>
    );
  }
}

export default JobItem;
