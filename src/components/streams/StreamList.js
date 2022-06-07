import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StreamList = (props) => {
  useEffect(() => {
    // ----------------------------------------------------------------- FETCHING streams after the component has rendered
    props.fetchStreams();
  }, []);

  // --------------------------------------------------------------------- BUTTON DELETE AND EDIT
  const renderAdmin = (stream) => {
    if (stream.userId === props.currentUserId && props.isSignedIn)
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="button ui primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="button ui negative"
          >
            Delete
          </Link>
        </div>
      );
  };

  // -------------------------------------------------------- RENDER    LIST
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

  // ------------------------------------------------------------- BUTTON CREATE
  const renderCreate = () => {
    // console.log(props.isSignedIn);
    if (props.isSignedIn)
      return (
        <Link to="streams/new" className="right floated ui button primary">
          create stream
        </Link>
      );
  };

  // ------------------------------------------ RENDER
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      <div>{renderCreate()}</div>
    </div>
  );
};

export default StreamList;
