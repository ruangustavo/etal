'use client'

import NumberFlow from '@number-flow/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface PrizeProps {
  position: number
  amount: number
}

export function PrizeItem({ position, amount }: PrizeProps) {
  const [value, setValue] = useState(0)

  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setValue(amount)
            observer.disconnect()
          }
        })
      },
      { threshold: 1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [amount])

  return (
    <li ref={ref} className="my-3 flex items-center gap-4">
      <div
        className={clsx(
          'flex size-9 items-center justify-center rounded-full font-bold text-white',
          position === 1 && 'bg-yellow-500',
          position === 2 && 'bg-gray-500',
          position === 3 && 'bg-yellow-900',
        )}
      >
        {position}º
      </div>
      <NumberFlow
        value={value}
        format={{
          style: 'currency',
          currency: 'BRL',
        }}
        className="text-xl font-semibold text-slate-800"
        continuous
        spinTiming={{
          duration: 1000,
          easing:
            'linear(0,0.008,0.028,0.06,0.099,0.145,0.196,0.249,0.304,0.36,0.416,0.47,0.523,0.573,0.621,0.667,0.709,0.748,0.784,0.817,0.847,0.874,0.898,0.92,0.939,0.955,0.97,0.982,0.992,1.001,1.008,1.014,1.019,1.022,1.025,1.027,1.028,1.028,1.028,1.028,1.027,1.026,1.025,1.024,1.022,1.02,1.019,1.017,1.016,1.014,1.013,1.011,1.01,1.009,1.008,1.007,1.006,1.005,1.004,1.003,1.003,1.002,1.001,1.001,1.001,1,1,1,1,1,0.999,0.999,0.999,0.999,1)',
        }}
      />
    </li>
  )
}
