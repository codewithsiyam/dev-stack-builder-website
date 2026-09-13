import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Illustration of a layered development stack representing frontend, backend, and database technologies"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
