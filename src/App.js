import Admin from "./Admin";
import { Provider } from "./contexts/Context";
import Form from "./Form";
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
