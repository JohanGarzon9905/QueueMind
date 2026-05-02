import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const AuthProviderWrapper = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/dashboard");
  };

  return (
    <Auth0Provider
      domain="dev-1057588rgnb4r7gv.us.auth0.com"
      clientId="wiDlm9TPAXrA1FaszxOeY10ZUX52FJMF"
      authorizationParams={{
        prompt: "login",
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};