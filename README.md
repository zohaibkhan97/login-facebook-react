# Login Facebook React

# Installation

```
npm install login-facebook-react --save
```

# Usage

Your app must be running on https

```js
import React from "react"
import LoginFacebookReact from "login-facebook-react"

export default function App() {
  const responseFacebook = (response) => {
    console.log("response", response)
  }
  return (
    <LoginFacebookReact
      iconSize={30}
      appId={"Your app id"}
      redirectUrl={"Your redirect url"}
      appSecret={"Your app secret"}
      fields="email,first_name,last_name,picture.type(large)"
      responseFacebook={responseFacebook}
    />
  )
}
```
