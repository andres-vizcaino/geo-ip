import { APP_URL } from '@/config'

const getIpInfo = async () => {
  const res = await fetch(`${APP_URL}/api/info`, { cache: 'force-cache' })
  const data = await res.json()
  return data
}

export default async function Home () {
  const info = await getIpInfo()

  return (
    <main className="grid min-h-screen place-content-center">
      <h1 className='text-4xl font-bold'>
        Esta es la información de tu ip
      </h1>

      <pre>
        {JSON.stringify(info, null, 2)}
      </pre>
    </main>
  )
}
