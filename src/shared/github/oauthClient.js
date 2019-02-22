const ClientOAuth2 = require('client-oauth2');

const oauthClient = new ClientOAuth2({
    clientId: process.env.AUTH_GITHUB_CLIENT_ID,
    clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    accessTokenUri: 'https://github.com/login/oauth/access_token',
    authorizationUri: 'https://github.com/login/oauth/authorize',
    redirectUri: `${process.env.WEBSERVICE_ENDPOINT}/auth/githubCallback`,
    scopes: [ 'public_repo', 'read:org', 'user' ],
});

module.exports = oauthClient;
