import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMark =(blog) => {
    const newBookMArks = [...bookMarks, blog];
    setBookMarks(newBookMArks)

  }
  return (
    <>
      <Header></Header>
      <main className="md:flex justify-between  w-11/12 mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
