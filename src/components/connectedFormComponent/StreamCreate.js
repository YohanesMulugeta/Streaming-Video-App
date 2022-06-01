import { reduxForm } from "redux-form";

import StreamCreate from "../streams/StreamCreate";

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

export default reduxForm({ form: "StreamCreate", validate: validate })(
  StreamCreate
);
