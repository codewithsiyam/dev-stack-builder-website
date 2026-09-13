import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard.tsx";
import type { Technology } from "../types/technology.ts";

const DATA_URL = "/technologies.json";

interface TechnologyGridProps {
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

function TechnologyGrid({ stack, onAddToStack }: TechnologyGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTechnologies() {
      setIsLoading(true);
      try {
        const res = await fetch(DATA_URL);
        if (!res.ok) throw new Error(`Request failed with ${res.status}`);
        const data: Technology[] = await res.json();
        if (!cancelled) {
          setTechnologies(data);
          setLoadError(null);
        }
      } catch (err) {
        console.error("Failed to load technologies:", err);
        if (!cancelled) {
          setLoadError("Could not load technologies. Please refresh the page.");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadTechnologies();
    return () => {
      cancelled = true;
    };
  }, []);

  const isInStack = (id: string): boolean =>
    stack.some((item) => item.id === id);

  if (isLoading) return <TechnologyGridSkeleton />;

  if (loadError) {
    return (
      <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 text-red-600">
        <p className="font-medium">{loadError}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          technology={tech}
          isAdded={isInStack(tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
}

// Card-shaped placeholders shown while technologies.json is being fetched,
// so the loading state matches the eventual grid instead of just a spinner.
function TechnologyGridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      role="status"
      aria-label="Loading technologies"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-9 w-9 rounded-lg bg-slate-100" />
            <div className="h-5 w-16 rounded-full bg-slate-100" />
          </div>
          <div className="h-4 w-2/3 rounded bg-slate-100" />
          <div className="mt-3 h-3 w-full rounded bg-slate-100" />
          <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
          <div className="mt-5 h-10 w-full rounded-lg bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export default TechnologyGrid;
