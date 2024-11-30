import CoverImage from "@/media/cover.webp";
import Image from "next/image";
import MatrixText from "./matrix-text";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
        <div className="flex flex-col justify-center">
          <p className="text-neutral-300 text-lg">My name is</p>
          <h1 className="font-display text-5xl lg:text-7xl font-medium text-white leading-tight tracking-tight text-balance">
            Szami. I make things on the{" "}
            <MatrixText duration={800}>internet</MatrixText>
          </h1>
        </div>
        <div className="aspect-video z-0 border-purple-300 overflow-hidden bg-gradient-to-br from-purple-950 to-purple-500 relative pointer-events-none select-none user-select-none">
          <Image
            src={CoverImage}
            alt="Szami on the internet, 3D render, dot matrix style, purple"
            placeholder="blur"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="w-full h-full object-cover z-0 pointer-events-none select-none user-select-none"
          />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-500" />
        </div>
      </div>
    </div>
  );
};
