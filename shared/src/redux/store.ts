import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import sessionReducer from './session/session.slice'

export const listenerMiddleware = createListenerMiddleware()

export const sharedStore = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(listenerMiddleware.middleware)
      .concat(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type SharedRootState = ReturnType<typeof sharedStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type SharedDispatch = typeof sharedStore.dispatch
