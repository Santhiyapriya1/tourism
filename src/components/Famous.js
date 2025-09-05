// components/Famous.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementFamous, decrementFamous } from '../redux/CounterSlice'

export function Famous() {
  const famousCount = useSelector((state) => state.famous.famousCount)
  const unfamousCount = useSelector((state) => state.famous.unfamousCount)
  const totalCount = useSelector((state) => state.famous.totalCount)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Tourism Statistics</h1>

      <h2>Famous Places</h2>
      <span>{famousCount}</span>
      <button onClick={() => dispatch(incrementFamous())}>+ Famous</button>
      <button onClick={() => dispatch(decrementFamous())}>- Famous</button>

      <h2>Unfamous Places</h2>
      <span>{unfamousCount}</span>

      <h2>Total Count</h2>
      <span>{totalCount}</span>
    </div>
  )
}
