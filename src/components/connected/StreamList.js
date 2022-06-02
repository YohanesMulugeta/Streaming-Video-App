import { connect } from "react-redux";

import StreamList from "../streams/StreamList";
import { fetchStreams } from "../../actions";

const mapStateToProps = (state) => {
  return { ...state.streams };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
