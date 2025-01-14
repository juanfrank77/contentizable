import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import "./index.css";

const basename = import.meta.env.BASE_URL;

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    {/*     <BrowserRouter basename={basename}>
      <div className="w-[800px] h-[600px]"></div>
    </BrowserRouter> */}
    <HydratedRouter />
  </React.StrictMode>,
);
