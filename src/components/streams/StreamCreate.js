import React from "react";
import { Field } from "redux-form";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    console.log(input);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />{" "}
        {/* // this will put all the key value pairs as a prop
        to the input component */}
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <form className="ui form">
        {/* ------------------------------------------------------------------------- any prop we pass to the Field component other than those recogised by redux-form will be passed to the renderedField component */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default StreamCreate;
