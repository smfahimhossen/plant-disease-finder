import Solutions from "./Solutions";
import StoreLocator from "./StoreLocator";

function Results() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-bold text-center text-green-800">
          Analysis Results
        </h1>
        <Solutions />
        <StoreLocator />
      </div>
    </main>
  );
}

export default Results;
