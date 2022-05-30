import { reduxForm } from "redux-form";

import StreamCreate from "../streams/StreamCreate";

export default reduxForm({ form: "StreamCreate" })(StreamCreate);
