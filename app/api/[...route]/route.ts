import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import users from './routes/users'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

app.route('/users', users)

export const GET = handle(app)
// export const POST = handle(app)
// export const PUT = handle(app)
// export const DELETE = handle(app)

