import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 w-full max-w-4xl mx-auto">
        <BlurCircle top="-100px" right="-100px" />
        <div
          className="relative w-full rounded-lg overflow-hidden group"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Thumbnail */}
          {!isPlaying && (
            <div className="absolute inset-0">
              <img
                src={currentTrailer.image}
                alt="trailer"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <PlayCircleIcon className="w-20 h-20 text-red-500 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          )}

          {/* Video */}
          {isPlaying && (
            <iframe
              width="100%"
              height="100%"
              src={`${currentTrailer.videoUrl.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          )}
        </div>

        <div className="group grid grid-cols-4 gap-4 mg:gap-8 mt-8 max-w-3xl mx-auto">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.image}
              className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={trailer.image}
                alt="trailr"
                className="rounded-lg w-full h-full object-cover brightness-50"
              />

              <PlayCircleIcon
                strokeWidth={1.6}
                className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
