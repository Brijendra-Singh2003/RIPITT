import React from "react";
import { Button } from "@mui/material";
import { Input } from "@mui/material";

import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Mail,
  Phone,
  PinDrop,
  Send,
  ArrowRight,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Incubation", href: "/incubation" },
  { name: "Events", href: "/events" },
  { name: "Careers", href: "/careers" },
];

const services = [
  "Startup Incubation",
  "Research & Development",
  "Innovation Lab",
  "Mentorship Program",
  "Industry Collaboration",
];

const Footer = () => {

  return (
    <footer className="bg-gray-50 mt-8 p-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">
              RIPITT Foundation
            </h3>
            <p className="text-gray-600">
              Pioneering innovation and fostering technological advancement
              through research, incubation, and industry collaboration.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <LinkedIn className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-blue-600 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 ml-0 transition-all group-hover:ml-1 group-hover:mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-600">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-600">
              Stay Updated
            </h3>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@ripitt.org</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PinDrop className="h-4 w-4 mr-2" />
                <span>123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="mb-4 md:mb-0">
            © 2024 RIPITT Foundation. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-600">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-blue-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
