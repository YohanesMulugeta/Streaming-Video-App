import React from "react";
import { Field } from "redux-form";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // console.log(input);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />{" "}
        {/* // this will put all the key value pairs as a prop
        to the input component */}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        // {/* handleSubmit is a function provided by the redux-form through the reduxForm connect function */}
        className="ui form"
      >
        {/* ------------------------------------------------------------------------- any prop we pass to the Field component other than those recognised by redux-form will be passed to the the component passed to  component prop */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default StreamCreate;
