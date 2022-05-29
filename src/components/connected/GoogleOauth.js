import { connect } from "react-redux";

import GoogleOauth from "../GoogleOauth";
import { signIn, signOut } from "../../actions";

const mapStateToProps = (state) => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOauth);
