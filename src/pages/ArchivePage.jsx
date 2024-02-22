import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteApp from "../components/note/NoteApp";
import { deleteNotes, getNotesArchived, unArchivedNotes } from "../utils/api";

const ArchivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const defaultKeyword = searchParams.get("keyword") || "";

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  useEffect(() => {
    getNotesArchived().then(({ data }) => {
      setData(data);
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteNotes(id);

    const { data } = await getNotesArchived();
    setData(data);
  };

  const handleUnArchive = async (id) => {
    await unArchivedNotes(id);

    const { data } = await getNotesArchived();
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
      handleArchive={handleUnArchive}
    />
  );
};

export default ArchivePage;
