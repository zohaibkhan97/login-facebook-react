import React, { useEffect } from "react";
import axios from "axios";
let params = new URLSearchParams(document.location.search);
const code_parameter = params.get("code");

export default function LoginFacebookReact(props) {
  const fbLoginHandler = () => {
    axios
      .get(
        `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${props.appId}&redirect_uri=${props.redirectUrl}&client_secret=${props.appSecret}&code=${code_parameter}`
      )
      .then((res) => {
        axios
          .get(
            `https://graph.facebook.com/v12.0/me?fields=${props.fields}&access_token=${res.data.access_token}`
          )
          .then((fb) => {
            props.responseFacebook(fb);
          });
      });
  };

  useEffect(() => {
    if (code_parameter) {
      fbLoginHandler();
    }
  }, []);
  return (
    <a
      className="login-link-fb"
      href={`https://www.facebook.com/v8.0/dialog/oauth?client_id=${props.appId}&redirect_uri=${props.redirectUrl}&display=popup
    `}
    >
      {props.type === "icon" ? (
        <div className="fb-login-icon">
          <svg
            fill="currentColor"
            viewBox="0 0 448 512"
            height={props.size}
            width={props.size}
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          </svg>
        </div>
      ) : (
        <div className="fb-login-btn">
          <svg
            fill="currentColor"
            viewBox="0 0 448 512"
            height={props.size}
            width={props.size}
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          </svg>{" "}
          <span>{props.text ? props.text : "Login with facebook"}</span>
        </div>
      )}
    </a>
  );
}
