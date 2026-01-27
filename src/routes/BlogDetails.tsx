import { Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import type { BlogFrontmatter } from "../lib/blogs";

export default function BlogDetails() {
  const navigate = useNavigate();

  const slug = "educating-rural-children";
  const blogs: BlogFrontmatter[] = [
    {
      title: "Educating Rural Children Through Community Support",
      date: "2025-01-12",
      author: "Hope Foundation",
      excerpt:
        "How local volunteers and donors are transforming education access for underprivileged children.",
      cover: "/images/blogs/education.jpg",
      url: "educating-rural-children",
      source: "Field Report",
    },
  ];

  const blog = blogs.find((b) => b.url === slug);

  return (
    <main class="bg-background text-foreground min-h-screen">
      <Show when={blog} fallback={<NotFound />}>
        {/* Back Button */}
        <div class="max-w-5xl mx-auto px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            class="
              group
              inline-flex items-center gap-2
              text-sm font-medium
              text-muted-foreground
              cursor-pointer
              transition-all duration-200
              hover:text-primary
              active:scale-95
            "
          >
            <span class="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to stories
          </button>
        </div>

        {/* Header */}
        <section class="max-w-4xl mx-auto px-4 pt-10 animate-header">
          <p class="text-sm text-muted-foreground">
            {blog!.date} · {blog!.author}
          </p>

          <h1 class="mt-4 text-4xl font-bold leading-tight text-primary">
            {blog!.title}
          </h1>

          <Show when={blog!.source}>
            <p class="mt-2 text-sm text-secondary">Source: {blog!.source}</p>
          </Show>
        </section>

        {/* Image */}
        <Show when={blog!.cover}>
          <section class="max-w-5xl mx-auto px-4 mt-12 animate-image">
            <div class="overflow-hidden rounded-xl">
              <img
                src={blog!.cover || "/uploads/default-cover.jpg"}
                alt={blog!.title}
                loading="lazy"
                class="
                  w-full
                  rounded-xl
                  shadow-lg
                  transition-transform duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          </section>
        </Show>

        {/* Content */}
        <article class="max-w-3xl mx-auto px-4 mt-16 pb-28 animate-content">
          <div class="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Access to education remains a challenge in many rural areas.
              Through the combined efforts of volunteers, teachers, and donors,
              we have helped bridge this gap for hundreds of children.
            </p>

            <p>
              Community learning centers were established in villages where
              schools were previously unreachable. These spaces now provide
              mentorship, materials, and a safe environment to learn.
            </p>

            <p>
              The impact goes beyond academics. Parents report increased
              confidence, improved attendance, and renewed hope.
            </p>

            <p>
              Education is not charity — it is empowerment. With continued
              support, we aim to reach many more communities.
            </p>
          </div>

          {/* Footer */}
          <div class="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
            <p>
              Written by <span class="font-medium">{blog!.author}</span>
            </p>
            <p class="mt-1">Published on {blog!.date}</p>
          </div>
        </article>
      </Show>
    </main>
  );
}

function NotFound() {
  return (
    <div class="max-w-4xl mx-auto px-4 py-32 text-center animate-fade">
      <h2 class="text-2xl font-semibold">Blog not found</h2>
      <p class="mt-2 text-muted-foreground">
        The story you are looking for does not exist.
      </p>
    </div>
  );
}
