import * as actions from '../actions/actionsConsts'

export const initialState = {

  myTest : true

}
export const MY_REDUCER = 'myReducer'

export default function myReducer (state = initialState, action) {
  switch(action.type) {

    case actions.MY_TEST:
      console.log("in test")
      return {...state, myTest: action.myTest}

    default:
      return state
  }
}

