import React from "react";
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import image from './contact.jpg';

const Contact = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="mt-4">Love to Hear From You</h1>
            <img src={image} alt="contact"/>
            <hr/>
            <p class="lead">It is a long established fact that a render will be distracted by the readable content of a page when looking at its.
            It is a long established fact that a render will be distracted by the readable content of a page when looking at its.
            It is a long established fact that a render will be distracted by the readable content of a page when looking at its.</p>
           
            <p>Company:
              <a href="https://www.instagram.com/muhmmdiqbla/"> Muhammad Iqbal</a>
            </p>
            <p>Address:
              <a href="https://www.google.com/maps/place/Miruna/@-6.3307426,107.2786515,17z/data=!3m1!4b1!4m5!3m4!1s0x2e699d450d135a87:0x6f900e4a306df74c!8m2!3d-6.3307426!4d107.2808402"> Perumnas Telukjambe Blok i/99, Karawang</a>
            </p>
            <p>Phone:
              <a href="https://wa.me/628118664149"> +62 811 866 4149</a>
            </p>
            <p>Email:
              <a href="mailto: muhammadiqbal130996@gmail.com"> muhammadiqbal130996@gmail.com</a>
            </p>
          </div>
          <hr/>
            <div class="col-md-4" >
              <div class="card my-4">
                <h5 class="card-header">Contact Form</h5>
              <div class="card-body">
              <Form>
            
                <FormGroup>
                  <Label for="exampleAddress">Name</Label>
                  <Input type="text" name="Name" id="Name" placeholder="Your name here"/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Email</Label>
                  <Input type="text" name="Email" id="Email" placeholder="Your email here"/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Subject</Label>
                  <Input type="text" name="Subject" id="Subject" placeholder="Your subject here"/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Message</Label>
                  <Input type="text" name="Message" id="Message" placeholder="Message"/>
                </FormGroup>
                
                <Button color="primary" type="button">
                  Submit
                </Button>
              </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
