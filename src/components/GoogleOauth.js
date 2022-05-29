import React, { useEffect, useState } from "react";

let client = {};
let auth;
const GoogleOauth = () => {
  let access_token = {};
  //   let token;

  const [token, setToken] = useState(null);

  useEffect(() => {
    auth = window.google.accounts.oauth2;

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

    client.requestAccessToken();
  }, []);

  const onSignIn = () => {
    client.requestAccessToken();
  };

  const onSignOut = () => {
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
          <button className="ui red google button" onClick={onSignOut}>
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    else
      return (
        // ---------------------------------------------------- btn signIn
        <div>
          <button className="ui red google button" onClick={onSignIn}>
            <i className="google icon" />
            Sign In with Google
          </button>
        </div>
      );
  };

  return <div>{renderButton()}</div>;
};

export default GoogleOauth;
