import NavigationBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-600">
        <h1 className="text-3xl font-bold">Coming Soon... ⚙️</h1>
        <p className="mt-4 text-lg">
          A Smart man learns from his mistakes, but a wise man learns from the
          mistakes of others.
        </p>
      </div>
    </div>
  );
}
