"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type ExperiencePoint = { text: string; href?: string };

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  points?: ExperiencePoint[];
  logo?: string;
  initials: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Riggle",
    location: "Mumbai",
    period: "July 2025 - Present",
    description:
      "Own and optimize core front-end modules of a B2B sales platform used by FMCG manufacturers across India — spanning user permissions, orders, sales targets, and invoicing. As project SPOC, built an HRMS module for field-sales management, added real-time location tracking via the Google Maps API and WhatsApp-based targeted marketing, and architected an in-app chat that improved salesperson productivity by ~30%. Also lifted app performance ~40% through Webpack bundle and rendering optimizations.",
    logo: "/logos/publicis-sapient.svg",
    initials: "R",
  },
   {
    role: "Frontend Engineer Intern",
    company: "Riggle",
    location: "Mumbai",
    period: "April 2025 - June 2025",
    description:
      "Worked across multiple modules of the product, collaborating with product and design teams to take features from requirements to release. Revamped the company's SEO-optimized landing page, engineered a self-onboarding flow with an integrated payment gateway to reduce manual intervention, and built interactive analytics dashboards surfacing real-time insights and sales summaries for data-driven decisions.",
    logo: "/logos/publicis-sapient.svg",
    initials: "R",
  },
];

export function Experience() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-foreground underline underline-offset-[6px] decoration-1">
        Work Experience
      </h2>
      <div className="space-y-4">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.role}`} item={exp} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="group/exp flex w-full items-start gap-3 text-left">
        <Avatar className="size-11 shrink-0 rounded-md border border-border bg-white after:rounded-md">
          {item.logo ? (
            <AvatarImage
              src={item.logo}
              alt={item.company}
              className="rounded-md object-contain p-0.5"
            />
          ) : null}
          <AvatarFallback className="rounded-md bg-white text-xs font-semibold text-zinc-900">
            {item.initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-0.5">
          <p className="flex items-center gap-1.5 font-semibold text-foreground">
            {item.role}
            <ChevronRight
              size={16}
              aria-hidden
              className="transition-transform group-data-[panel-open]/exp:rotate-90"
            />
          </p>
          <p className="text-sm text-foreground">
            {item.company}{" "}
            <span className="text-muted-foreground">· {item.location}</span>
          </p>
          <p className="text-sm text-muted-foreground">{item.period}</p>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="pt-3 text-sm leading-relaxed text-foreground">
        {item.description}
        {item.points?.length ? (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground/60">
            {item.points.map((point) => (
              <li key={point.text}>
                {point.text}
                {point.href ? (
                  <>
                    {" "}
                    <a
                      href={point.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:opacity-70"
                    >
                      (link)
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </CollapsibleContent>
    </Collapsible>
  );
}
