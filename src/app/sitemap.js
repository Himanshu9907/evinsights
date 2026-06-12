import { posts } from "@/data/posts";

export default function sitemap() {
  const blogPosts = posts.map((post) => ({
    url: `https://evinsightshub.vercel.app/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://evinsightshub.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://evinsightshub.vercel.app/blog",
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}