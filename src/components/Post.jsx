import React from "react";

function Post() {
  return (
    <article className="bg-white w-full flex gap-6 font-inter rounded-md p-4">
      <div className="flex-col w-full">
        <div className="flex items-center gap-4 mb-1 h-10">
          <a
            className="font-medium text-emerald-700 hover:text-teal-900 focus:text-teal-900"
            href="#"
          >
            main_community
          </a>
          <span className="text-gray-600 text-xs mt-0.5">
            Posted by{" "}
            <a
              className="font-bold text-cyan-700 hover:text-cyan-900 focus:text-cyan-900"
              href="#"
            >
              osaid500
            </a>
          </span>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">
            I found some free resources for stock images
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            voluptates vel iste nisi quidem aspernatur mollitia laborum esse
            debitis incidunt. Quidem, iste minima natus beatae incidunt
            asperiores dolorum libero nam?
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-">
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center">
            <button className="mr-3 transition hover:text-teal-600 focus:text-green-700">
              <i class="fa-solid fa-arrow-up text-lg"></i>
            </button>
            <p className="text-xs text-green-600">39.5k</p>
          </div>
          <div className="flex items-center">
            <button className="mr-3 transition hover:text-red-600 focus:text-red-700">
              <i class="fa-solid fa-arrow-down text-lg"></i>
            </button>
            <p className="text-xs text-red-700">4.6k</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Post;
