'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Hero() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleReset = () => {
    setCount1(0)
    setCount2(0)
  }

  return (
    <div className='container mt-5'>
      <div className='flex justify-center gap-10'>
        <small className='text-sm font-medium leading-none'>
        Counters that update separately
        </small>
        <MyButton count={count1} setCount={setCount1} />
        <MyButton count={count2} setCount={setCount2} />
        <Button variant='destructive' onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

interface MyButtonProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function MyButton({ count, setCount }: MyButtonProps) {
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Button variant={'secondary'} onClick={handleClick}>
      Clicked {count} times
    </Button>
  )
}
