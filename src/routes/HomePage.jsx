import { Link } from 'react-router';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/" className="flex gap-4">
          Home
        </Link>
        <span>/</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-ray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Mollitia sequi magni perferendis adipisci non est repudiandae earum.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width={200}
            height={200}
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              d="M 100 20 A 80 80 0 1 1 100 180 A 80 80 0 1 1 100 20"
              fill="none"
              //   stroke="black"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Sign up for
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                the newsletter
              </textPath>
            </text>
          </svg>
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div>
        <h2 className="my-8 text-2xl text-gray-600">Recent Posts</h2>
      </div>
    </div>
  );
};

export default HomePage;
