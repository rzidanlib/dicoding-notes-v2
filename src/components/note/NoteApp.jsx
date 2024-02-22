import PropTypes from "prop-types";
import NoteList from "./NoteList";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import { NotesContent } from "../../utils/locale-content";

const NoteApp = (props) => {
  const { notes, keyword, handleSearch, handleDelete, handleArchive } = props;
  const { locale } = useContext(LocaleContext);
  const { pathname } = useLocation();

  const notesList = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div className="bg-white p-4 w-full mt-4 shadow-md rounded-xl dark:bg-black transition-colors duration-300">
      <div className="flex items-center px-2 py-1 rounded-full dark:bg-white w-max">
        <img src="/notes-ic.svg" alt="notes" className="w-10" />
        <p className="font-bold text-lg pr-2">
          {pathname === "/"
            ? NotesContent[locale].title[0]
            : NotesContent[locale].title[1]}
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="px-1 my-3 text-lg text-blue-500 dark:text-white font-bold">
          {notes.length} {NotesContent[locale].name}
        </p>

        <input
          type="text"
          placeholder={NotesContent[locale].keyword}
          value={keyword}
          onChange={(event) => handleSearch(event.target.value)}
          className="rounded-lg py-2 px-3 w-80 outline outline-blue-500 dark:bg-slate-800 dark:outline-white dark:text-white"
        />
      </div>

      <NoteList
        lang={locale}
        notesList={notesList}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </div>
  );
};

NoteApp.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
};

export default NoteApp;
