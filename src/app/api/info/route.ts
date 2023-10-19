import { TOKEN_IPINFO } from '@/config'

export const runtime = 'edge'

export async function GET (request: Request) {
  // Get the IP address from the request

  console.log(request.headers)
  const res = await fetch(`https://ipinfo.io/181.140.249.239?token=${TOKEN_IPINFO}`)
  const data = await res.json()

  return Response.json({
    data
  })
}
