const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const reduxLogger = require("redux-logger");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const initialState = {
  loading: false,
  users: [],
  errors: "",
};

// actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errors: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        errors: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    setTimeout(
      () =>
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            const users = response.data.map((user) => user.id);
            dispatch(fetchUsersSuccess(users));
          })
          .catch((error) => {
            dispatch(fetchUsersFailure(error));
          }),
      5000
    );
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.subscribe(() => {
  if (store.getState().loading) {
    console.log("loading data...");
  } else {
    console.log(store.getState());
  }
});

store.dispatch(fetchUsers());
