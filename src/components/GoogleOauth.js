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
        console.log(tokenResponse);
        token = tokenResponse.access_token;
        // console.log(token);
      },
    });

    client.requestAccessToken();

    console.log(client.i);
  }, []);

  return <div>Google Oauth</div>;
};

export default GoogleOauth;
