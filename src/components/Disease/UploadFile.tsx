import DiseaseDetection from "./DiseaseDetection";

function UploadFile() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-8">
          Plant Disease Detection
        </h1>
        <DiseaseDetection />
      </div>
    </main>
  );
}

export default UploadFile;
