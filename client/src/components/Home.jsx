import React, { useContext } from 'react'
import { Glo } from '../App'
export default function Home() {
    const {user, pass} = useContext(Glo)
  return (
    <div>Hi!! {user}</div>
  )
}
