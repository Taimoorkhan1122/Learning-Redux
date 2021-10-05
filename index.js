const redux = require("redux");
const createStore = redux.createStore;

const Buy_Cake = "Buy_Cake";

function buyCake() {
  return {
    type: Buy_Cake,
    info: "first redux action",
  };
}

// application state should be stored in a single state object tree
const initialState = {
  noOfCakes: 10,
};

// Reducers: Reducers are responsible for altering the state based on provided actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

// implementing redux store
const store = createStore(reducer);
console.log(store.getState());
store.subscribe(() => console.log("State Updated: ", store.getState()));


const intervalID = setInterval(() => {
    store.dispatch(buyCake());
    if(store.getState().noOfCakes < 5){
        clearInterval(intervalID)
    }
  }, 1000)

