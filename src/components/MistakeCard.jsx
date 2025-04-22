const MistakeCard = ({ title, description, category }) => {
  return (
    <div className="item break-inside-avoid-column mb-4 flex flex-col bg-zinc-100 rounded-lg shadow-md mb-4 w-fit max-w-sm text-black max-h-100">
      <div className="flex flex-col bg-stone-300 justify-between p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div>
          <span className="inline-block bg-zinc-100 px-3 py-1 rounded-full text-sm mt-2">
            {category}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-zinc-100 p-4 rounded-b-lg overflow-hidden ellipsis">
        <p className="h-full text-gray-700 overflow-hidden ">{description}</p>
      </div>
    </div>
  );
};
export default MistakeCard;
