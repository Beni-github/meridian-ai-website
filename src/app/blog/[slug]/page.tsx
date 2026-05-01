import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Link from "next/link";
import Image from "next/image";

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

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(".md", "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> } ) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data } = matter(raw) as unknown as { data: BlogPostMeta };
  return {
    title: `${data.title} — Meridian AI Blog`,
    description: data.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw) as unknown as { data: BlogPostMeta; content: string };
  const processed = await remark().use(remarkHtml).process(content);
  const html = processed.toString();

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/fenn_suit.jpg" alt="Meridian AI" width={36} height={36} className="rounded-lg object-cover" />
            <span className="font-bold text-xl text-gray-900">Meridian AI</span>
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-brand-600">← Back to Blog</Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full">{data.category}</span>
            <span className="text-sm text-gray-400">{formatDate(data.date)}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-lg text-gray-500">By {data.author}</p>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-brand-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-brand-50 border border-brand-100 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to grow your business?</h3>
          <p className="text-gray-600 mb-6">Get a free consultation for your website, SEO, or AI agent project.</p>
          <a
            href="mailto:hello@meridianai.co?subject=Blog%20Inquiry"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <Link href="/blog" className="hover:text-white transition-colors">← Back to Blog</Link>
          <p className="mt-4 text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA · Burlington, WA · Pacific Northwest</p>
        </div>
      </footer>
    </main>
  );
}
