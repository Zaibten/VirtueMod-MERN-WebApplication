import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-6 !py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 max-w-7xl">
        {/* Branding & Tagline */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Virtua Mod</h2>
          <p className="text-sm max-w-xs leading-relaxed">
            Bring your creative vision to life by generating realistic model images from your prompts or photos.
          </p>
        </div>

        {/* Social Icons */}
        <ul className="flex gap-6">
          {socials.map(({ id, url, iconUrl, title }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                title={title}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
              >
                <img src={iconUrl} width={20} height={20} alt={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Virtua Mod. All rights reserved.
      </div>
    </Section>
  );
};

export default Footer;
