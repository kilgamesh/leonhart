import { prismaClient as Prisma } from './PrismaClient';

export const FindByID = async ( dataID: number ) => {
	await Prisma.characters.findUnique({
		where: { id: dataID}
	}).then (async (data) => {
		console.log(data)
	})
	.catch(async (error) => {
		console.error(`${error}`)
	})
}

FindByID(22)
	.then(async () => {
		await Prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await Prisma.$disconnect()
		process.exit(1)
	})