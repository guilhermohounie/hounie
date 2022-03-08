// Populate the database
import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

async function seed() {
  try {
    const examples: Prisma.ExampleCreateInput[] = [
      {
        content: "one",
      },
      {
        content: "two",
      },
      {
        content: "three",
      },
      {
        content: "four",
      },
    ];

    for await (const example of examples) {
      await prisma.example.create({ data: example });
    }

    console.log("🌱 Database seeded!");
  } catch (error) {
    throw new Error(`[ERROR]: ${error}`);
  }
}

seed().finally(() => {
  prisma.$disconnect();
});
