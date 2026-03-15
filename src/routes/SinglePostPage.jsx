import { Link } from "react-router";

import Comments from "@/components/Comments";
import Image from "@/components/Image";
import PostMenuActions from "@/components/PostMenuActions";
import Search from "@/components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-small">
            <span>Written by </span>
            <Link className="text-blue-800" to="/posts?cat=web-design">
              Adi
            </Link>
            <span>on</span>
            <Link className="text-blue-800" to="">
              Web Design
            </Link>
            <span> 2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            expedita. Exercitationem possimus minima perferendis, odit ipsum
            iusto nam odio mollitia voluptates repellat natus amet optio
            reprehenderit est at et a!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-log flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium perspiciatis mollitia consectetur, cum similique animi.
            Quos debitis culpa incidunt tenetur repellat similique suscipit
            nesciunt natus impedit, vero, quasi nobis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam qui
            voluptatem explicabo error, quaerat doloribus repudiandae? Soluta
            rerum qui nulla repudiandae ab magnam tempore minima illo, aperiam
            quia mollitia laudantium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            atque quia saepe esse eos deleniti quaerat fuga molestiae eligendi
            nihil voluptatibus cum, animi, repudiandae officiis porro iste quasi
            iure excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium perspiciatis mollitia consectetur, cum similique animi.
            Quos debitis culpa incidunt tenetur repellat similique suscipit
            nesciunt natus impedit, vero, quasi nobis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            impedit adipisci quidem necessitatibus iure itaque rerum quasi
            repudiandae nemo vel quas labore inventore non dicta enim, sunt
            earum velit laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam qui
            voluptatem explicabo error, quaerat doloribus repudiandae? Soluta
            rerum qui nulla repudiandae ab magnam tempore minima illo, aperiam
            quia mollitia laudantium?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            atque quia saepe esse eos deleniti quaerat fuga molestiae eligendi
            nihil voluptatibus cum, animi, repudiandae officiis porro iste quasi
            iure excepturi.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 object-cover rounded-full"
                w="48"
                h="48"
              />
              <Link>John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" w="24" h="24" />
              </Link>
              <Link>
                <Image src="instagram.svg" w="24" h="24" />
              </Link>
            </div>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search Engines</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
