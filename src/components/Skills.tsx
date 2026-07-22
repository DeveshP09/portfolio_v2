"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const SKILL_GROUPS = [
  {
    title: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Node.js"],
  },
  {
    title: "Frontend Tech",
    items: [
      "HTML",
      "CSS",
      "Redux",
      "Jest",
      "TanStack",
      "Styled Components",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Android Studio",
      "Vercel",
      "Jira",
      "Notion",
    ],
  },
  {
    title: "AI & LLM",
    items: ["Context Engineering", "Cursor", "Claude Code", "MCP Integration"],
  },
];

export function Skills() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="space-y-5">
      <CollapsibleTrigger
        className={
          "text-sm underline-offset-[6px] decoration-1 transition-colors " +
          (open
            ? "text-foreground underline"
            : "text-muted-foreground hover:text-foreground hover:underline")
        }
      >
        {open ? "Hide Skills" : "Show Skills"}
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-5">
        {/* <h2 className="text-lg font-medium text-foreground">Skills</h2> */}
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="text-[12px] text-[#ffffff] font-bold font-weight-800 uppercase">
              {group.title} :
            </h3>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="h-auto rounded-md px-2.5 py-1 font-medium"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
