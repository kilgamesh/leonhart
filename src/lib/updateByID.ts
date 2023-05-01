import { prismaClient as Prisma } from './PrismaClient';

export const UpdateByID = async () => {
	await Prisma.characters.update({
		where: { id: 21 },
		data: {
			name: "",
			age: "",
			height: "",
			weight: "",
			race: "",
			gender: "",
			class: "",
			origin: "",
			quote: "",
			description: ""
		}
	})
}

UpdateByID()
	.then(async () => {
		await Prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await Prisma.$disconnect()
		process.exit(1)
	})