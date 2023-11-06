import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./user/userReducer";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'userReducer',
//     storage: storage,
//   };
  // const pReducer = persistReducer(persistConfig, userReducer);
    const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // const persistor = persistStore(store);

export  {store}
