import { Badge } from "@/components/ui/badge";

const SKILL_GROUPS = [
  {
    title: "Languages & Technical Skills",
    items: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Sass", "WebSockets", "GitHub Actions", "CI/CD", "Unit Testing", "Debugging"],
  },
  {
    title: "Libraries & Framework",
    items: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Redux",
      "RTK",
      "React Query",
      "Tailwind CSS"
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Android Studio",
      "Vercel",
      "Jira",
      "Figma",
      "Postman",
      "VS Code",
    ],
  },
  {
    title: "AI & LLM",
    items: ["Context Engineering", "Cursor", "Claude Code", "MCP Integration"],
  },
];

export function Skills() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold tracking-tight text-foreground underline underline-offset-[6px] decoration-1">
        Skills
      </h2>
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
    </div>
  );
}
