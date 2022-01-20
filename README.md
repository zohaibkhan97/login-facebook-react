# Login Facebook React

# Installation

```
npm install login-facebook-react --save
```

# Usage

Your app must be running on https

# Note

pass a prop type='icon' to get button with icon only if you want a full text button don't pass prop 'type' but must pass prop 'text' eg. text="Continue with facebook" other wise default text "Login with facebook" will be appear

```js
import React from "react";
import LoginFacebookReact from "login-facebook-react";

export default function App() {
  const responseFacebook = (response) => {
    console.log("response", response);
  };
  return (
    <LoginFacebookReact
      appId={"Your app id"}
      redirectUrl={"Your redirect url"}
      appSecret={"Your app secret"}
      fields="email,first_name,last_name,picture.type(large)"
      responseFacebook={responseFacebook}
      size={30}
      type="icon"
      text="Continue with facebook"
    />
  );
}
```
