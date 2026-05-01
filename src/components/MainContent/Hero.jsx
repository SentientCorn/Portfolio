import GithubCard from "../Cards/GithubCard";

let alias = ["SentientCorn", "Popkoern", "Cari Jagung"];

export default function Hero() {
  return (
    <section className="bg-base-200 flex flex-1 flex-col justify-between py-10">
      <div className="container mx-auto flex flex-1 h-full flex-col">
        <div className="flex flex-col flex-1 md:flex-row items-center gap-8">
          {/* Name */}
          <div className="flex flex-col flex-1 justify-between">
            <h1 className="text-[4.5rem] font-bold text-base-text">
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
            <p className="text-lg text-base-text mt-4">
              I am a developer yap yap yap yap yap yap yap yap yap yap yap yap
              yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
              yap yap
            </p>
          </div>

          {/* Picture */}
          <div className="shrink-0">
            <div
              role="img"
              aria-label="Photo placeholder"
              className="w-48 h-48 md:w-64 md:h-64 bg-base-100 rounded-lg border-2 border-dashed border-base-content/20 flex items-center justify-center"
            >
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
            </div>
          </div>
        </div>
        {/* Link buttons */}
        <div className="mt-8 flex space-x-4">
          <span>Download CV</span>
          <span>Contact Me</span>
        </div>
        {/* Github API */}
        <div className="mt-8">
          <GithubCard username="SentientCorn"/>
        </div>
      </div>
    </section>
  );
}
