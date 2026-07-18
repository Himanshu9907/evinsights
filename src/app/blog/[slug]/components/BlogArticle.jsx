import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import AuthorCard from "./AuthorCard";
import ShareButtons from "./ShareButtons";
import KeyTakeaways from "./KeyTakeaways";
import PreviousNextArticle from "./PreviousNextArticle";
import ArticleProsCons from "./ArticleProsCons";
import ArticleFAQ from "./ArticleFAQ";
import ArticleInfoBox from "./ArticleInfoBox";
import ArticleLastUpdated from "./ArticleLastUpdated";

import {
  CalendarDays,
  User,
  FolderOpen,
  Clock3,
} from "lucide-react";

function getReadingTime(content) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogArticle({
  article,
  previous,
  next,
}) {
  const readingTime = getReadingTime(article.content);

  return (
    <article className="border-b border-theme">

      {/* Hero */}

      <Breadcrumb
    category={article.category}
    title={article.title}
/>

      <section className="mx-auto max-w-5xl px-4 py-12">

        {/* Category */}

        <Link
          href={`/blog/category/${article.category.slug}`}
          className="
            inline-flex
            rounded-full
            bg-green-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-green-500
          "
        >
          {article.category.name}
        </Link>

        {/* Title */}

        <h1
          className="
            mt-6
            text-4xl
            font-black
            leading-tight
            md:text-5xl
            lg:text-6xl
          "
        >
          {article.title}
        </h1>

        {/* Excerpt */}

        <p
          className="
            mt-6
            max-w-4xl
            text-lg
            leading-8
            text-muted
          "
        >
          {article.excerpt}
        </p>

        {/* Meta */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-6
            text-sm
            text-muted
          "
        >
          <div className="flex items-center gap-2">

            <User size={16} />

            <span>{article.author.name}</span>

          </div>

          <div className="flex items-center gap-2">

            <CalendarDays size={16} />

            <span>
              {new Date(article.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Clock3 size={16} />

            <span>{readingTime} min read</span>

          </div>

          <div className="flex items-center gap-2">

            <FolderOpen size={16} />

            <span>{article.category.name}</span>

          </div>

        </div>

      </section>

      {/* Featured Image */}

      <section className="mx-auto max-w-6xl px-4">

        <div
          className="
            relative
            aspect-[16/8]
            overflow-hidden
            rounded-3xl
            border
            border-theme
          "
        >
          <Image
            src={article.image || "/ev-car.jpg"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

      </section>

      <KeyTakeaways article={article} />

      <ArticleInfoBox title="Buying Advice">
  <p>
    The Tata Curvv EV is best suited for buyers looking for a stylish,
    feature-loaded electric SUV with long driving range and low running
    costs. If you can charge at home, it offers an excellent ownership
    experience.
  </p>
</ArticleInfoBox>


      <ArticleProsCons article={article} />

      <ArticleFAQ article={article} />

      {/* Content */}

      <section
        className="
          mx-auto
          max-w-4xl
          px-4
          py-16
        "
      >
        <div
          className="
            prose
            prose-lg
            dark:prose-invert
            max-w-none
            prose-headings:font-bold
            prose-headings:text-foreground
            prose-p:text-muted
            prose-p:leading-8
            prose-a:text-green-500
            prose-strong:text-foreground
            prose-img:rounded-2xl
          "
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        />
   
      </section>

      <ShareButtons article={article} />

      <ArticleLastUpdated article={article} />

      <AuthorCard
  author={article.author}
  publishedAt={article.createdAt}
/>

<PreviousNextArticle
  previous={previous}
  next={next}
/>

    </article>
  );
}