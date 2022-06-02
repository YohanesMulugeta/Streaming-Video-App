import React, { useEffect } from "react";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="icon large middle aligned camera" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
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
