import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { AppState } from '../reducers'

export type AppStoreType = ReturnType<typeof createStore>

const configureStore = (initialState: AppState): AppStoreType => {
  const middleware = [thunk];
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store: AppStoreType = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );

  return store
}

export default configureStore
