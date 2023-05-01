import { prismaClient as Prisma } from './PrismaClient';

export const DeleteByID = async ( dataID: number ) => {
	await Prisma.characters.delete({
		where: { id: dataID}
	}).then (async () => {
		const dataCount = Prisma.characters.count();
		console.log(`Data successfully deleted ${dataCount} characters total.`)
	})
	.catch(async (error) => {
		console.error(`${error}`)
	})
}

DeleteByID(21)
	.then(async () => {
		await Prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await Prisma.$disconnect()
		process.exit(1)
	})