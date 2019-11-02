import { createStore } from "redux";

//数据持久化的实现
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

//没有使用数据持久化时
// let store = createStore(reducer)
// export default store

let store = createStore(
  persistedReducer,
 
);

let persistor = persistStore(store);

export default { store, persistor };
