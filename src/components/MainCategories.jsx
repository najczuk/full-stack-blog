import { Link } from 'react-router';

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-start flex-wrap gap-2">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-blue-50 rounded-full px-4 py-2"
        >
          Developlment
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-blue-50 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      {/* search */}
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          placeholder="search posts..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
