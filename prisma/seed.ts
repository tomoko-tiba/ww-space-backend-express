import { PrismaClient } from '@prisma/client'
import { bhash } from '../src/utils/passwordHash'

const prisma = new PrismaClient()
async function main (): Promise<void> {
  await prisma.user.upsert({
    where: { userName: 'admin' },
    update: {},
    create: {
      userName: 'admin',
      password: await bhash('123456')
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
