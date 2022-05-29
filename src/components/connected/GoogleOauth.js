import { connect } from "react-redux";

import GoogleOauth from "../GoogleOauth";
import { signIn, signOut } from "../../actions";

const mapStateToProps = (state, lala) => {
  // console.log(lala);
  // console.log(state);

  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOauth);
