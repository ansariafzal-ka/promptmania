import React, { useEffect, useState } from "react";
import FormField from "../utils/FormField";
import PromtCard from "../utils/PromtCard";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

const Home = () => {
  const [prompts, setPrompts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/prompt");
        setPrompts(...prompts, response.data.prompts);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    fetchPrompts();
  }, []);

  const filteredPrompts = prompts.filter((prompt) =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <nav className="px-8 py-4 shadow flex flex-row justify-between items-center">
        <h1 className="text-2xl font-medium flex flex-row justify-center items-center gap-2 bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-blue-400">
          promptmania
        </h1>
        <Link
          to="/create-post"
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full"
        >
          create post
        </Link>
      </nav>
      <section className="text-center p-8 px-auto md:px-12">
        <h1 className="text-[32px] font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-blue-400">
          Find cool prompts shared by the community
        </h1>
        <p className="font-medium mb-5 text-gray-500">
          Explore creative prompts from our community to spark your imagination.
          Share your own prompts and inspire others!
        </p>
        <FormField
          placeholder="search for a prompt"
          type="text"
          className="shadow-lg"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </section>
      <section className="px-6 py-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt, key) => (
              <PromtCard
                key={key}
                name={prompt.name}
                title={prompt.title}
                prompt={prompt.prompt}
              />
            ))
          ) : (
            <p className="text-gray-500">No prompts found.</p>
          )}
        </div>
      </section>
      <footer className="w-full px-4 py-10 bg-stone-950 text-center">
        <h1 className="text-lg text-white">killerAlpha Developments</h1>
        <p className="text-white">
          Explore AI prompts and share your ideas for free at{" "}
          <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-blue-400">
            Promptmania
          </span>
        </p>
        <div className="text-white mt-3 flex flex-row justify-center items-center gap-4 text-xl">
          <Link to="https://www.instagram.com/ansariafzal58/" target="_blank">
            <FaInstagram />
          </Link>
          <FaFacebookSquare className="cursor-pointer" />
          <MdEmail className="cursor-pointer" />
        </div>
      </footer>
    </main>
  );
};

export default Home;
