import React from "react";
import { reduxForm, Field } from "redux-form";

const StreamForm = (props) => {
  const renderField = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
  return (
    <form className=" ui form">
      <Field name="title" label={props.labelTitle} />
      <Field name="description" label={props.labelDescription} />
      <button className="ui button primary">{props.button}</button>
    </form>
  );
};

export default reduxForm({ fom: reduxForm })(StreamForm);
