import { useEffect, useState } from "react"

export default function Bai2() {
  const [count,setCount] = useState(0) 
  const [action,setAction]=useState('')
  const [scroll,setScroll]=useState(0);
  // useEffect(()=>{
  //   document.title = `${count}`
  //   console.log(`userEffect`);
  // },[count])
  useEffect(()=>{
    console.log("hello");
    fetch(`https://reqres.in/api/${action}`)
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))
  },[action])
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      setScroll(window.scrollY)
    })
    return ()=>{

    }
  },[])
  return (
    <div>
      <p>you click {count}</p>
      <button onClick={()=> setCount(count +1)}>Click me</button>
      <button onClick={()=>setAction('users')}>Get user</button>
      <button onClick={()=> setAction('comments')}>Get comments</button>
      <p style={{position:'fixed'}}>{scroll}</p>
    </div>
  )
}
