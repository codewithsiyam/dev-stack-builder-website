import type { Technology } from "../types/technology.ts";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-24">
      <h3 className="text-lg font-bold">Your Stack</h3>

      {/* Show a count once something's selected, plain message otherwise */}
      {count === 0 ? (
        <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>
      ) : (
        <p className="mt-1 text-sm text-slate-400">
          {count} {count === 1 ? "Technology" : "Technologies"} Selected
        </p>
      )}

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name} from your stack`}
                className="text-slate-400 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}

export default YourStack;
