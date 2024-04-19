import { useReducer } from "react"
const initState = {
  loading: false,
  data: [],
  err: null
}
const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'GET_ERROR':
      return {
        ...state,
        data: [],
        error: action.err
      }
    default:
      return state;
  }
}
export default function UseReducer2() {
  const [user, dispatch] = useReducer(userReducer, initState);

  const getAPI = () => {
    dispatch({
      type:'GET_REQUEST'
    })
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type:'GET_SUCCESS',
          data: res
        })
      })
      .catch((err) => {
        dispatch({
          type:'GET_ERROR',
          err: err
        })
      })
    }, 2000);
  }
  return (
    <div>
      <button onClick={getAPI}>Click</button>
      {user.loading ? <p>loading..</p> : <p>{JSON.stringify(user)}</p>}
    </div>
  )
}
