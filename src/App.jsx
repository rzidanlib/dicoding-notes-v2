import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
// import EditPage from "./pages/EditPage";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import { getUserLogged, putAccessToken } from "./utils/api";
import Register from "./pages/Register";

const App = () => {
  const { authedUser, setAuthedUser, loading } = useContext(AuthContext);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const onLogin = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const data = await getUserLogged();

    setAuthedUser(data);
  };

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="flex justify-center bg-gray-200 min-h-screen dark:bg-slate-900">
        <div className="bg-white p-4 w-5/6 md:w-1/3 shadow-md rounded-xl h-full mt-6 dark:bg-black">
          <Routes>
            <Route path="/*" element={<Login onLogin={onLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-gray-200 min-h-screen dark:bg-slate-900 transition-colors duration-300">
      <div className="w-5/6 py-10">
        <Navbar onLogout={onLogout} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/addNote" element={<AddPage />} />
          {/* <Route path="/editNote/:id" element={<EditPage />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
