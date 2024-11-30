import { BlogPost } from "@/lib/data/blog";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    if (!acc[post.year]) {
      acc[post.year] = [];
    }
    acc[post.year].push(post);
    return acc;
  }, {} as Record<number, BlogPost[]>);

  return (
    <div className="container">
      <div className="flex items-start justify-start gap-2 mb-8">
        <h2 className="text-5xl font-medium font-display text-white">
          All articles
        </h2>
        <p className="text-neutral-500 tabular-nums text-sm">{posts.length}</p>
      </div>

      {Object.entries(postsByYear)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, yearPosts]) => (
          <div key={year} className="mb-16">
            <h3 className="text-2xl tabular-nums mb-8 font-medium">{year}</h3>
            <div className="flex flex-col md:gap-12 gap-8">
              {yearPosts.map((post, index) => (
                <div key={index} className="group">
                  <div className="flex items-baseline gap-8">
                    <p className="text-neutral-500 tabular-nums w-16">
                      {post.date}
                    </p>
                    <h4 className="group-hover:text-purple-500 flex-1 transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
