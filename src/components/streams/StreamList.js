import React, { useEffect } from "react";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);
  return <div>StreamList</div>;
};

export default StreamList;
