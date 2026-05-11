import { getCollection, type CollectionEntry } from "astro:content";

export type BlogLang = "es" | "en";
export type BlogPost = CollectionEntry<"blog">;

export const getBlogSlug = (post: BlogPost) => post.id.split("/").at(-1) ?? post.id;

export const getPublishedBlogPosts = async (lang: BlogLang) => {
  const posts = await getCollection("blog", ({ data }) => {
    return data.lang === lang && !data.draft;
  });

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
};

export const formatBlogDate = (date: Date, lang: BlogLang) => {
  return new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
