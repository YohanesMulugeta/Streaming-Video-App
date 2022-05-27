import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //

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

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/*ROUTES will contain the <Route>s that will match the specific path to the component that should be rendered */}
        <Routes>
          <Route exact path="/" element={<PageOne />} />{" "}
          {/*in the element's prop we pass the component we want to render */}
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
