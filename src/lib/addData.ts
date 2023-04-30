import { prismaClient as Prisma } from './PrismaClient';
import Characters from '../data/characters.json';

// Add quotes
async function main() {
	await Prisma.characters.createMany({
		data: Characters
	})

	const DbCharCount = await Prisma.characters.count();
	console.log(`Characters added successfully, ${DbCharCount} characters total.`)
}

main()
  .then(async () => {
    await Prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await Prisma.$disconnect()
    process.exit(1)
})