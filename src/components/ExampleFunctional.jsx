import { useState } from "react"
export default function ExampleFunctional() {
  const [count,setCount] = useState(0)
  const [user,setUser]=useState({
    name:"Test",
    age:12,
  })
  const handleClick=()=>{
    setCount((prev)=>{
      return prev + 1;
    })
    setCount((prev)=>{
      return prev + 1;
    })
    setUser({name:'updated'})
  }
  
  return (
    <div>
      <p>you click {count}</p>
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}
