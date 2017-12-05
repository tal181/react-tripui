
import * as action from './actionsConsts'
export function getTest (myTest) {
  return {
    type: action.MY_TEST,
    myTest: myTest
  }
}