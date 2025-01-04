"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlus, Type, FileText } from "lucide-react";

interface NewBlogFormProps {
  onSubmit: (title: string, content: string, imageUrl: string) => void;
}

export function NewBlogForm({ onSubmit }: NewBlogFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(title, content, imageUrl);
      setTitle("");
      setContent("");
      setImageUrl("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Create New Blog Post
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Type className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="title" className="text-lg font-medium">
                Title
              </Label>
            </div>
            <Input
              id="title"
              type="text"
              placeholder="Enter an engaging title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 text-lg bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="content" className="text-lg font-medium">
                Content
              </Label>
            </div>
            <Textarea
              id="content"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px] text-base leading-relaxed bg-white"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ImagePlus className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="imageUrl" className="text-lg font-medium">
                Cover Image
              </Label>
            </div>
            <div className="">
              <Input
                id="imageUrl"
                type="url"
                placeholder="Paste image URL here..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="h-12 bg-white"
              />
              {imageUrl && (
                <div className="relative h-12 rounded-md overflow-hidden bg-muted">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-12 text-lg font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publishing..." : "Publish Blog Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
