import React from "react";
import { Field } from "redux-form";
import { useNavigate } from "react-router-dom";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

const StreamCreate = (props) => {
  const navigate = useNavigate();

  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />{" "}
        {/* // this will put all the key value pairs as a prop
        to the input component */}
        <div>{renderError(meta)}</div>
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.createStream(formValues, navigate);
  };

  const render = () => {
    return (
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        // {/* handleSubmit is a function provided by the redux-form through the reduxForm connect function */}
        className="ui form error"
      >
        {/* ------------------------------------------------------------------------- any prop we pass to the Field component other than those recognised by redux-form will be passed to the the component passed to  component prop */}
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
};

export default StreamCreate;
