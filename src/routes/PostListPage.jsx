import { useState } from "react";

import PostList from "@/components/PostList";
import SideMenu from "@/components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <div className="flex gap-8">
        <div className="">
          <PostList />
        </div>
        <div className="">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
