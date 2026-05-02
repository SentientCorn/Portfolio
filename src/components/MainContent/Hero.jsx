import GithubCard from "../Cards/GithubCard";
import Button from "../Button";


let alias = ["SentientCorn", "Popkoern", "Cari Jagung"];
const photoSrc = "/Profile.jpg";

export default function Hero() {
  return (
    <section className="bg-base-200 flex flex-1 flex-col justify-between py-10">
      <div className="container mx-auto flex flex-1 h-full flex-col">
        <div className="flex flex-col flex-1 md:flex-row items-center gap-8">
          {/* Name */}
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-[4.5rem] font-bold text-base-text leading-[0.95]">
              Hello! <br />
              I'm Raditya Ryan{" "}
              <b className="text-base-text [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#ff9fa0]">
                Naro
              </b>
              tama
            </h1>
            <p className="text-base-text font-semibold mt-2">
              I also go by {alias[Math.floor(Math.random() * alias.length)]}
            </p>

            {/* Description Section */}
            <p className="text-lg text-base-text mt-4 text-justify">
              I’m a programmer with a broad interest in different areas of
              technology. I’ve worked with both hardware and software, and I
              enjoy building projects in embedded systems, IoT, machine
              learning, computer vision, and general software development. I’m
              always looking to create new things and learn along the way.
            </p>
          </div>

          {/* Picture */}
          <div className="shrink-0">
            <div
              role="img"
              aria-label="Photo placeholder"
              className="w-48 h-48 md:w-64 md:h-64 bg-base-100 rounded-lg border-2 border-dashed border-base-content/20 overflow-hidden flex items-center justify-center"
            >
              {photoSrc ? (
                <img
                  src={photoSrc}
                  alt="Profile photo"
                  className="h-full w-full object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-base-content/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 15l4-4a3 3 0 014 0l5 5" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* Link buttons */}
        <div className="mt-8 flex space-x-4">
          <Button href="/cv.pdf" variant="primary">
            Download CV
          </Button>
          <Button href="mailto:radityanarotama0@gmail.com" variant="secondary">
            Contact Me
          </Button>
        </div>
        {/* Github API */}
        <div className="mt-8">
          <GithubCard username="SentientCorn" />
        </div>
      </div>
    </section>
  );
}
