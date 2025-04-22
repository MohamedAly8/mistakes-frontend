import { useEffect, useState } from "react";
import MistakeCard from "@/components/MistakeCard";

const MistakeMasonry = () => {
  // fetch data from API
  const [mistakes, setMistakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMistakes = async () => {
      try {
        const response = await fetch(
          "https://mistakesapi.mohamedaly.ca/mistakes"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMistakes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMistakes();
  }, []);
  if (loading) {
    // spinner while loading
    return (
      <div className="flex justify-center flex-col items-center pt-30 pb-10">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">
          Loading Mistakes...
        </h2>
        <svg
          className="animate-spin h-10 w-10 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <div className="p-10 pt-30 md:columns-4">
      {mistakes?.map((mistake) => (
        <MistakeCard
          key={mistake.id}
          title={mistake.title}
          description={mistake.description}
          category={mistake.category}
        />
      ))}
    </div>
  );
};

export default MistakeMasonry;
