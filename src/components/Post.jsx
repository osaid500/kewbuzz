import React from "react";

function Post() {
  return (
    <article className="bg-white w-full flex font-inter">
      <div className="flex-col p-2 w-full">
        <div className="flex items-center gap-4 mb-1 h-10">
          <span className="font-medium text-emerald-700">main_community</span>
          <span className="text-gray-600 text-xs mt-0.5">
            Posted by <span className="text-cyan-700 font-bold">osaid500</span>
          </span>
        </div>
        <div className="">
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
    </article>
  );
}

export default Post;
