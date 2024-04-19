import { useReducer } from "react"
// const reducer = (state, action) => {
//   switch (action) {
//     case 'TANG':
//       return state + 1;
//     case 'GIAM':
//       return state - 1;
//     case 'XOA_TAT_CA':
//       return 0;
//     default:
//       return state
//   }
// }
// const reducer2 = (state, action) => {
//   switch (action.type) {
//     case 'GAN_GIA_TRI':
//       return action.data

//     default:
//       return state;
//   }
// }
const initState = {
  loading: false,
  data: [],
  err: null
}
const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'GET_USER_ERROR':
      return {
        ...state,
        data: [],
        error: action.data
      }
    default:
      return state;
  }
}
export default function UseReducer() {
  // const [count, dispatch] = useReducer(reducer, 0)
  // const [count2, dispatch2] = useReducer(reducer2, 0)
  const [user, userDispatch] = useReducer(userReducer, initState)
  const getUser = () => {
    userDispatch({
      type: 'GET_USER_REQUEST'
    })
    setTimeout(() => {
      
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: 'GET_USER_SUCCESS',
            data: res
          })
        })
        .catch((err) => {
          userDispatch({
            type: 'GET_USER_ERROR',
            error: err
          })
        })
    },2000)

  }

  return (
    <div>
      <button onClick={getUser}>getUser</button>

      {user.loading ? <p>Loading..</p>: <p>{JSON.stringify(user.data)}</p>}
      {/* <p>{count}</p>
      <button onClick={() => dispatch(`TANG`)}>Tăng</button>
      <button onClick={() => dispatch(`GIAM`)}>Giảm</button>
      <button onClick={() => dispatch(`XOA_TAT_CA`)}>Khong Giam</button>

      <p>{count2}</p>
      <button onClick={() => dispatch2({
        type: 'GAN_GIA_TRI',
        data: 10
      })}>Gan giá tri</button> */}

    </div>
  )
}
