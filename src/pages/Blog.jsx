import React from "react";
import bg_blog from "../assets/Blog.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    id: "promoting_your_business_on_instagram",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/09/Featured-Images-Blogs-Prismbiz-4.png",
    title: "Essential Tips & Tricks for Promoting Your Business on Instagram",
    description:
      "Instagram has become one of the most effective platforms for businesses to build and promote their brand.",
  },
  {
    id: "instagram_marketing_the_ultimate_guide_for_2024",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/09/Featured-Images-Blogs-Prismbiz-3.png",
    title: "Instagram Marketing: The Ultimate Guide for 2024",
    description:
      "In the fast-paced world of digital marketing, Instagram has solidified its position as a powerhouse platform for businesses looking to connect with their audience, boost brand awareness, and drive sales.",
  },
  {
    id: "the_road_ahead_for_chatbots_5_future_trends_to_know",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/07/Featured-Images-Blogs-Prismbiz-1.png",
    title: "The Road Ahead for Chatbots: 5 Future Trends to Know",
    description:
      "Satya Nadella, CEO of Microsoft, has rightly pointed out the significant role that chatbots play in revolutionizing how businesses interact with their customers - and we agree.",
  },
  {
    id: "balancing_ethics_automation_vs_humanity_in_ai_chatbots",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/07/Featured-Images-Blogs-Prismbiz.png",
    title: "Balancing Ethics: Automation vs. Humanity in AI Chatbots",
    description:
      "It's no news that artificial intelligence (AI) has garnered unprecedented popularity, shaping industries and redefining human-machine interactions.",
  },
  {
    id: "7_challenges_of_chatbots",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/07/7-challenges-of-chatbots.png",
    title:
      "7 Challenges Of Chatbots That No One Tells You And How to Overcome Them",
    description:
      "There's no denying that chatbots have emerged as indispensable tools for businesses seeking to enhance customer engagement, streamline operations, and drive growth.",
  },
  {
    id: "all_about_chatbot_marketing_the_new_age_marketers_winning_mantra",
    image:
      "https://www.prismbizsol.com/wp-content/uploads/2024/06/Chatbot-marketing.png",
    title: "All About Chatbot Marketing: The New Age Marketer's Winning Mantra",
    description:
      "In the ever-evolving landscape of modern marketing, where consumer expectations continue to soar, chatbot solutions have emerged as not just a tool, but a strategic imperative for brands aiming to carve out a competitive edge.",
  },
];

function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-blue-500 py-32 text-center text-white bg-cover"
        style={{
          backgroundImage: `url(${bg_blog})`,
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-xl font-semibold max-w-2xl mx-auto">
            Articles, news, and updates on the latest trends in innovation,
            research, technology developments, and success stories.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto p-4 mt-4">
        <select className="px-4 py-3 rounded-md border shadow" name="filter" id="cat" defaultValue="All">
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
            <a
              className="mx-4 group mt-auto flex justify-center rounded items-center gap-2 bg-highlight transition bg-blue-600 py-2 px-4"
              href={"/blog/" + blog.id}
              target="_blank"
              rel="noreferrer"
            >
              <span>Read More</span>
              <FaExternalLinkAlt className="h-4 w-4 group-hover:ml-2 duration-300" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
