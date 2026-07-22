import { Hero } from "@/components/Hero";
import { SectionTabs } from "@/components/SectionTabs";
import { Footer } from "@/components/Footer";
import { TreeBackdrop } from "@/components/TreeBackdrop";

export default function Home() {
  return (
    <>
      <TreeBackdrop />
      <main className="relative mx-auto flex w-full max-w-[640px] flex-1 flex-col gap-6 px-6 py-16 sm:py-24">
        <Hero />
        <SectionTabs />
        <div className="flex-1" />
        {/* <Footer /> */}
      </main>
    </>
  );
}
