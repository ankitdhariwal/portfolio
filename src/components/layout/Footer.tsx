import { personal } from "@/data/personal";
import { SOCIAL_LINK_LIST } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-[rgba(59,130,246,0.15)] py-10">
      <div className="dev-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#868e96] text-[15px]">
              Made with{" "}
              <span className="text-red-400">❤️</span>{" "}
              by{" "}
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#93c5fd] hover:text-white transition-colors"
              >
                {personal.name}
              </a>
            </p>
            <p className="text-[#868e96] text-sm mt-1">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINK_LIST.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="social-icon-btn bg-[rgba(255,255,255,0.06)] hover:bg-[#2563eb] transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
