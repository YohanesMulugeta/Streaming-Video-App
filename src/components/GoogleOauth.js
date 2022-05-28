import React, { useEffect, useState } from "react";

const GoogleOauth = () => {
  let client = {};
  let access_token = {};
  //   let token;

  const [token, setToken] = useState(null);

  //   const [isSignedIn, setSignedIn] = useState(null);
  // Initializing the Library
  useEffect(() => {
    client = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "252766093641-c780p8g3i3e79o2v6uvc46vqjv8dg2mj.apps.googleusercontent.com",
      scope: "email",
      callback: (tokenResponse) => {
        // console.log(tokenResponse);
        setToken(tokenResponse.access_token);
        // console.log(token);
      },
    });

    client.requestAccessToken();

    // console.log(client.i);
  }, []);

  const renderButton = () => {
    if (token === null) return <div>I dont know I am signed in</div>;
    else if (token) return <div>I am signed in</div>;
    else return <div>I am signed out</div>;
  };

  return <div>{renderButton()}</div>;
};

export default GoogleOauth;
