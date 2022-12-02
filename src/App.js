import React from "react";
import Admin from "./Admin";
import { Provider } from "./Context";
import Form from "./Form";
import Info from "./Info";
import Main from "./Main";

function App() {


  return (
    <>
  <Provider>
   <div>
   <Main />
    <Form />
    <Admin />
   </div>
  </Provider>
    </>
  );
}

export default App;
