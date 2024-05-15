"use client"

import { useState } from 'react'
import { Button } from './ui/button'

// Define a TypeScript interface for the props of the CounterButton
interface CounterButtonProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

// Using the defined interface to type the props
const CounterButton = ({ count, setCount }: CounterButtonProps) => (
  <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
)

export default function Hero() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleReset = () => {
    setCount1(0)
    setCount2(0)
  }

  return (
    <div className='container mt-5'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <small className='text-sm font-medium leading-none'>
          Counters that update separately
        </small>
        <div className='flex items-center justify-between gap-4'>
          <CounterButton count={count1} setCount={setCount1} />
          <CounterButton count={count2} setCount={setCount2} />
          <Button variant='destructive' onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
