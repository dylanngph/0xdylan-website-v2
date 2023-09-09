import { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomeTypeAnimation from "@/components/pages/home/home-type-animation";
import RadialGradientBg from "@/components/pages/home/radial-gradient-bg";

export default function HomePage() {
  return (
    <section className="relative py-20 lg:py-40 container grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="py-4">
        <h3 className="text-[18px] font-medium">Hi all, I am</h3>
        <h1 className="text-[48px] md:text-[62px] leading-tight">
          Dylan Nguyen
        </h1>
        <HomeTypeAnimation />
        <div className="mt-12 flex flex-col gap-2">
          <div>
            <p className="text-foreground/50 text-md">
              {`// I am a Web3 Builder through Frontend Excellence.`}
            </p>
            <p className="text-foreground/50 text-md">
              {`// Join me on this
            exciting journey as we shape the future`}
            </p>
            <p className="text-foreground/50 text-md">
              {`// of the web together.`}
            </p>
            <p className="text-foreground/50 text-md">
              {`// One exceptional frontend experience at a time.`}
            </p>
          </div>

          <div className="flex items-baseline gap-2 flex-wrap">
            <p className="text-[#4D5BCE]">const</p>
            <p className="text-[#43D9AD]">githubLink</p>
            <p>=</p>
            <a
              className="text-[#E99287] hover:underline"
              href="https://github.com/dylanngph"
              target="_blank"
            >
              &quot;https://github.com/dylanngph&quot;
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border rounded-md bg-white dark:bg-foreground/5 px-6 pt-4 pb-8 text-sm relative z-[1]">
          <Button
            variant="outline"
            size="icon"
            className="absolute right-3 top-3 text-lg"
          >
            <i className="ri-file-copy-line" />
          </Button>
          <p>
            <span className="text-purple-400">import</span> {` {dylanSDK} from`}{" "}
            <span className="text-pink-400">{`"@dylan-dev/sdk"`}</span>
          </p>
          <br />
          <p className="text-foreground/50">{`// Initialize the SDK`}</p>
          <p>
            <span className="text-[#4D5BCE]">const </span>
            sdk = <span className="text-[#43D9AD]">new</span>{" "}
            <span className="text-orange-400">{`dylanSDK()`}</span>;
          </p>
          <br />
          <p>
            <span className="text-[#4D5BCE]">const </span>
            merchandises = <span className="text-purple-600">await</span> sdk.
            <span className="text-orange-400">{`getMerchandises()`}</span>;
          </p>
          <br />
          <p className="text-foreground/50">{`// Lists of my merchandises`}</p>
          <p>
            <span className="text-[#4D5BCE]">const </span>
            projects = <span className="text-purple-600">await</span> sdk.
            <span className="text-orange-400">{`getLatestProjects()`}</span>;
          </p>
          <br />
          <p className="text-foreground/50">{`// Get the latest tweets`}</p>
          <p>
            <span className="text-[#4D5BCE]">const </span>
            tweets = <span className="text-purple-600">await</span> sdk.
            <span className="text-orange-400">{`getLatestTweets()`}</span>;
          </p>
          <div className="absolute bottom-0 right-0 flex items-center px-4 py-2">
            <p className="text-xs text-foreground/50">TypeScript JSX</p>
          </div>
        </div>
        <RadialGradientBg />
      </div>
    </section>
  );
}
