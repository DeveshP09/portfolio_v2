import { Link } from "lucide-react";
import { Github } from "../../public/icons/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  /** Screenshots shown inside the "more" modal */
  images?: string[];
  live?: string;
  github?: string;
};

/** Description longer than this (chars) gets truncated with a "more" button */
const DESCRIPTION_LIMIT = 75;

const PROJECTS: Project[] = [
  {
    title: "BatchFlow",
    description:
      "BatchFlow is an institute management platform that helps coaching centers and academies organize batches, track student enrollment and attendance, manage fee collection, and schedule classes — all from a single dashboard. (login: 8000000301 , password: devesh@123)",
    images: ["/images/batchflow1.png"],
    live: "https://app.yantravidyainfotech.com",
    github: "#",
  },
  {
    title: "ToolKart",
    description:
      "ToolKart is a marketplace for premium AI & SaaS subscriptions at discounted prices. Users can browse tools by category (AI & automation, coding, cloud & security, API credits), search products, switch between USD and INR pricing, and buy directly via WhatsApp.",
    images: ["/images/toolkart.png"],
    live: "https://toolkart.io/",
  },
  {
    title: "Devesh Shop",
    description:
      "A direct-to-consumer (D2C) store website that lists products across categories, best sellers, and new arrivals, with product search, a cart, and a complete order flow.",
    live: "https://devesh-d2c.netlify.app/",
    github: "https://github.com/DeveshP09/D2C-E-commerce"
  },
  {
    title: "E-Commerce Platform",
    description:
      "An e-commerce platform for organic product sales and created a marketplace for local farmers.",
    // live: "#",
    github: "https://github.com/DeveshP09/The-Unique-One",
  },
];

export function Projects() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold tracking-tight text-foreground underline underline-offset-[6px] decoration-1">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLong = project.description.length > DESCRIPTION_LIMIT;
  const hasImages = (project.images?.length ?? 0) > 0;
  const showMore = isLong || hasImages;
  const preview = isLong
    ? `${project.description.slice(0, DESCRIPTION_LIMIT).trimEnd()}… `
    : project.description;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-foreground/30">
      <div className="flex-1 space-y-2">
        <h3 className="font-bold text-foreground">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {preview}
          {showMore ? (
            <Dialog>
              <DialogTrigger className="font-medium text-foreground underline underline-offset-2 transition-opacity hover:opacity-70">
                more
              </DialogTrigger>
              <ProjectModal project={project} />
            </Dialog>
          ) : null}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-xl">
      <DialogTitle>{project.title}</DialogTitle>
      <DialogDescription>{project.description}</DialogDescription>

      {project.images?.length ? (
        <div className="space-y-3">
          {project.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${src}-${i}`}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="w-full rounded-lg border border-border"
            />
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <ProjectLinks project={project} />
      </div>
    </DialogContent>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.live ? (
        <ProjectLink href={project.live} label="Live">
          <Link size={14} aria-hidden />
        </ProjectLink>
      ) : null}
      {project.github ? (
        <ProjectLink href={project.github} label="Github">
          <Github size={14} />
        </ProjectLink>
      ) : null}
    </>
  );
}

function ProjectLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors hover:border-foreground hover:bg-muted/50"
    >
      {children}
      {label}
    </a>
  );
}
