//Common Js 문법 ES5 이전문법
// http-proxy-middleware 컴포넌트에서 createProxyMiddleware 함수를 사용하겠다
const { createProxyMiddleware } = require("http-proxy-middleware");

// react 에서 /get/~~ 으로 요청을 보내면 자동으로 /get 대신에 http://apis.data.go.kr 에서 요청한느 것 처럼
// 주소를 변경하여 상대방의 cors 문제를 우회하여 진행
module.exports = (app) => {
  app.use(
    "/get",
    createProxyMiddleware({
      target: "http://apis.data.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/get": "",
      },
    })
  );
};
