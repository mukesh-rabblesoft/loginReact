import React, { Fragment } from "react";
import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormData from "../FormData/FormData";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      person: {
        username: "",
        password: "",
      },
    };
  }

  handleSubmit = (data, { resetForm }) => {
    this.setState({ persons: [...this.state.persons, data] });
    resetForm({ data: "" });
  };

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required("username is required"),
      password: Yup.string()
        .required("password is required")
        .min(6, "password mush be at least 6 characters")
        .max(10, "password must not exceed 10 characters"),
    });
  }

  render() {
    // console.log(this.state.persons)
    return (
      <Fragment>
        <div className="loginForm">
          <Formik
            initialValues={this.state.person}
            validationSchema={this.validationSchema}
            onSubmit={this.handleSubmit}
          >
            {({ resetForm }) => (
              <Form>
                <div className="imgcontainer">
                  <img
                    src="./images/img_avatar2.png"
                    alt="Avatar"
                    className="avatar"
                  />
                </div>

                <div className="container">
                  <label>
                    <b>Username</b>
                  </label>

                  <Field
                    name="username"
                    placeholder="Enter username"
                    type="text"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                  <label>
                    <b>Password</b>
                  </label>

                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />

                  <button type="submit">Login</button>
                  <label>
                    <input type="checkbox" name="remember" /> Remember me
                  </label>

                  <div className="container">
                    <button type="button" className="cancelbtn">
                      Cancel
                    </button>
                    <span className="psw">
                      Forgot <a href="/">password?</a>
                    </span>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <FormData getData={this.state.persons} />
      </Fragment>
    );
  }
}

export default LoginForm;
