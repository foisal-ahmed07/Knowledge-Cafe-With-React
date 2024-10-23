import PropType from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-5 m-4 rounded-xl">
      <h2 className="text-2xl border rounded-xl font-bold">{title}</h2>
    </div>
  );
};

Bookmark.propType = {
  bookmark: PropType.object.isRequired,
};
export default Bookmark;
