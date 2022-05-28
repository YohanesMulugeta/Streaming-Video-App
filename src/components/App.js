import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; //

import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import Header from "./Header";

// OAouthClientId = 252766093641-c780p8g3i3e79o2v6uvc46vqjv8dg2mj.apps.googleusercontent.com

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        {/* BrowserRouter is a react component and when we create an instance of it, it automatically creates the history component that will track of the address bar in our browser */}

        <br />

        {/*ROUTES will contain the <Route>s that will match the specific path to the component that should be rendered */}
        <Routes>
          <Route path="/" element={<StreamList />} />{" "}
          {/*in the element's prop we pass the component we want to render */}
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
