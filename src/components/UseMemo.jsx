import React, { useMemo, useState } from 'react'
function expensiveFunction(number){
  console.log(`Bat dau `);
  const start = new Date();

  console.log(`Ket thuc`,new Date()-start);

  return number * number
}
export default function UseMemo() {
  const [count,setCount]=useState(0)
  const [num,setNum]=useState(20)
  const number = useMemo(()=>{
    return expensiveFunction(num)
  },[])
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={()=>setCount(count + 1)}>Adđ</button>
      <p>{number}</p>
    </>
  )
}
