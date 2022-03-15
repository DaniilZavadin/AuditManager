import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer.js';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'currentInspectionId',
    storage: storage,
    whitelist: ['currentInspectionId']
};
const presistedReducer = persistReducer(persistConfig, reducer);

const middleware = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(presistedReducer, middleware);
const persistor = persistStore(store);

export { persistor, store };