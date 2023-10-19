'use client'

import { useEffect, useState } from 'react'

const getIpInfo = async () => {
  const res = await fetch('/api/info', { cache: 'no-cache' })
  const data = await res.json()
  return data
}

export default function Home () {
  const [ip, setIp] = useState('')

  useEffect(() => {
    const getIp = async () => {
      const { data } = await getIpInfo()
      setIp(data)
    }
    getIp()
  }
  , [])

  return (
    <main className="grid min-h-screen place-content-center">
      <h1 className='text-4xl font-bold'>
        Esta es la información de tu ip
      </h1>

      <pre>
        {JSON.stringify(ip, null, 2)}
      </pre>
    </main>
  )
}
