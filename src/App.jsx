import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMArks = [...bookMarks, blog];
    setBookMarks(newBookMArks);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    // remove bookmark
    console.log(id);

    const remaining = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(remaining);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex justify-between gap-8 w-11/12 mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookMark={handleAddToBookMark}
        ></Blogs>
        <div>
          <Bookmarks
            readingTime={readingTime}
            bookMarks={bookMarks}
          ></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
