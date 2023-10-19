import { TOKEN_IPINFO } from '@/config'
import { type NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  // Get the IP address from the request
  const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')

  console.log('ip', ip)

  // if development, use the IP address from the request
  if (process.env.NODE_ENV === 'development') {
    return Response.json({
      data: {
        city: 'Cartagena',
        region: 'Bolívar',
        country: 'CO'
      }
    })
  }

  const res = await fetch(`https://ipinfo.io/${ip}?token=${TOKEN_IPINFO}`)
  const data = await res.json()

  return Response.json({
    data
  })
}
