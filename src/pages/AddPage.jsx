import { useContext, useState } from "react";
import Button from "../components/ui/Button";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";
import { AddNoteContent } from "../utils/locale-content";

const AddPage = () => {
  const navigate = useNavigate();

  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setCharLimit(50 - value.length);
    }
  };
  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    addNote({ title, body });
    navigate("/");
  };

  return (
    <div className="bg-white p-4 w-full mt-4 shadow-md rounded-xl dark:bg-black transition-colors duration-300">
      <div className="flex items-center px-2 py-1 rounded-full dark:bg-white w-max mb-4">
        <img src="/notes-ic.svg" alt="notes" className="w-10" />
        <p className="font-bold text-lg pr-2">{AddNoteContent[locale].title}</p>
      </div>

      <input
        type="text"
        placeholder={AddNoteContent[locale].placeholder}
        name="title"
        onChange={handleChangeTitle}
        className="rounded-lg py-2 px-3 w-80 outline outline-blue-500 dark:bg-slate-800 dark:outline-white dark:text-white"
      />
      <p className="text-sm text-gray-500 mb-4 dark:text-white">
        {AddNoteContent[locale].helper}{" "}
        <span className="text-red-500">{charLimit}</span>
      </p>

      <textarea
        name="body"
        id="body"
        cols="30"
        rows="10"
        onChange={handleChangeBody}
        className="h-48 rounded-lg py-2 px-3 w-full outline outline-blue-500 dark:bg-slate-800 dark:outline-white dark:text-white"
      />

      <div className="flex justify-end mt-4">
        <Button
          handleAction={handleSubmit}
          className={"mb-4 bg-green-500 text-lg hover:bg-green-600 "}
        >
          {AddNoteContent[locale].action}
        </Button>
      </div>
    </div>
  );
};

export default AddPage;
