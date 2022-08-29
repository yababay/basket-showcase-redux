import { createSlice } from "@reduxjs/toolkit"

const showcaseSlice = createSlice({
    name: 'basket',
    initialState: {
        total:0
    },
    reducers: {
        addMushrooms: (state, action) => {
            const { payload } = action
            state.total = state.total + payload
        }
    }
})

export const { actions, reducer } = showcaseSlice
