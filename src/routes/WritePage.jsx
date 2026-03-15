import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && isSignedIn) {
    return <div>Log in</div>;
  }

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-4rem)] md:h-[calc(100vh-5em)] ">
      <h1>Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className=" w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Enter post title"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm" htmlFor="">
            Choose a category:
          </label>
          <select
            className="p-2 shadow-md rounded-xl bg-white"
            name="cat"
            id=""
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A short description..."
          className="p-2 shadow-md rounded-xl bg-white"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 p-2 shadow-md rounded-xl bg-white"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
