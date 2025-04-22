import { Link } from "lucide-react";
import { useState } from "react";

const IntakeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [categories, setCategories] = useState([
    "Work",
    "Personal",
    "Health",
    "Finance",
    "Education",
    "Other",
  ]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // submit to api localhost/mistakes POST
    fetch("https://54.89.193.102/mistakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        category,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Reset form fields
        setTitle("");
        setDescription("");
        setCategory("Select Category");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-full bg-transparent">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg ">
        <h2 className="w-50% mb-4 text-2xl font-bold text-center text-gray-300">
          Become an <span className="underline">Early Contributor</span>
        </h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-white text-md font-large text-gray-300"
          >
            Mistake Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-white text-md font-medium text-gray-300"
          >
            Mistake Description + Learnings
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full p-2 border border-gray-300 rounded  focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter description"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block mb-2 text-white font-medium text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-500 cursor-pointer"
        >
          Submit
        </button>

        {isSubmitted && (
          <div className="text-green-500 m-auto text-center mt-4 font-bold">
            <p>Form submitted successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default IntakeForm;
