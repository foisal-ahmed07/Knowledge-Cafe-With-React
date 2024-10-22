import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex justify-between items-center w-11/12 mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
