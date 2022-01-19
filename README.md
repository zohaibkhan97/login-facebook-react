# Login Facebook React

# Installation

```

npm install login-facebook-react --save

```

# Usage

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
      appId={"238809965055005"}
      redirectUrl={"https://localhost:3000/"}
      appSecret={"acbd79f28c589a23d48331ab05456d86"}
      fields="email,first_name,last_name,picture.type(large)"
      responseFacebook={responseFacebook}
    />
  )
}
```
