import PropType from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

Bookmark.propType = {
  bookmark: PropType.object.isRequired,
};
export default Bookmark;
