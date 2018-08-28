import React, { Component } from 'react';
import {Button, Row, Col,Tag,Icon } from 'antd';



class JobItem extends Component {
  render() {
    if(this.props.response)
    {
      var data= JSON.parse(this.props.response);
      console.log("-========",data.employees)

    }

    return (
      <div>

            {
              this.props.response ?

                data.job_data.map((val)=>{
                   return(
                       <Row className="job-item-section">
                             <Col>
                                 <h3>{val.title} &nbsp; <Tag className="tag-custom" color={val.status == "hourly" ? "#5cc770" : val.status === "full-time" ? "#2db7f5" : "#ffd321"}>{val.status}</Tag>
                                 <span style={{"float":"right"}}>{val.charge}</span></h3>

                                     <p><Icon style={{"color" : "#6cb1ee"}} type="database"/>&nbsp;
                                     <span style={{"color" : "#6cb1ee"}}>Epic Coders</span>&nbsp;
                                     <Icon style={{"color" : "#5cc770"}} type="environment-o" />&nbsp;Indianopolis, IN</p>
                                     <p>Reply rate : <b> 82% </b></p>
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
              : ""
            }
      </div>
    );
  }
}

export default JobItem;
