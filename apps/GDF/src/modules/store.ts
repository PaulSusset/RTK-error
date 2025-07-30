import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import sessionReducer from '@redux/session/session.slice'

import { CONTRIBUTEURS } from './contributeurs'
export const listenerMiddleware = createListenerMiddleware()

export const store = configureStore({
  reducer: {
    // navigation: navigationReducer,
    session: sessionReducer,
    [CONTRIBUTEURS.reducerPath]: CONTRIBUTEURS.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(listenerMiddleware.middleware)
      .concat(CONTRIBUTEURS.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
