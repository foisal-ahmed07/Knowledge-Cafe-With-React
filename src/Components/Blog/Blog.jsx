import React from "react";
import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log();
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="space-y-5 border-b-2">
      <img
        className="rounded-lg my-5"
        src={cover}
        alt={`Cobver pic of title ${title}`}
      />
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img className="w-14" src={author_img} alt="" />
            <div>
              <h3 className="text-2xl font-bold">{author}</h3>
              <p className="text-gray-500">{posted_date}</p>
            </div>
          </div>

          <div>
            <span>{reading_time} min read</span>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl font-bold"> {title}</h2>

        <p className=" text-gray-500 pb-4">{hashtags}</p>

        <a className="" href="">
          Mark as read
        </a>
      </div>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
