import { useEffect, useState } from "react";
import { Sun, Radar, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { fetchWeather } from "@/utils/weatherApi";
import Weather from "./Weather";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { BlogPreview } from "../Blog/BlogPreview";

const mockBlogPosts = [
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

function WeatherSkeleton() {
  return (
    <Card className="bg-emerald-500 p-6 text-white animate-pulse">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <div className="bg-white/20 h-12 w-12 rounded-full mb-2"></div>
          <div className="bg-white/20 h-6 w-24 rounded mb-1"></div>
          <div className="bg-white/20 h-4 w-32 rounded"></div>
        </div>
        <div className="bg-white/20 h-10 w-24 rounded"></div>
      </div>
      <div className="mt-6">
        <div className="bg-white/20 h-12 w-32 rounded mb-6"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white/20 h-5 w-5 rounded-full mr-2"></div>
              <div className="bg-white/20 h-4 w-24 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    const data = await fetchWeather("Dhaka");
    if (data) {
      setWeatherData(data);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const handleRefresh = async () => {
    setWeatherData(null);
    await getWeather();
  };

  return (
    <div className="min-h-screen bg-emerald-500">
      {/* Header */}
      <header className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">Disease Finder</span>
        </div>
        <button className="rounded-full p-2 hover:bg-emerald-600">
          <Sun className="h-6 w-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-8">
        {/* Weather Widget */}
        <div className="mb-6">
          {weatherData ? (
            <Weather data={weatherData} onRefresh={handleRefresh} />
          ) : (
            <WeatherSkeleton />
          )}
        </div>

        {/* Menu Grid */}
        <div className="flex md:flex-row flex-col justify-center gap-4 mb-8">
          <Link to="/upload">
            <Card className="p-4 hover:bg-gray-50 px-14 cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <Radar className="h-8 w-8 text-emerald-600" />
                <p className="text-center text-sm">রোগ সনাক্তকরণ</p>
              </div>
            </Card>
          </Link>
          <Link to="/blog">
            <Card className="p-4 hover:bg-gray-50 px-20 cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                <p className="text-center text-sm">ব্লগ</p>
              </div>
            </Card>
          </Link>
        </div>

        {/* Blog Section */}
        <div className="rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-white">Blogs</h2>
            <Link to="/blog">
              <Button variant="outline" className="text-white">
                See All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockBlogPosts.map((post) => (
              <BlogPreview
                key={post.id}
                title={post.title}
                content={post.content}
                date={post.date}
                username={post.username}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
