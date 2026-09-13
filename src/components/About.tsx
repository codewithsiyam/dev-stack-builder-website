interface Highlight {
  label: string;
  value: string;
}

const HIGHLIGHTS: Highlight[] = [
  { label: "Technologies covered", value: "14" },
  { label: "Categories", value: "7" },
  { label: "Your stack, your choice", value: "100%" },
];

function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              About <span className="text-brand-gradient">Dev Stack</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Dev Stack is a small tool for developers who are choosing
              between frameworks, databases, and tools for their next
              project. Instead of opening a dozen browser tabs, browse
              everything in one place, compare ratings and difficulty at a
              glance, and build a shortlist you can actually act on.
            </p>
            <p className="mt-4 text-slate-600">
              Every technology on this page is loaded from a single JSON
              file, so the list is easy to extend — add a new entry and it
              shows up as a card automatically, no extra styling required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <p className="text-brand-gradient text-3xl font-extrabold">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
