import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notesList, handleDelete, handleArchive, lang }) => {
  return (
    <>
      {notesList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {notesList.map((note) => (
            <NoteItem
              {...note}
              key={note.id}
              handleDelete={handleDelete}
              handleArchive={handleArchive}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-48 text-lg font-bold">
          {lang === "id" ? "Tidak ada catatan." : "No notes yet."}
        </div>
      )}
    </>
  );
};

NoteList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  notesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  lang: PropTypes.string.isRequired,
};

export default NoteList;
