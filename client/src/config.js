const oktaAuthConfig = {
  issuer: "https://gmailoktaakshaygakshaygakshayg.okta.com/oauth2/default",
  clientId: "0oa101xzvzF7f9Gg8696",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://gmailoktaakshaygakshaygakshayg.okta.com",
  clientId: "0oa101xzvzF7f9Gg8696",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
