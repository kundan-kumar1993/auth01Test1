interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'cufh0NX21Cy6ktXgOryZf0ROd408HXIv',
  domain: 'myapp1.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
