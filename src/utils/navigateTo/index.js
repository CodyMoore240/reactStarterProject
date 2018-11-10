import { push } from 'connected-react-router'

export default function(route){
  return dispatch => {
    dispatch(push(route))
  }
}