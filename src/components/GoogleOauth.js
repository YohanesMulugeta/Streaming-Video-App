import React, { useEffect, useState } from "react";

const GoogleOauth = () => {
  //   let auth = {};

  //   const [isSignedIn, setSignedIn] = useState(null);
  // Initializing the Library
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      console.log(window.gapi);
    }); // the call back is going to be called when the auth2 is LOADED successfully
    // console.log(window.gapi  );
  }, []);

  return <div>Google Oauth</div>;
};

export default GoogleOauth;
