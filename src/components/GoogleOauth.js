import React, { useEffect, useState } from "react";

let client = {};
let auth;
const GoogleOauth = () => {
  // let access_token = {};
  //   let token;

  const [token, setToken] = useState(null);

  // ------------------------------------------------------------- Component Did Mount
  useEffect(() => {
    auth = window.google.accounts.oauth2;

    // ----------------------------------------------------------- init Client Library
    client = auth.initTokenClient({
      client_id:
        "252766093641-c780p8g3i3e79o2v6uvc46vqjv8dg2mj.apps.googleusercontent.com",
      scope: "email",
      callback: (tokenResponse) => {
        // console.log(tokenResponse);
        setToken(tokenResponse.access_token);
        // console.log(token);
      },
    });

    // client.requestAccessToken();
  }, []);

  const onSignInClick = () => {
    client.requestAccessToken();
  };

  const onSignOutClick = () => {
    auth.revoke(token, () => {
      setToken(undefined);
    });
  };

  const renderButton = () => {
    if (token === null) return null;
    else if (token)
      return (
        //---------------------------------------------------- btn SingOut
        <div>
          <button className="ui red google button" onClick={onSignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    else
      return (
        // ---------------------------------------------------- btn signIn
        <div>
          <button className="ui red google button" onClick={onSignInClick}>
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
  };

  return <div>{renderButton()}</div>;
};

export default GoogleOauth;
