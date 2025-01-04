import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

function DiseaseDetection() {
  const navigate = useNavigate();
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        setTimeout(() => {
          setShowUploadDialog(false);
          navigate(`/analysis?image=${encodeURIComponent(imageDataUrl)}`);
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Card className="bg-white">
        <CardContent className="p-6 space-y-6">
          <div className="flex justify-center gap-4">
            <div className="relative rounded-lg overflow-hidden border-2 border-red-500">
              <img
                src="https://www.thespruce.com/thmb/Fg-QAHjY3qz2MgZ4T0yGsiifM70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1297736308-f91c96d60256429cb6a56260a8ec8ea7.jpg"
                alt="Diseased plant"
                className="h-48"
              />
              <div className="absolute top-2 right-2">
                <div className="bg-red-500 rounded-full px-2 py-1">
                  <span className="text-white">✕</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-2 border-green-500">
              <img
                src="https://www.thespruce.com/thmb/Fg-QAHjY3qz2MgZ4T0yGsiifM70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1297736308-f91c96d60256429cb6a56260a8ec8ea7.jpg"
                alt="Healthy plant"
                className="h-48"
              />
              <div className="absolute top-2 right-2">
                <div className="bg-green-500 rounded-full px-2 py-1">
                  <span className="text-white">✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="space-y-4 ">
              <h2 className="font-semibold text-lg">Instructions:</h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Take a clear photo of the affected plant</li>
                <li>Ensure proper lighting and focus for accurate detection</li>
              </ol>
            </div>

            <div className="">
              <Button
                variant="outline"
                className=""
                size="lg"
                onClick={() => setShowUploadDialog(true)}
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Photo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Upload Plant Photo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 bg-white">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected plant"
                  className="max-h-[200px] object-contain"
                />
              ) : (
                <div className="text-center space-y-2">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DiseaseDetection;
