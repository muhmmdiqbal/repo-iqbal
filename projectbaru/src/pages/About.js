import React from "react";
import {
  
  
  Progress,
  Col



} from 'reactstrap';
import image from './iqbal.jpeg';

const style = { width: "150px" };
const About = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <Col sm="3" xs="6">
            <small className=" d-block text-uppercase font-weight-bold mb-4">
              
            </small>
            <img
              alt="..."
              className=" img-fluid rounded-circle shadow"
              src={image}
              style={ style }
            ></img>
              </Col>
                <h1 class="mt-4">Hello, My Name is Muhammad Iqbal</h1>
                <hr/>
                <p class="lead">This is Iqbal, who is taking the Front End course in our own Glints Academy Batch 9 and mainly learning about HTML,
                  CSS, Javascript. Even though he is mainly learning about HTML, CSS, Javascript, he also learns a fair amount of ReactJs.
                  For his final project at GA, he and his team built a web-based application. He is currently very motivated to explore
                  his capabilities by taking a new opportunity to start his international career, especially in foreign companies.</p>
                  <hr/>
                  <h1 class="mt-4">Education</h1>
                <hr/>
                <p class="h4"> Bachelor’s Degree in Information Systems National Institute of Technology Bandung. </p>
                <p class="lead"> - 2015 - 2020</p>
                  <hr/>
                  <h1 class="mt-4">Experience</h1>
                  
                <hr/>
                <p class="h4">Lab Asistant of Courses Enterprise Resource Planning (ERP)</p>
                <p class="lead">National Institute of Technology of Majoring Information Systems - 2019 - 2020</p>
                <p>Responsible for teaching students majoring in information systems about the practice of Enterprise Resource Planning (ERP) courses using the Odoo application.</p>
                  <hr/>
                  <i className="ni ni-air-baloon"></i>
                  <h1 class="mt-4">Expertise</h1>
                <hr/>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>Javascript</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="default"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>ReactJs</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="primary"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>HTML</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="secondary"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>CSS</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="info"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>Git</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="success"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>Node.js</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="danger"></Progress>
                </div>
                <div className=" progress-wrapper">
                  <div className=" progress-info">
                    <div className=" progress-label">
                      <span>NPM</span>
                    </div>
                    <div className=" progress-percentage">
                      <span>60%</span>
                    </div>
                  </div>
                  <Progress max="100" value="60" color="warning"></Progress>
              </div>
              <hr/>
        </div>
            
        </div>
      </div>
    </div>
   
  
  );
};

export default About;
