import React from "react";
import ReactDOM from "react-dom/client"; // 使用 React 18 的 API
import App from "./App"; // 引入 App 組件

// 渲染 App 組件到 index.html 中的 div#root
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
