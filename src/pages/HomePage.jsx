import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteApp from "../components/note/NoteApp";
import { archivedNotes, deleteNotes, getNotes } from "../utils/api";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const defaultKeyword = searchParams.get("keyword") || "";

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  useEffect(() => {
    getNotes().then(({ data }) => {
      setData(data);
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteNotes(id);

    const { data } = await getNotes();
    setData(data);
  };

  const handleArchive = async (id) => {
    await archivedNotes(id);

    const { data } = await getNotes();
    setData(data);
  };

  const handleSearch = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword: keyword });
  };

  return (
    <NoteApp
      notes={data}
      keyword={keyword}
      handleSearch={handleSearch}
      handleDelete={handleDelete}
      handleArchive={handleArchive}
    />
  );
};

export default HomePage;
