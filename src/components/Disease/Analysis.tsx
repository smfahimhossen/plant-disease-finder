import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scanProgress, setScanProgress] = useState(0);
  const uploadedImage = new URLSearchParams(location.search).get("image");

  useEffect(() => {
    const totalDuration = 30000; // 30 seconds
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/results");
          return 100;
        }
        return prev + 2;
      });
    }, totalDuration / 50); // Increment progress every 600ms

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <main className="flex flex-col justify-center items-center p-4">
      <div className="w-64 relative overflow-hidden rounded-lg">
        <img
          src={uploadedImage || "/placeholder.svg"}
          alt="Plant being analyzed"
          className="object-cover"
        />

        {/* Ball-like moving bar */}
        <div className="absolute inset-x-0 h-1 bg-blue-400 animate-ball" />
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-white">
            Analyzing Plant...
          </h2>
          <p className="text-sm text-white/90">
            Please wait while we scan and analyze your plant for diseases
          </p>
          <p className="text-sm text-white/70">{scanProgress}% completed</p>
        </div>
      </div>
    </main>
  );
}

export default Analysis;
