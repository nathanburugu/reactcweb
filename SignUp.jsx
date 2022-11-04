/** @format */

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      button: "",
    },
    validationSchema: Yup.object({
      fName: Yup.string().required("Your First Name is Required"),
      lName: Yup.string().required("Your First Name is Required"),
      email: Yup.string()
        .required("Your First Name is Required")
        .email("Your First Name is Required"),
      password: "",
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='First Name'
          name='fName'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fName}
          errorMessage={formik.touched.fName && formik.errors.fName}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Last Name'
          name='lName'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lName}
          errorMessage={formik.touched.lName && formik.errors.lName}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorMessage={formik.touched.password && formik.errors.password}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        name='button'
        onSubmit={formik.handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignUp;
