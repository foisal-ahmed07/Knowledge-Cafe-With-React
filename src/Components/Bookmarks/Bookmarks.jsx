import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../BookMark/Bookmark";

const Bookmarks = ({ bookMarks,readingTime }) => {

  return (
    <div className="md:1/3 bg-orange-100 rounded-xl mt-5 p-5">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="mt-5  font-bold">Bookmarked Blogs: {bookMarks.length}</h2>
      {bookMarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  // Corrected to 'PropTypes' and proper case
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
