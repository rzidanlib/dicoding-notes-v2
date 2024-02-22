import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { editNote, getNote } from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    body: "",
    charLimit: 50,
  });

  useEffect(() => {
    const data = getNote(id);
    setState((prevState) => {
      return {
        ...prevState,
        title: data.title,
        body: data.body,
      };
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      if (value.length <= 50) {
        setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
            charLimit: 50 - value.length,
          };
        });
      }
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = () => {
    editNote({ id, title: state.title, body: state.body });
    navigate("/");
  };

  return (
    <div className="bg-white p-4 w-full mt-4 shadow-md rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <img src="/notes-ic.svg" alt="notes" className="w-10" />
        <p className="font-bold text-lg">Edit Note</p>
      </div>

      <input
        type="text"
        placeholder="Input Title"
        name="title"
        defaultValue={state.title ?? ""}
        onChange={handleChange}
        className="rounded-lg py-2 px-3 w-80 outline outline-blue-500"
      />
      <p className="text-sm text-gray-500 mb-4">
        Sisa <span className="text-red-500">{state.charLimit}</span> Karakter
      </p>

      <textarea
        name="body"
        id="body"
        cols="30"
        rows="10"
        onChange={handleChange}
        defaultValue={state.body ?? ""}
        className="h-48 rounded-lg py-2 px-3 w-full outline outline-blue-500"
      />

      <div className="flex justify-end mt-4">
        <Button
          handleAction={handleSubmit}
          className={"mb-4 bg-green-300 text-lg hover:bg-green-400"}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
