import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — GenPix",
  description:
    "Notes, guides, and workflows for AI image generation teams. Tips on prompting, style direction, and creative workflows.",
};

const featured = {
  category: "Workflow",
  readTime: "8 min read",
  title: "How to Build a Strong Prompt Library for Brand Work",
  excerpt:
    "A repeatable system to move from vague ideas to consistent visual outputs across every campaign. Learn how top creative teams structure their prompts for maximum efficiency.",
  date: "Mar 28, 2026",
  tag: "Latest",
};

const posts = [
  {
    category: "Strategy",
    readTime: "5 min read",
    title: "Using AI Concepts to Speed Up Creative Review Cycles",
    excerpt:
      "Reduce revision rounds by giving stakeholders stronger visual starting points earlier in the process.",
    date: "Mar 22, 2026",
  },
  {
    category: "Craft",
    readTime: "6 min read",
    title: "When to Use Stylized Renders vs Photoreal Outputs",
    excerpt:
      "A practical framework for choosing the right output style based on channel, audience, and speed requirements.",
    date: "Mar 15, 2026",
  },
  {
    category: "Tutorial",
    readTime: "4 min read",
    title: "Negative Prompting: What to Exclude for Cleaner Results",
    excerpt:
      "Most teams only think about what to include in a prompt. Learn why what you exclude matters just as much.",
    date: "Mar 9, 2026",
  },
  {
    category: "Workflow",
    readTime: "7 min read",
    title: "Building a Brand Kit That Works With Any AI Generator",
    excerpt:
      "Standardize your color palette, style tokens, and mood references so AI outputs feel consistently on-brand.",
    date: "Mar 1, 2026",
  },
  {
    category: "Strategy",
    readTime: "3 min read",
    title: "5 Prompting Mistakes That Cost You Time and Quality",
    excerpt:
      "Common patterns that produce inconsistent outputs — and the simple fixes that make a huge difference in quality.",
    date: "Feb 22, 2026",
  },
];

const categoryColors: Record<string, string> = {
  Workflow: "bg-[#a3e635]/10 text-[#a3e635]",
  Strategy: "bg-blue-500/10 text-blue-400",
  Craft: "bg-purple-500/10 text-purple-400",
  Tutorial: "bg-orange-500/10 text-orange-400",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative px-6 pb-14 pt-36 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[300px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(163,230,53,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.22em] text-[#a3e635]">
            Blog
          </p>
          <h1 className="animate-fade-up-1 mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-[-0.04em]">
            Notes, guides, and workflows{" "}
            <br className="hidden sm:block" />
            for AI image teams.
          </h1>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="#"
            className="group relative block overflow-hidden rounded-[30px] border border-white/8 bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-[#a3e635]/25 hover:shadow-[0_0_60px_rgba(163,230,53,0.07)] md:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, rgba(163,230,53,0.05) 0%, transparent 60%)",
              }}
            />

            <div className="relative flex flex-wrap items-center gap-2.5">
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryColors[featured.category]}`}
              >
                {featured.category}
              </span>
              <span className="rounded-full bg-[#a3e635] px-2.5 py-1 text-[11px] font-bold text-black">
                {featured.tag}
              </span>
              <span className="text-xs text-white/30">{featured.readTime}</span>
            </div>

            <h2 className="relative mt-5 text-2xl font-bold leading-snug tracking-[-0.02em] transition-colors duration-200 group-hover:text-[#a3e635] sm:text-3xl">
              {featured.title}
            </h2>
            <p className="relative mt-3 max-w-2xl text-sm leading-7 text-white/50">
              {featured.excerpt}
            </p>

            <div className="relative mt-6 flex items-center justify-between">
              <span className="text-xs text-white/30">{featured.date}</span>
              <span className="text-sm font-medium text-white/60 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#a3e635]">
                Read article →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/30">
            More Articles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <a
                key={post.title}
                href="#"
                className="group flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      categoryColors[post.category] ??
                      "bg-white/8 text-white/50"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-white/25">{post.readTime}</span>
                </div>

                <h3 className="mt-4 flex-1 text-base font-semibold leading-snug tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#a3e635]">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/40">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/6 pt-4">
                  <span className="text-xs text-white/25">{post.date}</span>
                  <span className="text-xs text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#a3e635]">
                    Read →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
