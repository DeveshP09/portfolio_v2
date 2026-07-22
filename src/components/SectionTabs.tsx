"use client";

import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = ["Experience", "Projects", "Blogs", "Links", "About", "Uses"] as const;

export function SectionTabs() {
  return (
    <Tabs defaultValue="experience" className="space-y-6">
      <TabsList
        variant="line"
        className="flex h-auto w-full flex-wrap justify-start gap-x-5 gap-y-2 p-0"
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

      <TabsContent value="Projects" className="min-h-[200px]">
        <Projects />
      </TabsContent>

      {TABS.filter((t) => t !== "Experience" && t !== "Projects").map((t) => (
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
