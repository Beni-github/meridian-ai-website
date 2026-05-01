import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const metadata = {
  title: "Blog — Meridian AI",
  description: "Insights on local SEO, web design, and AI agents for Bellingham and Burlington businesses.",
};

export default async function BlogPage() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(raw) as unknown as { data: BlogPostMeta };
      return {
        slug: filename.replace(".md", ""),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/fenn_suit.jpg" alt="Meridian AI" className="w-9 h-9 rounded-lg object-cover" />
            <span className="font-bold text-xl text-gray-900">Meridian AI</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-brand-600">← Back to Home</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-200 font-semibold uppercase tracking-wider text-sm mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights for Local Businesses</h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            Web design, local SEO, and AI agents — practical advice for Bellingham and Burlington businesses.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg hover:border-brand-200 transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-brand-600 group-hover:underline">Read more →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <Link href="/" className="hover:text-white transition-colors">← Back to Home</Link>
          <p className="mt-4 text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA + Burlington, WA</p>
        </div>
      </footer>
    </main>
  );
}
