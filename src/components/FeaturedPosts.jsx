import { Link } from 'react-router';
import Image from './Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <h2 className="sr-only">Featured Posts</h2>
      {/* first */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* details */}
        <div className="flex items-center gap-4">
          <span className="">01.</span>
          <Link to="/posts?cat=web-design" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Exercitationem quibusdam dolor, eveniet tenetur beatae
        </Link>
      </div>
      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details & title*/}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="font-semibold">02.</span>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">4 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
            >
              Nisi numquam mollitia atque velit minus fugit distinctio sequi a
              quam
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details & title*/}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="font-semibold">03.</span>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">4 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
            >
              Nisi numquam mollitia atque velit minus fugit distinctio sequi a
              quam
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details & title*/}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <span className="font-semibold">04.</span>
              <Link
                to="/posts?cat=web-design"
                className="text-blue-800 lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">4 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
            >
              Nisi numquam mollitia atque velit minus fugit distinctio sequi a
              quam
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
