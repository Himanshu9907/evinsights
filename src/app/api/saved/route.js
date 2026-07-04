import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { slugs } = await req.json();

    const cars = await prisma.eVModel.findMany({
      where: {
        slug: {
          in: slugs,
        },
      },

      include: {
        brand: true,
      },
    });

    return NextResponse.json(cars);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load saved vehicles" },
      { status: 500 }
    );
  }
}