import React, { useState } from 'react'
import { ContainerCount, TextNumber } from './StyleCountItem';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


const CountItem = () => {
  const [count, setCount] = useState(1);

  return (
    <ContainerCount>
        <AiFillMinusCircle onClick={() => { setCount(count - 1) }} />
        <TextNumber>{count}</TextNumber>
        <AiFillPlusCircle onClick={() => { setCount(count + 1) }} />
    </ContainerCount>
  )
}

export default CountItem