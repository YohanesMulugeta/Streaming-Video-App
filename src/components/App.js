import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"; //

import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link to="/">PageOne</Link>
      </li>
      <li>
        <Link to="/pagetwo">PageTwo</Link>
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        {/* BrowserRouter is a react component and when we create an instance of it, it automatically creates the history component that will track of the address bar in our browser */}

        <div>
          {/*ROUTES will contain the <Route>s that will match the specific path to the component that should be rendered */}
          <Routes>
            <Route path="/" element={<PageOne />} />{" "}
            {/*in the element's prop we pass the component we want to render */}
            <Route path="/pagetwo" element={<PageTwo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
