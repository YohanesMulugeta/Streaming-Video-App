import React, { useEffect } from "react";

let client = {};
let auth;
const GoogleOauth = (props) => {
  // let access_token = {};
  //   let token;

  // const [token, setToken] = useState(null);

  // ------------------------------------------------------------- Component Did Mount
  useEffect(() => {
    auth = window.google.accounts.oauth2;
    // console.log(auth);

    // ----------------------------------------------------------- init Client Library
    client = auth.initTokenClient({
      client_id:
        "252766093641-c780p8g3i3e79o2v6uvc46vqjv8dg2mj.apps.googleusercontent.com",
      scope: `email`,
      callback: (tokenResponse) => {
        if (tokenResponse && tokenResponse.access_token)
          if (auth.hasGrantedAnyScope(tokenResponse, "email")) {
            props.signIn(tokenResponse);
            console.log(auth);
          }
      },
    });

    // client.requestAccessToken();
  }, []);

  // ------------------------------------------------------------ SIGNIN handler

  const onSignInClick = () => {
    client.requestAccessToken();
  };

  // ------------------------------------------------------------ SIGNOUT handler

  const onSignOutClick = () => {
    auth.revoke(props.auth.isSignedIn, () => {
      props.signOut();
    });
  };

  const renderButton = () => {
    if (props.auth.isSignedIn)
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
