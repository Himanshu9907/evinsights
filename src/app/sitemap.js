import { posts } from "@/data/posts";

// export default function sitemap() {
//   const blogPosts = posts.map((post) => ({
//     url: `https://evinsightshub.vercel.app/blog/${post.slug}`,
//     lastModified: new Date(),
//   }));

//   return [
//     {
//       url: "https://evinsightshub.vercel.app",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://evinsightshub.vercel.app/blog",
//       lastModified: new Date(),
//     },
//     ...blogPosts,
//   ];
// }

export default function sitemap() {
  const baseUrl = "https://evinsightshub.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/comparison`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}