"use client";

import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = ["Experience", "Skills", "Projects", "Blogs", "Links", "About", "Uses"] as const;

export function SectionTabs() {
  return (
    <Tabs defaultValue="Experience" className="space-y-6">
      <TabsList
        variant="line"
        className="flex h-auto w-full flex-wrap justify-start gap-x-5 gap-y-2 p-0 font-mono"
      >
        {TABS.map((t) => (
          <TabsTrigger
            key={t}
            value={t}
            className="h-auto flex-none px-0 font-normal"
          >
            {t}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="Experience" className="min-h-[200px]">
        <Experience />
      </TabsContent>

      <TabsContent value="Skills" className="min-h-[200px]">
        <Skills />
      </TabsContent>

      <TabsContent value="Projects" className="min-h-[200px]">
        <Projects />
      </TabsContent>

      {TABS.filter((t) => t !== "Experience" && t !== "Skills" && t !== "Projects").map((t) => (
        <TabsContent
          key={t}
          value={t}
          className="min-h-[200px] text-sm text-muted-foreground"
        >
          <p>
            <span className="text-muted">/* {t} */</span> — content coming in step 5.
          </p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
