import React from "react";
import { Link } from "react-router-dom";

import GoogleOauth from "./connected/GoogleOauth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Stream
      </Link>

      <div className="right menu">
        <Link to="/streams/new" className="item">
          StreamCreate
        </Link>
        <GoogleOauth />
      </div>
    </div>
  );
};

export default Header;
