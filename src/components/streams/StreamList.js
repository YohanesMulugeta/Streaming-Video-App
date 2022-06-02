import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId === props.currentUserId)
      return (
        <div className="right floated content">
          <button className="button ui primary">Edit</button>
          <button className="button ui negative">Delete</button>
        </div>
      );
  };

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="icon large middle aligned camera " />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    // console.log(props.isSignedIn);
    if (props.isSignedIn)
      return (
        <Link to="streams/new" className="right floated ui button primary">
          create stream
        </Link>
      );
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      <div>{renderCreate()}</div>
    </div>
  );
};

// class StreamList extends React.Component {
//   componentDidMount() {
//     this.props.fetchStreams();
//   }
//   render() {
//     console.log("pussy");
//     return <div>StreamLlist</div>;
//   }
// }

export default StreamList;
