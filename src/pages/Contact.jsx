import React from "react";
import {
  FaSquareFacebook as FacebookIcon,
  FaSquareInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaSquareTwitter as TwitterIcon,
} from "react-icons/fa6";
// import { Mail, Phone, PinDrop as MapPin } from "@mui/icons-material";
import image from "../assets/Contact.jpg";
import { TextField, Button, MenuItem, Paper, Input } from "@mui/material";
import HeroSection from "../components/HeroSection";
function Contact() {
  return (
    <div className="space-y-16">
      <HeroSection image={image} text="Contact Us" />

      <div className="mx-auto max-w-7xl">
        {/* contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <img
            src="https://images.shiksha.com/mediadata/images/1503643027phpehvmXY.jpeg"
            className="h-full w-full object-cover lg:col-span-2"
          />
          <div className="p-4 lg:p-8 lg:col-span-3 space-y-4 md:space-y-8 font-light">
            <h2 className="text-3xl md:text-5xl font-extralight">
              Office Address
            </h2>
            <p>
              RIPITT - IIIT Bhubaneshwar Campus, Gothapatana, Malipada,
              Bhubaneswar, Odisha 751003
            </p>
            <p className="space-y-2">
              <span className="text-xl text-nowrap mr-4 lg:mr-8">
                How to reach
              </span>
              <a
                className="pr-3 pl-6 py-3 bg-blue-600 text-white inline-flex items-center gap-2 w-fit rounded-full font-normal"
                target="_blank"
                href="https://maps.app.goo.gl/4cjrNpjrLVT6yakC8"
              >
                Find directions on Maps {LocationIcon}
              </a>
            </p>
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h3 className="text-lg mb-2">Email</h3>
                <p>contact@ripitt.org</p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Phone</h3>
                <p>+91 123 456 7890</p>
                <p>+91 123 456 7890</p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Follow Us</h3>
                <ul className="flex gap-4">
                  <li>
                    <a href="">
                      <FacebookIcon className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* contact-form */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-16">
          <div className="py-8 px-4 sm:px-8 sm:py-12 md:pr-12 lg:col-span-3 h-full w-full bg-blue-800 text-white">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="ml-2">
                  Name<span className="text-red-600">*</span> :
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                  sx={{
                    color: "white",
                    ":before": { borderBottomColor: "#d1d5db" },
                    ":after": { borderBottomColor: "white" },
                    borderBottomColor: "#d1d5db",
                  }}
                  className="w-full px-4 py-1.5 bg-transparent border-b border-gray-200 focus:border-white focus:border-b-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="ml-2">
                  Email<span className="text-red-600">*</span> :
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  sx={{
                    color: "white",
                    ":before": { borderBottomColor: "#d1d5db" },
                    ":after": { borderBottomColor: "white" },
                    borderBottomColor: "#d1d5db",
                  }}
                  className="w-full px-4 py-1.5 bg-transparent border-b border-gray-200 focus:border-white focus:border-b-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry" className="ml-2">
                  Inquiry<span className="text-red-600">*</span> :
                </label>
                <select
                  id="inquiry"
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-200 focus:border-white focus:border-b-2 focus:outline-none focus:ring-0"
                >
                  <option className="text-black bg-white" value="">Select Inquiry</option>
                  <option className="text-black bg-white" value="incubation">Incubation</option>
                  <option className="text-black bg-white" value="mentorship">Mentorship</option>
                  <option className="text-black bg-white" value="collaboration">Collaboration</option>
                  <option className="text-black bg-white" value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="ml-2">
                  Message<span className="text-red-600">*</span> :
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Message"
                  required
                  className="w-full px-4 py-1.5 bg-transparent border-b border-gray-200 focus:border-white focus:border-b-2 focus:outline-none focus:ring-0"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-black bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          <img
            src="https://iitbresearchpark.com/wp-content/uploads/2024/02/image-2-1-1536x1472.webp"
            className="my-auto w-full object-contain lg:col-span-2 hidden md:inline -translate-x-6 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

const LocationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
  >
    <circle cx="16.5" cy="16.5" r="16.5" fill="white"></circle>
    <g clip-path="url(#clip0_0_139)">
      <path
        d="M18.5522 15.385L16.7305 18.0751L14.0367 20.7554C13.0349 19.4821 11.9409 18.2487 11.2739 16.7569L12.7259 14.5326L14.9529 12.3841C14.2086 13.304 14.2641 14.6569 15.1196 15.5123C16.0349 16.4276 17.5184 16.4276 18.4336 15.5123C18.4748 15.4711 18.5147 15.4285 18.5522 15.385Z"
        fill="#ECB72B"
      ></path>
      <path
        d="M18.5944 15.3344C19.3452 14.4141 19.292 13.0566 18.4337 12.1988C17.5185 11.2836 16.0349 11.2836 15.1197 12.1988C15.0813 12.2372 15.0447 12.2766 15.0095 12.3169L16.5458 9.81945L18.6301 8.00897C20.1868 8.50176 21.4744 9.59901 22.2178 11.0251L20.6972 13.477L18.5944 15.3344Z"
        fill="#5085F7"
      ></path>
      <path
        d="M14.9528 12.3842L11.2738 16.7571C10.9089 15.9417 10.6717 15.0492 10.6472 14.0305C10.6453 13.9726 10.6444 13.9143 10.6444 13.8559C10.6444 12.3571 11.1821 10.9834 12.0756 9.91809L14.9528 12.3842Z"
        fill="#DA2F2A"
      ></path>
      <path
        d="M14.9528 12.3842L12.0756 9.91788C13.2006 8.57654 14.8889 7.72339 16.7767 7.72339C17.4228 7.72339 18.0455 7.82336 18.6303 8.00863L14.9528 12.3842Z"
        fill="#4274EB"
      ></path>
      <path
        d="M22.9088 13.8555C22.9088 12.8346 22.6593 11.8719 22.2179 11.0251L14.0365 20.7557C14.966 21.9381 15.8154 23.1551 16.1684 24.6453C16.1797 24.693 16.1918 24.7488 16.2048 24.8115C16.3328 25.4316 17.2206 25.4316 17.3486 24.8115C17.3616 24.7488 17.3737 24.693 17.385 24.6453C18.3261 20.6721 22.7952 18.6417 22.9062 14.0305C22.9078 13.9724 22.9088 13.9141 22.9088 13.8555Z"
        fill="#60A850"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_0_139">
        <rect
          width="17.5532"
          height="17.5532"
          fill="white"
          transform="translate(8 7.72339)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);
