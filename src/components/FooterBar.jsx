import React from 'react';
import { Linkedin, Instagram, Github, Feather } from 'lucide-react';

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center rounded-full p-2 text-gray-400 transition-colors hover:text-white"
  >
    <span className="relative">
      {children}
      <span className="absolute inset-0 rounded-full opacity-0 blur group-hover:opacity-100" style={{ boxShadow: '0 0 14px rgba(255,77,0,0.55)' }} />
    </span>
  </a>
);

const FooterBar = () => {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-6">
        {/* Social icons - bottom left */}
        <div className="pointer-events-auto flex items-center gap-4">
          <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
            <Linkedin size={20} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" label="Instagram">
            <Instagram size={20} />
          </SocialIcon>
          <SocialIcon href="https://github.com" label="GitHub">
            <Github size={20} />
          </SocialIcon>
          <SocialIcon href="https://medium.com" label="Medium">
            <Feather size={20} />
          </SocialIcon>
        </div>

        {/* Role title - bottom right */}
        <div className="pointer-events-none select-none text-right">
          <div
            className="font-semibold tracking-widest text-[#ff4d00] opacity-90"
            style={{ fontFamily: 'Cinzel, "Cinzel Decorative", serif' }}
          >
            UI/UX Designer
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
