import { FileDown } from "lucide-react";
import {
  Bluesky,
  Github,
  Goodreads,
  Instagram,
  Linkedin,
  Medium,
  Substack,
  X,
  type IconProps,
} from "../../public/icons/icon";

type Social = { label: string; href: string; icon: React.ComponentType<IconProps> };

const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/DeveshP09", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devesh-patil-113036246/", icon: Linkedin },
  { label: "X", href: "https://x.com/DeveshP05673343", icon: X },
  // { label: "Bluesky", href: "#", icon: Bluesky },
  // { label: "Medium", href: "#", icon: Medium },
  // { label: "Substack", href: "#", icon: Substack },
  // { label: "Goodreads", href: "#", icon: Goodreads },
];

export function Socials() {
  return (
    <div className="flex flex-wrap items-center gap-5 pt-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
      <a
        href="/resume/Devesh_patil_frontend_engineer.pdf"
        download="Devesh-Patil-Resume.pdf"
        aria-label="Download resume"
        className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
      >
        <FileDown size={20} aria-hidden />
        resume
      </a>
    </div>
  );
}
