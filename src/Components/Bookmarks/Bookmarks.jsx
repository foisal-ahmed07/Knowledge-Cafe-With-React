import React from "react";
import PropType from "prop-types";

const Bookmarks = (bookMarks) => {
  return (
    <div className="md:1/3">
      <h2>Bookmarked Blogs:{bookMarks.length} </h2>
      {bookMarks.map((bookmark) => (
        <Bookmark bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propType = {
  bookmarks: PropType.array.isRequired,
};
export default Bookmarks;
