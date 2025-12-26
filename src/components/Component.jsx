import React, { useContext } from 'react'
import { counterContext } from '../context/context.js'

export default function Component() {
    const {count,input} = useContext(counterContext)
  return (
    <div>
      {count}
      {input}
    </div>
  )
}
