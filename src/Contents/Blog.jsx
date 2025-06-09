import React from "react";

function Blog() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      <img
        src="practice.jpg"
        alt=""
        className="w-[250px] h-[250px] object-cover sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
      />
      <img
        src="practice2.jpg"
        alt=""
        className="w-[250px] h-[250px] object-cover sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
      />
    </div>
  );
}

export default Blog;
