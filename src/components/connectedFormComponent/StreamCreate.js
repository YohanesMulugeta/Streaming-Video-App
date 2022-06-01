import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import StreamCreate from "../streams/StreamCreate";
import { createStream } from "../../actions";

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter the title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const wrappedForm = reduxForm({ form: "StreamCreate", validate: validate })(
  StreamCreate
);

export default connect(null, { createStream })(wrappedForm);
