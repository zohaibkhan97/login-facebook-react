"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginFacebookReact;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url-search-params.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let params = new URLSearchParams(document.location.search);
const code_parameter = params.get("code");

function LoginFacebookReact(props) {
  const fbLoginHandler = () => {
    _axios.default.get("https://graph.facebook.com/v12.0/oauth/access_token?client_id=".concat(props.appId, "&redirect_uri=").concat(props.redirectUrl, "&client_secret=").concat(props.appSecret, "&code=").concat(code_parameter)).then(res => {
      _axios.default.get("https://graph.facebook.com/v12.0/me?fields=".concat(props.fields, "&access_token=").concat(res.data.access_token)).then(fb => {
        props.responseFacebook(fb);
      });
    });
  };

  (0, _react.useEffect)(() => {
    if (code_parameter) {
      fbLoginHandler();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.facebook.com/v8.0/dialog/oauth?client_id=".concat(props.appId, "&redirect_uri=").concat(props.redirectUrl, "&display=popup\n    ")
  }, /*#__PURE__*/_react.default.createElement("svg", {
    fill: "#3b5998",
    viewBox: "0 0 448 512",
    height: props.iconSize,
    width: props.iconSize
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
  })));
}