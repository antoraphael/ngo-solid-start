import fm from "front-matter";

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  source?: string;
  cover?: string;
  url?: string;
}

export interface Blog extends BlogFrontmatter {
  slug: string;
  body: string;
}

export function loadBlogs(): Blog[] {
  const modules = import.meta.glob("/content/blogs/*.md", {
    eager: true,
    as: "raw",
  });

  return Object.entries(modules).map(([path, raw]) => {
    const parsed = fm<BlogFrontmatter>(raw as string);
    const slug = path.split("/").pop()!.replace(".md", "");

    return {
      slug,
      body: parsed.body,
      ...parsed.attributes,
    };
  });
}
