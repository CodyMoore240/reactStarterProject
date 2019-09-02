import reducer from '..'

//import actions
import {
  EXAMPLE,
  RESET
} from '..'

//import action creators
import {
  exampleExample,
  resetExample
} from '..'

describe(`app reducer`, () => {
  const initialState = {
    example: true
  }

  describe(`initialState`, () => {
    it(`is correct`, () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })
  describe(`actions`, () => {
    describe(`SET_IS_LOADING`, () => {
      it(`returns the correct state`, () => {
        const action = {
          type: EXAMPLE
        }
        expect(reducer(undefined, action)).toEqual({
          example: false
        })
      })
    })

    describe(`RESET`, () => {
      it(`returns the correct state`, () => {
        const action = {
          type: RESET
        }
        expect(reducer(undefined, action)).toEqual(initialState)
      })
    })
  })
  
  describe(`action creators`, () => {
    describe(`exampleExample`, () => {
      it(`should create the correct action`, () => {
        const expectedAction = {
          type: EXAMPLE
        }
        expect(exampleExample()).toEqual(expectedAction)
      })
    })

    describe(`resetExample`, () => {
      it(`should create the correct action`, () => {
        const expectedAction = {
          type: RESET
        }
        expect(resetExample()).toEqual(expectedAction)
      })
    })
  })
})
