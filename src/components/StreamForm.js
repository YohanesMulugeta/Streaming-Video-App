import React from "react";
import { reduxForm, Field } from "redux-form";

// ---------------------------------------------------------------------------- RENDERING THE ERROR
const ErrorComp = ({ touched, error, active }) => {
  if (touched && error && !active)
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
};

// ----------------------------------------------------------------------------- hoisting to prevnent re render
const FieldComp = ({ input, label, meta }) => {
  // console.log(meta);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div>{ErrorComp(meta)}</div>
    </div>
  );
};

// --------------------------------------------------------------------------------- StreamForm

const StreamForm = (props) => {
  return (
    <form className=" ui form error">
      <Field name="title" label={props.labelTitle} component={FieldComp} />
      <Field
        name="description"
        label={props.labelDescription}
        component={FieldComp}
      />
      <button className="ui button primary">{props.button}</button>
    </form>
  );
};

const validate = (formValues) => {
  const error = {};

  if (!formValues.title) error.title = "Title Field Can Not Be Empity";
  if (!formValues.description)
    error.description = "Description Field Can Not Be Empity";

  return error;
};

// --------------------------------------------------------------------------- CONNECTCTING THE COMPONENT TO THE REDUX FORM
const decoratedStreamForm = reduxForm({ form: "StreamForm", validate })(
  StreamForm
);

export default decoratedStreamForm;
