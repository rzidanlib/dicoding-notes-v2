import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import { FaTrash, FaCheckSquare } from "react-icons/fa";
import Button from "../ui/Button";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  handleDelete,
  handleArchive,
}) => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-xl hover:bg-slate-300 h-full">
      <Link to={`/detail/${id}`}>
        <div className="flex mb-5 cursor-pointer">
          <img
            src="/notesitem-ic.svg"
            alt="notes item"
            className="w-16 h-16 bg-gray-400 rounded-xl  flex-shrink-0"
          />
          <p className="text-lg font-semibold px-2">{title}</p>
        </div>
      </Link>

      <div className="text-sm text-gray-400 font-bold">
        {showFormattedDate(createdAt)}
      </div>
      <div className="text-md text-gray-500 font-bold mb-4 truncate">
        {body}
      </div>

      <div className="flex justify-end items-center gap-2">
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          handleAction={() => {
            handleArchive(id);
          }}
        >
          <FaCheckSquare />
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          handleAction={() => {
            handleDelete(id);
          }}
        >
          <FaTrash />
        </Button>
        {/* <Link
            className="bg-green-500 hover:bg-green-600 rounded-lg py-2 px-4 font-bold text-sm text-white"
            to={`/editNote/${id}`}
          >
            <FaEdit />
          </Link> */}
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
};

export default NoteItem;
