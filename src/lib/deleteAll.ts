import { prismaClient as Prisma } from './PrismaClient';

export const DeleteAll = async () => {
	await Prisma.characters.deleteMany({})
	.then (async () => {
		console.log(`All data successfully deleted.`)
	})
	.catch(async (error) => {
		console.error(`${error}`)
	})
}

DeleteAll()
	.then(async () => {
		await Prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await Prisma.$disconnect()
		process.exit(1)
	})