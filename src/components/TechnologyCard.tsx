import type { Technology } from "../types/technology.ts";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (technology: Technology) => void;
}

// Maps each badge label to a Tailwind color pair, matched to the design.
// Anything not in this list falls back to a plain slate pill.
const BADGE_COLORS: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-sky-50 text-sky-600",
  Containers: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Standard: "bg-emerald-50 text-emerald-600",
  NoSQL: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-red-50 text-red-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Modern: "bg-cyan-50 text-cyan-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
};

function TechnologyCard({
  technology,
  isAdded,
  onAddToStack,
}: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;
  const badgeClasses = BADGE_COLORS[badge] || "bg-slate-100 text-slate-600";

  return (
    // When added, the outer box uses the shared brand gradient as its
    // background, and a couple pixels of padding around the inner white
    // card is all that shows — that thin gap becomes the "premium" border.
    // Removing the card from the stack just switches back to a plain border.
    <div
      className={`rounded-2xl transition ${
        isAdded ? "bg-brand-gradient p-[2px] shadow-md" : "border border-slate-200"
      }`}
    >
      <div className="flex h-full flex-col rounded-[calc(1rem-2px)] bg-white p-5 transition hover:shadow-md">
        <div className="mb-4 flex items-start justify-between">
          <img
            src={icon}
            alt={`${name} logo`}
            className="h-9 w-9 object-contain"
            loading="lazy"
          />
          {/* Conditional rendering: only show the badge pill when one exists */}
          {badge && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClasses}`}
            >
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-500">{description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
            {category}
          </span>
          <span className="text-slate-500">{difficulty}</span>
          <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
            <span aria-hidden="true" className="text-amber-400">
              ★
            </span>
            {rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 ${
            isAdded
              ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;