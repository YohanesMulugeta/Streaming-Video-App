import React from "react";
import { Field } from "redux-form";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

class StreamCreate extends React.Component {
  renderInput() {
    return <div>I am an input field</div>;
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
