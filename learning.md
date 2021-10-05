# Redux Store
### one store for the entire application

- Holds appliction state
- Allow access the state via `getState()`
- Allow state to be updated via `dispatch(action)`
- regiser listeners via  `subscribe(listener)`
- handles unregistering of listeners  via the function returned by subscriber.

## Combine Multiple Reducers
`redux.combineReducers()` : Redux provides a method for combining multiple reducers  into a single root reducer. 