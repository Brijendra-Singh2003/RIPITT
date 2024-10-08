import React from "react";
import { School, Work, Stars } from "@mui/icons-material";
import bg02 from "../assets/leader.png";

const leadershipTeam = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Executive Officer",
    education: "Ph.D. in Technology Management",
    experience: "20+ years in Innovation & Technology",
    expertise: "Strategic Leadership, Innovation Management",
    image:
      "https://static.vecteezy.com/system/resources/previews/029/771/918/large_2x/portrait-of-a-beautiful-businesswoman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-female-ceo-planning-and-managing-company-free-photo.jpeg",
  },
  {
    name: "Prof. Michael Chen",
    position: "Chief Technology Officer",
    education: "Ph.D. in Computer Science",
    experience: "15+ years in R&D Leadership",
    expertise: "AI, Machine Learning, IoT",
    image:
      "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
  },
  {
    name: "Dr. Priya Patel",
    position: "Director of Research",
    education: "Ph.D. in Engineering",
    experience: "12+ years in Research Management",
    expertise: "Robotics, Automation Systems",
    image:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1ZM4cBvoE54/v1/-1x-1.webp",
  },
];

const boardMembers = [
  {
    name: "Robert Williams",
    position: "Board Chairman",
    background: "Former CEO of Tech Innovations Inc.",
    image:
      "https://image.cnbcfm.com/api/v1/image/104243181-GettyImages-532150054.jpg?v=1698247308&w=1858&h=1045&vtcrop=y",
  },
  {
    name: "Dr. Lisa Zhang",
    position: "Board Member",
    background: "Professor of Innovation Studies",
    image:
      "https://assets.gqindia.com/photos/64ad547adda916fe08ba20dc/master/pass/Satya-Nadella's-investments.jpg",
  },
  {
    name: "James Anderson",
    position: "Board Member",
    background: "Venture Capital Partner",
    image:
      "https://www.livemint.com/lm-img/img/2023/04/07/1600x900/2-0-401545766-tim-cook-0_1680670188014_1680837945476_1680837945476.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-blue-500 py-32 text-center text-white bg-cover"
        style={{
          backgroundImage: `url(${bg02})`,
        }}
      >
        <div className="container mx-auto py-6">
          <h1 className="text-5xl font-bold mb-4">Our Leadership</h1>
          <p className="text-xl font-semibold max-w-2xl mx-auto">
            Meet the visionaries driving innovation and excellence at RIPITT
            Foundation
          </p>
        </div>
      </div>

      {/* Message From CEO */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto md:px-8 py-4">
          <h2 className="text-4xl text-center font-semibold text-blue-600 mb-8">
            Message From CEO
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 px-4 md:p-8 lg:p-16 gap-8 shadow-md bg-white">
            <div>
              <img
                className="h-72 w-full object-cover bg-gray-200"
                src="https://www.indoramaventures.com/storage/company/message-from-gceo/board-ceo.png"
                alt="CEO image"
              />
              <div>
                <h3 className="text-xl text-center font-semibold text-blue-600 mt-4">
                  Dr. Sanjay Saxena
                </h3>
                <p className="text-center">Chief Executive Officer</p>
              </div>
            </div>

            <div className="md:col-span-2 flex place-items-center px-4 py-8 md:p-8">
              <div className="border-y py-8 relative">
                <div className="absolute -top-3 w-full flex justify-center">
                  <span className="px-4 h-4 font-mono font-bold bg-white text-4xl text-red-800">
                    "
                  </span>
                </div>
                <p className="text-center sm:text-xl md:text-base lg:text-lg xl:text-xl text-pretty">
                  Our aim to be a more purposeful organization is not just a
                  slogan on our stationery. Vision 2030 is a bold but realistic
                  ambition that will, once again, require all our focus and our
                  full arsenal of inherent IVL strengths. It is entirely
                  achievable.
                </p>
                <div className="absolute -bottom-1 w-full flex justify-center">
                  <span className="px-4 h-4 font-mono font-bold bg-white text-4xl text-red-800">
                    "
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Leadership Section */}
      <div className="container mx-auto my-12">
        <h2 className="text-4xl text-center font-semibold text-blue-600 mb-8">
          Executive Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 gap-8">
          {leadershipTeam.map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-all rounded-lg overflow-hidden"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="h-72 w-full object-cover bg-gray-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{leader.position}</p>
                <hr className="my-4" />
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="material-icons text-blue-600 mr-2">
                      <School />
                    </span>
                    <p className="text-sm">{leader.education}</p>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-600 mr-2">
                      <Work />
                    </span>
                    <p className="text-sm">{leader.experience}</p>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-600 mr-2">
                      <Stars />
                    </span>
                    <p className="text-sm">{leader.expertise}</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center font-semibold text-blue-600 mb-8">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-all rounded-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-200"
                />
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{member.position}</p>
                <p className="text-sm text-gray-500">{member.background}</p>
                <div className="mt-4 space-x-2">
                  <button
                    aria-label="email"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <span className="material-icons">email</span>
                  </button>
                  <button
                    aria-label="linkedin"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <span className="material-icons">linkedin</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
