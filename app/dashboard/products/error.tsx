"use client";
const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mx-auto h-screen  flex flex-col justify-center items-center gap-4   bg-gray-100 rounded-lg ">
      <h2>Failed to load products</h2>
      <p>Please try again.</p>

      <button
        className="my-8 bg-gray-300 p-4 rounded hover:bg-gray-600 hover:text-white cursor-pointer"
        title="error button"
        onClick={() => {
          if (process.env.NODE_ENV === "development")
            console.log(error.message);
          reset();
        }}
      >
        try again
      </button>
    </div>
  );
};

export default error;
