import BlogList from "@/components/blog-list";
import { Eclipse } from "@/components/eclipse";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 overflow-hidden">
      <Eclipse />

      <div className="w-screen h-32 lg:h-48" />

      <main>
        <section className="container mx-auto px-4 mb-16 md:mb-32">
          <BlogList posts={blogPosts} />
        </section>
      </main>
    </div>
  );
}
