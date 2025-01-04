import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { Badge } from "../ui/badge";
interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  username: string;
  imageUrl: string;
  tags?: string[];
}

export function BlogPost({
  title,
  content,
  date,
  username,
  imageUrl,
  tags = [],
}: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:grid md:grid-cols-[300px_1fr] h-full">
        {/* Image Section */}
        <div className="relative h-[200px] md:h-full">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={date}>{date}</time>
                <span>•</span>
                <span>{username}</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            </div>
            <Button variant="secondary" size="icon" className="shrink-0">
              <Share className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <p className="text-muted-foreground mb-4">{content}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
