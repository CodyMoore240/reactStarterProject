import { createAction } from 'redux-actions'

// Actions
export const EXAMPLE = 'app/example/SET_IS_LOADING'
export const RESET = 'app/example/RESET'

const initialState = {
  example: true
}
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        example: false
      }
    case RESET:
      return initialState
    default:
      return state
  }
}

// Action Creators
export const exampleExample = createAction(EXAMPLE)
export const resetExample = createAction(RESET)