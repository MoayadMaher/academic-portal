import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  // Users - Ensure passwords are hashed in a real application
  const alice = await prisma.user.create({
    data: {
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "hashed_password1", // Use bcrypt in practice to hash passwords
      role: UserRole.TEACHER,
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: "Bob Smith",
      email: "bob@example.com",
      password: "hashed_password2",
      role: UserRole.STUDENT,
    },
  });

  const clara = await prisma.user.create({
    data: {
      name: "Clara Oswald",
      email: "clara@example.com",
      password: "hashed_password3",
      role: UserRole.TEACHER,
    },
  });

  // Courses - Ensure teacherId matches an existing user ID from the database
  const course1 = await prisma.course.create({
    data: {
      name: "Introduction to Computer Science",
      description: "A foundational course in computer science.",
      startDate: new Date("2024-09-01"),
      endDate: new Date("2025-06-30"),
      teacherId: alice.id,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      name: "Advanced Mathematics",
      description: "Covers a variety of advanced topics in mathematics.",
      startDate: new Date("2024-09-01"),
      endDate: new Date("2025-06-30"),
      teacherId: clara.id,
    },
  });

  console.log(`Seeding finished.`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
