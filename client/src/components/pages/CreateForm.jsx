import React, { useState } from "react";
import FormField from "../utils/FormField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:5000/api/v1/prompt", {
      name: name,
      title: title,
      prompt: prompt,
    });

    navigate("/");
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="p-8 w-full">
        <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-blue-400 font-medium mb-1">
          Create a new post
        </h1>
        <p className="text-gray-500 text-sm font-medium fon mb-4">
          create and share your awesome new prompt with the community!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <FormField
            placeholder="name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormField
            placeholder="title"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            id="prompt"
            name="prompt"
            required
            placeholder="enter your prompt"
            rows="5"
            className="w-full px-4 py-2 outline-none border rounded-lg shadow-md"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <div className="flex flex-row justify-start items-center gap-3">
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white font-medium rounded-full"
            >
              create
            </button>
            <Link
              to="/"
              className="px-5 py-2 bg-black text-white font-medium rounded-full"
            >
              cancle
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateForm;
