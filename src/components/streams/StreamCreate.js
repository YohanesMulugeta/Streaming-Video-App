import React from "react";
import { Field } from "redux-form";
import { useNavigate } from "react-router-dom";

// -------------------------------------------------- Redux-Form
// Field is Capital because it is a react component

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    // console.log(error);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(input);
    // console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />{" "}
        {/* // this will put all the key value pairs as a prop
        to the input component */}
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues, this.props.navigate);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        // {/* handleSubmit is a function provided by the redux-form through the reduxForm connect function */}
        className="ui form error"
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

// ------------------------------------------------------ wrapping the stream create component to use useNavigation hook
const WraperFun = (props) => {
  const navigate = useNavigate();
  return <StreamCreate {...props} navigate={navigate} />;
};

export default WraperFun;
