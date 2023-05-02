import { prismaClient as Prisma } from './PrismaClient';
import { DeleteAll } from './deleteAll';
import Characters from '../data/characters.json';

// Add quotes
async function addData() {
	// ~Optional~ Some people may find it helpful to delete all before adding
	// DeleteAll();

	await Prisma.characters.createMany({
		data: Characters
	})

	const DbCharCount = await Prisma.characters.count();
	console.log(`Characters added successfully, ${DbCharCount} characters total.`)
}

addData()
  .then(async () => {
    await Prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await Prisma.$disconnect()
    process.exit(1)
})