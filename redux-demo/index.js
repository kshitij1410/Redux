//Step1:  Create a store
//step 2: make a all possible action on a particular api 
//step3: Reducer help to make connection btw action,store

//if there a more than one api, then use combine reducers

//for a connection we require some middleware for data  ie. thunk

// Actions are used to store relevant information for the state
// reach the store through the dispatch () method available on the store object

//Redux store (state)

const redux = require('redux')
const reduxLogger = require('redux-logger')

//create a store
const createStore = redux.createStore    
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//action 
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake () {
  return {
    type: BUY_CAKE
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM
  }
}

//initial item in store
const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}


// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }


//reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

//combine reducer

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())  
const unsubscribe = store.subscribe(() => { })  //use for updation 

store.dispatch(buyCake())  
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
