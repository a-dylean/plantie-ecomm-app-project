// import {
//   Action,
//   Store,
//   ThunkAction,
//   configureStore,
//   createListenerMiddleware,
// } from '@reduxjs/toolkit';
// //import productsReducer from '../features/products/productsSlice';
// import cartReducer from '../features/cart/cartSlice';
// import userReducer from '../features/users/userSlice';
// //import { baseApi } from '../features/api/baseApi';
// import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
// import { isRejectedWithValue } from '@reduxjs/toolkit';
// //import { createNewSession } from '../hooks/useRetrieveSession';

// const refreshTokenErrorListener = createListenerMiddleware();
// refreshTokenErrorListener.startListening({
//   predicate: () => true,
//   effect: async (action: any, listenerApi) => {
//     if (isRejectedWithValue(action) && action?.payload?.status == 403) {
//       listenerApi.cancelActiveListeners();
//       await listenerApi.delay(1000);
//       const newUserQuery = listenerApi.dispatch(
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         baseApi.endpoints.createNewUser.initiate(),
//       );
//       await createNewSession(newUserQuery);
//     }
//   },
// });

// export const store = configureStore({
//   reducer: {
//     // products: productsReducer,
//     // cart: cartReducer,
//     // user: userReducer
//     //[baseApi.reducerPath]: baseApi.reducer,
//   },
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware()
//   //     .concat(baseApi.middleware)
//   //     .prepend(refreshTokenErrorListener.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// //setupListeners(store.dispatch);
export {}