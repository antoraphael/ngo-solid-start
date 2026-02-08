import { Show, createMemo } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import fm from "front-matter";
import type { BlogFrontmatter } from "../lib/blogs";
import NotFound from "./NotFound";

/* ---------------------------------------------
   Load all markdown files
--------------------------------------------- */
const blogModules = import.meta.glob("/content/blogs/*.md", {
  eager: true,
  as: "raw",
});

type Blog = {
  slug: string;
  body: string;
} & BlogFrontmatter;

const blogs: Blog[] = Object.entries(blogModules).map(([path, raw]) => {
  const parsed = fm<BlogFrontmatter>(raw as string);
  const slug = path.split("/").pop()!.replace(".md", "");

  return {
    slug,
    body: parsed.body,
    ...parsed.attributes,
  };
});

/* ---------------------------------------------
   Blog Details Page
--------------------------------------------- */
export default function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams<{ slug: string }>();

  const blog = createMemo(() => blogs.find((b) => b.slug === params.slug));

  return (
    <main class="bg-background text-foreground min-h-screen">
      <Show when={blog()} fallback={<NotFound />}>
        {/* Back */}
        <div class="max-w-6xl mx-auto px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            class="
              inline-flex items-center gap-2
              text-sm font-medium text-muted-foreground
              hover:text-primary transition
            "
          >
            ← Back to stories
          </button>
        </div>

        {/* Hero */}
        <header class="max-w-4xl mx-auto px-4 pt-14 text-center">
          <div class="flex justify-center gap-3 mb-4 flex-wrap">
            <span class="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
              {blog()!.author}
            </span>
            <span class="px-3 py-1 rounded-full text-xs bg-muted">
              {blog()!.date}
            </span>
            <Show when={blog()!.source}>
              <span class="px-3 py-1 rounded-full text-xs bg-muted">
                Source: {blog()!.source}
              </span>
            </Show>
          </div>

          <h1 class="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {blog()!.title}
          </h1>

          <p class="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {blog()!.excerpt}
          </p>
        </header>

        {/* Image */}
        <Show when={blog()!.cover}>
          <section class="max-w-6xl mx-auto px-4 mt-16">
            <div class="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={blog()!.cover || "/uploads/default-cover.jpg"}
                alt={blog()!.title}
                loading="lazy"
                class="
                  w-full
                  h-[300px] md:h-[420px]
                  object-cover
                  transition-transform duration-700
                  hover:scale-[1.03]
                "
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </section>
        </Show>

        {/* Content */}
        <article class="max-w-3xl mx-auto px-4 mt-20 pb-32">
          <div
            class="prose prose-lg dark:prose-invert max-w-none
            prose-p:leading-relaxed
            prose-p:mt-6
            prose-h2:mt-14
            prose-h3:mt-10
            prose-strong:text-foreground"
          >
            <div innerHTML={markdownToHtml(blog()!.body)} />
          </div>

          {/* Divider */}
          <div class="mt-20 flex justify-center">
            <div class="w-24 h-[2px] bg-primary/30 rounded-full" />
          </div>

          {/* Footer */}
          <footer class="mt-10 text-center text-sm text-muted-foreground">
            <p>
              Story by{" "}
              <span class="font-medium text-foreground">{blog()!.author}</span>
            </p>
            <p class="mt-1">Published on {blog()!.date}</p>
          </footer>
        </article>
      </Show>
    </main>
  );
}

/* ---------------------------------------------
   Improved Markdown → HTML
--------------------------------------------- */
function markdownToHtml(md: string) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/\n{2,}/gim, "</p><p>")
    .replace(/^/gim, "<p>")
    .replace(/$/gim, "</p>");
}
