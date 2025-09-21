import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/register", {
        name,
        email,
        password,
      });
      alert(res.data.message);
    } catch {
      alert("Error en el registro");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-700">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-500 p-8 rounded-2xl shadow-2xl w-96"
        >
          <h2 className="text-3xl text-gray-950 font-bold mb-6 text-center font-[Roboto]">
            Register
          </h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-2 text-gray-950 font-light border-2 border-dashed rounded-lg border-gray-800 font-[Roboto]"
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 text-gray-950 font-light border-2 border-dashed rounded-lg border-gray-800 font-[Roboto]"
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 text-gray-950 font-light border-2 border-dashed rounded-lg border-gray-800 font-[Roboto]"
          ></input>
          <button
            type="submit"
            className="w-full bg-cyan-950 text-gray-400 py-2 rounded-lg hover:bg-cyan-800 font-[Roboto]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
