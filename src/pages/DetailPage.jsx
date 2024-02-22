import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/api";

const DetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  if (!data) {
    return (
      <div className="bg-white p-4 w-full mt-4 shadow-md rounded-xl dark:bg-black dark:text-white">
        <div className="flex justify-center items-center h-48 text-lg font-bold">
          Catatan Tidak Ditemukan.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 w-full mt-4 shadow-md rounded-xl dark:bg-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center px-2 py-1 rounded-full dark:bg-white w-max">
          <img src="/notes-ic.svg" alt="notes" className="w-10" />
          <p className="font-bold text-lg pr-2">
            {showFormattedDate(data.createdAt)}
          </p>
        </div>

        <div className="px-1 my-3 text-lg font-bold dark:text-white">
          Status :{" "}
          <span className="text-blue-500">
            {data.archived ? "Archived" : "Active"}
          </span>
        </div>
      </div>

      <div className="dark:text-white">
        <h1 className="font-bold text-xl underline my-5">{data.title}</h1>

        <div className="text-base text-gray-500 font-bold mb-4 dark:text-white">
          {data.body}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
