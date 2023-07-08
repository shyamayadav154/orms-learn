import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const query = await prisma.user.findMany();
    console.log(query);
}

main().then().catch((e) => {
    console.log(e);
});
