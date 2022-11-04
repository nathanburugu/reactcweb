/** @format */

import React from "react";
import "./form.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Form = () => {
  return (
    <section className='container form-yangu'>
      <Tabs
        defaultActiveKey='profile'
        id='justify-tab-example'
        className='mb-3'
        justify
      >
        <Tab eventKey='home' title='Sign In'>
          <SignIn />
        </Tab>
        <Tab eventKey='profile' title='Sign Up'>
          <SignUp />
        </Tab>
      </Tabs>
    </section>
  );
};

export default Form;
