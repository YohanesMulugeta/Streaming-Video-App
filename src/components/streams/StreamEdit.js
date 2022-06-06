import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import StreamForm from "../StreamForm";
import { fetchStream, editStream } from "../../actions";

const StreamEdit = () => {
  // this is the new React-router-dom V6 method of using params in the routes element
  // to use location we can also do like location = useLocaton()
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ----------------------------------------------------------------- State Selector callBack fucntion
  const selectStream = (state) => {
    return state.streams[id];
  };

  // ------------------------------------------------------------------ useSelector HOOK instead of mapStateToProps
  const stream = useSelector(selectStream);

  // ------------------------------------------------------------------ useEffect hook to dispatch  a fetch action if no stream has found
  useEffect(() => {
    if (!stream) dispatch(fetchStream(id));
  }, [dispatch]);

  const onUpdate = (formValues, id) => {
    // dispatch(editStream(id, formValues,navigate));
  };

  if (!stream) return <div>LOADING...</div>;

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        // ----------------------------------------------------------------------------- setting initial values
        initialValues={stream}
        button="Update"
        onButtonClick={onUpdate}
        labelTitle="Title"
        labelDescription="Description"
      />
    </div>
  );
};

export default StreamEdit;
