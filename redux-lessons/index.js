const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//ACTION
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

//REDUCER
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const initialCakesState = {
    numOfCakes: 10,
}

const initialIceCreamsState = {
    numOfIceCreams: 20
}

const cakesReducer = (state = initialCakesState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamsReducer = (state = initialIceCreamsState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state, //Copy existing state
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

//STORE
const rootReducer = combineReducers({
    cake: cakesReducer,
    iceCream: iceCreamsReducer
})
const store = createStore(rootReducer, applyMiddleware(logger)) //applyMiddleware(logger) --> To display the logs

console.log('initial state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) //Called when store.dispatch is called
const unsubscribe = store.subscribe(() => {}) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe() //Stop dispatch function
// store.dispatch(buyCake()) //Will not run
