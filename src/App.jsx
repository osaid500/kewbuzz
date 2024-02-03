import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <main className="p-5 flex flex-col items-center">
        <h2>Posts</h2>
        <section className="flex flex-col w-full items-center mt-4 max-w-postSize bg-green-300">
          <Post />
        </section>
      </main>
    </div>
  );
}

export default App;
