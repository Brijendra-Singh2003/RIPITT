import React from "react";
import bg_blog from "../assets/Blog.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../lib/util";
import { blogs } from "../constants/Blogs";

function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-blue-500 py-16 text-center text-white bg-cover"
        style={{
          backgroundImage: `url(${bg_blog})`,
        }}
      >
        <div className="container mx-auto py-12">
          <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-xl font-semibold max-w-2xl mx-auto">
            Articles, news, and updates on the latest trends in innovation,
            research, technology developments, and success stories.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8  mt-8">
        <select className="px-4 py-3 w-72 rounded-md border shadow" name="filter" id="cat" defaultValue="All">
            <option value="All">All</option>
            <option value="Affiliate Marketing">Affiliate Marketing</option>
            <option value="Social Media">Social Media</option>
            <option value="Instagram Marketing">Instagram Marketing</option>
            <option value="Cold Email">Cold Email</option>
        </select>
      </div>

      {/* Blog list */}
      <div className="w-fit mx-auto place-items-center gap-4 sm:gap-6 lg:gap-8 p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-96 pb-4 h-full bg-white shadow-md text-gray-100 flex flex-col"
          >
            <img
              className="w-full aspect-video bg-gray-600"
              src={blog.image}
              alt=""
            />
            <h2 className="mx-4 mt-4 text-black font-semibold px-1 text-xl">{blog.title}</h2>
            <span className="mx-4 mt-2 mb-4 text-gray-600 text-justify px-1">{blog.description}</span>
            <Link
              className="mx-4 group mt-auto flex justify-center rounded items-center gap-2 bg-highlight transition bg-blue-600 py-2 px-4"
              to={"/blog/" + blog.id}
              onClick={ScrollToTop}
            >
              <span>Read More</span>
              <FaExternalLinkAlt className="h-4 w-4 group-hover:ml-2 duration-300" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
