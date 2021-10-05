const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const Buy_Cake = "Buy_Cake";
const Buy_IceCream = "Buy_IceCream";

function buyCake() {
  return {
    type: Buy_Cake,
    info: "buy cake action creator",
  };
}

function BuyIceCream() {
    return {
        type: Buy_IceCream,
        info: "buy ice crea action creator"
    }
}

// application state should be stored in a single state object tree
// const initialState = {
//   noOfCakes: 10,
// };
const initialCakeState = {
  noOfCakes: 10,
};

const initialIceCreamState = {
  noOfIceCreams: 20,
};

// Reducers: Reducers are responsible for altering the state based on provided actions
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Buy_Cake:
//       return {
//         ...state,
//         noOfCakes: state.noOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case Buy_IceCream:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// implementing redux store
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
// console.log(store.getState());
const unSubscribe = store.subscribe(() => console.log("State Updated: ", store.getState()));
unSubscribe();


const intervalID = setInterval(() => {
    store.dispatch(buyCake());
    if(store.getState().cake.noOfCakes < 5){
        store.dispatch(BuyIceCream());
        store.dispatch(BuyIceCream());
        clearInterval(intervalID)
    }
  }, 1000)

