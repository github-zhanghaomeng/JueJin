import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Counter from "./components/Counter";
// import store from "./store";
import obj from "./store";

ReactDOM.render(
  <Provider store={obj.store}>
    <PersistGate loading={null} persistor={obj.persistor}>
      <Counter></Counter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
