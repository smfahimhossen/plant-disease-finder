"use client";

import { useState } from "react";
import { BlogList } from "./BlogList";
import { NewBlogForm } from "./NewBlogForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { PlusCircle } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  username: string;
  imageUrl: string;
}

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Crop Rotation",
    content:
      "Crop rotation is a vital practice in agriculture that involves planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure.",
    date: "2023-05-15",
    username: "FarmerJohn",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
  {
    id: 2,
    title: "The Benefits of Organic Farming",
    content:
      "Organic farming practices offer numerous benefits, including improved soil and water quality, reduced pollution, and enhanced biodiversity. This method of agriculture focuses on sustainable practices that work with nature, not against it.",
    date: "2023-05-18",
    username: "EcoFarmer",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
  {
    id: 3,
    title: "Water Conservation Techniques in Agriculture",
    content:
      "Water is a precious resource in agriculture. Implementing efficient irrigation systems, mulching, and selecting drought-resistant crops are just a few ways farmers can conserve water while maintaining productive farms.",
    date: "2023-05-21",
    username: "WaterWiseGrower",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
  {
    id: 4,
    title: "The Role of Bees in Agriculture",
    content:
      "Bees play a crucial role in agriculture as pollinators. They are responsible for pollinating a wide variety of crops, contributing significantly to global food production and biodiversity.",
    date: "2023-05-24",
    username: "BeeKeeper101",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
  {
    id: 5,
    title: "Sustainable Pest Management Strategies",
    content:
      "Integrated Pest Management (IPM) is a sustainable approach to managing pests in agriculture. It involves a combination of practices including biological control, habitat manipulation, and the use of resistant varieties.",
    date: "2023-05-27",
    username: "PestControlPro",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
  {
    id: 6,
    title: "The Impact of Climate Change on Agriculture",
    content:
      "Climate change poses significant challenges to agriculture, including altered growing seasons, increased frequency of extreme weather events, and shifts in pest and disease patterns. Adaptation strategies are crucial for future food security.",
    date: "2023-05-30",
    username: "ClimateSavvyFarmer",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-tjrce8etun/images/stencil/original/uploaded_images/leave-with-fungus.jpg?t=1712257655",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addNewPost = (title: string, content: string, imageUrl: string) => {
    const newPost: BlogPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
      username: "NewUser", // This should be replaced with the actual logged-in user's username
      imageUrl,
    };
    setPosts([newPost, ...posts]);
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-emerald-500 min-h-screen p-6 text-white">
      <div className="mx-auto">
        <h1 className="text-5xl font-semibold text-center"> The Blog</h1>
        <h1 className="text-center text-lg text-muted mb-5">
          A blog example news, tutorials, resources and other interesting
          content about Disease Finder.
        </h1>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold"></h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary" className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                New Blog Post
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white px-10 py-8">
              <NewBlogForm onSubmit={addNewPost} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-8">
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
