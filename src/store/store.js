// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { reducer } from './reducer';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;

// import { createStore,  } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['reducer'] // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(presistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };