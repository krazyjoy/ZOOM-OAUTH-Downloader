## Steps of implementation

### Register Zoom Oauth APP
- location: Zoom app marketplace
1. Create a new "OAUTH" application (e.g. Postman ZOOM)
    App Credentials:
   - Client ID (given)
   - Client Secret (given)
   - Redirect URL for OAUTH: `https://oauth.pstmn.io/v1/browser-callback`
   - OAuth allow list:
       - Security Check (closed)
       - Subdomain Check (closed)
       - Add allow lists
         - `https://oauth.pstmn.io/v1/browser-callback`
         - `https://oauth.pstmn.io/v1/callback` (local postman)

2. Feature
   Token:
   - Secret Token (given)
   - Verification Token (given)
  
3. Scopes
   e.g. open scopes needed
   - View all user meetings (/meeting:read:admin)
   - View and manage all user meetings (/meeting:write:admin)


### Use Postman Callback URL in Collections

