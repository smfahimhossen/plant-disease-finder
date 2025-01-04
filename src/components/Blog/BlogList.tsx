import { BlogPost } from "./BlogPost";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  username: string;
  imageUrl: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
          username={post.username}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
