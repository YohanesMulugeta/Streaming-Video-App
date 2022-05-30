import React from "react";
import { Field } from "redux-form";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps);
    return (
      <input
        // this onChange method is provided by the redux-form to handle the input field onchange event
        onChange={formProps.input.onChange}
        // this value is provided by REDUX-FORM from the redux-state
        value={formProps.input.value}
      />
    );
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default StreamCreate;
