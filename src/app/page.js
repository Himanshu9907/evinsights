// import Image from "next/image";
// import Footer from "./components/Footer";
import { posts } from "@/data/posts";
// import Link from "next/link";
// import { comparisons } from "@/data/comparisons";
import { prisma } from "@/lib/prisma";

import {
  ShieldCheck,
  Newspaper,
  BatteryCharging,
  GitCompareArrows,
} from "lucide-react";
import PopularBrands from "./components/home/PopularBrands";
import HeroSlider from "./components/home/HeroSlider";
import FeaturedCars from "./components/home/FeaturedCars";
import CompareSection from "./components/home/CompareSection";

const featuredReviews = posts
  .filter((post) => post.category === "Reviews")
  .slice(0, 3);

export default async function Home() {
  // const brands = await prisma.eVBrand.findMany();
  const models = await prisma.eVModel.findMany({
    include: {
      brand: true,
    },
  });

  console.log("MODELS =>", models);

  const brands = await prisma.eVBrand.findMany({
  include: {
    _count: {
      select: {
        models: true,
      },
    },
  },

  orderBy: {
    name: "asc",
  },
});

const featuredCars = await prisma.eVModel.findMany({
  where: {
    featured: true,
  },

  take: 8,

  include: {
    brand: true,
  },

  orderBy: {
    createdAt: "desc",
  },
});

const compareCars = await prisma.eVModel.findMany({
  select: {
    name: true,
    slug: true,
  },
  orderBy: {
    name: "asc",
  },
});

  return (
    <>
      {/* <HomeHero /> */}
      <HeroSlider />
      <PopularBrands brands={brands} />
      <FeaturedCars cars={featuredCars} />
      <CompareSection cars={compareCars} />
      

     
    </>
  );
}
