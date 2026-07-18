import { prisma } from "@/lib/prisma";
import CompareSelector from "./components/CompareSelector";

export default async function ComparisonHomePage({
  searchParams,
}) {

  const params = await searchParams;

const car1Slug = params?.car1 ?? "";

  const cars = await prisma.eVModel.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
      brand: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  const selectedCar1 = car1Slug
  ? await prisma.eVModel.findUnique({
      where: {
        slug: car1Slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        image: true,
        brand: {
          select: {
            name: true,
          },
        },
      },
    })
  : null;

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

       <CompareSelector
  cars={cars}
  defaultCar1={selectedCar1}
/>

      </section>
    </main>
  );
}