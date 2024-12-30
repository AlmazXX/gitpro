import * as dotenv from 'dotenv'
dotenv.config()

export const EXPRESS_PORT = Number(process.env.EXPRESS_PORT) || 8626
export const GITHUB_CLIENT_ID = String(process.env.CLIENT_ID)
export const GITHUB_CLIENT_SECRET = String(process.env.CLIENT_SECRET)
