import { Photon } from '@prisma/photon'

// import dotenv from 'dotenv'
// dotenv.config()

const photon = new Photon()

async function main() {
  const data = await photon.users.findMany()
  console.log({ data })
}

main()
