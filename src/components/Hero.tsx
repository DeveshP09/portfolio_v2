import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skills } from "./Skills";
import { Socials } from "./Socials";

export function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
        Hey, I&apos;m Devesh <span aria-hidden>👋</span>
      </h1>

      <div className="flex items-start gap-3 sm:gap-4">
        <Avatar className="size-16 shrink-0 rounded-lg border border-border bg-muted/10 after:rounded-lg sm:size-20">
          <AvatarImage
            src="/images/devesh_photo.jpeg"
            alt="Devesh Patil"
            className="rounded-lg"
          />
          <AvatarFallback className="rounded-lg">DP</AvatarFallback>
        </Avatar>
        <div className="min-w-0 space-y-2 text-white">
          <p className="text-sm leading-relaxed">
            I&apos;m a <span className="font-medium">software engineer</span> who enjoys
            building <span className="font-medium">small, sharp tools</span> for the web
            and mobile. currently exploring{" "}
            <span className="font-medium">typescript</span>,{" "}
            <span className="font-medium">react native</span>, and{" "}
            <span className="font-medium">systems design</span>, along with the occasional
            side quest.
          </p>
          <p className="flex items-center gap-1 text-sm">
            <span>Mumbai, India</span>
            <span aria-hidden>📍</span>
          </p>
        </div>
      </div>

      <Socials />
      <Skills />
    </section>
  );
}
