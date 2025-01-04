import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  username: string;
  imageUrl: string;
}

export function BlogPreview({
  title,
  content,
  date,
  username,
  imageUrl,
}: BlogPostProps) {
  return (
    <Card className="mb-4">
      <div className="relative w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{username}</span>
          <span>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
