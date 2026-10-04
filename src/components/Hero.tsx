import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Socials } from "./Socials";

export function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
        Hey, I&apos;m Devesh <span aria-hidden>👋</span>
      </h1>

      <div className="flex items-center gap-3 sm:items-start sm:gap-4">
        <Avatar className="size-20 shrink-0 rounded-lg border border-border bg-muted/10 after:rounded-lg sm:size-28">
          <AvatarImage
            src="/images/devesh_photo.jpeg"
            alt="Devesh Patil"
            className="rounded-lg"
          />
          <AvatarFallback className="rounded-lg">DP</AvatarFallback>
        </Avatar>
        <div className="min-w-0 space-y-3">
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
            <span className="font-bold">Software Engineer</span> with <span className="font-bold">1.5+ years</span> of experience AI native building web and mobile applications using <span className="font-bold">React.js</span>, <span className="font-bold">React Native</span>, and <span className="font-bold">Node.js</span>. Currently learning{" "}
            <span className="font-bold">typescript</span> and <span className="font-bold">AI/LLM</span> technologies to build innovative solutions.
          </p>
          <p className="flex items-center gap-1 font-mono text-xs sm:text-sm">
            <span>Mumbai, India</span>
            <span aria-hidden>📍</span>
          </p>
        </div>
      </div>

      <Socials />
    </section>
  );
}
