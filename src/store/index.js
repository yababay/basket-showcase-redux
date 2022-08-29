import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as showcaseReducer } from './showcase'
import { reducer as basketReducer } from './basket'

const rootReducer = combineReducers({
    showcase: showcaseReducer,
    basket: basketReducer
})

export const store = configureStore({ 
    reducer: rootReducer
})
