import { Link } from 'react-router';
import Image from '../components/Image';
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
      <div className="flex flex-col md:flex-row gap-8">
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
        </div>
        {/* menu */}
        <div className="px-8 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 object-cover rounded-full"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              necessitatibus odio, minus ducimus corrupti neque reiciendis
              dignissimos ratione voluptates doloremque!
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
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
