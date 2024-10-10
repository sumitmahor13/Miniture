import React from "react";
import PageHeading from "../common/PageHeading";

const Blog = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"Blog"} />

      <div className="w-10/12 m-auto flex justify-center items-center">
        <div className="my-8 text-5xl mx-auto font-bold">No Blogs</div>
      </div>
    </div>
  );
};

export default Blog;
