import { describe } from 'node:test'
import { neon } from '@neondatabase/serverless'
import { PrismaNeonHTTP } from '@jkomyno/prisma-adapter-neon'
import { smokeTestClient } from './client'

describe('neon with @prisma/client', async () => {
  const connectionString = `${process.env.JS_NEON_DATABASE_URL as string}`

  const connection = neon(connectionString, {
    arrayMode: false,
    fullResults: true,
  })
  const adapter = new PrismaNeonHTTP(connection)

  smokeTestClient(adapter)
})
