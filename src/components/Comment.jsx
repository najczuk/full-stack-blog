import Image from '@/components/Image';

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-4">
      <div className="flex gap-4 items-center">
        <Image
          src="userImg.jpeg"
          w="40"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          labore rem quam autem quo reiciendis aspernatur in, fugiat est soluta,
          nobis vero molestias dolor ipsa consequuntur! Fugiat vel ex
          architecto.
        </p>
      </div>
    </div>
  );
};

export default Comment;
